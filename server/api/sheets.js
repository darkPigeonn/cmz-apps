import { google } from 'googleapis';
import { readFile } from 'fs/promises';

export default defineEventHandler(async (event) => {
  try {
    const keyFile = 'server/service-account.json'; // Path ke file service account
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFile,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() });
    const spreadsheetId = '1mA5W1Nqk5QSWXmfBeeTmjSnT0j9vuVkM8soppXAT5Mk'; // Ganti dengan ID Spreadsheet Anda
    const range = 'List Transaksi!A1:D10'; // Ganti dengan range yang Anda inginkan

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    });

    return { data: response.data.values };
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return { error: error.message };
  }
});
