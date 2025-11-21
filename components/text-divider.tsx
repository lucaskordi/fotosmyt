'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TextDivider() {
  const [scrollX, setScrollX] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setScrollX(scrollPosition);
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

  const words = ['EMOÇÃO', 'FOTOGRAFIA', 'FORMATURA', 'SONHO', 'CONQUISTA', 'COMEÇO', 'FUTURO', 'RECORDAÇÃO', 'JORNADA', 'CERIMÔNIA', 'AMIZADE', 'LEMBRANÇA', 'TRANSIÇÃO'];
  const wordsReversed = [...words].reverse();

  const scrollOffset = mounted ? scrollX * 0.5 : 0;
  const scrollOffsetInverted = mounted ? scrollX * 0.5 : 0;

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative w-full overflow-hidden bg-transparent py-6 md:hidden"
    >
      <div className="flex whitespace-nowrap" style={{ transform: `translateX(-${scrollOffset}px)`, willChange: 'transform' }}>
        {[...Array(6)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex space-x-4">
            {words.map((word, index) => (
              <span key={`${groupIndex}-${index}`} className="text-4xl font-bold text-[#e5107a] mx-3">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="flex whitespace-nowrap flex-row-reverse mt-0" style={{ transform: `translateX(${scrollOffsetInverted}px)`, willChange: 'transform' }}>
        {[...Array(6)].map((_, groupIndex) => (
          <div key={`inverted-${groupIndex}`} className="flex space-x-4 flex-row-reverse">
            {wordsReversed.map((word, index) => (
              <span key={`inverted-${groupIndex}-${index}`} className="text-4xl font-bold text-[#0047c7] mx-3">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

