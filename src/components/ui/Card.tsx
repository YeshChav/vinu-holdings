import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  href,
  className,
  children,
}) => {
  const cardClasses = cn(
    'bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200',
    href && 'hover:scale-105 transition-transform duration-200 cursor-pointer',
    className
  );

  const content = (
    <>
      {icon && (
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
};

export default Card;
