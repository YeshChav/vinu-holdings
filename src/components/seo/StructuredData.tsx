import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList';
  data?: unknown;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vinu Holdings",
          "alternateName": "Vinu Holdings Investment Company",
          "url": "https://vinuholdings.com",
          "logo": "https://vinuholdings.com/logo.svg",
          "description": "Vinu Holdings is a diversified investment company focused on public markets, private equity, and real estate opportunities.",
          "foundingDate": "2019",
          "founder": {
            "@type": "Person",
            "name": "Vinu Holdings Founder"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "United Kingdom"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "info@vinuholdings.com"
          },
          "sameAs": [
            "https://linkedin.com/company/vinu-holdings",
            "https://twitter.com/vinuholdings"
          ],
          "knowsAbout": [
            "Strategic Investments",
            "Real Estate Development", 
            "Portfolio Management",
            "Private Equity",
            "Public Markets"
          ]
        };

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Vinu Holdings",
          "url": "https://vinuholdings.com",
          "description": "Official website of Vinu Holdings - diversified investment company",
          "publisher": {
            "@type": "Organization",
            "name": "Vinu Holdings"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://vinuholdings.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data || []
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
};

export default StructuredData;
