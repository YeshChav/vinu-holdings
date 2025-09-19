import React from 'react';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  icon?: React.ReactNode;
  background?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  icon,
  background = 'gradient-bg',
}) => {
  return (
    <section className={`${background} pt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {icon && (
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              {icon}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
            {subtitle && (
              <>
                <br />
                <span className="gold-accent">{subtitle}</span>
              </>
            )}
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryButton && (
                <Button
                  href={primaryButton.href}
                  variant="primary"
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600"
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  href={secondaryButton.href}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
