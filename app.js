// Real Estate Portfolio Interactive Logic (Multi-Page Configuration)
// Leverages config.js to build a dynamic, interactive premium user experience.

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial configuration check
  if (typeof RealEstateConfig === "undefined") {
    console.error("Configuration file (config.js) not found or failed to load.");
    return;
  }

  // 2. Initialize Shared Components
  initializeBranding();
  initializeMobileMenu();

  // 3. Page-Specific Router Logic
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes("corridor.html")) {
    initializeInteractiveMap();
  } else if (path.includes("listings.html")) {
    initializeListings();
  } else if (path.includes("calculator.html")) {
    initializeCalculator();
  } else if (path.includes("blog.html")) {
    initializeBlogList();
  } else if (path.includes("blog-post.html")) {
    initializeBlogPost();
  } else if (path.includes("contact.html")) {
    initializeInquiryForm();
  } else {
    // Default or index.html (Home Page)
    initializeHomePreview();
  }
});

/* ========================================================
   1. BRANDING & HERO SETUP
   ======================================================== */
function initializeBranding() {
  const brand = RealEstateConfig.branding;
  
  // Set dynamic brand names across header and footer elements
  document.querySelectorAll(".company-name-text").forEach(el => el.textContent = brand.name);
  document.querySelectorAll(".company-logo-text").forEach(el => el.textContent = brand.logoText);
  document.querySelectorAll(".company-logo-sub").forEach(el => el.textContent = brand.logoSubtitle);
  
  // WhatsApp widgets & phone lines
  const whatsappBtns = document.querySelectorAll(".whatsapp-btn-action");
  whatsappBtns.forEach(btn => {
    btn.setAttribute("href", brand.whatsapp);
  });
  
  const phoneLinks = document.querySelectorAll(".phone-contact-number");
  phoneLinks.forEach(link => {
    link.textContent = brand.phone;
    link.setAttribute("href", `tel:${brand.phone.replace(/\s+/g, '')}`);
  });

  // Dynamic social media links binding
  const socials = brand.socialLinks;
  if (socials) {
    document.querySelectorAll(".social-link-whatsapp").forEach(el => el.setAttribute("href", socials.whatsapp || "#"));
    document.querySelectorAll(".social-link-instagram").forEach(el => el.setAttribute("href", socials.instagram || "#"));
    document.querySelectorAll(".social-link-facebook").forEach(el => el.setAttribute("href", socials.facebook || "#"));
    document.querySelectorAll(".social-link-linkedin").forEach(el => el.setAttribute("href", socials.linkedin || "#"));
    document.querySelectorAll(".social-link-youtube").forEach(el => el.setAttribute("href", socials.youtube || "#"));
  }
}

/* ========================================================
   2. MOBILE NAVIGATION MENU
   ======================================================== */
function initializeMobileMenu() {
  const mobileToggle = document.getElementById("menu-toggle-btn");
  const navMenu = document.getElementById("nav-links");
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      if (navMenu.classList.contains("open")) {
        mobileToggle.innerHTML = "&#10006;"; // Cross
      } else {
        mobileToggle.innerHTML = "&#9776;"; // Hamburger
      }
    });
  }

  // Handle header scroll opacity
  const header = document.querySelector(".navbar");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.style.background = "rgba(15, 23, 42, 0.96)";
        header.style.padding = "10px 20px";
      } else {
        header.style.background = "rgba(15, 23, 42, 0.85)";
        header.style.padding = "15px 30px";
      }
    });
  }
}

/* ========================================================
   3. HOME PAGE (INDEX.HTML) PREVIEWS
   ======================================================== */
function initializeHomePreview() {
  // Hero Video Volume Toggle
  const video = document.querySelector(".hero-video");
  const volumeBtn = document.getElementById("hero-volume-toggle");
  if (video && volumeBtn) {
    // Start muted (required for browser autoplay policies)
    video.muted = true;
    
    volumeBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      if (video.muted) {
        volumeBtn.classList.remove("unmuted");
        // Update SVG icon to muted speaker
        volumeBtn.innerHTML = `
          <svg class="volume-icon" viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M3.61 2.27L2.27 3.61 9.26 10.6H6v4h3l5 5v-5.27l4.39 4.39c-.58.44-1.22.8-1.92.98v2.06c1.24-.31 2.37-.9 3.32-1.68l2.63 2.63 1.34-1.34L3.61 2.27zM12 4L9.91 6.09 12 8.18V4zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-3.09-7.86-7.1-8.77v2.06c2.94.95 5.1 3.72 5.1 7z"/>
          </svg>
        `;
      } else {
        volumeBtn.classList.add("unmuted");
        // Update SVG icon to unmuted speaker
        volumeBtn.innerHTML = `
          <svg class="volume-icon" viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        `;
      }
    });
  }

  // Statistics Counter
  const statsContainer = document.getElementById("stats-grid-container");
  if (statsContainer) {
    statsContainer.innerHTML = "";
    RealEstateConfig.statistics.forEach(stat => {
      const card = document.createElement("div");
      card.className = "stat-card";
      card.innerHTML = `
        <h3>${stat.value}</h3>
        <p>${stat.label}</p>
      `;
      statsContainer.appendChild(card);
    });
  }

  // Render top 3 featured listings as preview
  const listingsGrid = document.getElementById("listings-grid-preview");
  if (listingsGrid) {
    listingsGrid.innerHTML = "";
    const previewListings = RealEstateConfig.listings.slice(0, 3);
    
    previewListings.forEach(listing => {
      const card = document.createElement("div");
      card.className = "listing-card";
      let badgeClass = listing.status === "Reserved" ? "badge-reserved" : (listing.status === "Sold Out" ? "badge-sold" : "badge-available");
      const tagsMarkup = listing.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join("");

      card.innerHTML = `
        <div class="listing-image-wrapper">
          <span class="listing-badge ${badgeClass}">${listing.status}</span>
          <img src="${listing.image}" alt="${listing.title}">
        </div>
        <div class="listing-info">
          <div class="listing-price-row">
            <span class="listing-price">${listing.price}</span>
            <span class="listing-size">${listing.size}</span>
          </div>
          <h3 class="listing-title">${listing.title}</h3>
          <div class="listing-location">
            <span>&#128205;</span> ${listing.location}
          </div>
          <div class="listing-tags">${tagsMarkup}</div>
          <div style="margin-top: 15px; display: flex; gap: 10px;">
            <a href="listings.html" class="btn btn-dark" style="flex:1; font-size:0.85rem; padding: 10px;">View Details</a>
          </div>
        </div>
      `;
      listingsGrid.appendChild(card);
    });
  }

  // Render top 2 recent blog previews
  const blogGrid = document.getElementById("blog-grid-preview");
  if (blogGrid) {
    blogGrid.innerHTML = "";
    const previewBlogs = RealEstateConfig.blogPosts.slice(0, 2);
    
    previewBlogs.forEach(post => {
      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
        <div class="blog-card-image">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-card-body">
          <div class="blog-meta">${post.date} &bull; ${post.readTime}</div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-summary">${post.summary}</p>
          <a href="blog-post.html?post=${post.slug}" class="btn btn-outline" style="align-self: flex-start; padding: 8px 18px; font-size:0.8rem;">Read Article</a>
        </div>
      `;
      blogGrid.appendChild(card);
    });
  }

  // Search form submit redirect
  const searchForm = document.getElementById("home-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loc = document.getElementById("search-location").value;
      const type = document.getElementById("search-type").value;
      window.location.href = `listings.html?location=${loc}&type=${type}`;
    });
  }

  // Render Executive Leadership (Founder & Co-Founder)
  const leadersContainer = document.getElementById("leaders-container");
  if (leadersContainer && RealEstateConfig.leadership) {
    leadersContainer.innerHTML = "";
    RealEstateConfig.leadership.forEach(leader => {
      const card = document.createElement("div");
      card.className = "leader-card";
      card.innerHTML = `
        <div class="leader-image-wrapper">
          <img src="${leader.image}" alt="${leader.name}">
        </div>
        <div class="leader-info">
          <h3>${leader.name}</h3>
          <div class="leader-role">${leader.role}</div>
          <p class="leader-bio">${leader.bio}</p>
        </div>
      `;
      leadersContainer.appendChild(card);
    });
  }

  // Render Employee Team Slider (Sideways Scroll)
  const teamSlider = document.getElementById("team-slider-container");
  if (teamSlider && RealEstateConfig.team) {
    teamSlider.innerHTML = "";
    RealEstateConfig.team.forEach(member => {
      const card = document.createElement("div");
      card.className = "member-card";
      card.innerHTML = `
        <div class="member-image-wrapper">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="member-info">
          <h4>${member.name}</h4>
          <div class="member-role">${member.role}</div>
          <p>${member.bio}</p>
        </div>
      `;
      teamSlider.appendChild(card);
    });
  }
}

/* ========================================================
   4. INTERACTIVE CORRIDOR MAP PAGE (CORRIDOR.HTML)
   ======================================================== */
function initializeInteractiveMap() {
  const mapWrapper = document.getElementById("expressway-map-container");
  const landmarkPanel = document.getElementById("landmark-detail-panel");
  if (!mapWrapper || !landmarkPanel) return;

  const landmarks = RealEstateConfig.landmarks;
  updateLandmarkDetails(landmarks[1]); // Gaur Yamuna City by default

  let svgContent = `
    <svg viewBox="0 0 500 250" class="svg-map" xmlns="http://www.w3.org/2000/svg">
      <path d="M 55,75 C 150,150 350,50 445,180" fill="none" stroke="#e2dcd0" stroke-width="6" stroke-linecap="round" />
      <path d="M 55,75 C 150,150 350,50 445,180" fill="none" stroke="#c5a880" stroke-width="2" stroke-dasharray="6,4" stroke-linecap="round" />
      <text x="65" y="55" fill="#626c67" font-size="8" font-weight="600" letter-spacing="1">YAMUNA EXPRESSWAY GROWTH CORRIDOR</text>
  `;

  landmarks.forEach((landmark, idx) => {
    const x = landmark.position.x * 5;
    const y = landmark.position.y * 2.5;
    const isActive = idx === 1 ? "active" : "";
    const pulseElement = idx === 1 || idx === 3 ? `<circle cx="${x}" cy="${y}" r="12" fill="none" stroke="#c5a880" stroke-width="1.5" opacity="0.6" class="map-node-pulse" style="animation: mapPulse 2s infinite;" />` : '';

    svgContent += `
      <g class="map-node ${isActive}" data-id="${landmark.id}" id="node-${landmark.id}">
        ${pulseElement}
        <circle cx="${x}" cy="${y}" r="8" />
        <circle cx="${x}" cy="${y}" r="4" fill="#fcfbf9" />
        <text x="${x}" y="${y - 15}" text-anchor="middle" font-size="9" font-weight="700">${landmark.name.split(' (')[0]}</text>
      </g>
    `;
  });

  svgContent += `</svg>`;
  mapWrapper.innerHTML = svgContent;

  landmarks.forEach(landmark => {
    const node = document.getElementById(`node-${landmark.id}`);
    if (node) {
      node.addEventListener("click", () => {
        document.querySelectorAll(".map-node").forEach(n => n.classList.remove("active"));
        node.classList.add("active");
        updateLandmarkDetails(landmark);
      });
    }
  });

  function updateLandmarkDetails(landmark) {
    landmarkPanel.style.opacity = 0;
    landmarkPanel.style.transform = "translateY(8px)";
    setTimeout(() => {
      landmarkPanel.innerHTML = `
        <span class="milepost">${landmark.milepost}</span>
        <h3>${landmark.name}</h3>
        <p>${landmark.usp}</p>
        <div style="margin-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px;">
          <a href="listings.html" class="btn btn-outline" style="padding: 8px 18px; font-size: 0.8rem;">Browse Plots Nearby</a>
        </div>
      `;
      landmarkPanel.style.opacity = 1;
      landmarkPanel.style.transform = "translateY(0)";
    }, 150);
  }
}

/* ========================================================
   5. PROPERTY LISTINGS PAGE (LISTINGS.HTML)
   ======================================================== */
function initializeListings() {
  const listingsGrid = document.getElementById("listings-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!listingsGrid) return;

  // Check URL parameters for search redirects from homepage
  const urlParams = new URLSearchParams(window.location.search);
  const typeFilter = urlParams.get("type") || "all";
  const locationFilter = urlParams.get("location") || "all";

  // Pre-fill filter button states based on URL params
  if (typeFilter !== "all") {
    filterBtns.forEach(btn => {
      if (btn.getAttribute("data-filter") === typeFilter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Filter and Render
  filterAndRenderListings(typeFilter, locationFilter);

  // Setup click filters
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      filterAndRenderListings(category, "all");
    });
  });

  function filterAndRenderListings(category, location) {
    let filtered = RealEstateConfig.listings;
    
    if (category !== "all") {
      filtered = filtered.filter(item => item.type === category);
    }
    
    if (location !== "all") {
      if (location === "gyc") {
        filtered = filtered.filter(item => item.location.toLowerCase().includes("gaur yamuna"));
      } else if (location === "film-city") {
        filtered = filtered.filter(item => item.location.toLowerCase().includes("film city"));
      } else if (location === "jewar") {
        filtered = filtered.filter(item => item.location.toLowerCase().includes("jewar"));
      }
    }

    renderListingGrid(filtered);
  }
}

function renderListingGrid(items) {
  const listingsGrid = document.getElementById("listings-grid");
  if (!listingsGrid) return;

  if (items.length === 0) {
    listingsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px;">
        <h3 style="color: var(--color-primary); font-size:1.8rem;">No Matching Plots Found</h3>
        <p style="margin-top:10px;">Contact us directly. We have verified off-market land holdings in this exact sector.</p>
        <a href="contact.html" class="btn btn-primary" style="margin-top:20px;">Contact Advisors</a>
      </div>
    `;
    return;
  }

  listingsGrid.innerHTML = "";
  items.forEach(listing => {
    const card = document.createElement("div");
    card.className = "listing-card";
    let badgeClass = listing.status === "Reserved" ? "badge-reserved" : (listing.status === "Sold Out" ? "badge-sold" : "badge-available");
    const tagsMarkup = listing.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

    card.innerHTML = `
      <div class="listing-image-wrapper">
        <span class="listing-badge ${badgeClass}">${listing.status}</span>
        <img src="${listing.image}" alt="${listing.title}">
      </div>
      <div class="listing-info">
        <div class="listing-price-row">
          <span class="listing-price">${listing.price}</span>
          <span class="listing-size">${listing.size}</span>
        </div>
        <h3 class="listing-title">${listing.title}</h3>
        <div class="listing-location">
          <span>&#128205;</span> ${listing.location}
        </div>
        <p class="listing-desc">${listing.description}</p>
        <div class="listing-tags">${tagsMarkup}</div>
        <div class="listing-cta">
          <a href="contact.html?plot=${encodeURIComponent(listing.title)}" class="btn btn-dark">Book Visit</a>
          <a href="${RealEstateConfig.branding.whatsapp}&text=Hi,%20I%20am%20interested%20in%20listing:%20${encodeURIComponent(listing.title)}" target="_blank" class="btn btn-outline">WhatsApp</a>
        </div>
      </div>
    `;
    listingsGrid.appendChild(card);
  });
}

/* ========================================================
   6. ROI CALCULATOR PAGE (CALCULATOR.HTML)
   ======================================================== */
function initializeCalculator() {
  const plotTypeSelect = document.getElementById("calc-plot-type");
  const sizeSlider = document.getElementById("calc-size");
  const yearsSlider = document.getElementById("calc-years");
  
  const sizeValDisplay = document.getElementById("calc-size-val");
  const yearsValDisplay = document.getElementById("calc-years-val");
  
  const initialCostVal = document.getElementById("calc-initial-cost");
  const futureCostVal = document.getElementById("calc-future-cost");
  const cagrDisplay = document.getElementById("calc-cagr");
  
  if (!sizeSlider || !yearsSlider) return;

  sizeSlider.addEventListener("input", calculateROI);
  yearsSlider.addEventListener("input", calculateROI);
  plotTypeSelect.addEventListener("change", calculateROI);

  calculateROI();

  function calculateROI() {
    const size = parseInt(sizeSlider.value);
    const years = parseInt(yearsSlider.value);
    const locationKey = plotTypeSelect.value;
    
    sizeValDisplay.textContent = `${size} Sq. Yards`;
    yearsValDisplay.textContent = `${years} Year${years > 1 ? 's' : ''}`;
    
    let ratePerSqYard = 35000;
    let expectedCagr = 0.16;
    
    switch (locationKey) {
      case "gyc":
        ratePerSqYard = 45000;
        expectedCagr = 0.18;
        break;
      case "filmcity":
        ratePerSqYard = 55000;
        expectedCagr = 0.21;
        break;
      case "airport":
        ratePerSqYard = 62000;
        expectedCagr = 0.24;
        break;
      case "expressway":
        ratePerSqYard = 35000;
        expectedCagr = 0.16;
        break;
    }
    
    const initialInvestment = size * ratePerSqYard;
    const futureValue = initialInvestment * Math.pow(1 + expectedCagr, years);
    
    initialCostVal.textContent = formatCurrency(initialInvestment);
    futureCostVal.textContent = formatCurrency(futureValue);
    cagrDisplay.textContent = `${Math.round(expectedCagr * 100)}% Expected CAGR`;
  }

  function formatCurrency(num) {
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Crores`;
    } else if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)} Lakhs`;
    } else {
      return `₹${num.toLocaleString('en-IN')}`;
    }
  }
}

/* ========================================================
   7. BLOG LISTINGS PAGE (BLOG.HTML)
   ======================================================== */
function initializeBlogList() {
  const blogGrid = document.getElementById("blog-grid");
  if (!blogGrid) return;

  blogGrid.innerHTML = "";
  RealEstateConfig.blogPosts.forEach(post => {
    const card = document.createElement("article");
    card.className = "blog-card";
    card.innerHTML = `
      <div class="blog-card-image">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="blog-card-body">
        <div class="blog-meta">${post.date} &bull; ${post.readTime}</div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-summary">${post.summary}</p>
        <a href="blog-post.html?post=${post.slug}" class="btn btn-outline" style="align-self: flex-start; padding: 8px 20px; font-size:0.85rem;">Read Full Guide</a>
      </div>
    `;
    blogGrid.appendChild(card);
  });
}

/* ========================================================
   8. SINGLE BLOG POST TEMPLATE (BLOG-POST.HTML)
   ======================================================== */
function initializeBlogPost() {
  const postWrapper = document.getElementById("blog-post-content-container");
  if (!postWrapper) return;

  const urlParams = new URLSearchParams(window.location.search);
  const postSlug = urlParams.get("post");
  
  if (!postSlug) {
    renderArticleError("No article selected.");
    return;
  }

  const post = RealEstateConfig.blogPosts.find(p => p.slug === postSlug);
  if (!post) {
    renderArticleError("The requested article could not be found.");
    return;
  }

  // Populate dynamic article content
  postWrapper.innerHTML = `
    <article class="blog-post-wrapper" style="animation: fadeInUp 0.6s ease;">
      <div class="blog-post-header">
        <span class="blog-meta" style="font-size:0.85rem; font-weight: 700;">Published: ${post.date} &bull; ${post.readTime}</span>
        <h2 style="margin-top: 10px;">${post.title}</h2>
        <div class="blog-post-meta-details">
          <span>Written By: <strong>${post.author}</strong></span>
          <span>Verified under: <strong>YEIDA Guidelines</strong></span>
        </div>
      </div>
      
      <img src="${post.image}" class="blog-post-image" alt="${post.title}">
      
      <div class="blog-post-body">
        ${post.content}
      </div>
      
      <div style="margin-top: 50px; text-align: center; border-top: 1px solid var(--color-border); padding-top: 30px;">
        <h4 style="margin-bottom: 15px;">Interested in investing near this zone?</h4>
        <a href="contact.html?topic=${encodeURIComponent(post.title)}" class="btn btn-primary">Book Expert Advisory Call</a>
      </div>
    </article>
  `;
}

function renderArticleError(message) {
  const postWrapper = document.getElementById("blog-post-content-container");
  if (postWrapper) {
    postWrapper.innerHTML = `
      <div style="text-align: center; padding: 100px 20px;">
        <h2 style="font-size: 2.2rem; color: var(--color-primary);">Error</h2>
        <p style="margin: 15px 0 30px;">${message}</p>
        <a href="blog.html" class="btn btn-primary">Back to Blog</a>
      </div>
    `;
  }
}

/* ========================================================
   9. LEAD INQUIRY FORM (CONTACT.HTML)
   ======================================================== */
function initializeInquiryForm() {
  const form = document.getElementById("lead-inquiry-form");
  if (!form) return;

  // Pre-fill fields based on query strings
  const urlParams = new URLSearchParams(window.location.search);
  const requestedPlot = urlParams.get("plot");
  const topic = urlParams.get("topic");
  
  const messageField = document.getElementById("inquiry-message");
  const reqPlotField = document.getElementById("inquiry-req-plot");

  if (requestedPlot) {
    reqPlotField.value = requestedPlot;
    messageField.value = `I am interested in scheduling a site visit for: "${requestedPlot}". Please share the legal YEIDA layout documents and pricing.`;
  } else if (topic) {
    reqPlotField.value = `Topic: ${topic}`;
    messageField.value = `I read your article on "${topic}" and would like to get coordinates of premium plots currently available in this sector.`;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("inquiry-name").value.trim();
    const phone = document.getElementById("inquiry-phone").value.trim();
    const email = document.getElementById("inquiry-email").value.trim();
    const purpose = document.getElementById("inquiry-purpose").value;
    const reqPlot = reqPlotField.value || "General Multi-page Inquiry";
    const msg = messageField.value.trim();
    
    if (!name || !phone) {
      alert("Please fill in your Name and Contact Number.");
      return;
    }

    const leadData = {
      clientCompany: RealEstateConfig.branding.name,
      timestamp: new Date().toISOString(),
      leadInfo: {
        name,
        phone,
        email,
        purpose,
        plotRequested: reqPlot,
        message: msg
      }
    };
    
    console.log("Saving dynamic lead:", leadData);
    
    // Local DB mock
    let localLeads = JSON.parse(localStorage.getItem("real_estate_leads") || "[]");
    localLeads.push(leadData);
    localStorage.setItem("real_estate_leads", JSON.stringify(localLeads));

    // Success response styling
    const formContainer = document.querySelector(".inquiry-card");
    const originalForm = formContainer.innerHTML;
    
    formContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; animation: fadeInUp 0.4s ease;">
        <span style="font-size: 4rem; color: var(--color-accent);">&#10004;</span>
        <h3 style="color: var(--color-text-light); margin: 20px 0 10px; font-size: 1.8rem;">Inquiry Submitted</h3>
        <p style="color: rgba(255,255,255,0.85); margin-bottom: 30px; font-size: 1rem; line-height: 1.6;">
          Thank you <strong>${name}</strong>. An investment executive from <strong>${RealEstateConfig.branding.name}</strong> will contact you via phone within 15 minutes.
        </p>
        <button id="reset-inquiry-btn" class="btn btn-primary">Submit Another Inquiry</button>
      </div>
    `;

    // WhatsApp quick trigger
    const waText = `Hi, I submitted a contact inquiry on your site.\nName: ${name}\nPhone: ${phone}\nInterested in: ${reqPlot}`;
    const waUrl = `${RealEstateConfig.branding.whatsapp}&text=${encodeURIComponent(waText)}`;
    
    if (confirm("Would you like to instantly connect with Lakha's Group executive via WhatsApp?")) {
      window.open(waUrl, "_blank");
    }

    document.getElementById("reset-inquiry-btn").addEventListener("click", () => {
      formContainer.innerHTML = originalForm;
      initializeInquiryForm(); // Reinitialize listener
    });
  });
}
