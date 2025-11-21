'use client';

import { motion } from 'framer-motion';
import { IoCart, IoColorFilter, IoMail, IoHappy } from 'react-icons/io5';

const steps = [
  {
    title: 'Compra',
    description: 'Garanta seu acesso ao link exclusivo das suas fotos.',
    icon: IoCart,
  },
  {
    title: 'Edição e tratamento',
    description: 'Nossa equipe finaliza todas as imagens para manter padrão de qualidade.',
    icon: IoColorFilter,
  },
  {
    title: 'Receba o link',
    description: 'Assim que tudo estiver pronto, você recebe o acesso direto no seu e-mail ou WhatsApp.',
    icon: IoMail,
  },
  {
    title: 'Aproveite',
    description: 'Baixe, compartilhe ou imprima onde quiser. O material é seu.',
    icon: IoHappy,
  },
];

export default function EmotionalSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0047c7]/10 via-white to-[#e5107a]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Como <span className="text-[#0047c7]">Funciona</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-[#0047c7]/10 rounded-full flex items-center justify-center">
                    <IconComponent className="text-3xl text-[#0047c7]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
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

