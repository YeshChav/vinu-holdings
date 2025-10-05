import React from 'react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/config';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'full' | 'monogram' | 'text';
  color?: 'gold' | 'white' | 'black';
}

const Logo: React.FC<LogoProps> = ({
  className,
  width = SITE_CONFIG.logo.default.width,
  height = SITE_CONFIG.logo.default.height,
  variant = 'full',
  color = 'gold',
}) => {
  // Determine logo source based on variant
  const logoSrc = variant === 'monogram' ? '/logo.svg' : '/logo.svg';
  
  // Apply color-based styling
  const colorClasses = {
    gold: '', // No filter needed - use original golden color from SVG
    white: 'filter brightness-0 invert',
    black: 'filter brightness-0'
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoSrc}
      alt={`${SITE_CONFIG.name} Logo`}
      width={width}
      height={height}
      className={cn('logo', colorClasses[color], className)}
    />
  );
};

export default Logo;
