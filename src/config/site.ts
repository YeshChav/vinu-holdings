// ⚙️ SINGLE SOURCE OF TRUTH FOR SITE CONFIGURATION
// Update site settings here and they change everywhere!

export const SITE_CONFIG = {
  // Basic Site Information
  name: "Vinu Holdings",
  title: "Vinu Holdings - Building Great Companies",
  description: "Vinu Holdings combines strategic investments, innovative ventures, and real estate development to create lasting value and growth opportunities.",
  url: "https://vinuholdings.com",
  
  // SEO Configuration
  seo: {
    title: "Vinu Holdings - Building Great Companies",
    description: "Strategic investments, innovative ventures, and real estate development. Building lasting value and growth opportunities.",
    keywords: ["investment", "ventures", "real estate", "business development", "strategic partnerships"],
    author: "Vinu Holdings",
    ogImage: "/og-image.jpg"
  },

  // Logo Configuration
  logo: {
    default: {
      width: 500,
      height: 300
    },
    navigation: {
      width: 350,
      height: 120
    },
    footer: {
      width: 400,
      height: 160
    }
  },

  // Layout Configuration
  layout: {
    navigation: {
      height: "h-24"
    },
    hero: {
      padding: "pt-24 sm:pt-26 md:pt-28"
    }
  },

  // Animation Configuration
  animations: {
    dropdown: {
      delay: 150 // milliseconds
    }
  },

  // Feature Flags
  features: {
    devTools: false,
    analytics: true,
    darkMode: false
  }
} as const;
