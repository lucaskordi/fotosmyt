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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://pag.ae/81eDZHJw2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#0047c7] to-[#0047c7] hover:from-[#0035a0] hover:to-[#0035a0] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Garantir Minhas Fotos Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

