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
  return (
    <img
      src="/logo.svg"
      alt={`${SITE_CONFIG.name} Logo`}
      width={width}
      height={height}
      className={cn('logo', className)}
    />
  );
};

export default Logo;
