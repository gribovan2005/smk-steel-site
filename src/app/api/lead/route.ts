import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { appendLeadToSheet } from "@/lib/googleSheets";
import { insertOrder } from "@/lib/db";
import { uploadToDrive } from "@/lib/googleDrive";

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

async function sendTelegramHTML(html: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: truncate(html), parse_mode: "HTML", disable_web_page_preview: true }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Telegram sendMessage failed", { status: res.status, body });
    }
  } catch (e) {
    console.error("Telegram request error", e);
  }
}

async function sendWhatsApp(text: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const to = process.env.WHATSAPP_TO;
  if (!token || !phoneNumberId || !to) return;
  const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: text.slice(0, 4000) },
    }),
  });
}

async function sendEmail(subject: string, html: string, attachment?: { filename: string; content: Buffer; contentType?: string }) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 0);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.EMAIL_FROM || user;
  const to = process.env.EMAIL_TO;

  if (!host || !port || !to || !from) return;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });

  try {
    await transporter.sendMail({ from, to, subject, html, attachments: attachment ? [attachment] : undefined });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("SMTP sendMail failed", { host, port, from, to, hasUser: Boolean(user), hasPass: Boolean(pass), error: message });
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
      let emailAttachment: { filename: string; content: Buffer; contentType?: string } | undefined;

      for (let idx = 0; idx < files.length; idx++) {
        const f = files[idx];
        filenames.push(f.name || `file-${idx + 1}`);
        try {
          const buffer = Buffer.from(await f.arrayBuffer());
          if (idx === 0) {
            emailAttachment = { filename: f.name || "attachment", content: buffer, contentType: f.type || undefined };
          }
          const { downloadUrl } = await uploadToDrive({ filename: f.name || `file-${idx + 1}`, mimeType: f.type || undefined, buffer });
          downloadUrls.push(downloadUrl);
        } catch (e) {
          console.error("Drive upload failed", e);
        }
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
      const safeTop = [
        `Имя: ${escapeHtml(data.name || "—")}`,
        `Телефон: ${escapeHtml(data.phone)}`,
        `Email: ${escapeHtml(data.email || "—")}`,
        `Комментарий: ${escapeHtml(data.message || "—")}`,
      ];
      const htmlTelegram = downloadUrls.length
        ? `${safeTop.join("<br/>")}<br/>Ссылки:<br/>${downloadUrls.map((u, i) => `${i + 1}) <a href=\"${escapeHtml(u)}\">Скачать</a>`).join("<br/>")}<br/>${escapeHtml(lines[lines.length - 1])}`
        : truncate(text).replaceAll("\n", "<br/>");
      const htmlEmail = text.replaceAll("\n", "<br/>");

      const sheetLinks = [0, 1, 2].map((i) => (downloadUrls[i] ? `=HYPERLINK("${downloadUrls[i]}";"Скачать")` : ""));

      await Promise.all([
        sendEmail("Новая заявка с сайта СМК Сталь", htmlEmail, emailAttachment).catch(() => {}),
        sendTelegramHTML(htmlTelegram).catch(() => {}),
        sendWhatsApp(text).catch(() => {}),
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
    const htmlEmail = text.replaceAll("\n", "<br/>");

    await Promise.all([
      sendEmail("Новая заявка с сайта СМК Сталь", htmlEmail).catch(() => {}),
      sendTelegramHTML(truncate(htmlEmail)).catch(() => {}),
      sendWhatsApp(text).catch(() => {}),
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