import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { appendLeadToSheet } from "@/lib/googleSheets";
import { insertOrder } from "@/lib/db";
import { put } from "@vercel/blob";

const leadSchema = z.object({
  name: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
});

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
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
    console.error("SMTP sendMail failed", {
      host,
      port,
      from,
      to,
      hasUser: Boolean(user),
      hasPass: Boolean(pass),
      error: message,
    });
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

      const file = form.get("file") as File | null;
      let attachment: { filename: string; content: Buffer; contentType?: string } | undefined = undefined;
      let attachmentUrl: string | undefined = undefined;
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachment = { filename: file.name || "attachment", content: buffer, contentType: file.type || undefined };
        // Upload to Vercel Blob
        try {
          const uploaded = await put(`leads/${Date.now()}-${attachment.filename}`, buffer, { access: "public", contentType: attachment.contentType });
          attachmentUrl = uploaded.url;
        } catch (e) {
          console.error("Blob upload failed", e);
        }
      }

      const subject = `Новая заявка с сайта СМК Сталь`;
      const text = [
        `Имя: ${data.name || "—"}`,
        `Телефон: ${data.phone}`,
        `Email: ${data.email || "—"}`,
        `Комментарий: ${data.message || "—"}`,
        `Файл: ${attachment ? attachment.filename : "—"}`,
        attachmentUrl ? `Ссылка: ${attachmentUrl}` : null,
        `Время: ${new Date().toLocaleString("ru-RU")}`,
      ].filter(Boolean).join("\n");
      const html = text.replaceAll("\n", "<br/>");

      await Promise.all([
        sendEmail(subject, html, attachment).catch(() => {}),
        sendTelegram(text).catch(() => {}),
        sendWhatsApp(text).catch(() => {}),
        appendLeadToSheet([
          new Date().toISOString(),
          data.name || "",
          data.phone,
          data.email || "",
          data.message || "",
          attachmentUrl || attachment?.filename || "",
        ]),
        insertOrder({
          customer_name: data.name || null,
          phone: data.phone,
          email: data.email || null,
          message: data.message || null,
          attachment_filename: attachment?.filename || null,
          attachment_url: attachmentUrl || null,
        }).catch(() => {}),
      ]);

      return NextResponse.json({ ok: true });
    }

    // JSON fallback
    const json = await req.json();
    const data = leadSchema.parse(json);

    const subject = `Новая заявка с сайта СМК Сталь`;
    const text = [
      `Имя: ${data.name || "—"}`,
      `Телефон: ${data.phone}`,
      `Email: ${data.email || "—"}`,
      `Комментарий: ${data.message || "—"}`,
      `Время: ${new Date().toLocaleString("ru-RU")}`,
    ].join("\n");
    const html = text.replaceAll("\n", "<br/>");

    await Promise.all([
      sendEmail(subject, html).catch(() => {}),
      sendTelegram(text).catch(() => {}),
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