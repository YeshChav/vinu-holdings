'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    if (!video1 || !video2) return;

    const handleVideoEnd = () => {
      if (isTransitioning) return;
      
      setIsTransitioning(true);
      
      if (currentVideo === 1) {
        // Fade out video1, fade in video2
        video1.style.opacity = '0';
        video2.style.opacity = '1';
        video2.play();
        setCurrentVideo(2);
      } else {
        // Fade out video2, fade in video1
        video2.style.opacity = '0';
        video1.style.opacity = '1';
        video1.play();
        setCurrentVideo(1);
      }

      // Reset transition state after fade completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    };

    // Add event listeners to both videos
    video1.addEventListener('ended', handleVideoEnd);
    video2.addEventListener('ended', handleVideoEnd);

    return () => {
      video1.removeEventListener('ended', handleVideoEnd);
      video2.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentVideo, isTransitioning]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Video 1 */}
      <video
        ref={video1Ref}
        autoPlay
        muted
        playsInline
        loop={false}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        style={{ opacity: currentVideo === 1 ? 1 : 0 }}
      >
        <source src="/videos/hero/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Video 2 */}
      <video
        ref={video2Ref}
        muted
        playsInline
        loop={false}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        style={{ opacity: currentVideo === 2 ? 1 : 0 }}
      >
        <source src="/videos/hero/hero-background1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
