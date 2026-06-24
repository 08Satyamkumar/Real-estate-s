// white-label Real Estate Template Configuration
// Simply edit this file to customize the portfolio for any client in minutes.

const RealEstateConfig = {
  branding: {
    name: "Lakha's Group",
    tagline: "Secure Your Plot in India's Golden Investment Corridor",
    subtagline: "Premium Residential, Commercial & Industrial Plots between Pari Chowk & Jewar Airport",
    logoText: "LAKHA'S GROUP",
    logoSubtitle: "DEVELOPERS & INVESTMENTS",
    accentColor: "#C5A880", // Premium Satin Gold
    primaryBg: "#0F172A",   // Midnight Slate Blue
    phone: "+91 63961 43510",
    whatsapp: "https://wa.me/916396143510?text=Hello%20Lakha's%20Group,%20I%20am%20interested%20in%20Yamuna%20Expressway%20plots.",
    email: "info@lakhaagroup.com",
    address: "Office No. 102, Commercial Hub, Gaur Yamuna City, Gautam Buddha Nagar, UP, India",
    socialLinks: {
      whatsapp: "https://wa.me/916396143510?text=Hello%20Lakha's%20Group,%20I%20am%20interested%20in%20plots.",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com"
    }
  },
  
  // Growth Statistics to showcase on the landing page
  statistics: [
    { value: "1000+", label: "Acres Developed" },
    { value: "4500+", label: "Happy Investors" },
    { value: "100%", label: "Legal Title Verification" },
    { value: "3.5x+", label: "Return in 4 Years" }
  ],

  // Interactive Corridor Map Landmarks
  landmarks: [
    {
      id: "pari-chowk",
      name: "Pari Chowk (Greater Noida)",
      milepost: "0 KM Milestone",
      usp: "The established entrance gateway. Connected to Noida-Greater Noida Expressway, Aqua Line Metro, and surrounded by 5 major universities.",
      position: { x: 10, y: 30 } // Percentage coordinate for Custom SVG map
    },
    {
      id: "gaur-yamuna-city",
      name: "Gaur Yamuna City",
      milepost: "18 KM Milestone",
      usp: "A massive 250-Acre fully integrated township. Features a majestic Yamuna Lake, educational institutes, shopping arcade, and premium residential plots.",
      position: { x: 42, y: 55 }
    },
    {
      id: "film-city",
      name: "International Film City (YEIDA)",
      milepost: "24 KM Milestone",
      usp: "Mega 1000-Acre cinematic hub currently under construction. Includes filming studios, theme parks, hospitality zones, and commercial offices.",
      position: { x: 65, y: 45 }
    },
    {
      id: "jewar-airport",
      name: "Noida International Airport (Jewar)",
      milepost: "32 KM Milestone",
      usp: "Asia's largest upcoming airport. Trial flights started, commercial launch soon. Connected via upcoming Metro and India's first pod taxi network.",
      position: { x: 88, y: 70 }
    }
  ],

  // Plot Listings
  listings: [
    {
      id: "yamuna-res-120",
      title: "Premium 120 Meter Residential Plot",
      price: "₹1.2 Crore",
      priceRaw: 12000000,
      size: "120 Meter",
      sizeRaw: 120,
      location: "Gaur Yamuna City, Yamuna Expressway",
      type: "residential",
      status: "Available",
      description: "Ready-to-register gated-community plot in Gaur Yamuna City with wide internal roads, basic utilities connected, and 24/7 security.",
      tags: ["GYC Approved", "Registry Ready", "Gated Township"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yamuna-res-160",
      title: "160 Meter Residential Plot",
      price: "₹1.6 Crore",
      priceRaw: 16000000,
      size: "160 Meter",
      sizeRaw: 160,
      location: "Sector 18, Yamuna Expressway",
      type: "residential",
      status: "Available",
      description: "Excellent residential land parcel in YEIDA Sector 18. Located close to upcoming metro path and parks, ideal for independent villa construction.",
      tags: ["YEIDA Authority Plot", "Near Metro Corridor", "Immediate Possession"],
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yamuna-res-200",
      title: "200 Meter Premium Corner Plot",
      price: "₹2.0 Crore",
      priceRaw: 20000000,
      size: "200 Meter",
      sizeRaw: 200,
      location: "Sector 20, Block C, Yamuna Expressway",
      type: "residential",
      status: "Available",
      description: "Corner residential plot in Sector 20, Block C. Directly facing wide green belt, fully developed sector with electricity grids and parks.",
      tags: ["Corner Plot", "Block C", "Registry Done", "Ready to Build"],
      image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yamuna-res-300",
      title: "300 Meter Residential Plot",
      price: "₹3.0 Crore",
      priceRaw: 30000000,
      size: "300 Meter",
      sizeRaw: 300,
      location: "Sector 20, Block D, Yamuna Expressway",
      type: "residential",
      status: "Available",
      description: "Vastu-compliant residential plot in the highly preferred Block D of Sector 20. Peaceful neighborhood with operational water and sewage systems.",
      tags: ["Block D", "Authority Plot", "Vastu Compliant"],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yamuna-res-500",
      title: "500 Meter Premium Villa Plot",
      price: "₹5.0 Crore",
      priceRaw: 50000000,
      size: "500 Meter",
      sizeRaw: 500,
      location: "Sector 20, Block E, Yamuna Expressway",
      type: "residential",
      status: "Reserved",
      description: "Large 500 Meter land parcel located in Sector 20, Block E. Very close to the proposed Pod Taxi line and the Noida International Airport gateway.",
      tags: ["Block E", "Near Pod Taxi Route", "Large Frontage"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yamuna-res-1000",
      title: "1000 Meter Super Premium Plot",
      price: "₹10.0 Crore",
      priceRaw: 100000000,
      size: "1000 Meter",
      sizeRaw: 1000,
      location: "Sector 22, Block D, Yamuna Expressway",
      type: "residential",
      status: "Available",
      description: "Expansive 1000 Meter plot in Sector 22, Block D. Ideal for a luxury estate or multi-family residential development. Top-tier location along the expressway corridor.",
      tags: ["Block D (Sec 22)", "Luxury Estate", "Dual Road Frontage"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yamuna-res-2000",
      title: "2000 Meter Premium Estate Plot",
      price: "₹18.0 Crore",
      priceRaw: 180000000,
      size: "2000 Meter",
      sizeRaw: 2000,
      location: "Sector 17, Yamuna Expressway",
      type: "residential",
      status: "Available",
      description: "Spectacular 2000 Meter estate plot in Sector 17, very close to the Yamuna Expressway high-speed exit. Perfectly clear legal title with verified registry mutation.",
      tags: ["Sector 17", "Gated Compound Option", "Clear Title Guarantee"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yamuna-res-4000",
      title: "4000 Meter Mega Residential Mansion Plot",
      price: "₹30.0 Crore",
      priceRaw: 300000000,
      size: "4000 Meter",
      sizeRaw: 4000,
      location: "Sector VIP, Yamuna Expressway VIP Zone",
      type: "residential",
      status: "Available",
      description: "Ultra-luxury 4000 Meter mansion land parcel in the prime VIP sector of Yamuna Expressway. Maximum size available with 24m wide front road, park facing, and RERA verified.",
      tags: ["VIP Zone", "4000 Meter", "RERA Approved", "High Appreciation"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      slug: "jewar-airport-land-appreciation-2026",
      title: "Jewar Airport Trial Runs Begin: Land Appreciation Rate & Projections",
      date: "June 18, 2026",
      author: "Lakha's Investment Desk",
      readTime: "5 Min Read",
      summary: "With flight testing entering the final phase, property value near the Noida International Airport at Jewar is experiencing unprecedented appreciation. Find out what this means for investors.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
      content: `
        <p>The Noida International Airport at Jewar is entering its final pre-operational phases. With commercial test flights successfully calibrating runway systems, this megaproject has turned the Yamuna Expressway into North India's most highly sought-after investment destination.</p>
        
        <h3>Why Zameen (Land) Near Jewar Airport is Gold</h3>
        <p>Historically, infrastructure projects like international airports multiply nearby land valuation. Unlike apartments, land/plots have limited supply but increasing demand. For investors who purchased agricultural or residential land between Pari Chowk and Jewar three years ago, property values have already climbed significantly.</p>
        
        <h3>YEIDA Planning and Gated Security</h3>
        <p>A crucial factor driving trust in Gaur Yamuna City and surrounding sectors is the systematic planning by the Yamuna Expressway Industrial Development Authority (YEIDA). Gated community plots offer security, electricity grids, and structured drainage systems—meaning zero encroachments and hassle-free registries.</p>
        
        <h3>Appreciation Forecast for 2026-2029</h3>
        <p>Our research indicators suggest that sectors closest to the airport boundary, such as Sector 22D and Sector 18/20, will maintain a steady CAGR of 20% to 25% once flight operations begin. This makes it an ideal medium-term play for both retail investors and developers seeking commercial parcels.</p>
      `
    },
    {
      slug: "yeida-film-city-investment-scope",
      title: "International Film City at Sector 21: A Commercial Land Goldmine",
      date: "May 29, 2026",
      author: "Rakesh Lakha",
      readTime: "4 Min Read",
      summary: "Explore the development blueprints of the 1,000-acre Film City near Gaur Yamuna City, and analyze how commercial plots nearby can yield high rental returns.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      content: `
        <p>The development of the massive 1,000-Acre International Film City in Sector 21 along the Yamuna Expressway has shifted from blueprint to active groundwork. This project, which combines shooting studios, theme parks, commercial towers, and hospitality zones, is creating a huge spillover demand for commercial plots in the nearby sectors.</p>
        
        <h3>The Synergy of Gaur Yamuna City & Film City</h3>
        <p>Located just minutes away from the Film City site, Gaur Yamuna City is positioned as the primary residential and commercial support township. Investors looking to build service apartments, executive offices, commercial complexes, or boutique cafes stand to gain high rental yields due to the incoming crew, tourists, and MNC staff.</p>
        
        <h3>Key Features of YEIDA Sector 21 Corridor</h3>
        <ul>
          <li><strong>Direct Connectivity:</strong> Connects Greater Noida to Agra via 6-lane high-speed expressway.</li>
          <li><strong>Pod Taxi Line:</strong> The planned driverless pod taxi network will directly link Noida Airport to the Film City, stopping right by Gaur Yamuna City.</li>
          <li><strong>MNC Zone:</strong> Adjoining zones are reserved for electronics manufacturing clusters and Toy Parks, multiplying employment density.</li>
        </ul>
        
        <h3>Investment Takeaway</h3>
        <p>Commercial land parcels nearby offer a highly secure yield. If you are looking to secure a commercial plot, choosing RERA-registered projects with wide front roads and bank approvals is the best way to safeguard capital while maximizing rental potential.</p>
      `
    }
  ],
  
  // Executive Leadership & Professional Team
  leadership: [
    {
      name: "Virat Raj Sing Lakha",
      role: "Founder & Chairman",
      image: "image/virat.png",
      bio: "With over 18 years of pioneering experience in land acquisition and development, Virat Raj Sing Lakha has been a trusted advisor to institutional investors and individual land buyers along the Yamuna Expressway. He founded Lakha's Group with the vision of providing absolute legal title transparency and structural security. Under his leadership, the group has successfully developed and delivered premium gating complexes. His deep familiarity with YEIDA zoning laws, land registries, and regional master plans ensures that every investment is secure, verified, and positioned for maximum appreciation."
    },
    {
      name: "Vikram Lakha",
      role: "Co-Founder & Managing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      bio: "Vikram Lakha coordinates township design, infrastructural layout planning, and technical integration for Lakha's Group. Armed with a degree in Urban Development, he focuses on turning vacant land plots into high-yielding residential and commercial community hubs. Vikram manages the group's strategic alliances, banking tie-ups for plot financing, and site development divisions. His client-first advisory model has helped more than 2,500 NRIs and domestic buyers build wealth by securing clear-title holdings near Gaur Yamuna City and Noida International Airport."
    }
  ],
  
  team: [
    {
      name: "Advocate S.K. Chaudhary",
      role: "Head of Legal & Title Verification",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      bio: "Retired authority legal consultant specializing in RERA clearances, registry compliance, and YEIDA master-plan updates."
    },
    {
      name: "Ananya Sharma",
      role: "Senior Investment Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Specializes in airport corridor growth analytics. Connects retail investors with the highest appreciation plot zones."
    },
    {
      name: "Rajesh K. Verma",
      role: "Project Development Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Manages internal gating infrastructures, metalled road layouts, boundary wall setups, and electrical grid linkages."
    },
    {
      name: "Pooja Malhotra",
      role: "Customer Relations Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      bio: "Ensures smooth registry documentation transitions, post-sale document handovers, and coordinate site visit services."
    }
  ]
};

// Expose globally for both module and non-module browser loading
if (typeof window !== 'undefined') {
  window.RealEstateConfig = RealEstateConfig;
}

// If using in modern JS modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RealEstateConfig;
}
