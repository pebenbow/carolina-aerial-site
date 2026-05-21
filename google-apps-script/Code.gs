const SHEET_ID = '1pAp8r31LiS-RVh0teE36s6zjLfEW31X52tO5afBgDXM';

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
  }

  sheet.appendRow([
    new Date(),
    e.parameter.name    || '',
    e.parameter.email   || '',
    e.parameter.phone   || '',
    e.parameter.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
