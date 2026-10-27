# Khuloud review page

Status: steps 1 and 2 are DONE (set up by Claude on 2026-10-28).
- Google review link: https://search.google.com/local/writereview?placeid=ChIJPTiRt_bjDDkRcXSwLYNMlOo
- Sheet "Khuloud Reviews" (Google account info.rhythmv@gmail.com): https://docs.google.com/spreadsheets/d/1STUh-4OA0iCxkIxZMa4xzaTYYdkRc9GHpBu7m_zflsM/edit

## Original setup steps (for reference)

Live now: https://infokhuloud-dotcom.github.io/review/
After step 3: https://review.khuloudperfumes.com

## 1. Add your Google review link
1. Open Google Business Profile (search "Khuloud Perfumes" on Google while signed in, or business.google.com).
2. Tap **Ask for reviews** and copy the link (looks like `https://g.page/r/XXXX/review`).
3. In `config.js`, replace `PASTE_GOOGLE_REVIEW_LINK_HERE` with it.

## 2. Save every response to a Google Sheet (free)
1. Go to sheets.new and name the sheet "Khuloud Reviews".
2. Open **Extensions > Apps Script**, delete what's there, and paste in all of `apps-script.gs`. Save.
3. Click **Deploy > New deployment**, then the gear icon > **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click Deploy and allow access (Google shows an "unverified app" warning because you wrote the script yourself; click Advanced > Go to project).
5. Copy the **Web app URL** (ends in `/exec`) into `config.js` in place of `PASTE_APPS_SCRIPT_URL_HERE`.

You get two tabs: **All activity** (every rating, every Google click and the exact review text copied) and
**Complaints (1-3 stars)**. Each complaint is also emailed to you.

## 3. Short link: review.khuloudperfumes.com
1. Your domain's DNS is at Hostinger. In hPanel open **Domains > khuloudperfumes.com > DNS / Nameservers** and add:
   - Type `CNAME`, Name `review`, Target `infokhuloud-dotcom.github.io`, TTL default.
2. Wait about 15 minutes, then tell Claude "DNS is done". Claude adds the domain in GitHub and turns on HTTPS.

## Personal links (optional)
Pre-select what someone bought by adding `?p=` with product ids, separated by commas:
`review.khuloudperfumes.com/?p=midnight-bloom,desert-eclipse`
Add `&o=1234` to tag an order number; it shows up in the Sheet.
Product ids are in `reviews.js` (the `id:` of each product).

## Settings (config.js)
- `GOOGLE_MIN_STARS: 4`: the lowest star rating that goes to Google. Lower ratings only see the private complaint form (no Google link).

## How the "already logged in" part works
- WhatsApp opens links in your phone's main browser (Safari, or Chrome on Android), where people are already
  signed in to Google. On most phones the Google link opens straight in the Google Maps app, which is signed in too.
- If someone opens the link inside Instagram or Facebook, the page pushes Google out to Chrome (Android) or
  Safari (iPhone).
