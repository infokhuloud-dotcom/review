// Khuloud review page -> Google Sheet.
// Paste into the Sheet's Extensions > Apps Script, then Deploy > New deployment > Web app
// (Execute as: Me, Who has access: Anyone). Copy the web app URL into config.js.

function doPost(e) {
  var d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) { d = { type: "bad-json", feedback: String(e.postData && e.postData.contents) }; }
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    // Every event (ratings, Google clicks, feedback) in one log.
    var log = sheet_(ss, "All activity", ["Time (IST)", "Type", "Stars", "Products", "Name", "Phone", "Feedback / Review text", "Copied", "Review ID", "Ref", "Session", "Device"]);
    log.appendRow([now_(), d.type, d.stars, d.products, d.name || "", d.phone || "", d.feedback || d.review || "", d.copied === undefined ? "" : d.copied, d.review_id || "", d.ref || "", d.session || "", d.ua || ""]);
    // Unhappy customers get their own tab so nothing is missed.
    if (d.type === "feedback") {
      var low = sheet_(ss, "Complaints (1-3 stars)", ["Time (IST)", "Stars", "Products", "Name", "Phone", "What happened", "Handled?"]);
      low.appendRow([now_(), d.stars, d.products, d.name || "", d.phone || "", d.feedback || "", ""]);
      try {
        MailApp.sendEmail(Session.getEffectiveUser().getEmail(), "Khuloud: " + d.stars + "-star feedback" + (d.name ? " from " + d.name : ""),
          "Stars: " + d.stars + "\nProducts: " + d.products + "\nName: " + (d.name || "-") + "\nPhone: " + (d.phone || "-") + "\n\n" + d.feedback);
      } catch (mailErr) {}
    }
  } finally { lock.releaseLock(); }
  return ContentService.createTextOutput("ok");
}

function doGet() { return ContentService.createTextOutput("Khuloud review endpoint is running."); }

function sheet_(ss, name, headers) {
  var sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(headers); sh.setFrozenRows(1); sh.getRange(1, 1, 1, headers.length).setFontWeight("bold"); }
  return sh;
}
function now_() { return Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm"); }
