'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ParallaxImage() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [imageSrc, setImageSrc] = useState('/img01.webp');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setImageSrc(`/img01.webp?v=${Date.now()}`);
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementTop = rect.top;
            const elementHeight = rect.height;
            
            const imageExtraHeight = elementHeight * 0.25;
            const maxParallax = imageExtraHeight;
            const parallaxValue = (elementTop - windowHeight / 2) * -0.2;
            const clampedParallax = Math.max(-maxParallax, Math.min(maxParallax, parallaxValue));
            
            setScrollY(clampedParallax);
          }
          ticking = false;
        });
        ticking = true;
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
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-[150px] md:h-[350px] overflow-hidden"
    >
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
          src={imageSrc}
          alt=""
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center top' }}
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="animate-logo-3d">
          <Image
            src="/LogoMYT.svg"
            alt="Studio MYT"
            width={150}
            height={60}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

