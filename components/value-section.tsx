'use client';

import { motion } from 'framer-motion';
import { IoSchool, IoCamera, IoImage, IoHeart } from 'react-icons/io5';

const valuePoints = [
  {
    title: 'Um dia único',
    description: 'Sua formatura acontece apenas uma vez. Não deixe essas memórias se perderem no tempo.',
    icon: IoSchool,
  },
  {
    title: 'Qualidade profissional',
    description: 'Fotos em alta resolução capturadas por profissionais especializados em eventos.',
    icon: IoCamera,
  },
  {
    title: 'Tratamento profissional',
    description: 'Suas fotos passam por tratamento profissional antes da entrega.',
    icon: IoImage,
  },
  {
    title: 'Para sempre',
    description: 'Guarde essas memórias para reviver esse momento especial sempre que quiser.',
    icon: IoHeart,
  },
];

export default function ValueSection() {
  return (
    <section id="beneficios" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center md:bg-left-top opacity-50 md:opacity-30 -rotate-90 md:rotate-0" style={{ backgroundImage: 'url(/SHADOWUPLEFT.webp)', height: '100%', minHeight: '100%' }}></div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,1) 100%)' }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="block">Porque Garantir</span>
            <span className="block">Suas <span className="text-[#0047c7]">Fotos</span></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Este momento especial merece ser preservado com a qualidade que ele merece
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {valuePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent className="text-5xl text-[#e5107a]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
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
            href="https://studio-myt.pay.yampi.com.br/r/3VBB1SAXZQ"
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

