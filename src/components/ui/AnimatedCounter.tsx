'use client';

import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ target, duration = 2000, className = '', prefix = '', suffix = '' }: AnimatedCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const startCount = 0;
    const increment = target / (duration / 16); // 60fps
    let currentCount = startCount;

    const updateCounter = () => {
      currentCount += increment;
      if (currentCount < target) {
        counter.textContent = prefix + Math.floor(currentCount).toString() + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = prefix + target.toString() + suffix;
      }
    };

    // Start animation when element comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);

    return () => observer.disconnect();
  }, [target, duration, prefix, suffix]);

  return (
    <div ref={counterRef} className={className}>
      {prefix}0{suffix}
    </div>
  );
}
