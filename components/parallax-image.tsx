'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ParallaxImage() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const scrollPosition = window.scrollY;
        
        const imageExtraHeight = elementHeight * 0.25;
        const maxParallax = imageExtraHeight;
        const parallaxValue = (elementTop - windowHeight / 2) * -0.2;
        const clampedParallax = Math.max(-maxParallax, Math.min(maxParallax, parallaxValue));
        
        setScrollY(clampedParallax);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translateY = mounted ? scrollY : 0;

  return (
    <div ref={containerRef} className="relative w-full h-[150px] md:h-[350px] overflow-hidden">
      <div 
        className="absolute left-0 w-full"
        style={{ 
          height: '300%',
          top: '-80%',
          transform: `translateY(${translateY}px)`,
          willChange: 'transform'
        }}
      >
        <Image
          src="/img01.webp"
          alt=""
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center top' }}
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}

