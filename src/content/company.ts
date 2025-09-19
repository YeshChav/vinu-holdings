// 🏢 SINGLE SOURCE OF TRUTH FOR COMPANY INFORMATION
// Update company details here and they change everywhere!

export const COMPANY_INFO = {
  // Basic Company Details
  name: "Vinu Holdings",
  tagline: "Building Great Companies",
  description: "Vinu Holdings combines strategic investments, innovative ventures, and real estate development to create lasting value and growth opportunities.",
  
  // Contact Information
  contact: {
    email: "info@vinuholdings.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business District, Suite 100, City, State 12345"
  },

  // Social Media
  social: {
    linkedin: "https://linkedin.com/company/vinu-holdings",
    twitter: "https://twitter.com/vinuholdings",
    instagram: "https://instagram.com/vinuholdings"
  },

  // Hero Section Content
  hero: {
    headline: "Building Great",
    highlight: "Companies",
    subtitle: "Vinu Holdings combines strategic investments, innovative ventures, and real estate development to create lasting value and growth opportunities.",
    cta: {
      primary: "Our Investments",
      secondary: "Learn More"
    }
  },

  // About Section
  about: {
    title: "About Vinu Holdings",
    description: "We are a diversified holding company focused on building and growing exceptional businesses across multiple industries. Our approach combines strategic vision with operational excellence to create sustainable value.",
    stats: [
      { label: "Years of Experience", value: "15+" },
      { label: "Portfolio Companies", value: "25+" },
      { label: "Total Investments", value: "$500M+" },
      { label: "Team Members", value: "100+" }
    ]
  },

  // Mission & Vision
  mission: {
    title: "Our Mission",
    content: "To identify, acquire, and develop exceptional businesses that create lasting value for our stakeholders and communities."
  },

  vision: {
    title: "Our Vision", 
    content: "To be the leading diversified holding company known for building great companies and creating sustainable growth opportunities."
  },

  // Values
  values: [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from investment decisions to operational execution."
    },
    {
      title: "Integrity",
      description: "We conduct business with the highest standards of integrity and transparency."
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously seek new opportunities for growth and improvement."
    },
    {
      title: "Partnership",
      description: "We build strong partnerships with our portfolio companies, investors, and stakeholders."
    }
  ]
} as const;
