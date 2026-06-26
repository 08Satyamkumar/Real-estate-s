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
      id: "noida-farm-150",
      title: "Luxury 2 Acre Farmhouse Plot",
      price: "₹8.5 Crore",
      priceRaw: 85000000,
      size: "2 Acre",
      sizeRaw: 8000,
      location: "Sector 150, Noida",
      region: "noida",
      category: "farmhouse",
      status: "Available",
      description: "Super luxury green farmhouse land parcel located in Sector 150, Noida. Located in the lowest density sector, surrounded by premium golf courses, sports hubs, and excellent connectivity to Noida Expressway.",
      tags: ["Noida Authority", "Golf Course Facing", "24/7 Security"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "North-East Corner",
        roadSize: "45 Meter",
        authority: "Noida Authority",
        reraNo: "Not Applicable (Freehold/Authority Mutated)"
      },
      connectivity: [
        "2 mins from Noida-Greater Noida Expressway",
        "5 mins from Sector 148 Metro Station",
        "Direct access to upcoming Yamuna Expressway link"
      ]
    },
    {
      id: "noida-res-146",
      title: "200 Meter Premium Residential Plot",
      price: "₹2.2 Crore",
      priceRaw: 22000000,
      size: "200 Meter",
      sizeRaw: 200,
      location: "Sector 146, Noida",
      region: "noida",
      category: "residential-plot",
      status: "Available",
      description: "Premium residential plot in Noida Sector 146. A highly developing sector next to the metro station. Fully gated compound infrastructure with water, electricity grid connections, and parks.",
      tags: ["Near Metro Station", "Gated Security", "Registry Ready"],
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "East",
        roadSize: "18 Meter",
        authority: "Noida Authority",
        reraNo: "RERA Mutated"
      },
      connectivity: [
        "Walking distance from Sector 146 Metro Station",
        "5 mins from Sector 150 Sports City",
        "Connected to Noida Expressway via internal 45m road"
      ]
    },
    {
      id: "noida-comm-135",
      title: "Grade-A Commercial Office Space",
      price: "₹95 Lakhs",
      priceRaw: 9500000,
      size: "100 Meter",
      sizeRaw: 100,
      location: "Noida West, Sector 135",
      region: "noida",
      category: "commercial",
      status: "Available",
      description: "Fully furnished corporate office space in Sector 135 corporate hub. High rental yield potential with premium IT MNCs operational nearby. Modern central air-conditioning, high-speed lifts, and power backup.",
      tags: ["IT Hub Zone", "MNC Occupied", "High Rental Yield"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "North-West",
        roadSize: "30 Meter",
        authority: "Noida Authority",
        reraNo: "UPRERAPRJ9856"
      },
      connectivity: [
        "Directly on Noida West Sector 135 Arterial Road",
        "Adjacent to major IT SEZ (Accenture, Metlife)",
        "10 mins drive from Noida City Center"
      ]
    },
    {
      id: "grnoida-res-swarn",
      title: "160 Meter Freehold Residential Plot",
      price: "₹1.8 Crore",
      priceRaw: 18000000,
      size: "160 Meter",
      sizeRaw: 160,
      location: "Swarn Nagri, Greater Noida",
      region: "greater-noida",
      category: "residential-plot",
      status: "Available",
      description: "Clear-title freehold residential plot in the VIP Sector Swarn Nagri, Greater Noida. The sector boasts mature greenery, active residential community, wide metalled roads, and nearby club facilities.",
      tags: ["Freehold Plot", "VIP Sector", "Mature Gated Community"],
      image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "South-East",
        roadSize: "12 Meter",
        authority: "Greater Noida Authority",
        reraNo: "Not Applicable"
      },
      connectivity: [
        "5 mins from Pari Chowk",
        "Close to Grand Venice Mall & commercial centers",
        "Directly connected to GN Expressway"
      ]
    },
    {
      id: "grnoida-flat-delta",
      title: "3 BHK Premium Apartment - Delta 3",
      price: "₹1.2 Crore",
      priceRaw: 12000000,
      size: "150 Meter",
      sizeRaw: 150,
      location: "Sector Delta 3, Greater Noida",
      region: "greater-noida",
      category: "flat-studio",
      status: "Available",
      description: "Spacious 3 Bedroom luxury apartment located in Delta 3, Greater Noida. Fully finished modular kitchen, double balconies facing internal green lawns, swimming pool, club house, and reserved basement parking.",
      tags: ["3 BHK Ready", "Club House", "Authority Mutated"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "Park Facing North",
        roadSize: "24 Meter",
        authority: "Greater Noida Authority",
        reraNo: "UPRERAPRJ4521"
      },
      connectivity: [
        "2 mins from Delta Metro Station",
        "Close to local sector markets and schools",
        "10 mins drive to Knowledge Park universities"
      ]
    },
    {
      id: "grnoida-comm-kp3",
      title: "Commercial Studio Shop / Apartment",
      price: "₹55 Lakhs",
      priceRaw: 5500000,
      size: "60 Meter",
      sizeRaw: 60,
      location: "Knowledge Park 3, Greater Noida",
      region: "greater-noida",
      category: "commercial",
      status: "Available",
      description: "Multi-utility studio shop and service suite in Knowledge Park 3. Excellent location with active footfall from adjoining universities (Sharda, Galgotias). Perfect for student rentals, food outlets, or offices.",
      tags: ["Student Hub", "High Footfall", "Rental Ready"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "Main Road Facing",
        roadSize: "30 Meter",
        authority: "Greater Noida Authority",
        reraNo: "RERA Registered"
      },
      connectivity: [
        "Opposite Knowledge Park Metro Station",
        "Surrounded by 15+ major college complexes",
        "5 mins from Pari Chowk Commercial District"
      ]
    },
    {
      id: "yeida-res-18",
      title: "120 Meter Authority Plot - Sector 18",
      price: "₹1.5 Crore",
      priceRaw: 15000000,
      size: "120 Meter",
      sizeRaw: 120,
      location: "Sector 18, Yamuna Expressway",
      region: "yeida",
      category: "residential-plot",
      status: "Available",
      description: "YEIDA Authority allotted residential plot in Sector 18. Located along the high-growth corridor of Yamuna Expressway. Sector fully planned with parks, metro connectivity, sewage grids, and wide roads.",
      tags: ["YEIDA Allotted", "100% Registry Done", "Near Noida Airport"],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "North",
        roadSize: "12 Meter",
        authority: "YEIDA (Yamuna Expressway Authority)",
        reraNo: "YEIDA Allotted"
      },
      connectivity: [
        "10 mins drive to Noida International Airport (Jewar)",
        "5 mins from YEIDA Film City Corridor",
        "Direct flyover access to Yamuna Expressway"
      ]
    },
    {
      id: "yeida-res-20",
      title: "300 Meter VIP Plot - Sector 20",
      price: "₹3.0 Crore",
      priceRaw: 30000000,
      size: "300 Meter",
      sizeRaw: 300,
      location: "Sector 20, Block D, Yamuna Expressway",
      region: "yeida",
      category: "residential-plot",
      status: "Available",
      description: "Premium VIP Sector 20, Block D residential plot. Corner layout with park facing view. Ready for immediate boundary wall construction, electricity connection, and registry mutation.",
      tags: ["VIP Block D", "Park Facing", "Immediate Mutation"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "North-East Corner",
        roadSize: "24 Meter",
        authority: "YEIDA (Yamuna Expressway Authority)",
        reraNo: "YEIDA Allotted"
      },
      connectivity: [
        "10 mins from Noida International Airport",
        "Connected via 24m wide sector road",
        "Near proposed Pod Taxi terminal station"
      ]
    },
    {
      id: "yeida-ind-33",
      title: "300 Meter Toy Park Industrial Plot",
      price: "₹1.8 Crore",
      priceRaw: 18000000,
      size: "300 Meter",
      sizeRaw: 300,
      location: "Sector 33, Yamuna Expressway",
      region: "yeida",
      category: "industrial",
      status: "Available",
      description: "Prime industrial land parcel in YEIDA Sector 33 Manufacturing and Toy Park Cluster. Heavy vehicular access roads, 3-phase electricity grids, dedicated industrial water lines, and effluent treatment links.",
      tags: ["Industrial Zoning", "Toy Park Cluster", "3-Phase Power ready"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "Wide Road Facing",
        roadSize: "30 Meter",
        authority: "YEIDA Authority",
        reraNo: "Industrial Allotted"
      },
      connectivity: [
        "Direct access to Cargo Terminal Noida Airport",
        "Adjacent to Eastern Peripheral Expressway link",
        "Excellent logistics connection to Delhi-NCR"
      ]
    },
    {
      id: "yeida-flat-gaur",
      title: "Gaur Yamuna City Luxury Apartment",
      price: "₹85 Lakhs",
      priceRaw: 8500000,
      size: "135 Meter",
      sizeRaw: 135,
      location: "Gaur Yamuna City, Yamuna Expressway",
      region: "yeida",
      category: "flat-studio",
      status: "Available",
      description: "Premium high-rise apartment inside the 250-Acre integrated township of Gaur Yamuna City. Excellent township features like a massive Yamuna Lake, active multi-speciality hospital, school, and shopping arcades.",
      tags: ["BY GAUR", "Gaur Yamuna City", "Yamuna Lake View"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "Lake Facing",
        roadSize: "30 Meter",
        authority: "YEIDA Mutated Gated",
        reraNo: "UPRERAPRJ8875"
      },
      connectivity: [
        "Direct access on Yamuna Expressway (18 KM Milestone)",
        "Inside secure fully developed gated township",
        "15 mins drive to Jewar Airport"
      ]
    },
    {
      id: "yeida-flat-ats",
      title: "ATS Allure Premium Apartment",
      price: "₹90 Lakhs",
      priceRaw: 9000000,
      size: "140 Meter",
      sizeRaw: 140,
      location: "Sector 22D, Yamuna Expressway",
      region: "yeida",
      category: "flat-studio",
      status: "Reserved",
      description: "ATS Allure signature luxury apartment in Sector 22D. Known for high building construction standards, green layout density, and clubhouse facilities. Ready to move unit with wooden flooring, premium fittings.",
      tags: ["BY ATS", "Sector 22D VIP", "Ready to Move"],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "East Park Facing",
        roadSize: "24 Meter",
        authority: "YEIDA Approved Layout",
        reraNo: "UPRERAPRJ11420"
      },
      connectivity: [
        "Opposite upcoming Formula 1 Buddh Circuit area",
        "12 mins drive to Noida International Airport",
        "Direct service lane access on Expressway"
      ]
    },
    {
      id: "yeida-comm-19",
      title: "Retail Shop - Sector 19 Commercial Complex",
      price: "₹75 Lakhs",
      priceRaw: 7500000,
      size: "50 Meter",
      sizeRaw: 50,
      location: "Sector 19, Yamuna Expressway",
      region: "yeida",
      category: "commercial",
      status: "Available",
      description: "Premium retail corner shop in Sector 19 local commercial complex. High visibility layout, ideal for pharmacy, grocery shops, service offices, or dining spaces. Active daily footfalls from adjacent housing towers.",
      tags: ["Corner Retail Shop", "Sector 19 Complex", "Double Height Ceiling"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      specifications: {
        facing: "North Corridor Corner",
        roadSize: "30 Meter",
        authority: "YEIDA Approved Complex",
        reraNo: "Commercial Registered"
      },
      connectivity: [
        "Directly next to Sector 19 residential housing gate",
        "5 mins from Yamuna Expressway link road",
        "10 mins to upcoming YEIDA Film City"
      ]
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
  ],

  // Custom Residential Sector and Price Details from user images
  residentialDetails: {
    plot: {
      noida: {
        priceRange: "₹1 Lakh to ₹2 Lakh per Sq.m",
        sectors: ["83", "151", "150", "148", "147", "146", "144"],
        noidaWestSectors: ["135", "134", "126", "127", "150", "135", "151"]
      },
      greaterNoida: {
        priceRange: "₹1 Lakh to ₹2 Lakh per Sq.m",
        sectors: ["Alpha", "Beta", "Gamma", "Sw. Nagri", "Pi 3", "Omicrone", "Delta", "Sigma", "Chi - V", "Chi - 3", "Pi 2, 3"]
      },
      yeida: {
        priceRange: "₹1 Lakh to ₹1.8 Lakh per Sq.m",
        sectors: ["25", "17A", "22D", "22-E", "18", "20", "19", "28", "29", "33", "32"],
        others: ["Gaur", "ACE", "ATS", "OASIS"]
      }
    },
    flat: {
      noida: {
        priceRange: "₹60 Lakh to ₹10 Crore",
        sectors: ["83", "151", "150", "148", "147", "146", "144"],
        noidaWestSectors: ["135", "134", "126", "127", "150", "135", "151"]
      },
      greaterNoida: {
        priceRange: "₹60 Lakh to ₹10 Crore",
        sectors: ["Alpha", "Beta", "Gamma", "Sw. Nagri", "Pi 3", "Omicrone", "Delta", "Sigma", "Chi - V", "Chi - 3", "Pi 2, 3"]
      },
      yeida: {
        priceRange: "₹60 Lakh to ₹10 Crore",
        sectors: ["25", "17A", "22D", "22-E", "18", "20", "19", "28", "29", "33", "32"],
        others: ["Gaur", "ACE", "ATS", "OASIS"]
      }
    }
  }
};

// Expose globally for both module and non-module browser loading
if (typeof window !== 'undefined') {
  window.RealEstateConfig = RealEstateConfig;
}

// If using in modern JS modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RealEstateConfig;
}
