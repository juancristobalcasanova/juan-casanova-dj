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
  // Press kit bio (third person — promoters copy/paste this into event posts)
  pressBio: [
    "Juan Casanova is a Venezuelan DJ based in Madrid. He started at 13 in Caracas, got serious in Pamplona, and made his official debut on Halloween 2021 at RedBox, a club dedicated to underground techno.",
    "Since then he has played across Pamplona and Madrid, in rooms like Todos Santos, Istar, La Victoria and Los Amantes. His sound leans underground: house, afro, indie and tech, built on tracks most of the crowd hasn't heard yet.",
  ],
  quote: "A good DJ gets people dancing to the music he wants to play, not the music they want to hear.",
  influences: ["Avicii", "Carl Cox", "&ME (Keinemusik)"],
  debut: "RedBox, Pamplona · Halloween 2021",
  genres: ["House", "Afro", "Indie", "Tech"],
  basedIn: "Madrid, ES",
  from: "Caracas, Venezuela",

  // ── Spanish version (shown when the site is in ES). Anything missing falls back to English. ──
  es: {
    tagline: "DJ · Madrid",
    bio: "Pincho desde los 13. Empecé en Caracas, me lo tomé en serio en Pamplona y ahora estoy en Madrid.",
    story: [
      "Empecé con una Pioneer DDJ-WeGo verde y luego una Traktor Kontrol. En Caracas era sobre todo con amigos: cumpleaños, fiestas en casa. Pinchar por diversión.",
      "Cuando me mudé a Pamplona a estudiar, la cosa se puso seria. Me compré una XDJ y pinchaba todos los días sin ninguna fecha cerrada, solo para aprender el oficio: transiciones, beatmatching, todo. Mi primer bolo oficial estaba fijado para la misma semana en que el COVID lo cerró todo.",
      "Llegó por fin un año después, la noche de Halloween en RedBox, un club donde solo sonaba techno underground. Sigue siendo mi noche favorita en cabina. Después de eso, las fechas no pararon. Luego me mudé a Madrid por trabajo y seguí pinchando.",
      "Mi sonido tira a underground: house, afro, indie y tech. Ya pinchaba antes de que la electrónica estuviera en todas partes, y sigo buscando los temas que nadie conoce. Lo que quiero en la pista es simple: gente que deja de hablar, desconecta y solo se mueve.",
    ],
    pressBio: [
      "Juan Casanova es un DJ venezolano afincado en Madrid. Empezó a los 13 en Caracas, se lo tomó en serio en Pamplona y debutó oficialmente en Halloween de 2021 en RedBox, un club dedicado al techno underground.",
      "Desde entonces ha pinchado en Pamplona y Madrid, en salas como Todos Santos, Istar, La Victoria y Los Amantes. Su sonido tira a underground: house, afro, indie y tech, con temas que la mayoría de la pista aún no ha escuchado.",
    ],
    quote: "Un buen DJ hace bailar a la gente con la música que él quiere poner, no con la que ellos quieren escuchar.",
    debut: "RedBox, Pamplona · Halloween 2021",
    basedIn: "Madrid, ES",
    from: "Caracas, Venezuela",
  },
  // Clip / photo captions in Spanish: add `labelEs` (clips) or `captionEs` (unposted) next to the English one.

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
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7496995362062830870", media: "photos/clips/tt-7am-closing.jpg", caption: "Cuando son las 7:00am, ya barrieron tres veces y te dicen “pa casa”. Back to them roots, closing with Gustavito Cerati.", likes: 67, comments: 11, views: 1971, label: "7:00am closing", labelEs: "Cierre a las 7:00am", date: "2025-04-24" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7478795263474257174", media: "photos/clips/tt-tbt.jpg", caption: "Un buen tbt, me trying to not be so serious 🤦‍♂️", likes: 46, comments: 4, views: 1302, label: "TBT", date: "2025-03-06" },
    { platform: "instagram", url: "https://www.instagram.com/p/C5wdXAyNg3e/", media: "photos/clips/ig-arazuri.jpg", caption: "Sun-set for @byfriendsnfamily ⚡️✌🏻", likes: 326, comments: 36, label: "Sun-set, Arazuri", date: "2024-04-14" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7249034781889957147", media: "photos/clips/tt-redbox.jpg", caption: "🫠🫠🫠🫠", likes: 58, comments: 6, views: 957, label: "Redbox", date: "2023-06-26" },
    { platform: "tiktok", url: "https://www.tiktok.com/@_juancasanova_/video/7248278050901609755", media: "photos/clips/tt-my-debut.jpg", caption: "My debut 🫣", likes: 87, comments: 8, views: 1724, label: "My debut, RedBox Pamplona", labelEs: "Mi debut, RedBox Pamplona", date: "2021-10-31" },
    { platform: "instagram", url: "https://www.instagram.com/p/Cb6HI7GjSy1/", media: "photos/clips/ig-pamplona.jpg", caption: "Crème Brûlée", likes: 331, comments: 34, label: "Pamplona", date: "2022-04-03" },
    { platform: "instagram", url: "https://www.instagram.com/p/Cb6HI7GjSy1/", media: "photos/clips/ig-pamplona-video-3.mp4", label: "Pamplona", date: "2022-04-03" },
    { platform: "instagram", url: "https://www.instagram.com/p/Cb6HI7GjSy1/", media: "photos/clips/ig-pamplona-video-4.mp4", label: "Pamplona", date: "2022-04-03" },
    { platform: "instagram", url: "https://www.instagram.com/p/CVvt_aBodrJ/", media: "photos/clips/ig-redbox-pamplona.mp4", caption: "It was a pleasure 🍬🌚 @sessions_pamplona @redboxpamplona", likes: 354, comments: 64, label: "It was a pleasure, RedBox Pamplona", labelEs: "Fue un placer, RedBox Pamplona", date: "2021-11-01" },
    { platform: "instagram", url: "https://www.instagram.com/p/CVvt_aBodrJ/", media: "photos/clips/ig-redbox-pamplona-4.jpg", label: "It was a pleasure, RedBox Pamplona", labelEs: "Fue un placer, RedBox Pamplona", date: "2021-11-01" },
  ],

  // "Unposted" — Juan's own photos that never made the feed. Off the decks, the real you.
  // Drop files into photos/unposted/ and list them here. .jpg / .png / .webp / .mp4
  unposted: [
  ],
  // true = show empty boxes on the live site while the photos are missing. Set to false (or add photos) later.
  unpostedPlaceholders: true,

  // false = show only the venue names (no dates). true = also list every date.
  showDates: false,

  // Artists you've shared a line-up with — shown under the venue list.
  sharedWith: ["Yubik", "Kev & Kog", "Charles Ramirez"],

  // Every gig, from the "Flyers" highlight on Instagram. Newest first is not required — the site sorts.
  // Add `with: "Artist"` to show who else was on the bill.
  gigs: [
    // TODO Juan: April 2026 gig — add it here once you tell me the venue
    // Venues without a known date (no `date`) still show on the "Played at" wall. Add `pos: N` to pin one to place N.
    { venue: "Todos Santos", city: "Madrid", pos: 1 },   // last venue played
    { venue: "Istar", city: "Madrid", pos: 3 },   // pos = fixed place on the wall
    { venue: "Bonded", city: "Madrid" },
    { venue: "Vandido", city: "Madrid" },
    { venue: "Ramses", city: "Madrid" },
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
    { date: "2024-04-13", venue: "Castillo de Arazuri", city: "Pamplona", event: "Friends&Family", with: "Yubik" },   // event = name shown on the wall
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
