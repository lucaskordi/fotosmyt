'use client';

import { motion } from 'framer-motion';

const valuePoints = [
  {
    title: 'Um dia único',
    description: 'Sua formatura acontece apenas uma vez. Não deixe essas memórias se perderem no tempo.',
    icon: '🎓',
  },
  {
    title: 'Qualidade profissional',
    description: 'Fotos em alta resolução capturadas por profissionais especializados em eventos.',
    icon: '📸',
  },
  {
    title: 'Tratamento profissional',
    description: 'Suas fotos passam por tratamento profissional antes da entrega. Link digital seguro e exclusivo após o processamento.',
    icon: '✨',
  },
  {
    title: 'Para sempre',
    description: 'Guarde essas memórias para reviver esse momento especial sempre que quiser.',
    icon: '❤️',
  },
];

export default function ValueSection() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Por que <span className="text-[#0047c7]">garantir</span> suas fotos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Este momento especial merece ser preservado com a qualidade que ele merece
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {valuePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
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
            className="inline-block bg-gradient-to-r from-[#0047c7] to-[#0047c7] hover:from-[#0035a0] hover:to-[#0035a0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Garantir Minhas Fotos Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

