// ─────────────────────────────────────────────────────────────
// Everything on the site that changes lives here.
// New mix → add to `sets` (newest first). New gig → add to `gigs`.
// Dates are "YYYY-MM-DD" (use "-01" if you only know the month).
// Gigs with a date in the future show up as "Upcoming" automatically.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  name: "Juan Casanova",
  tagline: "DJ · Madrid",
  // Short line at the top of About (big type)
  bio: "DJing since I was 13. It started in Caracas, got serious in Pamplona, and now it's Madrid.",
  // The longer story — one string per paragraph
  story: [
    "It started with a green Pioneer DDJ-WeGo, then a Traktor Kontrol. Back in Caracas it was mostly friends, birthdays and house parties. Just playing for fun.",
    "When I moved to Pamplona to study, it turned serious. I bought an XDJ and played every day with nothing booked, just to learn the craft: transitions, beatmatching, all of it. My first official gig was set for the same week COVID shut everything down.",
    "It finally happened a year later, on Halloween night at RedBox, a club that only played underground techno. It's still my favourite night behind the decks. After that the dates kept coming. Then I moved to Madrid for work, and kept playing.",
    "My sound leans underground: house, afro, indie and tech. I was already playing before electronic music was everywhere, and I still dig for the tracks nobody knows. What I want on the floor is simple: people who stop talking, disconnect and just move.",
  ],
  quote: "A good DJ gets people dancing to the music he wants to play, not the music they came to hear.",
  influences: ["Avicii", "Carl Cox", "&ME (Keinemusik)"],
  debut: "RedBox, Pamplona · Halloween 2021",
  genres: ["House", "Afro", "Indie", "Tech"],
  basedIn: "Madrid, ES",
  from: "Caracas, Venezuela",

  links: {
    instagram: "https://www.instagram.com/juan_casanova_",
    soundcloud: "https://soundcloud.com/juancasanova00",
    tiktok: "https://www.tiktok.com/@_juancasanova_",
    spotify: "https://open.spotify.com/user/juancristobalcasanova00",
  },

  // Booking: Instagram DM for now. Add an email here when you have one for bookings.
  bookingEmail: "",

  sets: [
    {
      title: "VOL.I MAD",
      date: "2024-11-05",
      note: "",
      soundcloud: "https://soundcloud.com/juancasanova00/vol1-mad",
    },
    {
      title: "Febrero 23",
      date: "2023-02-27",
      note: "",
      soundcloud: "https://soundcloud.com/juancasanova00/febrero-23",
    },
    {
      title: "Quarantine",
      date: "2020-04-19",
      note: "",
      soundcloud: "https://soundcloud.com/juancasanova00/quarentine",
    },
    {
      title: "House Trancadito",
      date: "2019-03-14",
      note: "",
      soundcloud: "https://soundcloud.com/juancasanova00/house-trancadito-14032019",
    },
  ],

  // Clips row — a clean gallery: only YOUR pictures/videos, no usernames, likes or app logos.
  // `media` = the picture shown (saved in photos/clips/). Clicking opens it big.
  // Want a clip to play? Add `video: "photos/clips/name.mp4"` with the ORIGINAL file from your phone
  // (not downloaded from TikTok — those carry the @username watermark). `url` = the original post.
  // TikTok tiles without `video` open TikTok's own player (sound on, but it shows the TikTok handle/likes overlay).
  // caption / likes / comments / views = snapshot from 25 Sep 2026, not shown on the site right now.
  posts: [
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7531813552601025814", media: "photos/clips/tt-la-victoria.jpg", caption: "One for the books. La Victoria, Madrid.", likes: 140, comments: 10, views: 3115, label: "La Victoria, Madrid", date: "2025-07-27" },
    { platform: "instagram", url: "https://www.instagram.com/p/DNMeW-hCG64/", media: "photos/clips/ig-la-victoria.jpg", caption: "Somos todos Montiel", likes: 168, comments: 32, label: "La Victoria, Madrid", date: "2025-08-10" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7496995362062830870", media: "photos/clips/tt-7am-closing.jpg", caption: "Cuando son las 7:00am, ya barrieron tres veces y te dicen “pa casa”. Back to them roots, closing with Gustavito Cerati.", likes: 67, comments: 11, views: 1971, label: "7:00am closing", date: "2025-04-24" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7478795263474257174", media: "photos/clips/tt-tbt.jpg", caption: "Un buen tbt, me trying to not be so serious 🤦‍♂️", likes: 46, comments: 4, views: 1302, label: "TBT", date: "2025-03-06" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7460644068725476640", media: "photos/clips/tt-missing-redbox.jpg", caption: "Missing Redbox con los pibes y pibardas", likes: 111, comments: 21, views: 2888, label: "Missing Redbox", date: "2025-01-16" },
    { platform: "instagram", url: "https://www.instagram.com/p/C5wdXAyNg3e/", media: "photos/clips/ig-arazuri.jpg", caption: "Sun-set for @byfriendsnfamily ⚡️✌🏻", likes: 326, comments: 36, label: "Sun-set, Arazuri", date: "2024-04-14" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7249034781889957147", media: "photos/clips/tt-redbox.jpg", caption: "🫠🫠🫠🫠", likes: 58, comments: 6, views: 957, label: "Redbox", date: "2023-06-26" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7248278050901609755", media: "photos/clips/tt-my-debut.jpg", caption: "My debut 🫣", likes: 87, comments: 8, views: 1724, label: "My debut, RedBox Pamplona", date: "2021-10-31" },
    { platform: "instagram", url: "https://www.instagram.com/p/Cb6HI7GjSy1/", media: "photos/clips/ig-pamplona.jpg", caption: "Crème Brûlée", likes: 331, comments: 34, label: "Pamplona", date: "2022-04-03" },
    { platform: "instagram", url: "https://www.instagram.com/p/CVvt_aBodrJ/", media: "photos/clips/ig-redbox-pamplona.mp4", caption: "It was a pleasure 🍬🌚 @sessions_pamplona @redboxpamplona", likes: 354, comments: 64, label: "It was a pleasure, RedBox Pamplona", date: "2021-11-01" },
    { platform: "instagram", url: "https://www.instagram.com/p/CMs1xY4B0pa/", media: "photos/clips/ig-behind-the-decks.jpg", caption: "🎬", likes: 296, comments: 41, label: "Behind the decks", date: "2021-03-21" },
  ],

  // "Unposted" — Juan's own photos that never made the feed. Off the decks, the real you.
  // Drop files into photos/unposted/ and list them here. .jpg / .png / .webp / .mp4
  unposted: [
  ],

  // false = show only the venue names (no dates). true = also list every date.
  showDates: false,

  // Artists you've shared a line-up with — shown under the venue list.
  sharedWith: ["Yubik", "Kev & Kog", "Charles Ramirez"],

  // Every gig, from the "Flyers" highlight on Instagram. Newest first is not required — the site sorts.
  // Add `with: "Artist"` to show who else was on the bill.
  gigs: [
    // TODO Juan: April 2026 gig — add it here once you tell me the venue
    { date: "2025-08-22", venue: "Los Amantes", city: "Madrid" },
    { date: "2025-08-16", venue: "Los Amantes", city: "Madrid" },
    { date: "2025-08-15", venue: "Los Amantes", city: "Madrid" },
    { date: "2025-08-08", venue: "Los Amantes", city: "Madrid" },
    { date: "2025-07-12", venue: "La Victoria", city: "Madrid", with: "Kev & Kog" },
    { date: "2025-05-10", venue: "Eight Club", city: "Madrid" },
    { date: "2025-03-05", venue: "Nômadâ", city: "Madrid" },
    { date: "2025-02-06", venue: "Los Amantes", city: "Madrid" },
    { date: "2025-01-02", venue: "Los Amantes", city: "Madrid" },
    { date: "2024-11-13", venue: "Nômadâ", city: "Madrid", with: "Soirée" },
    { date: "2024-04-13", venue: "Castillo de Arazuri", city: "Navarra", with: "Yubik · Friends & Family" },
    { date: "2023-09-28", venue: "Kato's", city: "Pamplona" },
    { date: "2023-09-09", venue: "Sala Enter", city: "Pamplona" },
    { date: "2023-03-25", venue: "RedBox", city: "Pamplona", with: "Soirée" },
    { date: "2023-03-09", venue: "Kato's", city: "Pamplona" },
    { date: "2023-01-21", venue: "Sala Enter", city: "Pamplona" },
    { date: "2023-01-14", venue: "Sala Enter", city: "Pamplona" },
    { date: "2022-10-29", venue: "RedBox", city: "Pamplona", with: "Moon Sessions" },
    { date: "2022-09-24", venue: "RedBox", city: "Pamplona", with: "Charles Ramirez" },
    { date: "2022-07-02", venue: "RedBox", city: "Pamplona", with: "Moon Sessions" },
    { date: "2022-05-21", venue: "RedBox", city: "Pamplona" },
    { date: "2022-03-13", venue: "Kabiya", city: "Pamplona", with: "Flash Sundown" },
    { date: "2022-02-05", venue: "Ozone", city: "Pamplona" },
    { date: "2021-11-20", venue: "RedBox", city: "Pamplona" },
    { date: "2021-10-31", venue: "RedBox", city: "Pamplona", with: "Moon Sessions" },
  ],
};
