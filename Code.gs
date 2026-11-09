// Tempel di Google Sheets: Extensions > Apps Script
var SHEET = 'RSVP';

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.appendRow(['Waktu', 'Nama', 'Kehadiran', 'Ucapan']);
  }
  return sh;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

// Cegah teks yang diawali = + - @ dibaca sebagai rumus di Sheets
function safe_(t) {
  t = String(t || '');
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

// Dipanggil halaman untuk menampilkan 50 ucapan terbaru
function doGet() {
  var sh = getSheet_();
  var n = sh.getLastRow();
  var list = [];
  if (n > 1) {
    var from = Math.max(2, n - 49);
    var rows = sh.getRange(from, 1, n - from + 1, 4).getValues();
    for (var i = rows.length - 1; i >= 0; i--) {
      list.push({ name: rows[i][1], att: rows[i][2], msg: rows[i][3] });
    }
  }
  return out_(list);
}

// Dipanggil saat tamu menekan tombol Kirim
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var name = String(d.name || '').slice(0, 80);
    var att = String(d.att || '').slice(0, 20);
    var msg = String(d.msg || '').slice(0, 500);
    if (!name) return out_({ ok: false });
    getSheet_().appendRow([new Date(), safe_(name), safe_(att), safe_(msg)]);
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false });
  } finally {
    lock.releaseLock();
  }
}
