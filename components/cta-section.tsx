'use client';

import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section id="comprar" className="py-20 bg-gradient-to-r from-[#0047c7] to-[#0035a0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Não deixe essas memórias se perderem
          </h2>
          
          <p className="text-xl text-white/90 mb-4">
            Garanta agora o acesso exclusivo às suas fotos de formatura
          </p>
          
          <p className="text-lg text-white/80 mb-12">
            Link digital seguro • Download ilimitado • Alta resolução • Acesso vitalício
          </p>

          <motion.a
            href="https://pag.ae/81eDZHJw2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#0047c7] px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
          >
            Garantir Minhas Fotos Agora
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-white/70 text-sm"
          >
            📸 Link enviado após o tratamento profissional das fotos
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

