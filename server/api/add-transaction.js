import { google } from 'googleapis';
import { readFile } from 'fs/promises';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const keyFile = 'server/service-account.json'; // Path ke file service account
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFile,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() });
    const spreadsheetId = '1mA5W1Nqk5QSWXmfBeeTmjSnT0j9vuVkM8soppXAT5Mk'; // Ganti dengan ID Spreadsheet Anda
    const range = 'List Transaksi!A28'; // Ganti dengan sheet dan range yang sesuai
    const valueInputOption = 'USER_ENTERED';

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: valueInputOption,
      resource: {
        values: [
            [
              body.no,
              body.tanggal,
              body.bulan,
              body.tahun,
              body.kategori,
              body.tabungan,
              body.oleh,
              body.keterangan,
              body.nominal
            ],
          ],
      },
    });

    return { data: response.data };
  } catch (error) {
    return { error: error.message };
  }
});
