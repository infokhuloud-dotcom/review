// Khuloud review library + generator.
// {n} = product name. Each product has its own lines built from its real notes.
// Shared pools are mixed in so the number of distinct reviews runs into the millions.

window.KHULOUD_PRODUCTS = [
  { id: "velour-whisper", name: "Velour Whisper", notes: "Blackcurrant · freesia · rose · vanilla", lines: [
    "{n} opens with this juicy blackcurrant and then settles into a soft rose and vanilla. So elegant.",
    "{n} is my new signature. Fruity, floral, a little sweet, and it never gets loud.",
    "The blackcurrant and freesia in {n} make it feel fresh, but the patchouli base gives it real depth.",
    "{n} smells expensive. Like a modern chypre you'd find at a luxury counter.",
    "I get rose and vanilla from {n} all day, and the ambroxan makes it glow on skin.",
    "{n} feels confident and feminine at the same time. Perfect for office and evenings.",
    "If you like sweet but classy, {n} is the one. Not sugary at all.",
  ]},
  { id: "crimson-veil", name: "Crimson Veil", notes: "Saffron · jasmine · ambergris · cedarwood", lines: [
    "{n} has the most beautiful saffron opening I've smelled in a while.",
    "Saffron, jasmine and amber in {n}. Rich and warm, and it feels like a special occasion.",
    "{n} is radiant. The amber dry down lasts forever on my clothes.",
    "I wore {n} to a wedding and people kept asking what it was.",
    "{n} has that crystal-clear amber feel. Warm, but not heavy.",
    "The cedarwood and fir resin at the base of {n} give it a lovely woody finish.",
    "{n} is a proper evening fragrance. Royal and very smooth.",
  ]},
  { id: "emerald-vale", name: "Emerald Vale", notes: "Lemon verbena · iris · violet leaf · sandalwood", lines: [
    "{n} is so fresh and green. The lemon verbena opening wakes you right up.",
    "{n} smells like a clean garden after rain. Iris and violet leaf done perfectly.",
    "I love how {n} goes from bright citrus to a soft sandalwood base.",
    "{n} is my everyday office scent now. Fresh, clean, never too much.",
    "{n} feels timeless. Nothing like the usual synthetic fresh perfumes.",
    "Perfect for Delhi heat. {n} stays fresh and green for hours.",
    "The violet leaf in {n} is so unique, with a soft powdery iris underneath.",
  ]},
  { id: "midnight-horizon", name: "Midnight Horizon", notes: "Grapefruit · mint · incense · ginger · cedarwood", lines: [
    "{n} opens with grapefruit and mint, then turns smoky with incense. Brilliant combination.",
    "{n} is fresh at first and gets deeper and spicier as the day goes on.",
    "The ginger and incense in {n} make it feel so classy. Fresh but serious.",
    "{n} is my go-to for evenings out. Clean, a little smoky, very masculine.",
    "I get the citrus from {n} first and a beautiful sandalwood and cedar base later.",
    "{n} is versatile. Works in the office and on a night out.",
    "Never smelled mint and incense together like in {n}. It really works.",
  ]},
  { id: "midnight-bloom", name: "Midnight Bloom", notes: "Coffee · pink pepper · jasmine · vanilla", lines: [
    "{n} has this addictive coffee and vanilla vibe with jasmine in the middle. Obsessed.",
    "{n} is sexy and cozy at the same time. Perfect for date nights.",
    "The coffee note in {n} is so realistic, and the vanilla makes it irresistible.",
    "{n} gets me compliments every single time I wear it.",
    "Pink pepper and coffee to start, then jasmine and patchouli. {n} is gorgeous.",
    "{n} is my winter favourite. Warm, sweet, and a little dark.",
    "{n} feels like a luxury niche perfume for a fraction of the price.",
  ]},
  { id: "imperial-legacy", name: "Imperial Legacy", notes: "Pineapple · blackcurrant · birch · oakmoss · musk", lines: [
    "{n} has that famous fruity, smoky pineapple opening. Smells so premium.",
    "{n} is pineapple, birch and musk. Confident and classy, a real power scent.",
    "I've tried expensive versions of this style and {n} holds its own easily.",
    "The smoky birch in {n} gives it so much character. Turns heads.",
    "{n} is my meeting-day perfume. It makes me feel like the boss.",
    "Fruity on top and woody, mossy at the base. {n} is so well balanced.",
    "{n} projects beautifully for the first few hours, then sits close as a soft musk.",
  ]},
  { id: "nordic-flame", name: "Nordic Flame", notes: "Clary sage · lavender · bitter almond · leather · tonka", lines: [
    "{n} is lavender and leather with a sweet tonka base. Very sophisticated.",
    "The bitter almond in {n} is so unique. I haven't smelled anything like it.",
    "{n} feels warm and smooth, like a cashmere jacket in winter.",
    "{n} is my cold-weather favourite. Cozy, a little sweet, very classy.",
    "Sage and lavender up front, leather and tonka later. {n} evolves so nicely.",
    "{n} gets compliments every time. People say it smells expensive.",
    "{n} is perfect for evenings. It sits close and smells amazing.",
  ]},
  { id: "velvet-authority", name: "Velvet Authority", notes: "Smooth and commanding", lines: [
    "{n} lives up to its name. Smooth, confident and very classy.",
    "{n} has real presence without being overpowering.",
    "I wear {n} for important days. It just makes me feel put together.",
    "{n} is so smooth on skin. The dry down is my favourite part.",
    "{n} feels like a luxury scent. I keep reaching for it.",
    "People keep asking what I'm wearing when I have {n} on.",
  ]},
  { id: "petal-reverie", name: "Petal Reverie", notes: "Peony · citrus · rose · osmanthus · sandalwood", lines: [
    "{n} is the prettiest floral. Peony and rose with a soft citrus touch.",
    "{n} smells like a fresh bouquet. Feminine and delicate, but it lasts.",
    "The osmanthus in {n} gives it a lovely apricot-like softness.",
    "{n} is perfect for daytime, brunches and office. So graceful.",
    "Rose and peony on top, sandalwood and patchouli underneath. {n} is beautifully done.",
    "{n} isn't a cheap floral at all. It smells natural and elegant.",
    "My mother loved {n} so much I'm ordering another one for her.",
  ]},
  { id: "sinful-accord", name: "Sinful Accord", notes: "Pink pepper · mandarin · lilac · peach · amber", lines: [
    "{n} is fruity, floral and a little spicy. Peach and pink pepper are such a fun combo.",
    "{n} is playful and seductive. Perfect for parties.",
    "The lilac and peach in {n} make it so juicy, and the amber base keeps it warm.",
    "{n} gets me compliments from friends every time.",
    "{n} is sweet but not childish. Grown-up and flirty.",
    "Mandarin and pink pepper open {n}, then it turns soft and ambery. Love it.",
    "{n} is my going-out perfume now. Fun and long lasting.",
  ]},
  { id: "glacial-instinct", name: "Glacial Instinct", notes: "Bergamot · grapefruit · apple · cinnamon · ambergris", lines: [
    "{n} is so crisp and fresh. Bergamot, apple and a little cinnamon. Brilliant.",
    "{n} feels icy cool at first and then warms into a lovely musky base.",
    "{n} is my summer go-to. Fresh, clean and never boring.",
    "The touch of cinnamon in {n} makes it way more interesting than a normal fresh scent.",
    "{n} is perfect for the gym, office or a day out. So versatile.",
    "Grapefruit and bergamot to start, sandalwood and ambergris to finish. {n} is great.",
    "{n} smells clean and confident. My go-to every morning.",
  ]},
  { id: "golden-bloom", name: "Golden Bloom", notes: "Ylang-ylang · jasmine · rose · plum · pear", lines: [
    "{n} is a rich, golden floral. Ylang-ylang and jasmine are gorgeous together.",
    "The plum and pear in {n} add this juicy sweetness I love.",
    "{n} feels luxurious and feminine. Perfect for festive occasions.",
    "{n} is radiant. It smells like sunshine and flowers.",
    "Jasmine, rose and musk in {n}. Classic and elegant with a modern touch.",
    "{n} lasts on my clothes until the next day.",
    "{n} is perfect for weddings and functions. Everyone asked about it.",
  ]},
  { id: "nocturnal-vice", name: "Nocturnal Vice", notes: "Pear · lavender · mint · cinnamon · vanilla", lines: [
    "{n} is pear, lavender and vanilla. Sweet, fresh and so addictive.",
    "{n} is the ultimate night-out perfume. Seductive and long lasting.",
    "The mint and cinnamon in {n} give it a cool and warm effect that's unique.",
    "{n} gets compliments every time I go out.",
    "{n} is sweet without being cloying. The amber base is perfect.",
    "Fresh pear on top, cozy vanilla at the base. {n} is a winner.",
    "{n} has great projection. People notice when I walk in.",
  ]},
  { id: "citrus-reverence", name: "Citrus Reverence", notes: "Bergamot · neroli · ginger · black tea · olibanum", lines: [
    "{n} is citrus done right. Bergamot and neroli with a lovely black tea note.",
    "{n} feels so refined. Fresh, but with a calm, incense-like base.",
    "The black tea and ginger in {n} make it way more elegant than a basic citrus.",
    "{n} is my summer office scent. Clean and calming.",
    "{n} smells like a luxury hotel lobby. Fresh and classy.",
    "Neroli and olibanum in {n} is such a beautiful pairing.",
    "{n} is light enough for daytime but it doesn't vanish in an hour.",
  ]},
  { id: "desert-eclipse", name: "Desert Eclipse", notes: "Oud · benzoin · incense · raspberry · rose", lines: [
    "{n} is oud, rose and raspberry. Rich, deep and gorgeous.",
    "The raspberry in {n} makes the oud so wearable and modern.",
    "{n} is a proper oud perfume without being harsh. Smooth and warm.",
    "{n} is perfect for evenings and special occasions. Very royal.",
    "Incense and benzoin give {n} a beautiful resinous depth.",
    "{n} lasts all day and night. A little goes a long way.",
    "{n} is the best oud I've tried at this price.",
  ]},
  { id: "amber-pulse", name: "Amber Pulse", notes: "Cardamom · pink pepper · sage · chestnut · vanilla", lines: [
    "{n} is warm and spicy. Cardamom and pink pepper with a sweet vanilla base.",
    "The chestnut note in {n} is so cozy and unique.",
    "{n} smells like a warm winter evening. Love it.",
    "{n} is ambery, sweet and a little woody. Perfect balance.",
    "{n} gets compliments every time. People say it smells rich.",
    "Cardamom on top and amberwood at the base. {n} is beautifully blended.",
    "{n} is my cold-weather signature now.",
  ]},
  { id: "femme-tempest", name: "Femme Tempest", notes: "Lavender · orange blossom · jasmine · vanilla · musk", lines: [
    "{n} is lavender and orange blossom with a soft vanilla musk. So feminine.",
    "{n} feels strong and elegant at the same time.",
    "The orange blossom and jasmine in {n} are beautiful, and the vanilla makes it cozy.",
    "{n} is my everyday perfume now. It goes with everything.",
    "{n} is clean, floral and warm. Gets compliments at work.",
    "Lavender on top, cedarwood and musk later. {n} evolves so well.",
    "{n} lasts the whole day and still smells lovely in the evening.",
  ]},
  { id: "obsidian-reverie", name: "Obsidian Reverie", notes: "Oud · rosewood · cardamom · sandalwood · vetiver", lines: [
    "{n} is a dark, woody oud with cardamom and sandalwood. Luxurious.",
    "{n} feels mysterious and classy. The rosewood is beautiful.",
    "The vetiver and tonka in {n} give it such a smooth dry down.",
    "{n} is the perfect evening and wedding perfume. Very royal.",
    "{n} is deep and rich, but not harsh like some ouds.",
    "Cardamom and oud up front, amber and tonka at the base. {n} is a masterpiece.",
    "{n} lasts insanely long. I can smell it on my shirt the next day.",
  ]},
  { id: "sylvan-radiance", name: "Sylvan Radiance", notes: "Cypress · cedarwood · vetiver · benzoin · musk", lines: [
    "{n} smells like a walk in the forest. Cypress, cedar and vetiver. Gorgeous.",
    "{n} is woody, clean and very natural.",
    "The benzoin and ambergris in {n} give it a soft warmth underneath the woods.",
    "{n} is perfect for the office. Understated but classy.",
    "{n} is calm and grounding. I love wearing it every day.",
    "{n} isn't a typical sweet perfume. Earthy, fresh and mature.",
    "{n} sits close to the skin and lasts all day.",
  ]},
  { id: "aqua-eternel", name: "Aqua Eternel", notes: "Yuzu · bergamot · water lily · sandalwood · tobacco", lines: [
    "{n} is aquatic and fresh. Yuzu and bergamot with a soft tobacco base.",
    "{n} smells like a sea breeze but with real depth.",
    "The water lily and nutmeg in {n} make it unique for an aquatic.",
    "{n} is my summer favourite. Fresh, clean, and it lasts.",
    "{n} is perfect for daytime and the gym.",
    "Yuzu on top, sandalwood and cedar at the base. {n} is so well made.",
    "{n} is fresh without being generic. Love the tobacco twist.",
  ]},
  { id: "majestic-eclipse", name: "Majestic Eclipse", notes: "Oud · saffron · lavender · patchouli · agarwood", lines: [
    "{n} is oud and saffron at its best. Rich and royal.",
    "{n} is powerful and long lasting. Perfect for weddings and Eid.",
    "The lavender in {n} adds a surprising freshness to the oud.",
    "{n} feels regal. Deep agarwood with smooth musk.",
    "{n} gets compliments from everyone. Traditional and modern at once.",
    "Saffron and lavender open {n}, then agarwood and musk take over. Superb.",
    "{n} is easily the best oud perfume I own.",
  ]},
  { id: "velour-roast", name: "Velour Roast", notes: "Coffee · cinnamon · vanilla · praline · oud", lines: [
    "{n} smells like a fancy cafe. Coffee, cinnamon and praline. Delicious.",
    "{n} is gourmand heaven. Warm, sweet and addictive.",
    "The touch of oud in {n} keeps it from being too sweet. Clever.",
    "{n} is my winter favourite. Cozy and comforting.",
    "{n} gets me compliments every single time.",
    "Coffee on top, tonka and benzoin at the base. {n} is beautifully done.",
    "{n} is perfect for date nights. Sweet and seductive.",
  ]},
  { id: "ivory-resonance", name: "Ivory Resonance", notes: "White musk · soft oud · sandalwood · rose · vanilla", lines: [
    "{n} is white musk and soft oud. Clean, creamy and gorgeous.",
    "{n} is a skin scent but better. Soft, warm and lasting.",
    "The sandalwood and rose in {n} make it so elegant.",
    "{n} is perfect for daily wear. Clean and comforting.",
    "{n} smells like fresh laundry with a luxury twist.",
    "Soft oud, amber and vanilla in {n}. Subtle but beautiful.",
    "{n} gets me 'you smell nice' comments all day.",
  ]},
  { id: "attar", name: "Attar", notes: "Alcohol-free · 100% oil", lines: [
    "The {n} is pure oil and alcohol free, which I really appreciate.",
    "Just a dab of the {n} lasts the whole day. Great quality.",
    "The {n} smells rich and authentic, the way attars should.",
    "The {n} is perfect for prayer and daily wear. No alcohol, so gentle on skin.",
    "Their {n} is concentrated and smooth. A tiny bit is enough.",
    "The {n} reminds me of traditional attars, but more refined.",
  ]},
  { id: "bakhoor", name: "Bakhoor", notes: "Home fragrance", lines: [
    "The {n} filled the whole house with a beautiful fragrance.",
    "Their {n} smells authentic and rich. Guests always notice.",
    "The {n} lingers in the room for hours. Lovely quality.",
    "I use the {n} on Fridays and special occasions. Gorgeous smell.",
    "The {n} burns evenly and the scent is warm and luxurious.",
    "The {n} makes my home smell like a palace.",
  ]},
];

window.KHULOUD_POOLS = {
  open5: [
    "Absolutely in love with Khuloud!",
    "Khuloud has become my favourite perfume brand.",
    "Wow, just wow.",
    "Best perfume purchase I've made this year.",
    "Five stars without a second thought.",
    "Finally found a brand that delivers on quality.",
    "Such a beautiful experience with Khuloud.",
    "I'm so glad I found Khuloud.",
    "Honestly blown away.",
    "Khuloud is a hidden gem.",
    "Couldn't be happier with my order.",
    "This is luxury perfume at a fair price.",
    "Amazing quality from a Delhi brand.",
    "Superb perfumes, superb people.",
    "Exceeded every expectation.",
    "I was skeptical at first, but Khuloud completely won me over.",
    "Khuloud never disappoints.",
    "Ordered on a friend's recommendation and now I get why she raves about it.",
    "One of the best fragrance houses in India, honestly.",
    "Proud to support a homegrown brand this good.",
    "Totally worth it.",
    "Ordered once and I'm already planning my next order.",
    "Really impressed.",
    "Khuloud is the real deal.",
    "What a find!",
    "I've bought a lot of perfumes, and Khuloud stands out.",
    "Brilliant.",
    "Very happy customer here.",
  ],
  open4: [
    "Really good perfumes.",
    "Very happy with my purchase.",
    "Khuloud is a solid brand.",
    "Great quality overall.",
    "Pleasantly surprised by Khuloud.",
    "Good experience with Khuloud.",
    "Nice perfumes, I'd recommend them.",
    "Impressed with the quality for the price.",
    "Happy with what I got.",
    "Really liked my order.",
    "Good stuff from Khuloud.",
    "Quality perfumes, glad I tried them.",
    "Overall a great purchase.",
    "Lovely fragrances.",
    "Pretty impressed.",
  ],
  perf: [
    "It lasts 8 to 10 hours on my skin easily.",
    "Longevity is excellent. I can still smell it at night.",
    "The 40% perfume oil really shows. It lasts all day.",
    "Lasts way longer than some designer perfumes I own.",
    "Two sprays and I'm good for the whole day.",
    "It stays on my clothes for two days.",
    "Projection is great for the first few hours, then it settles close to the skin.",
    "The staying power is amazing for an extrait.",
    "It survived a full workday plus dinner.",
    "Performance is top notch. No need to reapply.",
    "It lasted through a long Delhi summer day.",
    "It's long lasting and doesn't fade after an hour like cheap perfumes.",
    "Sillage is beautiful. People notice when I walk past.",
    "Even after 10 hours I could still smell it on my wrist.",
    "A little goes a long way.",
    "Longevity easily beats my expectations.",
    "It's still there the next morning on my scarf.",
    "Great projection without being overpowering.",
  ],
  pack: [
    "The packaging is gorgeous and feels very premium.",
    "Beautifully packed. It would make a perfect gift.",
    "Delivery was quick and everything arrived safely.",
    "The bottle looks so classy on my dresser.",
    "Loved the presentation. It feels like unboxing a luxury product.",
    "The team was very helpful in suggesting the right scent for me.",
    "Customer service was warm and responsive.",
    "They helped me choose over WhatsApp and the recommendation was spot on.",
    "Packed with care, not a single leak.",
    "The bottle design is elegant and the spray is nice and fine.",
    "Great service from start to finish.",
    "I gifted one and my friend loved the packaging too.",
    "The order arrived well packed and on time.",
    "Very professional team. Felt personal and premium.",
  ],
  compl: [
    "I've been getting so many compliments.",
    "My friends keep asking which perfume I'm wearing.",
    "My wife loved it so much she's stealing it from me.",
    "My husband can't stop complimenting it.",
    "Colleagues stop me to ask what I'm wearing.",
    "Got compliments on the very first day.",
    "Everyone at the party asked about it.",
    "My family is now ordering their own.",
    "Strangers have literally stopped me to ask about it.",
    "Even my picky sister approved.",
  ],
  nit4: [
    "Only wish there were more size options.",
    "Would love a travel-size version too.",
    "Delivery took a little longer than expected, but worth the wait.",
    "Took a day or two to get used to, but now I love it.",
    "Projection could be a touch stronger, but longevity is great.",
    "Price is a bit on the higher side, but you get what you pay for.",
    "Wish I could test more scents before buying, but no regrets.",
    "Opening is a little strong, but the dry down is beautiful.",
    "I'd like more sample options, but the quality is great.",
    "Not perfect for everyone, but it suits me really well.",
    "Packaging could be a little sturdier, but the perfume itself is lovely.",
    "Holding back one star only because I want to try more of the range first.",
  ],
  close5: [
    "Highly recommend Khuloud to anyone who loves fragrances.",
    "Will definitely be ordering again.",
    "Already planning my next purchase.",
    "10/10, would recommend.",
    "Go for it, you won't regret it.",
    "Customer for life.",
    "Can't wait to try more from their collection.",
    "Thank you, Khuloud!",
    "Must try if you love long-lasting perfumes.",
    "Worth every rupee.",
    "Definitely recommend this brand.",
    "Five stars all the way.",
    "Keep up the amazing work, team Khuloud.",
    "If you're on the fence, just order it.",
    "This will be my go-to brand from now on.",
    "Already recommended it to my whole family.",
    "Thank you for making such beautiful perfumes in India.",
    "Love it, love it, love it.",
  ],
  close4: [
    "Would recommend.",
    "I'll probably order again.",
    "Overall very satisfied.",
    "Good value for money.",
    "Definitely worth trying.",
    "Looking forward to trying more scents.",
    "Happy customer overall.",
    "Recommended.",
    "Would buy again.",
    "Thanks, Khuloud.",
  ],
  // used when more than 3 products are picked
  extra: [
    "Also picked up {list}, and they're all lovely too.",
    "I got {list} as well. No disappointments at all.",
    "{list} were also part of my order and I love them all.",
    "Also tried {list}. Each one is unique and beautiful.",
  ],
};

(function () {
  const P = window.KHULOUD_POOLS;
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const chance = (p) => Math.random() < p;
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const joinList = (xs) => xs.length <= 1 ? xs.join("") : xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1];
  const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };

  function build(products, stars) {
    const parts = [pick(stars >= 5 ? P.open5 : P.open4)];
    const shown = products.slice(0, 3);
    shown.forEach((p) => {
      const lines = shuffle(p.lines);
      parts.push(lines[0].replace(/\{n\}/g, p.name));
      if (shown.length === 1 && chance(0.55)) {
        const s = lines[1].replace(/\b(The|the|Their|their) \{n\}/g, "{n}").replace(/\{n\}/g, "it");
        parts.push(s.charAt(0).toUpperCase() + s.slice(1));
      }
    });
    if (products.length > 3) parts.push(pick(P.extra).replace("{list}", joinList(products.slice(3).map((p) => p.name))));
    const middle = [];
    if (chance(0.8)) middle.push(pick(P.perf));
    if (chance(0.55)) middle.push(pick(P.pack));
    if (chance(stars >= 5 ? 0.5 : 0.25)) middle.push(pick(P.compl));
    parts.push(...shuffle(middle));
    if (stars === 4) parts.push(pick(P.nit4));
    parts.push(pick(stars >= 5 ? P.close5 : P.close4));
    return parts.join(" ");
  }

  // Generates a review this device has never been shown before.
  window.generateReview = function (productIds, stars) {
    const products = productIds.map((id) => window.KHULOUD_PRODUCTS.find((p) => p.id === id)).filter(Boolean);
    let seen = [];
    try { seen = JSON.parse(localStorage.getItem("kh_seen") || "[]"); } catch (e) {}
    let text = "", h = "";
    for (let tries = 0; tries < 40; tries++) {
      text = build(products, stars);
      h = hash(text);
      if (!seen.includes(h)) break;
    }
    seen.push(h);
    try { localStorage.setItem("kh_seen", JSON.stringify(seen.slice(-300))); } catch (e) {}
    return { text, id: h };
  };
})();
