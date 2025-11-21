'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#e5107a] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="mb-6">
            <Image
              src="/LogoMYT.svg"
              alt="Studio MYT"
              width={150}
              height={60}
              className="h-auto"
            />
          </div>
          <p className="text-white text-center">
            © {new Date().getFullYear()} Studio MYT. Todos os direitos reservados.
          </p>
          <p className="text-white text-sm mt-2 text-center">
            Preservando memórias especiais com qualidade profissional
          </p>
          <div className="mt-4 text-center">
            <p className="text-white text-sm">Studio Myt LTDA</p>
            <p className="text-white text-xs mt-1">CNPJ: 56.848.973/0001-30</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

