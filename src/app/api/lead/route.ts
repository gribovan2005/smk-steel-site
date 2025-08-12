import { NextResponse } from "next/server";
import { z } from "zod";
import { appendLeadToSheet } from "@/lib/googleSheets";
import { insertOrder } from "@/lib/db";
import { uploadToDrive } from "@/lib/googleDrive";
import { put } from "@vercel/blob";

const leadSchema = z.object({
  name: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
});

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function truncate(input: string, max = 3800): string {
  return input.length > max ? input.slice(0, max - 3) + "..." : input;
}

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: truncate(text), disable_web_page_preview: true }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Telegram sendMessage failed", { status: res.status, body });
    }
  } catch (e) {
    console.error("Telegram request error", e);
  }
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const raw = {
        name: (form.get("name") ?? "") as string,
        phone: (form.get("phone") ?? "") as string,
        email: (form.get("email") ?? "") as string,
        message: (form.get("message") ?? "") as string,
      };
      const data = leadSchema.parse(raw);

      const files: File[] = [];
      const single = form.get("file");
      if (single instanceof File && single.size > 0) files.push(single);
      const many = form.getAll("files");
      for (const f of many) if (f instanceof File && f.size > 0) files.push(f);

      const downloadUrls: string[] = [];
      const filenames: string[] = [];

      for (let idx = 0; idx < files.length; idx++) {
        const f = files[idx];
        filenames.push(f.name || `file-${idx + 1}`);
        const buffer = Buffer.from(await f.arrayBuffer());
        // Try Google Drive first
        let url: string | null = null;
        try {
          const r = await uploadToDrive({ filename: f.name || `file-${idx + 1}`, mimeType: f.type || undefined, buffer });
          url = r.downloadUrl;
        } catch (e) {
          console.error("Drive upload failed", e);
        }
        // Fallback to Vercel Blob
        if (!url) {
          try {
            const uploaded = await put(`leads/${Date.now()}-${encodeURIComponent(f.name || `file-${idx + 1}`)}`, buffer, { access: "public", contentType: f.type || undefined });
            url = `${uploaded.url}?download=1`;
          } catch (e) {
            console.error("Blob upload failed", e);
          }
        }
        if (url) downloadUrls.push(url);
      }

      const lines: string[] = [
        `Имя: ${data.name || "—"}`,
        `Телефон: ${data.phone}`,
        `Email: ${data.email || "—"}`,
        `Комментарий: ${data.message || "—"}`,
      ];
      if (filenames.length) lines.push(`Файлы: ${filenames.join(", ")}`);
      if (downloadUrls.length) {
        lines.push("Ссылки:");
        downloadUrls.forEach((u, i) => lines.push(`${i + 1}) ${u}`));
      }
      lines.push(`Время: ${new Date().toLocaleString("ru-RU")}`);

      const text = lines.join("\n");

      const sheetLinks = [0, 1, 2].map((i) => (downloadUrls[i] ? `=HYPERLINK("${downloadUrls[i]}";"Скачать")` : ""));

      await Promise.all([
        sendTelegram(text).catch(() => {}),
        appendLeadToSheet([
          new Date().toISOString(),
          data.name || "",
          data.phone,
          data.email || "",
          data.message || "",
          ...sheetLinks,
        ]),
        insertOrder({
          customer_name: data.name || null,
          phone: data.phone,
          email: data.email || null,
          message: data.message || null,
          attachment_filename: filenames[0] || null,
          attachment_url: downloadUrls[0] || null,
        }).catch(() => {}),
      ]);

      return NextResponse.json({ ok: true });
    }

    const json = await req.json();
    const data = leadSchema.parse(json);

    const text = [
      `Имя: ${data.name || "—"}`,
      `Телефон: ${data.phone}`,
      `Email: ${data.email || "—"}`,
      `Комментарий: ${data.message || "—"}`,
      `Время: ${new Date().toLocaleString("ru-RU")}`,
    ].join("\n");

    await Promise.all([
      sendTelegram(text).catch(() => {}),
      appendLeadToSheet([
        new Date().toISOString(),
        data.name || "",
        data.phone,
        data.email || "",
        data.message || "",
      ]),
      insertOrder({
        customer_name: data.name || null,
        phone: data.phone,
        email: data.email || null,
        message: data.message || null,
      }).catch(() => {}),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Bad Request";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
} 