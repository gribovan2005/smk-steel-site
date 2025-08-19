import { google } from "googleapis";
import { Readable } from "stream";

function parseCredentials(): { client_email?: string; private_key?: string } | null {
  const b64 = process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64;
  const raw = process.env.GOOGLE_SHEETS_CREDENTIALS;
  let text: string | undefined;
  if (b64 && b64.trim()) {
    try { text = Buffer.from(b64.trim(), "base64").toString("utf8"); } catch {}
  }
  if (!text && raw) text = raw;
  if (!text) return null;
  try { return JSON.parse(text); } catch {
    try { return JSON.parse(text.replace(/\r?\n/g, "\\n")); } catch { return null; }
  }
}

async function getDriveClient() {
  const credentials = parseCredentials();
  if (!credentials) throw new Error("Invalid GOOGLE_SHEETS_CREDENTIALS(_BASE64)");
  const clientEmail = credentials.client_email;
  let privateKey = credentials.private_key;
  if (privateKey) privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  const drive = google.drive({ version: "v3", auth });
  return drive;
}

export async function uploadToDrive(options: { filename: string; mimeType?: string; buffer: Buffer }): Promise<{ fileId: string; viewUrl: string; downloadUrl: string }>{
  const { filename, mimeType, buffer } = options;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  if (!folderId) throw new Error("GOOGLE_DRIVE_FOLDER_ID is not set");
  const drive = await getDriveClient();

  const res = await drive.files.create({
    requestBody: {
      name: filename,
      parents: [folderId],
      mimeType: mimeType || undefined,
    },
    media: {
      mimeType: mimeType || undefined,
      body: Readable.from(buffer),
    },
    fields: "id",
  });

  const fileId = res.data.id as string;
  await drive.permissions.create({ fileId, requestBody: { type: "anyone", role: "reader" } });

  const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;
  return { fileId, viewUrl, downloadUrl };
} 