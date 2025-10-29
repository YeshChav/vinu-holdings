'use client';

import React from 'react';

interface GlowingLineProps {
  direction: 'left' | 'right';
  className?: string;
  animated?: boolean;
  intensity?: 'subtle' | 'medium' | 'strong';
}

const GlowingLine: React.FC<GlowingLineProps> = ({ 
  direction, 
  className = '', 
  animated = false,
  intensity = 'medium'
}) => {
  const glowIntensity = {
    subtle: 1,
    medium: 1.5,
    strong: 2.5
  };

  const filterId = `${direction}Glow${animated ? 'Animated' : ''}${intensity}`;
  const gradientId = `${direction}Gradient${animated ? 'Animated' : ''}${intensity}`;

  return (
    <svg width="100%" height="2" viewBox="0 0 100 2" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id={filterId} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation={glowIntensity[intensity]} result="coloredBlur">
            {animated && (
              <animate 
                attributeName="stdDeviation" 
                values={`${glowIntensity[intensity]};${glowIntensity[intensity] + 1};${glowIntensity[intensity]}`}
                dur="3s" 
                repeatCount="indefinite"
              />
            )}
          </feGaussianBlur>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{
            stopColor: '#ffffff', 
            stopOpacity: direction === 'left' ? 0.4 : 0.9
          }} />
          <stop offset="50%" style={{
            stopColor: '#ffffff', 
            stopOpacity: 1
          }} />
          <stop offset="100%" style={{
            stopColor: '#ffffff', 
            stopOpacity: direction === 'left' ? 0.9 : 0.4
          }} />
        </linearGradient>
      </defs>
      <rect 
        x="0" 
        y="0" 
        width="100%" 
        height="2" 
        rx="1" 
        fill={`url(#${gradientId})`} 
        filter={`url(#${filterId})`} 
      />
    </svg>
  );
};

export default GlowingLine;
