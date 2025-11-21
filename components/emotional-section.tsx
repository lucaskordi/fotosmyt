'use client';

import { motion } from 'framer-motion';

export default function EmotionalSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0047c7]/10 via-white to-[#e5107a]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="block">Reviva Esse</span>
              <span className="block">Momento <span className="text-[#0047c7]">Sempre</span></span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p className="text-xl font-medium text-center mb-8">
              Imagine daqui a 10, 20, 30 anos...
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="mb-4">
                Você vai querer mostrar para seus filhos, netos e familiares as fotos desse dia tão especial. 
                O dia em que você conquistou mais uma vitória importante na sua vida.
              </p>
              
              <p className="mb-4">
                As risadas com os amigos, os abraços emocionados, a emoção de receber o diploma, 
                os momentos únicos que só acontecem uma vez.
              </p>
              
              <p className="font-semibold text-[#0047c7]">
                Essas memórias não têm preço. Mas garantir que elas estejam sempre com você, sim.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://nestlab.pay.yampi.com.br/r/3MKC8FRTN1"
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
      </div>
    </section>
  );
}

