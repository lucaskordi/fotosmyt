'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isHidden, setIsHidden] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [headerReady, setHeaderReady] = useState(false);
  const lastScrollY = useRef(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Aguardar o blur estar pronto antes de mostrar o header
    const timer = setTimeout(() => {
      setHeaderReady(true);
    }, 300);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setIsOverHero(currentScrollY < heroHeight - 100);
      }
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section ref={heroRef} className="relative w-full flex items-center justify-center overflow-hidden pb-40 md:pb-0">
      <div className="absolute bottom-60 left-0 right-0 z-[-1] w-full overflow-hidden bg-transparent py-4 translate-y-1/2 hidden md:block">
        <div className="flex animate-scroll-slow whitespace-nowrap">
          <div className="flex space-x-8">
            {['EMOÇÃO', 'FOTOGRAFIA', 'FORMATURA', 'SONHO', 'CONQUISTA', 'COMEÇO', 'FUTURO', 'RECORDAÇÃO', 'JORNADA', 'CERIMÔNIA', 'AMIZADE', 'LEMBRANÇA', 'TRANSIÇÃO'].map((word, index) => (
              <span key={index} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e5107a] mx-6">
                {word}
              </span>
            ))}
          </div>
          <div className="flex space-x-8 ml-8">
            {['EMOÇÃO', 'FOTOGRAFIA', 'FORMATURA', 'SONHO', 'CONQUISTA', 'COMEÇO', 'FUTURO', 'RECORDAÇÃO', 'JORNADA', 'CERIMÔNIA', 'AMIZADE', 'LEMBRANÇA', 'TRANSIÇÃO'].map((word, index) => (
              <span key={`duplicate-${index}`} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e5107a] mx-6">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative z-0 w-full translate-y-0 md:-translate-y-8 top-0 overflow-hidden md:overflow-visible">
        <div className="w-full relative pb-[140%] md:pb-[62%] min-h-[50px] md:min-h-[700px]">
          <Image
            src="/heroat.png"
            alt="Formatura"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-contain md:object-cover md:scale-100 scale-[2] object-top absolute top-0 left-0 origin-top md:origin-center"
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: headerReady ? 1 : 0,
          y: isHidden ? -100 : 0,
        }}
        transition={{
          opacity: { duration: 0.5, delay: headerReady ? 0 : 0 },
          y: { duration: 0.3, ease: 'easeInOut' },
        }}
        className="fixed top-0 left-0 right-0 z-20 w-full"
        style={{ visibility: headerReady ? 'visible' : 'hidden' }}
      >
        <motion.header
          className={`${isOverHero ? 'bg-white/10' : 'bg-[#e5107a]/50'} backdrop-blur-md w-full transition-colors duration-300`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex justify-center"
            >
              <Image
                src="/LogoMYT.svg"
                alt="Studio MYT"
                width={120}
                height={48}
                priority
                className="h-auto"
              />
            </motion.div>
          </div>
          <div className="relative h-0.5 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0047c7] to-transparent"></div>
            <div className="absolute inset-0 animate-light-sweep"></div>
          </div>
        </motion.header>
      </motion.div>

      <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-end justify-center pb-32 md:pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl relative"
        >
          <div className="absolute inset-0 bg-[#0047c7]/50 backdrop-blur-md rounded-2xl -z-10"></div>
          <div className="relative p-6 sm:p-8 lg:p-10">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white drop-shadow-2xl text-center"
            >
              <span className="drop-shadow-lg">
                Suas fotos de formatura, prontas para serem revisitadas sempre que a saudade bater
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-white mb-3 font-medium drop-shadow-lg text-center"
            >
              <span className="block md:inline">O fim de um ciclo merece ser lembrado.</span>
              <span className="block md:inline md:ml-1">E bem registrado.</span>
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 container mx-auto px-4 sm:px-6 lg:px-8 z-30 flex items-end justify-center overflow-hidden md:overflow-visible">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center mb-12 md:mb-8 relative"
        >
          <motion.a
            href="https://studio-myt.pay.yampi.com.br/r/9LZJFD12RY"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-[#0047c7] to-[#0047c7] hover:from-[#0035a0] hover:to-[#0035a0] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Garantir Minhas Fotos Agora</span>
            <div className="absolute inset-0 animate-light-sweep"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

