import React from 'react';

interface CheckBadgeProps {
  className?: string;
}

export default function CheckBadge({ className = "" }: CheckBadgeProps) {
  return (
    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-white shadow-sm ${className}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}
