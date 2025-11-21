'use client';

import { motion } from 'framer-motion';
import { IoResize, IoCloudDownload, IoImage, IoLockClosed } from 'react-icons/io5';

const features = [
  {
    title: 'Alta Resolução',
    description: 'Fotos em qualidade profissional, perfeitas para impressão e compartilhamento.',
    icon: IoResize,
  },
  {
    title: 'Download Ilimitado',
    description: 'Baixe quantas vezes quiser, quando quiser. Seu link nunca expira.',
    icon: IoCloudDownload,
  },
  {
    title: 'Tratamento Profissional',
    description: 'Receba seu link digital após o tratamento profissional das fotos com qualidade garantida.',
    icon: IoImage,
  },
  {
    title: 'Segurança Total',
    description: 'Link exclusivo e protegido, apenas você tem acesso às suas fotos.',
    icon: IoLockClosed,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-left-top opacity-30" style={{ backgroundImage: 'url(/SHADOWUPLEFT.webp)' }}></div>
      <div className="absolute top-0 left-0 right-0 h-0.5 w-full overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0047c7] to-transparent"></div>
        <div className="absolute inset-0 animate-light-sweep"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            O que você <span className="text-[#e5107a]">recebe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para preservar essas memórias especiais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent className="text-5xl text-[#e5107a]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="https://seguro.studiomyt.com.br/r/3MKC8FRTN1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block bg-gradient-to-r from-[#0047c7] to-[#0047c7] hover:from-[#0035a0] hover:to-[#0035a0] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Garantir Minhas Fotos Agora</span>
            <div className="absolute inset-0 animate-light-sweep"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

