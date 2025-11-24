'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden pb-40 md:pb-0 bg-white">
      <div className="absolute bottom-60 left-0 right-0 z-[-1] w-full overflow-hidden bg-transparent py-4 translate-y-1/2 hidden md:block">
        <div className="flex animate-scroll-slow whitespace-nowrap">
          <div className="flex space-x-8">
            {['NOSSAS FOTOS CONTAM A SUA HISTÓRIA.'].map((word, index) => (
              <span key={index} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e5107a] mx-6">
                {word}
              </span>
            ))}
          </div>
          <div className="flex space-x-8 ml-8">
            {['NOSSAS FOTOS CONTAM A SUA HISTÓRIA.'].map((word, index) => (
              <span key={`duplicate-${index}`} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e5107a] mx-6">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative z-0 w-full translate-y-0 md:-translate-y-8 top-0 overflow-hidden">
        <div className="w-full relative pb-[140%] md:pb-[56.25%] min-h-[50px] md:min-h-0">
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
      
      <div className="absolute top-0 left-0 right-0 z-20 w-full">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md w-full"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
      </div>

      <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-end justify-center pb-32 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative"
        >
          <div className="absolute inset-0 bg-[#0047c7]/50 backdrop-blur-md rounded-2xl -z-10"></div>
          <div className="relative p-6 sm:p-8 lg:p-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white drop-shadow-2xl text-center"
            >
              <span className="drop-shadow-lg">
                Somente hoje você terá acesso ao Link Oficial de Fotos da Colação pelo valor promocional de <span className="text-white">R$ 590,00</span>. Não deixe de aproveitar essa oportunidade.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-white mb-3 font-medium drop-shadow-lg text-center"
            >
              O fim do Ensino Médio representa a principal transição dessa geração. Hoje é um dia que merece ser guardado para sempre!
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 container mx-auto px-4 sm:px-6 lg:px-8 z-30 flex items-end justify-center overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center mb-12 md:mb-8 relative"
        >
          <motion.a
            href="https://studio-myt.pay.yampi.com.br/r/9LZJFD12RY"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#0047c7] to-[#0047c7] hover:from-[#0035a0] hover:to-[#0035a0] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Garantir Minhas Fotos Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

