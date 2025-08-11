import { google } from "googleapis";

export type LeadRow = [string, string, string, string, string, string?];

export async function appendLeadToSheet(row: LeadRow): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const credentialsJson = process.env.GOOGLE_SHEETS_CREDENTIALS;
  if (!sheetId || !credentialsJson) return;

  const credentials = JSON.parse(credentialsJson);
  const clientEmail: string | undefined = credentials.client_email;
  let privateKey: string | undefined = credentials.private_key;
  if (privateKey) privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Leads!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
} 