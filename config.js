// ============================================================
//  KHULOUD REVIEW PAGE: the only file you need to edit
// ============================================================
window.KHULOUD_CONFIG = {
  // 1) Your Google review link.
  //    Google Business Profile > "Ask for reviews" > copy link (looks like https://g.page/r/XXXX/review)
  GOOGLE_REVIEW_URL: "https://search.google.com/local/writereview?placeid=ChIJPTiRt_bjDDkRcXSwLYNMlOo",

  // 2) Your Google Sheet web-app URL (see SETUP.md, step 2).
  //    Every rating (1-5) is saved here. 1-3 star feedback lands here too.
  SHEET_ENDPOINT: "https://script.google.com/macros/s/AKfycbyNyMsqHgDqzVRSgxiP_EbOf7eaNbXrlAvyCULHHoi9DK9n9nJerJfRyHBP6Z4uJF5B/exec",

  // Stars at or above this number go to Google.
  GOOGLE_MIN_STARS: 4,
};
