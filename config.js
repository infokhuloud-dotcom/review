// ============================================================
//  KHULOUD REVIEW PAGE: the only file you need to edit
// ============================================================
window.KHULOUD_CONFIG = {
  // 1) Your Google review link.
  //    Google Business Profile > "Ask for reviews" > copy link (looks like https://g.page/r/XXXX/review)
  GOOGLE_REVIEW_URL: "PASTE_GOOGLE_REVIEW_LINK_HERE",

  // 2) Your Google Sheet web-app URL (see SETUP.md, step 2).
  //    Every rating (1-5) is saved here. 1-3 star feedback lands here too.
  SHEET_ENDPOINT: "PASTE_APPS_SCRIPT_URL_HERE",

  // 3) true  = 1-3 star customers never see a Google link (your choice; against Google policy).
  //    false = 1-3 star customers get the private form first, plus a small "post on Google" link.
  STRICT_GATING: true,

  // Stars at or above this number go to Google.
  GOOGLE_MIN_STARS: 4,
};
