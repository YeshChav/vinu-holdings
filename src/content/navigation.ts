// 🧭 SINGLE SOURCE OF TRUTH FOR NAVIGATION
// Update navigation items here and they change everywhere!

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/",
    type: "link" as const
  },
  {
    label: "About",
    href: "/about",
    type: "link" as const
  },
  {
    label: "Ventures",
    type: "dropdown" as const,
    items: [
      {
        label: "Strategic Investments",
        href: "/strategic-investments",
        description: "Building Tomorrow's Leaders"
      },
      {
        label: "Café Ventures", 
        href: "/cafe-ventures",
        description: "Crafting Coffee Culture"
      },
      {
        label: "Real Estate",
        href: "/real-estate",
        description: "Building Communities"
      }
    ]
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    type: "link" as const
  },
  {
    label: "Contact",
    href: "/contact",
    type: "link" as const
  }
] as const;

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" }
  ],
  ventures: [
    { label: "Strategic Investments", href: "/strategic-investments" },
    { label: "Café Ventures", href: "/cafe-ventures" },
    { label: "Real Estate", href: "/real-estate" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" }
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Investor Relations", href: "/investors" },
    { label: "Media Inquiries", href: "/media" }
  ]
} as const;
