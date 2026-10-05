const products=[{id:'rib',name:'Passenger RIB Boat',short:'RIB Boat',description:'High-speed adventure on the water with a professional skipper.',price:1000,unit:'per person',label:'People',step:1},{id:'bicycle',name:'Water Bicycle',short:'Water Bicycle',description:'Explore at your own pace on a fun, eco-friendly water bike.',price:300,unit:'per hour',label:'Hours',step:1},{id:'lounge',name:'Inflatable Water Lounge',short:'Inflatable Yacht',description:'Relax and unwind on a spacious floating lounge with family and friends.',price:2000,unit:'per 2 hours',label:'Hours',step:2},{id:'taxi',name:'Private Taxi Boat',short:'Taxi Boat',description:'Private transport on the water with a skipper.',price:5000,unit:'per hour',label:'Hours',step:1}];
const app=document.querySelector('#app');const booking=document.body.dataset.page==='booking'||/\/booking(?:\.html)?\/?$/.test(location.pathname);const isInsurance=document.body.dataset.page==='insurance'||document.body.dataset.page==='locations'||/\/(?:insurance|locations)(?:\.html)?\/?$/.test(location.pathname);const money=v=>'NOK '+v.toLocaleString('en-US');const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelector('#year').textContent=new Date().getFullYear();document.querySelector('#menu').onclick=e=>{const navEl=document.querySelector('.nav-links')||document.querySelector('nav');const open=navEl.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)};
if(isInsurance){
  document.title = 'Our Insurance Products — Comprehensive Coverage for What Matters Most';
  document.body.className = 'insurance-page';

  app.innerHTML = `
  <div class="insurance-page-content">
    <!-- SECTION 1: OUR INSURANCE PRODUCTS -->
    <section class="insurance-products-section" aria-label="Our Insurance Products">
      <div class="insurance-products-header">
        <span class="ins-eyebrow">OUR INSURANCE PRODUCTS</span>
        <h1 class="ins-main-heading">Comprehensive Coverage for What Matters Most</h1>
        <div class="ins-heading-bar" aria-hidden="true"></div>
        <p class="ins-sub-desc">Personalized policies crafted to safeguard your vehicles, enterprises, and property with complete confidence and rapid claims support.</p>
      </div>

      <div class="insurance-products-grid">
        <!-- Motor Insurance Card -->
        <article class="ins-product-card">
          <div class="ins-card-top">
            <div class="ins-icon-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 10.8 2 11v5c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
            <div class="ins-card-titles">
              <h3>Motor Insurance</h3>
              <span class="ins-card-meta">Comprehensive &amp; Third-Party</span>
            </div>
          </div>
          <div class="ins-card-image-wrap">
            <img src="assets/rib.webp" alt="Motor Insurance Protection" loading="lazy">
            <span class="ins-badge-pill">Road &amp; Marine</span>
          </div>
          <div class="ins-card-content">
            <p>Comprehensive and third-party coverage to protect you and your vehicle on the road and across the water.</p>
            <a href="#quote-section" class="ins-card-link" data-product="Motor Insurance">Learn More <span aria-hidden="true">&rarr;</span></a>
          </div>
        </article>

        <!-- Business Insurance Card -->
        <article class="ins-product-card">
          <div class="ins-card-top">
            <div class="ins-icon-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                <path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
              </svg>
            </div>
            <div class="ins-card-titles">
              <h3>Business Insurance</h3>
              <span class="ins-card-meta">Enterprise &amp; Operations</span>
            </div>
          </div>
          <div class="ins-card-image-wrap">
            <img src="assets/yacht.webp" alt="Business Insurance Protection" loading="lazy">
            <span class="ins-badge-pill">Operations</span>
          </div>
          <div class="ins-card-content">
            <p>Protect your business, employees, equipment, and operations from unexpected maritime delays and liability events.</p>
            <a href="#quote-section" class="ins-card-link" data-product="Business Insurance">Learn More <span aria-hidden="true">&rarr;</span></a>
          </div>
        </article>

        <!-- Property Insurance Card -->
        <article class="ins-product-card">
          <div class="ins-card-top">
            <div class="ins-icon-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div class="ins-card-titles">
              <h3>Property Insurance</h3>
              <span class="ins-card-meta">Residential &amp; Commercial</span>
            </div>
          </div>
          <div class="ins-card-image-wrap">
            <img src="assets/adventure-banner.webp" alt="Property Insurance Protection" loading="lazy">
            <span class="ins-badge-pill">Asset Protection</span>
          </div>
          <div class="ins-card-content">
            <p>Coverage for your home, commercial property, specialized equipment, and valuable waterfront assets against damage or loss.</p>
            <a href="#quote-section" class="ins-card-link" data-product="Property Insurance">Learn More <span aria-hidden="true">&rarr;</span></a>
          </div>
        </article>
      </div>
    </section>

    <!-- SECTION 2: WHY CHOOSE CRICHTON INSURANCE AGENCY? -->
    <section class="insurance-why-section" aria-label="Why Choose Crichton Insurance Agency">
      <div class="why-section-header">
        <span class="why-badge">WHY CHOOSE CRICHTON INSURANCE AGENCY?</span>
        <h2>Dedicated Protection &amp; Proven Service Quality</h2>
      </div>

      <div class="why-features-grid">
        <div class="why-card">
          <div class="why-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3>7 Branches Islandwide</h3>
          <p>Convenient locations across the island to serve you better with personal in-person and on-site support.</p>
        </div>

        <div class="why-card">
          <div class="why-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3>Fast, Reliable Service</h3>
          <p>Quick quotations, automated verification, and efficient claims support when you need it most.</p>
        </div>

        <div class="why-card">
          <div class="why-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3>Experienced Advisors</h3>
          <p>Our licensed team takes the time to understand your needs and help you choose the right coverage.</p>
        </div>

        <div class="why-card">
          <div class="why-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
            </svg>
          </div>
          <h3>Digital Convenience</h3>
          <p>Manage your policies, access instant certificates, and stay organized through our seamless AutoAssist platform.</p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: STAY ROAD READY WITH AUTOASSIST & GET A FREE QUOTE -->
    <section class="insurance-quote-section" id="quote-section" aria-label="Get a Free Quote">
      <div class="quote-banner-container">
        <!-- Left Banner Side -->
        <div class="quote-banner-left">
          <span class="quote-banner-pill">AUTOASSIST PLATFORM</span>
          <h2>Stay Road Ready with <span class="autoassist-brand">AutoAssist</span></h2>
          <p class="quote-banner-tagline">The smart way to manage your vehicle and personal protection with real-time digital assistance.</p>

          <div class="autoassist-perks">
            <div class="perk-row">
              <span class="perk-icon" aria-hidden="true">&#10003;</span>
              <span>24/7 Islandwide Emergency Towing &amp; Roadside Recovery</span>
            </div>
            <div class="perk-row">
              <span class="perk-icon" aria-hidden="true">&#10003;</span>
              <span>Instant Digital Claims Submission with Real-time Status</span>
            </div>
            <div class="perk-row">
              <span class="perk-icon" aria-hidden="true">&#10003;</span>
              <span>Transparent Coverage &amp; Direct Experienced Advisors</span>
            </div>
          </div>
        </div>

        <!-- Right Form Card -->
        <div class="quote-banner-right">
          <div class="quote-card-header">
            <h3>Get a Free Quote</h3>
            <p>Fill out the form below for an instant personalized quotation.</p>
          </div>
          <form class="ins-quote-form" id="insurance-quote-form">
            <div class="ins-input-group">
              <label for="quote-fullname">Full Name</label>
              <input type="text" id="quote-fullname" placeholder="Enter your full name" required>
            </div>
            <div class="ins-input-group">
              <label for="quote-email">Email Address</label>
              <input type="email" id="quote-email" placeholder="name@example.com" required>
            </div>
            <div class="ins-input-group">
              <label for="quote-type">Insurance Product</label>
              <select id="quote-type">
                <option value="motor">Motor Insurance</option>
                <option value="business">Business Insurance</option>
                <option value="property">Property Insurance</option>
                <option value="autoassist">AutoAssist Package</option>
              </select>
            </div>
            <button type="submit" class="glow-button ins-submit-quote-btn">GET A FREE QUOTE</button>
            <div class="ins-quote-alert" id="ins-quote-alert" style="display:none;" role="status">
              &#10003; Thank you! Your quotation request has been sent. An advisor will contact you within 15 minutes.
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>`;

  // Interactive Quote Form Handling
  const quoteForm = document.getElementById('insurance-quote-form');
  const quoteAlert = document.getElementById('ins-quote-alert');
  if(quoteForm){
    quoteForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      if(submitBtn) submitBtn.disabled = true;
      if(quoteAlert){
        quoteAlert.style.display = 'block';
      }
      setTimeout(()=>{
        quoteForm.reset();
        if(submitBtn) submitBtn.disabled = false;
      }, 4000);
    });
  }

  // Pre-fill select on Learn More click
  document.querySelectorAll('.ins-card-link').forEach(link=>{
    link.addEventListener('click', (e)=>{
      const prod = link.dataset.product;
      const select = document.getElementById('quote-type');
      if(select && prod){
        if(prod.includes('Motor')) select.value = 'motor';
        else if(prod.includes('Business')) select.value = 'business';
        else if(prod.includes('Property')) select.value = 'property';
      }
    });
  });
}else if(!booking){
const destinations=[
  {id:'lysefjorden',name:'Lysefjorden',img:'assets/lysefjorden.webp',tags:'Waterfalls · Pulpit Rock · Stunning fjord scenery'},
  {id:'idse',name:'Idse',img:'assets/idse.webp',tags:'Beaches · Islands · Calm waters'},
  {id:'hidlefjorden',name:'Hidlefjorden',img:'assets/hardangerfjord.webp',tags:'Islands · Swimming · Great for groups'},
  {id:'hundvag',name:'Hundvåg',img:'assets/mostraumen.webp',tags:'Beaches · Snorkeling · Family friendly'},
  {id:'ryfylke',name:'Ryfylke',img:'assets/ryfylke.webp',tags:'Fjord adventure · Nature & wildlife'},
  {id:'preikestolen',name:'Preikestolen',img:'assets/preikestolen.webp',tags:'Panoramic cliffs · Hiking & views'},
  {id:'florli',name:'Flørli',img:'assets/florli.webp',tags:'Historic 4444 stairs · Pure nature'}
];
app.innerHTML=`
<section class="hero" id="hero-section">
  <div class="hero-content">
    <h1>Rent Premium Water<br>Experiences in Norway</h1>
    <p>FjordFlyt offers high-quality water bicycles, RIB boats,<br class="desktop-break"> inflatable lounges, and yachts for rent.<br>Perfect for tours, activities, and unforgettable moments.</p>
    <a class="glow-button" href="booking.html">BOOK IT NOW</a>
  </div>

  <div class="hero-interactive-stage" aria-hidden="true">
    <div class="smoky-cursor-glow" id="smoky-cursor-glow"></div>
    <div class="smoky-ambient-cloud cloud-bl"></div>

    <div class="hero-floating-card" id="hero-floating-card">
      <div class="floating-card-glass">
        <div class="floating-card-header">
          <h4>Lysefjorden RIB Safari &amp; Fjord Tours</h4>
          <div class="floating-card-meta-row">
            <div class="floating-card-tags">
              <span class="f-tag tag-medium">Fast RIB</span>
              <span class="f-tag tag-mgmt">Pulpit Rock</span>
            </div>
            <div class="floating-card-progress">
              <svg class="prog-circle" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3"></circle>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="72, 100" stroke-linecap="round" transform="rotate(-90 18 18)"></circle>
              </svg>
              <span>85%</span>
            </div>
          </div>
        </div>
        <div class="floating-card-footer-meta">
          <div class="f-avatars">
            <span class="f-avatar av-1"></span>
            <span class="f-avatar av-2"></span>
          </div>
          <div class="f-counts">
            <span>⚓ Stavanger Base</span>
            <span>⭐ 4.9 (120+ tours)</span>
          </div>
        </div>
        <div class="floating-card-tasks">
          <div class="f-task checked">
            <span class="f-checkbox">✓</span>
            <span class="f-task-title">Thermal Suits &amp; Lifejackets Included</span>
          </div>
          <div class="f-task checked">
            <span class="f-checkbox">✓</span>
            <span class="f-task-title">Certified Local Marine Captain</span>
          </div>
          <div class="f-task checked">
            <span class="f-checkbox">✓</span>
            <span class="f-task-title">Waterfalls &amp; Wildlife Sightseeing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="gallery-section">
  <div class="gallery-frame">
    <div class="gallery" aria-label="Water experience gallery">
      ${['lounge','rib','yacht','bicycle','taxi'].map((id,i)=>`<button class="gallery-card" data-slide="${i}" aria-label="View ${id} experience"><img src="assets/${id}.webp" alt="${id==='yacht'?'Inflatable water yachts':products.find(p=>p.id===id).name}"></button>`).join('')}
    </div>
    <div class="gallery-controls">
      <button class="prev" aria-label="Previous image">‹</button>
      ${Array.from({length:5},(_,i)=>`<button class="dot" data-slide="${i}" aria-label="Show image ${i+1}"></button>`).join('')}
      <span id="slide-count" aria-live="off">3 / 5</span>
      <button class="next" aria-label="Next image">›</button>
    </div>
  </div>
  <div class="gallery-caption">Everything you need for unforgettable journeys in Norway.</div>
  <p class="experience-tags">Fjord Cruises <span>•</span> Private Charters <span>•</span> Guided Tours <span>•</span> Nature Experiences <span>•</span> Luxury Travel</p>
</section>

<section class="hero-search-wrap">
  <div class="hero-search-bar">
    <div class="search-field">
      <span class="search-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
      <div class="search-text">
        <span class="search-label">Select location</span>
        <select class="search-input" id="hero-location">
          <option value="Stavanger">Stavanger</option>
          <option value="Lysefjorden">Lysefjorden</option>
          <option value="Idse">Idse</option>
          <option value="Hundvåg">Hundvåg</option>
          <option value="Ryfylke">Ryfylke</option>
        </select>
      </div>
    </div>
    <div class="search-field">
      <span class="search-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg></span>
      <div class="search-text">
        <span class="search-label">Select date</span>
        <input type="date" class="search-input" id="hero-date">
      </div>
    </div>
    <div class="search-field">
      <span class="search-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/></svg></span>
      <div class="search-text">
        <span class="search-label">Select activity</span>
        <select class="search-input" id="hero-activity">
          <option value="rib">Inflatable Boat</option>
          <option value="lounge">Inflatable Lounge</option>
          <option value="yacht">Inflatable Yacht</option>
          <option value="bicycle">Water Bicycle</option>
        </select>
      </div>
    </div>
    <button class="glow-button search-btn" id="hero-search-btn">Check Availability →</button>
  </div>
</section>

<div class="light-sections-wrapper">
  <div class="glass-ambient-layer" aria-hidden="true">
    <div class="ambient-orb ambient-orb-1"></div>
    <div class="ambient-orb ambient-orb-2"></div>
    <div class="ambient-orb ambient-orb-3"></div>
  </div>

<section class="trust-bar" aria-label="Key benefits">
  <div class="trust-bar-inner">
    <div class="trust-item">
      <div class="trust-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
      <div><strong>Flexible booking</strong><p>Free change or cancel up to 24 hours</p></div>
    </div>
    <div class="trust-item">
      <div class="trust-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6z"/></svg></div>
      <div><strong>Weather guarantee</strong><p>Reschedule if unsafe weather</p></div>
    </div>
    <div class="trust-item">
      <div class="trust-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
      <div><strong>Secure payment</strong><p>Pay online with trusted partner</p></div>
    </div>
    <div class="trust-item">
      <div class="trust-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg></div>
      <div><strong>Local support</strong><p>We are here to help you</p></div>
    </div>
    <div class="trust-item">
      <div class="trust-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
      <div><strong>Family friendly</strong><p>Perfect for groups, families and friends</p></div>
    </div>
  </div>
</section>

<section class="dest-section" id="locations">
  <div class="dest-heading">
    <div class="dest-heading-left">
      <div class="eyebrow">EXPLORE OUR TOP DESTINATIONS</div>
      <h2>Choose Your Location</h2>
      <p>We have multiple locations around Stavanger and nearby fjords.<br>Each location offers unique views, islands and activities.</p>
    </div>
    <div class="dest-heading-right">
      <a class="dest-view-all" href="booking.html">View all locations →</a>
    </div>
  </div>
  <div class="dest-carousel-wrap">
    <button class="dest-slider-btn dest-slider-prev" id="dest-slider-prev" aria-label="Previous locations">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <div class="dest-carousel" id="dest-carousel">
      ${destinations.map((d,i)=>`
      <a class="dest-card" href="booking.html?location=${d.id}">
        <div class="dest-card-media">
          <img src="${d.img}" alt="${d.name}" loading="lazy">
        </div>
        <div class="dest-card-footer">
          <div>
            <div class="dest-card-name">${d.name}</div>
            <div class="dest-card-tags">${d.tags}</div>
          </div>
          <span class="dest-card-arrow" aria-label="View ${d.name}">›</span>
        </div>
      </a>`).join('')}
    </div>
    <button class="dest-slider-btn dest-slider-next" id="dest-slider-next" aria-label="Next locations">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  </div>
</section>

<section class="map-section" id="map-section">
  <div class="map-content">
    <div class="map-sidebar">
      <div class="eyebrow">OUR LOCATIONS</div>
      <h2>Explore on Map</h2>
      <p>Click on a location to see photos, information and available activities.</p>
      <div class="map-legend">
        <div class="map-legend-item"><span class="legend-dot legend-our"></span>Our locations</div>
        <div class="map-legend-item"><span class="legend-dot legend-popular"></span>Popular spots</div>
        <div class="map-legend-item"><span class="legend-line"></span>Boat routes</div>
        <div class="map-legend-item"><span class="legend-rect"></span>Recommended areas</div>
      </div>
    </div>
    <div class="map-visual" id="map-visual">
      <a href="https://maps.google.com/?q=Stavanger,Norway" target="_blank" rel="noopener" class="map-open-btn">
        <span>Open in Maps</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
      </a>
      <div class="map-iframe-wrap">
        <iframe id="fjord-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d5.9!3d59.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1700000000000!5m2!1sen!2sno" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy" title="Fjord locations map" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="map-pin" style="left:36%;top:58%" data-name="Stavanger"><img src="assets/fosnavag.webp" alt="Stavanger"><span>Stavanger</span></div>
      <div class="map-pin" style="left:48%;top:19%" data-name="Lysefjorden"><img src="assets/lysefjorden.webp" alt="Lysefjorden"><span>Lysefjorden</span></div>
      <div class="map-pin" style="left:61%;top:30%" data-name="Idse"><img src="assets/idse.webp" alt="Idse"><span>Idse</span></div>
      <div class="map-pin" style="left:53%;top:48%" data-name="Hidlefjorden"><img src="assets/hardangerfjord.webp" alt="Hidlefjorden"><span>Hidlefjorden</span></div>
      <div class="map-pin" style="left:73%;top:42%" data-name="Ryfylke"><img src="assets/voss.webp" alt="Ryfylke"><span>Ryfylke</span></div>
      <div class="map-pin" style="left:42%;top:38%" data-name="Hundvåg"><img src="assets/mostraumen.webp" alt="Hundvåg"><span>Hundvåg</span></div>
    </div>
  </div>
</section>

<div class="featured-outer">
<section class="featured-section">
  <div class="featured-media">
    <div class="featured-main-img">
      <img src="assets/lysefjorden.webp" alt="Lysefjorden" id="featured-main-img">
      <button class="feat-arrow feat-prev" aria-label="Previous photo">&#8249;</button>
      <button class="feat-arrow feat-next" aria-label="Next photo">&#8250;</button>
    </div>
    <div class="featured-thumbs" id="featured-thumbs">
      <img src="assets/lysefjorden.webp" alt="Lysefjorden" class="feat-thumb active" data-index="0">
      <img src="assets/preikestolen.webp" alt="Preikestolen" class="feat-thumb" data-index="1">
      <img src="assets/fjord.webp" alt="Fjord" class="feat-thumb" data-index="2">
    </div>
  </div>
  <div class="featured-info">
    <div class="featured-top">
      <h2 class="featured-title">Lysefjorden</h2>
      <span class="featured-badge">Most popular</span>
    </div>
    <div class="featured-location">📍 Stavanger, Norway</div>
    <p class="featured-desc">Experience the famous Pulpit Rock, stunning waterfalls and dramatic fjord scenery. Perfect for groups, families and special occasions.</p>
    <div class="featured-meta">
      <div class="feat-meta-item"><span class="feat-meta-icon">🕐</span><strong>2 hours</strong><small>Duration</small></div>
      <div class="feat-meta-item"><span class="feat-meta-icon">👥</span><strong>Up to 12</strong><small>People</small></div>
      <div class="feat-meta-item"><span class="feat-meta-icon">⛵</span><strong>Inflatable boat</strong><small>Activity</small></div>
      <div class="feat-meta-item"><span class="feat-meta-icon">⭐</span><strong>Amazing views</strong><small>Highlights</small></div>
    </div>
    <div class="featured-actions">
      <a class="glow-button featured-book-btn" href="booking.html?location=lysefjorden">Book This Location →</a>
      <a class="featured-photos-btn" href="booking.html?location=lysefjorden">📷 See More Photos</a>
    </div>
  </div>
</section>
</div>

</div>
`;
let slide=0;const cards=[...document.querySelectorAll('.gallery-card')],dots=[...document.querySelectorAll('.dot')];function showSlide(i){slide=(i+cards.length)%cards.length;cards.forEach((c,j)=>{let offset=(j-slide+cards.length)%cards.length;if(offset>2)offset-=cards.length;c.style.transform=`translateX(calc(-50% + ${offset*57}%)) translateZ(${-Math.abs(offset)*180}px) rotateY(${-offset*12}deg)`;c.style.opacity=Math.abs(offset)>1?'.35':'1';c.style.zIndex=5-Math.abs(offset);c.setAttribute('tabindex',offset===0?'0':'-1')});dots.forEach((d,j)=>{d.classList.toggle('active',j===slide);d.setAttribute('aria-pressed',j===slide)});document.querySelector('#slide-count').textContent=`${slide+1} / ${cards.length}`}showSlide(2);document.querySelectorAll('[data-slide]').forEach(b=>b.onclick=()=>showSlide(+b.dataset.slide));document.querySelector('.prev').onclick=()=>showSlide(slide-1);document.querySelector('.next').onclick=()=>showSlide(slide+1);let paused=false;document.querySelector('.gallery-frame').onmouseenter=()=>paused=true;document.querySelector('.gallery-frame').onmouseleave=()=>paused=false;document.querySelector('.gallery-frame').onfocusin=()=>paused=true;document.querySelector('.gallery-frame').onfocusout=()=>paused=false;if(!reduced)setInterval(()=>{if(!paused&&!document.hidden&&!document.documentElement.classList.contains('motion-paused'))showSlide(slide+1)},4500);
// Destination carousel scroll
const destCarousel=document.querySelector('#dest-carousel');
const destPrev=document.querySelector('#dest-slider-prev')||document.querySelector('.dest-prev');
const destNext=document.querySelector('#dest-slider-next')||document.querySelector('.dest-next');
if(destCarousel){
  if(destPrev) destPrev.onclick=()=>destCarousel.scrollBy({left:-290,behavior:'smooth'});
  if(destNext) destNext.onclick=()=>destCarousel.scrollBy({left:290,behavior:'smooth'});
}
// Smoky light cursor hover effect on hero section
const heroSec=document.querySelector('#hero-section');
if(heroSec){
  const card=document.querySelector('#hero-floating-card');
  heroSec.addEventListener('pointermove',e=>{
    const rect=heroSec.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;
    heroSec.style.setProperty('--smoke-x',`${x}px`);
    heroSec.style.setProperty('--smoke-y',`${y}px`);
    heroSec.style.setProperty('--smoke-opacity','1');
  },{passive:true});
  heroSec.addEventListener('pointerleave',()=>{
    heroSec.style.setProperty('--smoke-opacity','0.35');
  },{passive:true});
  if(card){
    card.addEventListener('pointerenter',()=>{
      heroSec.style.setProperty('--card-glow','1');
    });
    card.addEventListener('pointerleave',()=>{
      heroSec.style.setProperty('--card-glow','0');
    });
  }
}
// Featured location photo switcher
const featImgs=['assets/lysefjorden.webp','assets/preikestolen.webp','assets/fjord.webp'];
let featIdx=0;
function setFeatPhoto(i){
  featIdx=(i+featImgs.length)%featImgs.length;
  const main=document.querySelector('#featured-main-img');
  if(main){main.style.opacity='0';setTimeout(()=>{main.src=featImgs[featIdx];main.style.opacity='1'},200);}
  document.querySelectorAll('.feat-thumb').forEach((t,j)=>t.classList.toggle('active',j===featIdx));
}
document.querySelectorAll('.feat-thumb').forEach(t=>t.onclick=()=>setFeatPhoto(+t.dataset.index));
const featPrev=document.querySelector('.feat-prev');const featNext=document.querySelector('.feat-next');
if(featPrev)featPrev.onclick=()=>setFeatPhoto(featIdx-1);
if(featNext)featNext.onclick=()=>setFeatPhoto(featIdx+1);
const searchBtn=document.querySelector('#hero-search-btn');
if(searchBtn){
  searchBtn.onclick=()=>{
    const loc=document.querySelector('#hero-location')?.value||'Stavanger';
    const act=document.querySelector('#hero-activity')?.value||'rib';
    const dt=document.querySelector('#hero-date')?.value||'';
    location.href=`booking.html?location=${encodeURIComponent(loc)}&experience=${encodeURIComponent(act)}${dt?'&date='+encodeURIComponent(dt):''}`;
  };
}
document.querySelectorAll('.map-pin').forEach(pin=>{
  pin.onclick=()=>{
    const name=pin.dataset.name;
    const title=document.querySelector('.featured-title');
    if(title&&name){
      title.textContent=name;
      const main=document.querySelector('#featured-main-img');
      const pimg=pin.querySelector('img');
      if(main&&pimg){
        main.style.opacity='0';
        setTimeout(()=>{main.src=pimg.src;main.style.opacity='1';},180);
      }
    }
    const feat=document.querySelector('.featured-outer');
    if(feat)feat.scrollIntoView({behavior:'smooth',block:'center'});
  };
});
}else{
document.title='Book Your Water Experience — Fjordflyt';document.body.className='booking-page';let selected=new Set([new URLSearchParams(location.search).get('experience')||'rib']);selected=new Set([...selected].filter(id=>products.some(p=>p.id===id)));const quantities={rib:2,bicycle:1,lounge:2,taxi:1};let stage=1;let details={name:'',email:'',phone:''};const params=new URLSearchParams(location.search);let date=params.get('date')||'',time='10:00',departure=params.get('location')==='Bergen'?'Bergen':'Stavanger';const now=new Date();const today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;if(date<today)date='';const subtotal=p=>p.price*quantities[p.id]/p.step;const total=()=>products.filter(p=>selected.has(p.id)).reduce((v,p)=>v+subtotal(p),0);const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){app.innerHTML=`<section class="booking-hero"><a href="./" class="back">Back to home</a><h1>${stage===1?'Choose Your Water Experience':stage===2?'Make it<br><span>your adventure.</span>':'Your adventure,<br><span>at a glance.</span>'}</h1><p>Select the experience you want to rent, choose your date and time,<br>and we’ll take care of the rest.</p><div class="steps">${['Choose experience','Date & time','Your details','Payment'].map((s,i)=>`<span class="${(stage===1?0:stage===2?2:3)===i?'current':''}"><b>${i+1}</b>${s}</span>`).join('')}</div></section><div class="booking-layout"><section class="panel" id="booking-content">${stage===1?`<h2>1. Choose your experience</h2><div class="booking-products">${products.map(p=>`<article class="book-card ${selected.has(p.id)?'selected':''}"><button class="select-product" data-product="${p.id}" aria-pressed="${selected.has(p.id)}" aria-label="Select ${p.name}"><img src="assets/${p.id}.webp" alt="${p.name}"><span class="check">${selected.has(p.id)?'✓':''}</span><div class="card-copy"><h3>${p.short}</h3><p>${p.description}</p><span class="price">${money(p.price)} <small>/ ${p.unit.replace('per ','')}</small></span></div></button><div style="padding:0 18px 18px"><small>${p.label}</small><div class="counter"><button data-change="-${p.step}" data-id="${p.id}" aria-label="Decrease ${p.short} ${p.label.toLowerCase()}">−</button><output>${quantities[p.id]} ${p.label.toLowerCase()}</output><button data-change="${p.step}" data-id="${p.id}" aria-label="Increase ${p.short} ${p.label.toLowerCase()}">+</button></div></div></article>`).join('')}</div>`:stage===2?`<h2>3. Your details</h2><form id="details-form"><div class="details-grid"><label class="field wide">Full name<input name="name" autocomplete="name" required value="${escape(details.name)}"></label><label class="field">Email address<input name="email" type="email" autocomplete="email" required value="${escape(details.email)}"></label><label class="field">Phone (optional)<input name="phone" type="tel" autocomplete="tel" value="${escape(details.phone)}"></label></div><p class="hint">Your details stay in this page during the preview. No reservation has been made.</p><div class="details-action"><button class="glow-button" type="submit">Review your experience</button><button class="text-button" type="button" id="back">Back</button></div></form>`:`<h2>4. Review & payment</h2><div class="review-block"><div class="eyebrow">Date & time</div><p>${escape(departure)} · ${escape(date)} at ${escape(time)}</p></div><div class="review-block"><div class="eyebrow">Your details</div><p>${escape(details.name)}<br>${escape(details.email)}${details.phone?'<br>'+escape(details.phone):''}</p></div><div class="review-block">${products.filter(p=>selected.has(p.id)).map(p=>`<p>${p.short} · ${quantities[p.id]} ${p.label.toLowerCase()} · ${money(subtotal(p))}</p>`).join('')}</div><p class="notice">Your experience is ready to review. Online reservations and payments are not available yet. This preview does not confirm availability, reserve a boat, or charge you.</p><div class="details-action"><button class="small-button" id="download">Download your plan</button><button class="text-button" id="back">Edit details</button></div>`}</section><aside class="panel summary"><h2>${stage===1?'2. Date & time':'Your experience'}</h2>${stage===1?`<label class="field">Departure location<select id="departure"><option ${departure==='Stavanger'?'selected':''}>Stavanger</option><option ${departure==='Bergen'?'selected':''}>Bergen</option></select></label><label class="field">Date<input id="date" type="date" min="${today}" value="${date}" required></label><label class="field">Departure time<select id="time">${['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'].map(t=>`<option ${time===t?'selected':''}>${t}</option>`).join('')}</select></label>`:''}${stage===1?`<div class="summary-people"><h2>3. Number of people</h2><span>Total people</span><div class="counter"><button data-change="-1" data-id="rib" aria-label="Decrease RIB passengers">−</button><output>${quantities.rib}</output><button data-change="1" data-id="rib" aria-label="Increase RIB passengers">+</button></div><p class="hint">For RIB Boat pricing · Up to 10 people</p></div>`:''}<div class="summary-lines"><h2>Order Summary</h2>${selected.size?products.filter(p=>selected.has(p.id)).map(p=>`<div class="summary-item"><img src="assets/${p.id}.webp" alt=""><div>${p.short}<small>${quantities[p.id]} ${p.label.toLowerCase()}</small></div><strong>${money(subtotal(p))}</strong></div>`).join(''):'<p>Select an experience to begin.</p>'}</div><div class="total"><span>Total</span><strong>${money(total())}</strong></div>${stage===1?'<button class="glow-button" id="continue">Continue to details</button><p id="error" class="error" role="alert"></p>':''}<p class="hint">Prices are based on the supplied experience guide. Availability and final booking terms require confirmation.</p></aside></div>`;
document.querySelectorAll('[data-product]').forEach(b=>b.onclick=()=>{const id=b.dataset.product;selected.has(id)?selected.delete(id):selected.add(id);const y=scrollY;render();scrollTo(0,y)});document.querySelectorAll('[data-change]').forEach(b=>b.onclick=()=>{const id=b.dataset.id;const p=products.find(x=>x.id===id);quantities[id]=Math.min(p.id==='rib'?10:24,Math.max(p.step,quantities[id]+Number(b.dataset.change)));const y=scrollY;render();scrollTo(0,y)});if(stage===1){document.querySelector('#departure').onchange=e=>departure=e.target.value;document.querySelector('#date').onchange=e=>date=e.target.value;document.querySelector('#time').onchange=e=>time=e.target.value;document.querySelector('#continue').onclick=()=>{if(!selected.size){document.querySelector('#error').textContent='Please select at least one experience.';return}const field=document.querySelector('#date');if(!field.reportValidity())return;date=field.value;time=document.querySelector('#time').value;departure=document.querySelector('#departure').value;stage=2;render();scrollTo({top:0,behavior:'smooth'})}}if(stage===2){document.querySelector('#details-form').onsubmit=e=>{e.preventDefault();const data=new FormData(e.currentTarget);details=Object.fromEntries(data);stage=3;render();scrollTo({top:0,behavior:'smooth'})}}if(stage>1)document.querySelector('#back').onclick=()=>{if(stage===2){details=Object.fromEntries(new FormData(document.querySelector('#details-form')))}stage--;render()};if(stage===3)document.querySelector('#download').onclick=()=>{const text=`FJORDFLYT — YOUR WATER EXPERIENCE PLAN\n\nDeparture: ${departure}\nDate: ${date} at ${time}\nName: ${details.name}\nEmail: ${details.email}\n\n${products.filter(p=>selected.has(p.id)).map(p=>`${p.short}: ${quantities[p.id]} ${p.label.toLowerCase()} — ${money(subtotal(p))}`).join('\n')}\n\nTotal: ${money(total())}\n\nThis is a plan only. No reservation or payment has been made.`;const u=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const a=document.createElement('a');a.href=u;a.download='fjordflyt-experience-plan.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};
}render();}
// Theme Toggle with Moon and Sun icons
const themeBtn=document.querySelector('#theme-toggle');
const sunIcon=`<svg class="theme-icon sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const moonIcon=`<svg class="theme-icon moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
function setTheme(theme){
  if(theme==='dark'){
    document.documentElement.classList.add('theme-dark');
    document.documentElement.classList.remove('theme-light');
    if(themeBtn){themeBtn.innerHTML=sunIcon;themeBtn.setAttribute('aria-label','Switch to light mode');themeBtn.title='Switch to light mode';}
  }else{
    document.documentElement.classList.remove('theme-dark');
    document.documentElement.classList.add('theme-light');
    if(themeBtn){themeBtn.innerHTML=moonIcon;themeBtn.setAttribute('aria-label','Switch to dark mode');themeBtn.title='Switch to dark mode';}
  }
}
const savedTheme=localStorage.getItem('fjordflyt-theme')||'light';
setTheme(savedTheme);
if(themeBtn){
  themeBtn.onclick=()=>{
    const isDark=document.documentElement.classList.contains('theme-dark');
    const next=isDark?'light':'dark';
    localStorage.setItem('fjordflyt-theme',next);
    setTheme(next);
  };
}
// Original Huly footer composition and eight-second clock loop wrapped in full-width dark container.
const footerCTAWrap=document.createElement('div');footerCTAWrap.className='footer-cta-wrapper';const footerCTA=document.createElement('section');footerCTA.className='footer-cta';footerCTA.setAttribute('aria-label','Plan your next adventure');footerCTA.innerHTML=`<div class="footer-clock-stage" aria-hidden="true"><div class="clock-beam beam-warm"></div><div class="clock-beam beam-cool"></div><img id="footer-clock" src="assets/footer-clock-moving.webp" width="480" height="480" alt="" decoding="async"></div><div class="footer-cta-copy"><div class="eyebrow">Fjordflyt · Norway</div><h2>Your next<br>great moment.</h2><p>Explore Norway from the water.<br>Make time for something unforgettable.</p><div class="footer-actions"><a class="glow-button" href="${booking?'#booking-content':'booking.html'}">${booking?'Choose your experience':'Book your experience'}</a><a class="small-button" href="${booking?'./':'booking.html'}">${booking?'Back to home':'View booking page'}</a></div></div>`;footerCTAWrap.appendChild(footerCTA);document.querySelector('footer').before(footerCTAWrap);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
// Original Huly hero loop, publicly served at:
// https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404
// Preserve original frames, four-second duration, colours and playback speed.
const laser=document.querySelector('#hero-laser');
const motionLayer=document.querySelector('#reference-motion');
const mediaPreference=matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=mediaPreference.matches,heroVisible=true,layoutFrame=0;
laser.muted=true;laser.playbackRate=1;
function positionOriginalMotion(){
 layoutFrame=0;
 const anchor=document.querySelector(booking?'.booking-layout':'.gallery-frame');if(!anchor)return;
 const r=anchor.getBoundingClientRect();const padding=booking?parseFloat(getComputedStyle(anchor).paddingLeft):0;
 const frameWidth=r.width-padding*2;
 // Original 3840 x 2876 footage: content frame spans x=704..2752, y=1454.
 const videoWidth=frameWidth/(2048/3840),videoHeight=videoWidth*(2876/3840);
 const top=r.top+scrollY+(booking?parseFloat(getComputedStyle(anchor).paddingTop):0)-videoWidth*(1454/3840);
 laser.style.width=videoWidth+'px';laser.style.height=videoHeight+'px';laser.style.left=(r.left+padding-videoWidth*(704/3840))+'px';laser.style.top=top+'px';
 motionLayer.style.height=Math.max(r.top+scrollY+r.height+110,top+videoHeight)+'px';
}
function scheduleMotionLayout(){if(!layoutFrame)layoutFrame=requestAnimationFrame(positionOriginalMotion)}
function updatePlayback(){if(motionPaused||document.hidden||!heroVisible)laser.pause();else laser.play().catch(()=>{/* Keep the original poster when autoplay is unavailable. */})}
const visibility=new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;updatePlayback()},{rootMargin:'150px'});visibility.observe(laser);
const footerClock=document.querySelector('#footer-clock');function updateFooterPlayback(){const src=motionPaused?'assets/footer-clock-poster.png':'assets/footer-clock-moving.webp';if(footerClock.getAttribute('src')!==src)footerClock.setAttribute('src',src)}const motionButton=document.createElement('button');motionButton.id='motion-toggle';motionButton.type='button';document.querySelector('footer').append(motionButton);
function applyMotionState(){document.documentElement.classList.toggle('motion-paused',motionPaused);motionButton.textContent=motionPaused?'Resume animations':'Pause animations';motionButton.setAttribute('aria-pressed',String(motionPaused));updatePlayback();updateFooterPlayback()}
motionButton.onclick=()=>{motionPaused=!motionPaused;applyMotionState()};mediaPreference.addEventListener('change',event=>{motionPaused=event.matches;applyMotionState()});
document.addEventListener('visibilitychange',updatePlayback);addEventListener('resize',scheduleMotionLayout,{passive:true});
let layoutTimer;
const debouncedMotionLayout=()=>{clearTimeout(layoutTimer);layoutTimer=setTimeout(scheduleMotionLayout,80);};
new ResizeObserver(debouncedMotionLayout).observe(app);if(document.fonts)document.fonts.ready.then(scheduleMotionLayout);
// Match the reference's warm spotlight at the right end of each CTA.
function prepareGlows(){document.querySelectorAll('.glow-button:not([data-glow-ready])').forEach(button=>{button.dataset.glowReady='true';const label=document.createElement('span');label.className='glow-label';while(button.firstChild)label.append(button.firstChild);button.append(label);const core=document.createElement('span');core.className='reference-button-core';core.setAttribute('aria-hidden','true');button.append(core)})}
// Decorative layers are recreated after booking selections replace the page content.
function prepareSectionMotion(){
 document.querySelectorAll('.hero,.booking-hero,.gallery-section,.home-services,.booking-layout,.footer-cta').forEach(section=>{
  if(section.querySelector(':scope > .section-motion'))return;
  const layer=document.createElement('div');layer.className='section-motion';layer.setAttribute('aria-hidden','true');
  layer.innerHTML='<div class="ambient-orb orb-blue"></div><div class="ambient-orb orb-violet"></div><div class="ambient-orb orb-amber"></div><div class="motion-grid"></div><svg class="motion-trails" viewBox="0 0 1200 700" preserveAspectRatio="none"><path class="trail-base" d="M-100 540 H180 Q260 540 260 460 V230 Q260 150 340 150 H860 Q950 150 950 60 V-100"/><path class="trail-light trail-blue" pathLength="100" d="M-100 540 H180 Q260 540 260 460 V230 Q260 150 340 150 H860 Q950 150 950 60 V-100"/><path class="trail-base" d="M1300 240 H1050 Q980 240 980 320 V530 Q980 600 900 600 H510 Q440 600 440 700 V800"/><path class="trail-light trail-amber" pathLength="100" d="M1300 240 H1050 Q980 240 980 320 V530 Q980 600 900 600 H510 Q440 600 440 700 V800"/></svg>';
  section.prepend(layer);
 });
}
new MutationObserver(()=>{prepareGlows();prepareSectionMotion();debouncedMotionLayout()}).observe(app,{childList:true,subtree:true});
let pointerRaf=false;
addEventListener('pointermove',event=>{
  const button=event.target.closest('.glow-button');
  if(!button)return;
  if(!pointerRaf){
    pointerRaf=true;
    requestAnimationFrame(()=>{
      const r=button.getBoundingClientRect();
      button.style.setProperty('--light-x',Math.max(0,Math.min(r.width,event.clientX-r.left))+'px');
      pointerRaf=false;
    });
  }
},{passive:true});
addEventListener('pointerout',event=>{const button=event.target.closest('.glow-button');if(button&&!button.contains(event.relatedTarget))button.style.removeProperty('--light-x')},{passive:true});
prepareGlows();prepareSectionMotion();positionOriginalMotion();applyMotionState();
