/* =====================================================
   1) BUSINESS INFO
===================================================== */
// Google "Embed a map" link of the shop (live map on mobile + computer)
const EMBED_PB = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.482975295628!2d73.00071777543923!3d26.278438577030936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d72f1f6220b%3A0xc945c9f7878a4299!2sRAMSNEHI%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1792389050005!5m2!1sen!2sin';

const B = {
  name: 'Ramsnehi Enterprises',
  tel: '+918432644312', show: '084326 44312', wa: '918432644312',
  ig: 'https://www.instagram.com/ramsnehi_enterprise?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==',
  // Google Maps link of the shop (used for Get Directions)
  map: 'https://share.google/jITzPSecSybUU6dbn',
  // Backup live map for computer (used only if EMBED_PB is empty)
  embed: 'https://www.google.com/maps?q=Ramsnehi%20Enterprises%209th%20A%20Pal%20Road%20Sardarpura%20Jodhpur&z=16&output=embed'
};

/* =====================================================
   2) IMAGES – folder: images/
   Naam bina extension ke likhe hain. Code apne aap
   .jpg, .jpeg, .png aur .webp try karta hai.
===================================================== */
const EXTS = ['jpg', 'jpeg', 'png', 'webp'];
const LOGO_BASE = 'images/logo';

const MEDIA = {
  images: {
    hero: 'images/hero',
    about: 'images/about',
    'weighing-machines': 'images/weighing-machines',
    'packaging-machines': 'images/packaging-machines',
    'billing-machines': 'images/billing-machines',
    'counting-machines': 'images/counting-machines',
    'batch-coding': 'images/batch-coding',
    'band-sealer': 'images/band-sealer'
  }
};

/* =====================================================
   3) PRODUCTS DATA (6 products)
===================================================== */
const PRODUCTS = {
  'weighing-machines': { icon: '⚖️', cat: 'Weighing Solutions', title: 'Weighing Machines in Rajasthan', name: 'Weighing Machines', short: 'Digital, platform, table-top & precision scales',
    desc: 'Accurate digital weighing machines for shops, godowns, factories and jewellers – with installation, calibration and service support.',
    features: ['Digital table-top & price computing scales for shops', 'Heavy platform scales for godowns & factories', 'Precision / jewellery balances', 'Rechargeable battery & bright LED/LCD display', 'Calibration, repair & after-sales service'],
    types: [['🛒', 'Shop Scales', 'For grocery, vegetable, dairy and retail'], ['🏭', 'Platform Scales', 'High capacity for heavy goods'], ['💎', 'Precision Balance', 'For gold, lab and small weights']],
    faq: [['How do I choose the right capacity?', 'Pick a capacity slightly above the maximum weight you will weigh. We will help you choose the right model.'], ['Do you provide calibration service?', 'Yes, installation and calibration support is available. Call us for details.']] },
  'packaging-machines': { icon: '📦', cat: 'Packaging Solutions', title: 'Packaging Machine Supplier in Jodhpur', name: 'Packaging Machines', short: 'Pouch, vacuum, filling & sealing machines',
    desc: 'Make your product market-ready with packaging machines for small businesses and large-scale production.',
    features: ['Pouch & pillow packing machines', 'Vacuum packing machines', 'Filling & weighing-based packing options', 'Fast, uniform & leak-proof sealing', 'Machine demo and training support'],
    types: [['🛍️', 'Pouch Packing', 'For snacks, spices and grains'], ['🌀', 'Vacuum Packing', 'To increase shelf life'], ['🔥', 'Sealing Machines', 'Fast and strong seals']],
    faq: [['Which machine suits my product?', 'Tell us your product type and daily quantity and we will suggest the right machine.'], ['Can I get a demo?', 'Yes, send us an enquiry to arrange a demo.']] },
  'billing-machines': { icon: '🧾', cat: 'Retail & POS', title: 'Billing Machine Shop in Jodhpur', name: 'Billing Machines', short: 'POS systems, printers & barcode scanners',
    desc: 'Make your shop billing fast, smart and GST-ready with POS billing machines, thermal printers and barcode scanners – all in one place.',
    features: ['POS billing machines & software setup', 'Thermal receipt printers', 'Barcode scanners & label printers', 'Cash drawers & accessories', 'Installation and training support'],
    types: [['🖥️', 'POS Systems', 'Complete billing counter setup'], ['🖨️', 'Thermal Printers', 'Fast, silent receipt printing'], ['📟', 'Barcode Scanners', 'Quick scanning, zero mistakes']],
    faq: [['Can I do GST billing?', 'Yes, GST billing is possible with POS software. We will explain the details in the shop.'], ['Do you set up the system?', 'Please call us to confirm setup and training for your location.']] },
  'counting-machines': { icon: '💵', cat: 'Cash Handling', title: 'Cash Counting Machine Dealer in Jodhpur', name: 'Cash Counting Machines', short: 'Note counters with fake note detection',
    desc: 'Fast cash counting machines for banks, shops, petrol pumps and businesses – speed in counting and safety with fake note detection.',
    features: ['Fast note counting with LED display', 'Fake note detection (UV / MG)', 'Mix-value & loose note counters', 'Compact, durable & easy to use', 'Service support & warranty guidance'],
    types: [['⚡', 'Note Counter', 'Speedy, accurate counting'], ['🔍', 'Fake Note Detector', 'UV / MG detection modes'], ['📊', 'Value Counter', 'Total value of mixed notes']],
    faq: [['Does it detect fake notes?', 'Models with detection alert you to fake notes. Confirm the model when you enquire.'], ['Is warranty available?', 'Warranty depends on the model. Details are provided with the bill.']] },
  'batch-coding': { icon: '🏷️', cat: 'Product Coding', title: 'Batch Coding Machines', name: 'Batch Coding Machines', short: 'MRP, date & batch number printing',
    desc: 'Batch coding machines that print clear Batch No., MFG/EXP dates and MRP on packets, pouches, cartons and bottles.',
    features: ['Hand-operated & automatic coding options', 'MRP, MFG, EXP & batch number printing', 'Clear, long-lasting print', 'Works with pouches, cartons, bottles & films', 'Consumables and service available'],
    types: [['✋', 'Manual Coder', 'Low cost, easy to operate'], ['⚙️', 'Automatic Coder', 'High-speed production lines'], ['🧴', 'Consumables', 'Ink, foil and spare parts']],
    faq: [['On which surfaces can it print?', 'Plastic, paper, foil and cartons – depending on the model.'], ['Are ink and foil available?', 'Yes, send us an enquiry for consumables.']] },
  'band-sealer': { icon: '🔥', cat: 'Sealing Solutions', title: 'Band Sealer Machines', name: 'Band Sealer Machines', short: 'Continuous & vertical band sealers',
    desc: 'Continuous band sealer machines for strong and neat sealing of plastic pouches and packets, from small to large packing.',
    features: ['Continuous band sealing', 'Horizontal & vertical models', 'Adjustable temperature & speed', 'Date coding attachment options', 'Strong build, low maintenance'],
    types: [['➡️', 'Horizontal Sealer', 'For standard packets'], ['⬆️', 'Vertical Sealer', 'For heavy / liquid pouches'], ['📅', 'Sealer with Coder', 'Seal and date print together']],
    faq: [['Which materials can be sealed?', 'PP, PE, laminates and many other plastic pouches.'], ['What is the power consumption?', 'It depends on the model. Details are shared on enquiry.']] }
};

/* =====================================================
   4) HELPERS
===================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wa = t => `https://wa.me/${B.wa}?text=${encodeURIComponent(t)}`;
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const HRS = [[9, 20.5, '9:00 AM – 8:30 PM'], [8, 17, '8:00 AM – 5:00 PM'], [8, 20, '8:00 AM – 8:00 PM'], [9, 19, '9:00 AM – 7:00 PM'], [9, 20, '9:00 AM – 8:00 PM'], [9, 17, '9:00 AM – 5:00 PM'], [9, 20, '9:00 AM – 8:00 PM']];
const ist = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
const openNow = () => { const d = ist(), t = d.getHours() + d.getMinutes() / 60, h = HRS[d.getDay()]; return t >= h[0] && t < h[1]; };
const hoursHTML = () => { const today = ist().getDay(); return `<ul class="hours">${[1, 2, 3, 4, 5, 6, 0].map(i => `<li class="${i === today ? 'today' : ''}"><span>${DAYS[i]}</span><span>${HRS[i][2]}</span></li>`).join('')}</ul>`; };

/* Image loader: tries .jpg, .jpeg, .png, .webp one by one */
const cands = base => (/^https?:|\.[a-z0-9]{3,4}$/i.test(base)) ? [base] : EXTS.map(e => `${base}.${e}`);
function imgNext(img) {
  const list = cands(img.dataset.b), i = (+img.dataset.i || 0) + 1;
  if (i < list.length) { img.dataset.i = i; img.src = list[i]; }
  else if (img.hasAttribute('data-logo')) { const s = document.createElement('span'); s.className = 'lf'; s.textContent = 'RS'; img.replaceWith(s); }
  else img.remove();
}
function initImg(img, base) {
  img.dataset.b = base; img.dataset.i = 0;
  img.onerror = () => imgNext(img);
  img.src = cands(base)[0];
}
const imgTag = (k, alt) => MEDIA.images[k]
  ? `<img data-b="${MEDIA.images[k]}" data-i="0" src="${cands(MEDIA.images[k])[0]}" alt="${alt}" loading="lazy" decoding="async" onerror="imgNext(this)">`
  : '';

/* =====================================================
   5) BUILD CONTENT
===================================================== */
function setupLogo() {
  $$('img[data-logo]').forEach(img => initImg(img, LOGO_BASE));
}

function buildProducts() {
  // overview cards
  $('#product-grid').innerHTML = Object.entries(PRODUCTS).map(([k, p]) =>
    `<a class="b reveal" href="#${k}"><div class="ph" data-e="${p.icon}">${imgTag(k, p.title)}</div><div class="in"><h3>${p.icon} ${p.name}</h3><p>${p.short}</p><span>Explore →</span></div></a>`).join('');

  // detailed sections
  $('#product-sections').innerHTML = Object.entries(PRODUCTS).map(([k, p], i) => {
    const rev = i % 2 === 1;
    return `<section id="${k}" class="psec ${rev ? 'alt' : ''}"><div class="container">
      <div class="split ${rev ? 'rev' : ''}">
        <div class="reveal ${rev ? 'right' : 'left'}"><div class="ph pimg" data-e="${p.icon}">${imgTag(k, p.title)}</div></div>
        <div class="reveal ${rev ? 'left' : 'right'}">
          <span class="tag">${p.icon} ${p.cat}</span><h2>${p.title}</h2><p>${p.desc}</p>
          <ul class="checks">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
          <div class="row"><a class="btn" href="#contact" data-product="${p.name}">Get Quote →</a><a class="btn ghost" href="tel:${B.tel}">📞 Call Now</a></div>
        </div>
      </div>
      <div class="types stagger">${p.types.map(t => `<div class="t"><b>${t[0]}</b><div><h3>${t[1]}</h3><p>${t[2]}</p></div></div>`).join('')}</div>
      <div class="faq reveal">${p.faq.map(q => `<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')}</div>
    </div></section>`;
  }).join('');

  $('#fprod').innerHTML = Object.entries(PRODUCTS).map(([k, p]) => `<li><a href="#${k}">${p.icon} ${p.name}</a></li>`).join('');
  $('#pSelect').innerHTML = '<option value="">Select a product</option>' + Object.values(PRODUCTS).map(p => `<option>${p.name}</option>`).join('');
}

/* Map:
   - EMBED_PB bhara ho  -> live map har device par (mobile + computer)
   - EMBED_PB khali ho  -> computer par live map, mobile par tap-to-open card */
let mapMode = '';
function buildMap() {
  const box = $('#mapBox');
  const pb = EMBED_PB.trim();
  const mobile = window.matchMedia('(max-width:900px)').matches;
  const mode = pb ? 'pb' : (mobile ? 'card' : 'frame');
  if (mode === mapMode) return;
  mapMode = mode;
  if (mode === 'card') {
    box.innerHTML = `<a class="map mapcard" href="${B.map}" target="_blank" rel="noopener"><span class="pin">📍</span><b>Ramsnehi Enterprises</b><small>9th A Pal Road, Sardarpura,<br>Opposite Balaji Mandir, Jodhpur – 342003</small><em>🧭 Open in Google Maps</em></a>`;
  } else {
    const src = mode === 'pb' ? pb : B.embed;
    box.innerHTML = `<iframe class="map" src="${src}" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="Ramsnehi Enterprises location"></iframe>`;
  }
}

function fillDynamic() {
  // hero + about images
  $$('img[data-img]').forEach(el => {
    const base = MEDIA.images[el.dataset.img];
    if (base) initImg(el, base); else el.remove();
  });
  $$('[data-hours]').forEach(el => el.innerHTML = hoursHTML());
  $$('[data-open]').forEach(el => { const o = openNow(); el.className = 'open ' + (o ? 'on' : ''); el.innerHTML = `<i></i>${o ? 'Open Now' : 'Closed Now'} • Jodhpur`; });

  buildMap();
  window.addEventListener('resize', buildMap);

  $('#callCard').href = $('#ctaCall').href = $('#fCall').href = $('#fltCall').href = 'tel:' + B.tel;
  $('#fltWa').href = wa('Hello Ramsnehi Enterprises, I need some information about your machines.');
  $('#igCard').href = $('#fIg').href = B.ig;
  $('#dirBtn').href = $('#fMap').href = B.map;
  $('#yr').textContent = '© ' + new Date().getFullYear();

  // single WhatsApp enquiry (contact form)
  $('#enqForm').onsubmit = e => {
    e.preventDefault(); const d = new FormData(e.target);
    window.open(wa(`Hello Ramsnehi Enterprises,\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nProduct: ${d.get('product') || '-'}\nMessage: ${d.get('msg') || '-'}`), '_blank');
  };

  // "Get Quote" buttons preselect the product in the form
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-product]');
    if (b) $('#pSelect').value = b.dataset.product;
  });
}

/* =====================================================
   6) EFFECTS (lightweight)
===================================================== */
function initEffects() {
  // mobile menu
  const burger = $('#burger'), menu = $('#menu');
  burger.onclick = () => { menu.classList.toggle('open'); burger.textContent = menu.classList.contains('open') ? '✕' : '☰'; };
  menu.onclick = e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.textContent = '☰'; } };

  // if browser is very old and has no IntersectionObserver, just show everything
  if (!('IntersectionObserver' in window)) {
    $$('.stagger>*').forEach(c => c.classList.add('reveal'));
    $$('.reveal').forEach(el => el.classList.add('show'));
    $$('[data-count]').forEach(el => el.textContent = el.dataset.count + (el.dataset.suf || ''));
  } else {
    // scroll reveal
    $$('.stagger').forEach(g => [...g.children].forEach((c, i) => { c.classList.add('reveal'); c.style.transitionDelay = (i * 80) + 'ms'; }));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; el.classList.add('show'); io.unobserve(el);
      setTimeout(() => { el.classList.remove('reveal', 'left', 'right', 'zoom', 'show'); el.style.transitionDelay = ''; el.style.willChange = 'auto'; }, 1000 + (parseInt(el.style.transitionDelay) || 0));
    }), { threshold: .1, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(el => io.observe(el));

    // counters
    const cio = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; cio.unobserve(e.target);
      const el = e.target, end = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now(), dur = 1200;
      const tick = t => { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.floor(end * p) + suf; if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: .5 });
    $$('[data-count]').forEach(el => cio.observe(el));

    // active menu link (scroll-spy)
    const links = $$('#menu a');
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const id = PRODUCTS[e.target.id] ? 'products' : e.target.id;
      if (!links.some(a => a.hash === '#' + id)) return;
      links.forEach(a => a.classList.toggle('active', a.hash === '#' + id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(s => so.observe(s));
  }

  // header + progress bar (one rAF-throttled handler)
  const nav = $('#nav'), bar = $('#bar'); let ticking = false;
  const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 30);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // rotating hero text
  const rot = $('#rot'), w = ['Weighing Machines', 'Cash Counting Machines', 'Billing Machines', 'Packaging Machines', 'Batch Coding Machines', 'Band Sealers']; let i = 0;
  setInterval(() => { rot.style.opacity = 0; setTimeout(() => { i = (i + 1) % w.length; rot.textContent = w[i]; rot.style.opacity = 1; }, 400); }, 2600);
}

document.addEventListener('DOMContentLoaded', () => { setupLogo(); buildProducts(); fillDynamic(); initEffects(); });