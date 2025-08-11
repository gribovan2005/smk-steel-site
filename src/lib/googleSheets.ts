import { google } from "googleapis";

export type LeadRow = string[];

function parseCredentials(): { client_email?: string; private_key?: string } | null {
  const b64 = process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64;
  const raw = process.env.GOOGLE_SHEETS_CREDENTIALS;
  let text: string | undefined;
  if (b64 && b64.trim()) {
    try {
      text = Buffer.from(b64.trim(), "base64").toString("utf8");
    } catch {
      // ignore and fallback
    }
  }
  if (!text && raw) {
    text = raw;
  }
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    try {
      const escaped = text.replace(/\r?\n/g, "\\n");
      return JSON.parse(escaped);
    } catch {
      return null;
    }
  }
}

function getTabName(): string {
  return process.env.GOOGLE_SHEETS_TAB || "Leads";
}

async function getSheetsClient() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) throw new Error("GOOGLE_SHEET_ID is not set");

  const credentials = parseCredentials();
  if (!credentials) throw new Error("Invalid GOOGLE_SHEETS_CREDENTIALS(_BASE64)");

  const clientEmail: string | undefined = credentials.client_email;
  let privateKey: string | undefined = credentials.private_key;
  if (privateKey) privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return { sheets, sheetId } as const;
}

export async function appendLeadToSheet(row: LeadRow): Promise<void> {
  const range = process.env.GOOGLE_SHEETS_RANGE || `${getTabName()}!A1`;
  const { sheets, sheetId } = await getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

export async function setupLeadsSheet(): Promise<void> {
  const tab = getTabName();
  const { sheets, sheetId } = await getSheetsClient();

  // Find sheetId (gid) by title
  const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
  const sheet = meta.data.sheets?.find((s) => s.properties?.title === tab);
  const gid = sheet?.properties?.sheetId;
  if (gid == null) throw new Error(`Sheet tab '${tab}' not found`);

  // Write header row
  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: `${tab}!A1:F1`,
    valueInputOption: "RAW",
    requestBody: {
      values: [["Дата", "Имя", "Телефон", "Email", "Сообщение", "Файл 1", "Файл 2", "Файл 3"]],
    },
  });

  // Formatting: freeze header, banding (alternating colors), auto-resize columns, basic filter
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: sheetId,
    requestBody: {
      requests: [
        {
          updateSheetProperties: {
            properties: { sheetId: gid, gridProperties: { frozenRowCount: 1 } },
            fields: "gridProperties.frozenRowCount",
          },
        },
        {
          addBanding: {
            bandedRange: {
              range: { sheetId: gid, startRowIndex: 0, startColumnIndex: 0, endColumnIndex: 8 },
              rowProperties: {
                headerColor: { red: 0.1, green: 0.1, blue: 0.1 },
                firstBandColor: { red: 0.98, green: 0.98, blue: 0.98 },
                secondBandColor: { red: 0.93, green: 0.93, blue: 0.93 },
              },
            },
          },
        },
        {
          autoResizeDimensions: {
            dimensions: { sheetId: gid, dimension: "COLUMNS", startIndex: 0, endIndex: 8 },
          },
        },
        {
          setBasicFilter: {
            filter: { range: { sheetId: gid, startRowIndex: 0, startColumnIndex: 0, endColumnIndex: 8 } },
          },
        },
      ],
    },
  });
} 