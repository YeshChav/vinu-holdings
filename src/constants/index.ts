// 🚀 CENTRALIZED IMPORTS - Single Source of Truth!
// All content now comes from dedicated content files

export { NAVIGATION_ITEMS as NAV_ITEMS } from '@/content/navigation';
export { VENTURES } from '@/content/ventures';
export { COMPANY_INFO } from '@/content/company';

// Investment sectors
export const INVESTMENT_SECTORS = [
  {
    name: 'Technology & Innovation',
    items: [
      'Software and SaaS companies',
      'Fintech and digital payments',
      'AI and machine learning startups',
    ],
    color: 'indigo',
  },
  {
    name: 'Healthcare & Life Sciences',
    items: [
      'Biotech and pharmaceuticals',
      'Medical devices and diagnostics',
      'Digital health solutions',
    ],
    color: 'green',
  },
  {
    name: 'Consumer & Retail',
    items: [
      'E-commerce and marketplaces',
      'Premium lifestyle brands',
      'Food and beverage companies',
    ],
    color: 'yellow',
  },
  {
    name: 'Industrial & Energy',
    items: [
      'Renewable energy projects',
      'Manufacturing and automation',
      'Infrastructure and logistics',
    ],
    color: 'purple',
  },
] as const;

// Social links
export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
] as const;
