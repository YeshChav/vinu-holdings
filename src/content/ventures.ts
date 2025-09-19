// 🚀 SINGLE SOURCE OF TRUTH FOR ALL VENTURE INFORMATION
// Update venture details here and they change everywhere!

export const VENTURES = {
  strategic: {
    id: "strategic-investments",
    name: "Strategic Investments",
    tagline: "Building Tomorrow's Leaders",
    description: "We identify and invest in high-potential companies with strong fundamentals and growth potential.",
    
    // Hero Section
    hero: {
      title: "Strategic Investments",
      subtitle: "Building Tomorrow's Leaders",
      description: "We identify and invest in high-potential companies with strong fundamentals and growth potential. Our strategic approach focuses on long-term value creation and sustainable growth."
    },

    // Investment Philosophy
    philosophy: [
      {
        title: "Value Creation",
        description: "We focus on companies with strong fundamentals and clear paths to value creation.",
        icon: "📈"
      },
      {
        title: "Long-term Growth",
        description: "Our investments are designed for sustainable, long-term growth rather than quick returns.",
        icon: "🌱"
      },
      {
        title: "Strategic Partnership",
        description: "We work closely with management teams to provide strategic guidance and operational support.",
        icon: "🤝"
      }
    ],

    // Portfolio Highlights
    portfolio: [
      {
        name: "TechCorp Solutions",
        industry: "Technology",
        description: "Leading provider of enterprise software solutions",
        investment: "$50M Series B"
      },
      {
        name: "GreenEnergy Inc",
        industry: "Clean Energy", 
        description: "Innovative renewable energy technology company",
        investment: "$75M Growth Capital"
      },
      {
        name: "HealthTech Innovations",
        industry: "Healthcare",
        description: "Revolutionary medical device manufacturer",
        investment: "$30M Series A"
      }
    ],

    // CTA Section
    cta: {
      title: "Ready to Partner with Us?",
      description: "We're always looking for exceptional companies with strong growth potential.",
      button: "Contact Our Investment Team"
    }
  },

  cafe: {
    id: "cafe-ventures",
    name: "Café Ventures",
    tagline: "Crafting Coffee Culture",
    description: "We create exceptional coffee experiences through innovative concepts and premium quality.",
    
    // Hero Section
    hero: {
      title: "Café Ventures",
      subtitle: "Crafting Coffee Culture",
      description: "We create exceptional coffee experiences through innovative concepts and premium quality. Our cafes are designed to be community hubs where people connect over great coffee."
    },

    // Concept Details
    concepts: [
      {
        title: "Artisan Coffee",
        description: "We source the finest beans and craft each cup with precision and care.",
        icon: "☕"
      },
      {
        title: "Community Spaces",
        description: "Our cafes are designed to bring people together in warm, welcoming environments.",
        icon: "🏠"
      },
      {
        title: "Sustainable Practices",
        description: "We're committed to environmentally responsible sourcing and operations.",
        icon: "🌱"
      }
    ],

    // Locations
    locations: [
      {
        name: "Downtown Central",
        address: "123 Main Street, Downtown",
        hours: "6:00 AM - 8:00 PM",
        features: ["WiFi", "Outdoor Seating", "Meeting Rooms"]
      },
      {
        name: "University District",
        address: "456 College Ave, University Area",
        hours: "6:30 AM - 10:00 PM",
        features: ["Study Areas", "Late Night Hours", "Student Discounts"]
      },
      {
        name: "Business Plaza",
        address: "789 Corporate Blvd, Business District",
        hours: "5:30 AM - 7:00 PM",
        features: ["Quick Service", "Catering", "Corporate Accounts"]
      }
    ],

    // CTA Section
    cta: {
      title: "Visit Our Cafes",
      description: "Experience the perfect blend of great coffee and community atmosphere.",
      button: "Find a Location Near You"
    }
  },

  realEstate: {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Building Communities",
    description: "We develop and manage premium real estate projects that enhance communities and create lasting value.",
    
    // Hero Section
    hero: {
      title: "Real Estate Development",
      subtitle: "Building Communities",
      description: "We develop and manage premium real estate projects that enhance communities and create lasting value. Our projects combine innovative design with sustainable practices."
    },

    // Development Focus
    focus: [
      {
        title: "Residential Communities",
        description: "Creating beautiful, functional living spaces that enhance quality of life.",
        icon: "🏘️"
      },
      {
        title: "Commercial Properties",
        description: "Developing modern office spaces and retail centers that drive economic growth.",
        icon: "🏢"
      },
      {
        title: "Mixed-Use Developments",
        description: "Integrating residential, commercial, and recreational spaces for vibrant communities.",
        icon: "🏙️"
      }
    ],

    // Current Projects
    projects: [
      {
        name: "Riverside Residences",
        type: "Residential",
        location: "Riverside District",
        status: "Under Construction",
        description: "Luxury condominiums with river views and premium amenities"
      },
      {
        name: "Business Innovation Center",
        type: "Commercial",
        location: "Tech Corridor",
        status: "Planning Phase",
        description: "Modern office complex designed for growing technology companies"
      },
      {
        name: "Downtown Commons",
        type: "Mixed-Use",
        location: "City Center",
        status: "Completed",
        description: "Integrated development with retail, office, and residential spaces"
      }
    ],

    // CTA Section
    cta: {
      title: "Explore Our Properties",
      description: "Discover premium real estate opportunities in prime locations.",
      button: "View Available Properties"
    }
  }
} as const;
