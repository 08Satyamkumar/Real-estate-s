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
    initializeInquiryForm();
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

  // Dynamic email links binding
  const emailLinks = document.querySelectorAll(".company-email-text");
  emailLinks.forEach(link => {
    link.textContent = brand.email;
    link.setAttribute("href", `mailto:${brand.email}`);
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

  // Intersection Observer to autoplay/pause video on scroll (prevent sound clash & save resources)
  if (video && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(err => {
            console.log("Autoplay prevented by browser:", err);
          });
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.15 // Trigger when at least 15% of the video is visible
    });
    
    observer.observe(video);
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
      const budget = document.getElementById("search-budget").value;
      const size = document.getElementById("search-size").value;
      window.location.href = `listings.html?location=${loc}&type=${type}&budget=${budget}&size=${size}`;
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
  const containerWrapper = document.getElementById("listings-container-wrapper");
  const mainTabs = document.querySelectorAll("#main-category-tabs .tab-btn");
  const subTabsContainer = document.getElementById("sub-category-tabs");
  const subTabs = document.querySelectorAll("#sub-category-tabs .sub-tab-btn");
  const searchInput = document.getElementById("listing-search-input");
  const priceFilter = document.getElementById("listing-price-filter");
  
  if (!containerWrapper) return;

  let activeCategory = "residential";
  let activeSub = "plot";
  let activeSearchText = "";
  let activePrice = "all";

  // Simple string hash helper to assign deterministic mock values
  function getHashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  // Pick deterministic image URLs for plots, flats, commercial, industrial, and agricultural properties
  function getPropertyImage(sector, type, index, category) {
    const plotImages = [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    ];
    const flatImages = [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    ];
    const commercialImages = [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    ];
    const industrialImages = [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?auto=format&fit=crop&w=600&q=80"
    ];
    const agriculturalImages = [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
    ];
    
    let list = type === "plot" ? plotImages : flatImages;
    if (category === "commercial") {
      list = commercialImages;
    } else if (category === "industrial") {
      list = industrialImages;
    } else if (category === "agricultural") {
      list = agriculturalImages;
    }
    const hash = Math.abs(getHashCode(sector + index));
    return list[hash % list.length];
  }

  // Map deterministic prices based on category, type, and region
  function getMockPrice(sector, type, region, category) {
    const hash = Math.abs(getHashCode(sector));
    
    if (category === "residential") {
      if (type === "plot") {
        if (region === "yeida") {
          // Range: 1L to 1.8L per Sq.m
          const prices = [1.1, 1.25, 1.45, 1.6, 1.75];
          const val = prices[hash % prices.length];
          return { text: `₹${val} Lakh / Sq.m`, val: val * 100000 };
        } else {
          // Noida & Greater Noida Range: 1L to 2L per Sq.m
          const prices = [1.15, 1.3, 1.55, 1.7, 1.85, 1.95];
          const val = prices[hash % prices.length];
          return { text: `₹${val} Lakh / Sq.m`, val: val * 100000 };
        }
      } else {
        // Flats Range: 60 Lakh to 10 Crore
        const prices = [
          { text: "₹75 Lakh", val: 7500000 },
          { text: "₹1.4 Crore", val: 14000000 },
          { text: "₹2.2 Crore", val: 22000000 },
          { text: "₹3.8 Crore", val: 38000000 },
          { text: "₹5.5 Crore", val: 55000000 },
          { text: "₹9.2 Crore", val: 92000000 }
        ];
        return prices[hash % prices.length];
      }
    } else if (category === "commercial") {
      if (type === "plot") {
        if (region === "yeida") {
          // Range: 80K to 1.2L per Sq.m
          const prices = [82, 90, 98, 105, 115];
          const val = prices[hash % prices.length];
          return { text: `₹${val}K / Sq.m`, val: val * 1000 };
        } else {
          // Noida & Greater Noida Range: 1L to 2L per Sq.m
          const prices = [1.1, 1.25, 1.4, 1.65, 1.8, 1.95];
          const val = prices[hash % prices.length];
          return { text: `₹${val} Lakh / Sq.m`, val: val * 100000 };
        }
      } else {
        // Commercial Flats: 80K to 1.2 Lakh per Sq.m
        const prices = [82, 90, 98, 105, 115];
        const val = prices[hash % prices.length];
        return { text: `₹${val}K / Sq.m`, val: val * 1000 };
      }
    } else if (category === "industrial") {
      // Industrial is plot-only
      if (region === "noida") {
        // Range: 8K to 1.5 Lakh per Sq.m
        const prices = [
          { text: "₹12K / Sq.m", val: 12000 },
          { text: "₹25K / Sq.m", val: 25000 },
          { text: "₹48K / Sq.m", val: 48000 },
          { text: "₹75K / Sq.m", val: 75000 },
          { text: "₹1.1 Lakh / Sq.m", val: 110000 },
          { text: "₹1.35 Lakh / Sq.m", val: 135000 }
        ];
        return prices[hash % prices.length];
      } else if (region === "greaterNoida") {
        // Range: 80K to 1.5 Lakh per Sq.m
        const prices = [85, 95, 108, 118, 130, 145];
        const val = prices[hash % prices.length];
        return { text: `₹${val}K / Sq.m`, val: val * 1000 };
      } else if (region === "yeida") {
        // Range: 5K to 7 Lakh per Sq.m
        const prices = [
          { text: "₹8K / Sq.m", val: 8000 },
          { text: "₹22K / Sq.m", val: 22000 },
          { text: "₹65K / Sq.m", val: 65000 },
          { text: "₹1.2 Lakh / Sq.m", val: 120000 },
          { text: "₹2.8 Lakh / Sq.m", val: 280000 },
          { text: "₹4.5 Lakh / Sq.m", val: 450000 },
          { text: "₹6.2 Lakh / Sq.m", val: 620000 }
        ];
        return prices[hash % prices.length];
      }
    } else if (category === "agricultural") {
      // Noida: 2 Cr to 3 Cr per Bigha
      if (region === "noida") {
        const prices = [
          { text: "₹2.2 Crore / Bigha", val: 22000000 },
          { text: "₹2.4 Crore / Bigha", val: 24000000 },
          { text: "₹2.6 Crore / Bigha", val: 26000000 },
          { text: "₹2.8 Crore / Bigha", val: 28000000 }
        ];
        return prices[hash % prices.length];
      } else if (region === "greaterNoida") {
        // Greater Noida: 2 Cr to 4 Cr per Bigha
        const prices = [
          { text: "₹2.2 Crore / Bigha", val: 22000000 },
          { text: "₹2.5 Crore / Bigha", val: 25000000 },
          { text: "₹2.8 Crore / Bigha", val: 28000000 },
          { text: "₹3.2 Crore / Bigha", val: 32000000 },
          { text: "₹3.5 Crore / Bigha", val: 35000000 },
          { text: "₹3.8 Crore / Bigha", val: 38000000 }
        ];
        return prices[hash % prices.length];
      } else if (region === "yeida") {
        // YEIDA: 30 Lakh to 4 Cr per Bigha
        const prices = [
          { text: "₹35 Lakh / Bigha", val: 3500000 },
          { text: "₹65 Lakh / Bigha", val: 6500000 },
          { text: "₹1.2 Crore / Bigha", val: 12000000 },
          { text: "₹2.4 Crore / Bigha", val: 24000000 },
          { text: "₹3.2 Crore / Bigha", val: 32000000 },
          { text: "₹3.8 Crore / Bigha", val: 38000000 }
        ];
        return prices[hash % prices.length];
      }
    }
    return { text: "Contact for Price", val: 0 };
  }

  // Setup top-level category tabs
  mainTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      mainTabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");

      if (activeCategory === "residential" || activeCategory === "commercial") {
        subTabsContainer.style.display = "flex";
        const activeSubBtn = document.querySelector("#sub-category-tabs .sub-tab-btn.active");
        activeSub = activeSubBtn ? activeSubBtn.getAttribute("data-sub") : "plot";
      } else if (activeCategory === "industrial") {
        subTabsContainer.style.display = "none";
        activeSub = "plot";
      } else if (activeCategory === "agricultural") {
        subTabsContainer.style.display = "none";
        activeSub = "land";
      }
      renderListings();
    });
  });

  // Setup sub-category tabs (Plots/Flats)
  subTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      subTabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      activeSub = btn.getAttribute("data-sub");
      renderListings();
    });
  });

  // Setup search input filter
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchText = e.target.value.toLowerCase().trim();
      renderListings();
    });
  }

  // Setup price dropdown filter
  if (priceFilter) {
    priceFilter.addEventListener("change", (e) => {
      activePrice = e.target.value;
      renderListings();
    });
  }

  // Initial render
  renderListings();

  function renderListings() {
    containerWrapper.innerHTML = "";

    let detailsConfig = null;
    if (activeCategory === "residential") {
      detailsConfig = RealEstateConfig.residentialDetails[activeSub];
    } else if (activeCategory === "commercial") {
      detailsConfig = RealEstateConfig.commercialDetails[activeSub];
    } else if (activeCategory === "industrial") {
      detailsConfig = RealEstateConfig.industrialDetails["plot"]; // Industrial only has plots
    } else if (activeCategory === "agricultural") {
      detailsConfig = RealEstateConfig.agriculturalDetails["land"]; // Agricultural only has land
    }

    if (!detailsConfig) {
      renderPlaceholderCategory();
      return;
    }

    const regions = [
      { key: "noida", title: "Noida Corridor", badge: "Expressway Gated Zones" },
      { key: "greaterNoida", title: "Greater Noida Area", badge: "Pari Chowk & VIP Sectors" },
      { key: "yeida", title: "YEIDA Airport Corridor", badge: "Jewar Airport & Film City" }
    ];

    let totalRendered = 0;
    const customListings = JSON.parse(localStorage.getItem("real_estate_custom_listings_v1") || "{}");

    regions.forEach(reg => {
      const details = detailsConfig[reg.key];
      if (!details) return;

      // Compile all sectors for this region
      let list = [];
      
      // Noida sectors & Noida West sectors
      if (reg.key === "noida") {
        if (details.sectors) {
          details.sectors.forEach(sec => list.push({ name: `Sector ${sec}`, zone: "Noida Authority", rawName: sec }));
        }
        if (details.noidaWestSectors) {
          details.noidaWestSectors.forEach(sec => list.push({ name: `Sector ${sec}`, zone: "Noida West Hub", rawName: sec }));
        }
      } 
      // Greater Noida sectors
      else if (reg.key === "greaterNoida") {
        if (details.sectors) {
          details.sectors.forEach(sec => list.push({ name: sec.includes("Sector") ? sec : `${sec}`, zone: "Greater Noida Authority", rawName: sec }));
        }
      }
      // YEIDA sectors & projects
      else if (reg.key === "yeida") {
        if (details.sectors) {
          details.sectors.forEach(sec => list.push({ name: `Sector ${sec}`, zone: "YEIDA Authority Plot", rawName: sec }));
        }
        if (details.others) {
          details.others.forEach(proj => list.push({ name: `${proj} Gated Complex`, zone: "Airport Corridor Gated", rawName: proj }));
        }
      }

      // Filter sectors list by search text
      if (activeSearchText) {
        list = list.filter(item => 
          item.name.toLowerCase().includes(activeSearchText) ||
          item.zone.toLowerCase().includes(activeSearchText)
        );
      }

      // Filter by price range
      list = list.filter(item => {
        const cardId = `${activeCategory}-${activeSub}-${reg.key}-${item.rawName.replace(/\s+/g, '-').toLowerCase()}`;
        item.cardId = cardId;

        const price = getMockPrice(item.name, activeSub, reg.key, activeCategory);
        
        // Load custom overrides from localStorage if present
        const customData = customListings[cardId] || {};
        const finalPriceText = (customData && customData.price) ? customData.price : price.text;
        item.priceText = finalPriceText;

        // Try to parse raw value for filtering if custom price is set, otherwise use mock val
        let filterVal = price.val;
        if (customData && customData.price) {
          const match = customData.price.match(/[\d\.]+/);
          if (match) {
            const num = parseFloat(match[0]);
            const isLakh = customData.price.toLowerCase().includes("lakh") || customData.price.toLowerCase().includes("l");
            const isCrore = customData.price.toLowerCase().includes("crore") || customData.price.toLowerCase().includes("cr");
            const isK = customData.price.toLowerCase().includes("k");
            
            if (isCrore) filterVal = num * 10000000;
            else if (isLakh) filterVal = num * 100000;
            else if (isK) filterVal = num * 1000;
            else filterVal = num;
          }
        }
        item.priceVal = filterVal;

        if (activePrice === "all") return true;

        if (activeCategory === "residential") {
          if (activeSub === "plot") {
            if (activePrice === "low") return filterVal < 130000;
            if (activePrice === "mid") return filterVal >= 130000 && filterVal <= 170000;
            if (activePrice === "high") return filterVal > 170000;
          } else {
            if (activePrice === "low") return filterVal < 15000000;
            if (activePrice === "mid") return filterVal >= 15000000 && filterVal <= 40000000;
            if (activePrice === "high") return filterVal > 40000000;
          }
        } else if (activeCategory === "commercial") {
          if (activePrice === "low") return filterVal < 100000;
          if (activePrice === "mid") return filterVal >= 100000 && filterVal <= 150000;
          if (activePrice === "high") return filterVal > 150000;
        } else if (activeCategory === "industrial") {
          if (activePrice === "low") return filterVal < 50000;
          if (activePrice === "mid") return filterVal >= 50000 && filterVal <= 200000;
          if (activePrice === "high") return filterVal > 200000;
        } else if (activeCategory === "agricultural") {
          if (activePrice === "low") return filterVal < 10000000;
          if (activePrice === "mid") return filterVal >= 10000000 && filterVal <= 25000000;
          if (activePrice === "high") return filterVal > 25000000;
        }
        return true;
      });

      if (list.length === 0) return;

      totalRendered += list.length;

      // Create region layout section
      const section = document.createElement("div");
      section.className = "location-section";

      const header = document.createElement("div");
      header.className = "location-header";
      header.innerHTML = `
        <h2 class="location-title">${reg.title}</h2>
        <span class="location-badge">${reg.badge}</span>
      `;
      section.appendChild(header);

      const carousel = document.createElement("div");
      carousel.className = "carousel-wrapper";

      list.forEach((item, idx) => {
        const cardId = item.cardId;
        const customData = customListings[cardId] || {};
        
        // Deterministic features for RERA, Facing, road width
        const hash = Math.abs(getHashCode(item.name));
        const facings = ["North-East Corner", "East Facing", "West Facing", "Road Facing", "Park Facing"];
        const roadSizes = ["12 Meter", "18 Meter", "24 Meter", "45 Meter"];
        
        let defaultStatus = "Available";
        if (activeCategory === "residential") {
          const statusBadges = ["RERA Mutated", "Registry Ready", "YEIDA Approved", "Gated Compound"];
          defaultStatus = statusBadges[(hash >> 2) % statusBadges.length];
        } else if (activeCategory === "commercial") {
          const statusBadges = ["Commercial Approved", "High Footfall", "Parking Space", "Registry Ready"];
          defaultStatus = statusBadges[(hash >> 2) % statusBadges.length];
        } else if (activeCategory === "industrial") {
          const statusBadges = ["Industrial Zoning", "3-Phase Power", "YEIDA Mutated", "Wide Road Entrance"];
          defaultStatus = statusBadges[(hash >> 2) % statusBadges.length];
        } else if (activeCategory === "agricultural") {
          const statusBadges = ["Clear Title", "Mutated Land", "Immediate Registry", "Road Connectivity"];
          defaultStatus = statusBadges[(hash >> 2) % statusBadges.length];
        }

        const facing = facings[hash % facings.length];
        const road = roadSizes[(hash >> 1) % roadSizes.length];
        
        const status = customData.status || defaultStatus;
        const img = getPropertyImage(item.name, activeSub, idx, activeCategory);

        const titleText = customData.title || item.name;
        const locationText = customData.location || item.zone;
        const priceText = customData.price || item.priceText;
        
        let propertyTypeLabel = "";
        if (activeCategory === "residential") {
          propertyTypeLabel = activeSub === 'plot' ? 'Sq.m Plot' : 'Residential';
        } else if (activeCategory === "commercial") {
          propertyTypeLabel = activeSub === 'plot' ? 'Comm. Plot' : 'Comm. Space';
        } else if (activeCategory === "industrial") {
          propertyTypeLabel = 'Industrial Plot';
        } else if (activeCategory === "agricultural") {
          propertyTypeLabel = 'Agri. Land';
        }

        let defaultDesc = "";
        if (activeCategory === "agricultural") {
          defaultDesc = `Premium mutated agricultural land parcel situated in ${item.name}. Ideal for farming, farmhouse developments, or long-term corridor investment. Features: ${facing}, ${road} access road.`;
        } else {
          defaultDesc = `Premium clear-title ${activeSub === 'plot' ? 'land parcel' : 'luxury apartment/space'} situated in ${item.name}. Features: ${facing}, ${road} wide front road with water/electricity grid access.`;
        }
        const descText = customData.desc || defaultDesc;

        const waText = `Hello Lakha's Group, I am interested in ${activeCategory.toUpperCase()} ${activeSub === 'plot' ? 'Plot' : 'Flat/Space'} at ${titleText}, ${reg.title}. Price range: ${priceText}. Please send more details.`;
        const phone = "6396143510";

        const badgeClass = status === "Reserved" ? "badge-reserved" : (status === "Sold Out" ? "badge-sold" : "badge-available");

        const card = document.createElement("div");
        card.className = "listing-card";
        card.innerHTML = `
          <div class="listing-image-wrapper">
            <span class="listing-badge ${badgeClass}">${status}</span>
            <img src="${img}" alt="${titleText}">
          </div>
          <div class="listing-info">
            <div class="listing-price-row">
              <span class="listing-price" style="font-size:1.15rem;">${priceText}</span>
              <span class="listing-size">${propertyTypeLabel}</span>
            </div>
            <h3 class="listing-title" style="margin:10px 0 5px;">${titleText}</h3>
            <div class="listing-location" style="margin-bottom:12px; font-size:0.9rem; color:var(--color-accent);">
              <span>&#128205;</span> ${locationText}
            </div>
            <p class="listing-desc" style="font-size:0.85rem; color:rgba(15,23,42,0.7); line-height:1.5; margin-bottom:15px;">${descText}</p>
            <div class="listing-cta" style="display:flex; gap:10px; margin-top:15px;">
              <a href="contact.html?plot=${encodeURIComponent(titleText + ' (' + activeCategory.toUpperCase() + ')')}" class="btn btn-dark" style="flex:1; text-align:center; padding: 10px 5px; font-size:0.85rem;">Book Visit</a>
              <a href="https://wa.me/91${phone}?text=${encodeURIComponent(waText)}" target="_blank" class="btn btn-outline" style="flex:1; text-align:center; padding: 10px 5px; font-size:0.85rem; display:flex; align-items:center; justify-content:center; gap:5px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.795 1.451 5.378 0 9.757-4.373 9.76-9.743.002-2.592-1.008-5.03-2.846-6.87C16.32 2.146 13.883 1.14 11.3 1.14 5.922 1.14 1.543 5.513 1.54 10.885c-.001 1.702.462 3.364 1.34 4.814l-.993 3.626 3.72-.973zm13.153-6.52c-.29-.145-1.716-.847-1.982-.944-.265-.096-.459-.145-.653.145-.194.29-.752.944-.922 1.139-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.447-1.722-1.617-2.013-.17-.29-.018-.447.127-.592.13-.13.29-.34.436-.509.145-.17.194-.29.291-.485.097-.194.049-.364-.025-.509-.073-.145-.653-1.573-.895-2.155-.236-.569-.475-.492-.653-.501-.17-.008-.364-.01-.557-.01-.194 0-.509.073-.775.364-.265.29-1.012.988-1.012 2.41 0 1.423 1.036 2.798 1.18 2.993.145.194 2.039 3.114 4.939 4.364.69.298 1.229.476 1.649.61.693.22 1.324.19 1.823.115.556-.084 1.716-.701 1.958-1.378.243-.677.243-1.258.17-1.378-.073-.12-.265-.193-.556-.34z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        `;
        carousel.appendChild(card);
      });

      section.appendChild(carousel);
      containerWrapper.appendChild(section);
    });

    if (totalRendered === 0) {
      containerWrapper.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <h3 style="color: var(--color-primary); font-size:1.6rem;">No Matching Sectors Found</h3>
          <p style="margin-top:10px;">Try adjusting your search query or price filters.</p>
        </div>
      `;
    }
  }

  function renderPlaceholderCategory() {
    const titles = {
      agricultural: "Agricultural & Farm Land Portfolios"
    };
    const titleText = titles[activeCategory] || "Premium Land Catalog";
    const phone = "6396143510";

    containerWrapper.innerHTML = `
      <div style="max-width: 700px; margin: 40px auto; text-align: center; padding: 50px 30px; background: var(--color-bg-alt); border-radius: 12px; border: 1px solid var(--color-border); box-shadow: var(--shadow-premium);">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 15px;">${titleText}</h3>
        <p style="font-size: 1.05rem; line-height: 1.7; color: rgba(15,23,42,0.8); margin-bottom: 30px;">
          We are currently compiling premium agricultural layouts and farmhouse options for this sector. Contact our land advisory desk directly to receive maps, legal title summaries, and site mutation records.
        </p>
        <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap;">
          <a href="https://wa.me/91${phone}?text=Hello%20Lakha's%20Group,%20I%20am%20interested%20in%20obtaining%20information%20for%20${encodeURIComponent(titleText)}" target="_blank" class="btn btn-primary" style="display:flex; align-items:center; gap:8px;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.795 1.451 5.378 0 9.757-4.373 9.76-9.743.002-2.592-1.008-5.03-2.846-6.87C16.32 2.146 13.883 1.14 11.3 1.14 5.922 1.14 1.543 5.513 1.54 10.885c-.001 1.702.462 3.364 1.34 4.814l-.993 3.626 3.72-.973zm13.153-6.52c-.29-.145-1.716-.847-1.982-.944-.265-.096-.459-.145-.653.145-.194.29-.752.944-.922 1.139-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.447-1.722-1.617-2.013-.17-.29-.018-.447.127-.592.13-.13.29-.34.436-.509.145-.17.194-.29.291-.485.097-.194.049-.364-.025-.509-.073-.145-.653-1.573-.895-2.155-.236-.569-.475-.492-.653-.501-.17-.008-.364-.01-.557-.01-.194 0-.509.073-.775.364-.265.29-1.012.988-1.012 2.41 0 1.423 1.036 2.798 1.18 2.993.145.194 2.039 3.114 4.939 4.364.69.298 1.229.476 1.649.61.693.22 1.324.19 1.823.115.556-.084 1.716-.701 1.958-1.378.243-.677.243-1.258.17-1.378-.073-.12-.265-.193-.556-.34z"/></svg>
            Inquire via WhatsApp
          </a>
          <a href="contact.html" class="btn btn-outline">Request Catalog Call</a>
        </div>
      </div>
    `;
  }
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
  const requestedPlot = urlParams.get("plot") || urlParams.get("subject");
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
    
    // 1. Local DB mock backup
    let localLeads = JSON.parse(localStorage.getItem("real_estate_leads") || "[]");
    localLeads.push(leadData);
    localStorage.setItem("real_estate_leads", JSON.stringify(localLeads));

    // 2. Submit lead email notification via FormSubmit AJAX (100% Free & Automatic)
    const emailTo = RealEstateConfig.branding.email || "lakhasgroup02@gmail.com";
    fetch(`https://formsubmit.co/ajax/${emailTo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Company": RealEstateConfig.branding.name,
        "Lead Name": name,
        "Phone Number": phone,
        "Email Address": email || "Not Provided",
        "Investment Profile": purpose === "invest" ? "Investor" : (purpose === "self" ? "End-User (Construction)" : "Wants to Sell"),
        "Requested Plot/Topic": reqPlot,
        "Requirements Message": msg || "No Requirements Specified"
      })
    })
    .then(res => res.json())
    .then(data => console.log("Lead email sent successfully:", data))
    .catch(err => console.error("Error sending lead email:", err));

    // 3. Render a beautiful luxury modal popup instead of browser confirm/alert
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.backgroundColor = "rgba(15, 23, 42, 0.85)"; // Glassmorphic background
    modal.style.backdropFilter = "blur(10px)";
    modal.style.webkitBackdropFilter = "blur(10px)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "99999";
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.4s ease";
    
    // WhatsApp quick trigger
    const waText = `Hi, I submitted a contact inquiry on your site.\nName: ${name}\nPhone: ${phone}\nInterested in: ${reqPlot}`;
    const waUrl = `${RealEstateConfig.branding.whatsapp}&text=${encodeURIComponent(waText)}`;
    
    modal.innerHTML = `
      <div class="luxury-modal" style="
        background: #0F172A; 
        border: 2px solid var(--color-accent); 
        padding: 40px 30px; 
        border-radius: 20px; 
        max-width: 480px; 
        width: 90%; 
        text-align: center; 
        box-shadow: 0 20px 50px rgba(197, 168, 128, 0.2); 
        transform: translateY(20px); 
        transition: transform 0.4s ease;
      ">
        <span style="font-size: 4.5rem; line-height: 1; color: var(--color-accent); margin-bottom: 20px; display: inline-block;">&#10004;</span>
        <h3 style="color: var(--color-text-light); margin: 0 0 15px; font-size: 1.8rem; font-family: var(--font-serif); letter-spacing: 0.5px;">Request Received</h3>
        <p style="color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; line-height: 1.6; margin-bottom: 30px; font-family: var(--font-sans);">
          Thank you, <strong>${name}</strong>. Your inquiry has been sent to our land advisory desk. An executive from <strong>${RealEstateConfig.branding.name}</strong> will call you back shortly.
        </p>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <a href="${waUrl}" target="_blank" id="modal-wa-btn" class="btn btn-primary" style="
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 8px; 
            font-size: 0.95rem; 
            padding: 12px;
            background: var(--color-accent);
            color: var(--color-primary);
            border-radius: 10px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s;
          ">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.795 1.451 5.378 0 9.757-4.373 9.76-9.743.002-2.592-1.008-5.03-2.846-6.87C16.32 2.146 13.883 1.14 11.3 1.14 5.922 1.14 1.543 5.513 1.54 10.885c-.001 1.702.462 3.364 1.34 4.814l-.993 3.626 3.72-.973zm13.153-6.52c-.29-.145-1.716-.847-1.982-.944-.265-.096-.459-.145-.653.145-.194.29-.752.944-.922 1.139-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.447-1.722-1.617-2.013-.17-.29-.018-.447.127-.592.13-.13.29-.34.436-.509.145-.17.194-.29.291-.485.097-.194.049-.364-.025-.509-.073-.145-.653-1.573-.895-2.155-.236-.569-.475-.492-.653-.501-.17-.008-.364-.01-.557-.01-.194 0-.509.073-.775.364-.265.29-1.012.988-1.012 2.41 0 1.423 1.036 2.798 1.18 2.993.145.194 2.039 3.114 4.939 4.364.69.298 1.229.476 1.649.61.693.22 1.324.19 1.823.115.556-.084 1.716-.701 1.958-1.378.243-.677.243-1.258.17-1.378-.073-.12-.265-.193-.556-.34z"/></svg>
            Connect Instantly on WhatsApp
          </a>
          <button id="modal-close-btn" class="btn btn-outline" style="
            border: 1px solid rgba(255,255,255,0.2); 
            color: var(--color-text-light); 
            padding: 12px; 
            border-radius: 10px;
            font-size: 0.95rem;
            cursor: pointer;
            background: transparent;
            transition: all 0.3s;
          ">Close Window</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Trigger transition
    setTimeout(() => {
      modal.style.opacity = "1";
      modal.querySelector(".luxury-modal").style.transform = "translateY(0)";
    }, 10);
    
    const closeModal = () => {
      modal.style.opacity = "0";
      modal.querySelector(".luxury-modal").style.transform = "translateY(20px)";
      setTimeout(() => {
        modal.remove();
        form.reset();
      }, 400);
    };
    
    modal.querySelector("#modal-close-btn").addEventListener("click", closeModal);
    modal.querySelector("#modal-wa-btn").addEventListener("click", () => {
      setTimeout(closeModal, 1000);
    });
  });
}
