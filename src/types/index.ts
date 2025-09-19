// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface Venture {
  id: string;
  name: string;
  description: string;
  href: string;
  color: string;
  icon: React.ReactNode;
}

// Page metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

// Investment types
export interface Investment {
  id: string;
  name: string;
  description: string;
  sector: string;
  status: 'active' | 'planning' | 'research';
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Component props types
export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}
