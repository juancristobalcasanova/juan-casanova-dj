(() => {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;

  // ── Language (EN / ES) ──
  const LANG = root.lang === 'es' ? 'es' : 'en';
  const T = {
    en: {
      navAbout: 'About', navLive: 'Live', navPlayed: 'Played at', navPlayedShort: 'Played at', bookShort: 'Book a date', navSets: 'Sets', navUnposted: 'Unposted',
      book: 'Book a date', scroll: 'Scroll ↓', clipsTitle: 'On the decks', bside: 'B-side',
      unpostedSub: 'Off the decks. The side that never made the feed.',
      bookingLine: "let's make a night.", bookingMeta: 'Clubs · Private events · Brands',
      mix: 'Mix', listen: 'Listen on SoundCloud', upcoming: 'Upcoming', past: 'Past',
      allNights: (n) => `All ${n} nights ↓`, with: 'w/', viewPost: 'View post', photo: 'Photo', clip: 'Clip',
      sound: 'Sound', basedIn: 'Based in', from: 'From', debut: 'Debut', influences: 'Influences',
      prev: 'Previous', next: 'Next', close: 'Close',
      switchLang: 'Ver en español', toLight: 'Switch to light', toDark: 'Switch to dark',
      metaDesc: 'Juan Casanova — DJ based in Madrid. House, afro, indie, tech.', mailSubject: 'Booking enquiry',
    },
    es: {
      navAbout: 'Sobre mí', navLive: 'En vivo', navPlayed: 'He pinchado en', navPlayedShort: 'Salas', bookShort: 'Reservar', navSets: 'Sets', navUnposted: 'Sin publicar',
      book: 'Reserva una fecha', scroll: 'Desliza ↓', clipsTitle: 'En cabina', bside: 'Cara B',
      unpostedSub: 'Lejos de la cabina. Lo que nunca llegó al feed.',
      bookingLine: 'hagamos una noche.', bookingMeta: 'Clubs · Eventos privados · Marcas',
      mix: 'Mix', listen: 'Escuchar en SoundCloud', upcoming: 'Próximas fechas', past: 'Anteriores',
      allNights: (n) => `Las ${n} noches ↓`, with: 'con', viewPost: 'Ver publicación', photo: 'Foto', clip: 'Clip',
      sound: 'Sonido', basedIn: 'Vive en', from: 'De', debut: 'Debut', influences: 'Influencias',
      prev: 'Anterior', next: 'Siguiente', close: 'Cerrar',
      switchLang: 'View in English', toLight: 'Cambiar a modo claro', toDark: 'Cambiar a modo oscuro',
      metaDesc: 'Juan Casanova — DJ en Madrid. House, afro, indie, tech.', mailSubject: 'Consulta de booking',
    },
  };
  const t = (k) => (T[LANG][k] ?? T.en[k]);
  // Content in the current language: Spanish overrides from data.js `es` block, English as fallback
  const C = LANG === 'es' ? { ...S, ...(S.es || {}) } : S;
  const L = (o, k) => (LANG === 'es' && o[k + 'Es']) || o[k];

  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('metaDesc'));

  const langBtn = $('langToggle');
  langBtn.textContent = LANG === 'es' ? 'EN' : 'ES';
  langBtn.setAttribute('aria-label', t('switchLang'));
  langBtn.addEventListener('click', () => {
    try { localStorage.setItem('jc-lang', LANG === 'es' ? 'en' : 'es'); } catch (e) {}
    location.reload();
  });

  // ── Theme (dark / light), like casanovaaleman.com ──
  const themeBtn = $('themeToggle');
  const syncTheme = () => {
    const light = root.dataset.theme === 'light';
    themeBtn.setAttribute('aria-pressed', String(!light));
    themeBtn.setAttribute('aria-label', light ? t('toDark') : t('toLight'));
  };
  syncTheme();
  themeBtn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('jc-theme', next); } catch (e) {}
    syncTheme();
  });
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const MONTHS = LANG === 'es'
    ? ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parse = (d) => { const [y, m, day] = d.split('-').map(Number); return new Date(y, m - 1, day || 1); };
  const monthYear = (d) => { const x = parse(d); return `${MONTHS[x.getMonth()]} ${x.getFullYear()}`; };
  const dayMonthYear = (d) => (d.split('-')[2] && d.split('-')[2] !== '01' ? `${+d.split('-')[2]} ` : '') + monthYear(d);

  // Hero
  $('heroSub').textContent = `${C.tagline} · ${C.genres.join(' / ')}`;

  // Sets
  const total = S.sets.length;
  $('sets').innerHTML = S.sets.map((s, i) => {
    const embed = 'https://w.soundcloud.com/player/?' + new URLSearchParams({
      url: s.soundcloud, color: '#ecebe6', auto_play: 'false', visual: 'true',
      show_comments: 'false', show_user: 'true', show_reposts: 'false', hide_related: 'true',
    });
    return `
    <article class="set" data-index="${i}">
      <div class="set-top mono-label"><span>${pad(i + 1)} / ${pad(total)}</span><span>${t('mix')}</span></div>
      <div class="set-body">
        <div class="reveal">
          <h2 class="set-title">${esc(s.title)}</h2>
          ${L(s, 'note') ? `<p class="set-note">${esc(L(s, 'note'))}</p>` : ''}
          <a class="set-link" href="${esc(s.soundcloud)}" target="_blank" rel="noopener">${t('listen')} <span>→</span></a>
        </div>
        <div class="set-player reveal">
          <iframe loading="lazy" allow="autoplay" title="${esc(s.title)}" src="${esc(embed)}"></iframe>
        </div>
      </div>
      <div class="set-bottom mono-label"><span>SoundCloud</span><span>${parse(s.date).getFullYear()}</span></div>
    </article>`;
  }).join('');

  // Progress bars in nav
  const progress = $('progress');
  progress.innerHTML = S.sets.map(() => '<i></i>').join('');
  const bars = [...progress.children];
  const setEls = [...document.querySelectorAll('.set')];
  const setObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const idx = +e.target.dataset.index;
      bars.forEach((b, j) => { b.classList.toggle('done', j < idx); b.classList.toggle('active', j === idx); });
    });
  }, { threshold: 0.5 });
  setEls.forEach((el) => setObs.observe(el));
  const setsSection = $('sets');
  new IntersectionObserver(([e]) => progress.classList.toggle('on', e.isIntersecting), { threshold: 0.05 })
    .observe(setsSection);

  // Lightbox (shared by clips + unposted)
  const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src);
  const lb = $('lightbox');
  let lbItems = [];
  let cur = 0;
  const show = (i) => {
    cur = (i + lbItems.length) % lbItems.length;
    const it = lbItems[cur];
    let media;
    if (it.embed) media = `<iframe class="lb-embed" src="${esc(it.embed)}" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>`;
    else if (isVideo(it.src)) media = `<video src="${esc(it.src)}" controls autoplay playsinline></video>`;
    else media = `<img src="${esc(it.src)}" alt="${esc(it.caption || '')}">`;
    $('lbMedia').innerHTML = media;
    $('lbCaption').innerHTML = it.link
      ? `<a href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.caption || t('viewPost'))} ↗</a>`
      : esc(it.caption || '');
  };
  const openLb = (items, i) => {
    lbItems = items;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  const close = () => { lb.hidden = true; $('lbMedia').innerHTML = ''; document.body.style.overflow = ''; };
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(cur - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(cur + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });

  // Clips — TikTok tiles open TikTok's own player (video + sound); others open the picture/video
  const tiktokPlayer = (url) => {
    const id = (url.match(/\/video\/(\d+)/) || [])[1];
    return id && `https://www.tiktok.com/player/v1/${id}?` + new URLSearchParams({
      autoplay: 1, controls: 1, progress_bar: 1, play_button: 1, volume_control: 1, fullscreen_button: 1,
      music_info: 0, description: 0, rel: 0, native_context_menu: 0, closed_caption: 0,
    });
  };
  const posts = (S.posts || []).filter((p) => p.media)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const clipItems = posts.map((p) => ({
    src: p.video || p.media,
    embed: p.platform === 'tiktok' && !p.video ? tiktokPlayer(p.url) : null,
    caption: [L(p, 'label'), p.date && monthYear(p.date)].filter(Boolean).join(' · '),
    link: p.url,
  }));
  if (!posts.length) {
    $('clips').remove();
    document.querySelector('.nav-links a[href="#clips"]')?.remove();
  } else {
    const track = $('clipsTrack');
    track.innerHTML = posts.map((p, i) => `
      <button type="button" class="tile" data-i="${i}" aria-label="${esc(L(p, 'label') || t('clip'))}">
        ${isVideo(p.media)
          ? `<video src="${esc(p.media)}" muted loop playsinline autoplay preload="metadata"></video>`
          : `<img src="${esc(p.media)}" alt="" loading="lazy">`}
        ${p.platform === 'tiktok' || p.video ? '<span class="tile-play" aria-hidden="true"></span>' : ''}
      </button>`).join('');
    track.addEventListener('click', (e) => {
      const t = e.target.closest('.tile');
      if (t) openLb(clipItems, +t.dataset.i);
    });
    document.querySelectorAll('.clips-arrow').forEach((btn) => btn.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth * 0.8 * +btn.dataset.dir, behavior: 'smooth' });
    }));
  }

  // Unposted gallery
  const shots = (S.unposted || []).map((s) => ({ ...s, caption: L(s, 'caption') }));
  const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
  const grid = $('unpostedGrid');
  if (shots.length) {
    grid.innerHTML = shots.map((s, i) => `
      <button type="button" class="shot reveal" data-i="${i}">
        ${isVideo(s.src)
          ? `<video src="${esc(s.src)}" muted loop playsinline autoplay preload="metadata"></video>`
          : `<img src="${esc(s.src)}" alt="${esc(s.caption || 'Unposted photo')}" loading="lazy">`}
        ${s.caption ? `<span class="shot-cap mono-label">${esc(s.caption)}</span>` : ''}
      </button>`).join('');
    grid.addEventListener('click', (e) => {
      const b = e.target.closest('.shot[data-i]');
      if (b) openLb(shots, +b.dataset.i);
    });
  } else if (isLocal) {
    // Preview-only placeholders so the layout is visible before photos are added
    const ratios = ['4/5', '1/1', '3/4', '4/3', '4/5', '3/4'];
    grid.innerHTML = ratios.map((r, i) => `
      <div class="shot shot-ph" style="aspect-ratio:${r}"><span class="mono-label">${t('photo')} ${pad(i + 1)}</span></div>`).join('');
  } else {
    $('unposted').remove();
    document.querySelector('.nav-links a[href="#unposted"]')?.remove();
  }

  // Gigs
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const valid = S.gigs.filter((g) => g.venue && !/tbc/i.test(g.venue));
  const undated = valid.filter((g) => !g.date);   // venues played, exact date unknown
  const gigs = valid.filter((g) => g.date).sort((a, b) => parse(b.date) - parse(a.date));
  const upcoming = gigs.filter((g) => parse(g.date) >= today).reverse();
  const past = gigs.filter((g) => parse(g.date) < today);
  const gigRow = (g, cls = '') => `
    <div class="gig ${cls} reveal">
      <span class="gig-date">${dayMonthYear(g.date)}</span>
      <span class="gig-venue">${esc(g.venue)}${g.with ? `<em class="gig-with">${t('with')} ${esc(g.with)}</em>` : ''}</span>
      <span class="gig-city">${esc(g.city)}</span>
    </div>`;
  // Venues wall — every place played, most recent first, counted once
  const venues = [...new Map(past.map((g) => [g.venue, g])).values()];
  // Undated venues go right after the last venue from the same city (or at the end)
  undated.forEach((g) => {
    if (venues.some((v) => v.venue === g.venue)) return;
    const lastSameCity = venues.map((v) => v.city).lastIndexOf(g.city);
    venues.splice(lastSameCity === -1 ? venues.length : lastSameCity + 1, 0, g);
  });
  // `pos: N` pins a venue to place N on the wall (e.g. the big-name clubs)
  valid.filter((g) => g.pos).forEach((g) => {
    const i = venues.findIndex((v) => v.venue === g.venue);
    if (i === -1) return;
    const [v] = venues.splice(i, 1);
    venues.splice(Math.min(g.pos - 1, venues.length), 0, v);
  });
  const SHOWN = 6;
  $('gigList').innerHTML = `
    ${venues.length ? `
    <div class="venues reveal">
      <p class="venues-list">${venues.map((g) => `<span>${esc(g.venue)}<sup>${esc(g.city)}</sup></span>`).join('')}</p>
    </div>` : ''}
    ${upcoming.length ? `<div class="gig-group">
      <span class="mono-label">${t('upcoming')}</span>
      ${upcoming.map((g) => gigRow(g, 'upcoming')).join('')}
    </div>` : ''}
    ${S.showDates && past.length ? `<div class="gig-group gig-past"><span class="mono-label">${t('past')}</span>
      ${past.map((g, i) => gigRow(g, i >= SHOWN ? 'gig-more' : '')).join('')}
      ${past.length > SHOWN ? `<button type="button" class="gig-toggle mono-label" id="gigToggle">${t('allNights')(past.length)}</button>` : ''}
    </div>` : ''}`;
  $('gigToggle')?.addEventListener('click', (e) => {
    e.currentTarget.closest('.gig-past').classList.add('open');
    e.currentTarget.remove();
  });

  // About
  $('bio').textContent = C.bio;
  $('story').innerHTML = (C.story || []).map((p) => `<p>${esc(p)}</p>`).join('');
  if (C.quote) $('quote').textContent = `“${C.quote}”`; else $('quote').remove();
  $('facts').innerHTML = [
    [t('sound'), C.genres.join(', ')],
    [t('basedIn'), C.basedIn],
    [t('from'), C.from],
    [t('debut'), C.debut],
    [t('influences'), (C.influences || []).join(', ')],
  ].filter(([, v]) => v).map(([k, v]) => `<div><dt class="mono-label">${k}</dt><dd>${esc(v)}</dd></div>`).join('');

  // Booking — one clear action: email if set, otherwise straight into an Instagram DM
  const handle = S.links.instagram.replace(/\/$/, '').split('/').pop();
  const bookHref = S.bookingEmail
    ? `mailto:${S.bookingEmail}?subject=${encodeURIComponent(t('mailSubject'))}`
    : `https://ig.me/m/${handle}`;
  $('bookingCta').href = bookHref;
  $('navBook').href = bookHref;
  $('bookingMeta').textContent = S.bookingEmail
    ? `${S.bookingEmail} · ${t('bookingMeta')}`
    : t('bookingMeta');
  const labels = { instagram: 'Instagram', soundcloud: 'SoundCloud', tiktok: 'TikTok', spotify: 'Spotify' };
  $('socials').innerHTML = Object.entries(S.links)
    .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${labels[k] || k}</a>`).join('');

  $('year').textContent = new Date().getFullYear();

  // Reveal on scroll
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => revObs.observe(el));
})();
