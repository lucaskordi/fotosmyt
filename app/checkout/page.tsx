'use client';

import { motion } from 'framer-motion';
import { IoCheckmarkCircle, IoCall, IoLogoWhatsapp } from 'react-icons/io5';
import Image from 'next/image';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 flex justify-center"
            >
              <IoCheckmarkCircle className="text-6xl text-green-500" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Compra <span className="text-[#0047c7]">Confirmada</span>!
            </h1>
            <p className="text-xl text-gray-600">
              Obrigado por confiar no Studio MYT
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              O que acontece agora?
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0047c7]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#0047c7] font-bold text-lg">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    Tratamento Profissional
                  </h3>
                  <p className="text-gray-600">
                    Suas fotos estão sendo tratadas por nossa equipe profissional para garantir a melhor qualidade.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#e5107a]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#e5107a] font-bold text-lg">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    Recebimento via WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Após o tratamento das fotos, você receberá o link digital exclusivo no número de WhatsApp fornecido durante a compra.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <IoLogoWhatsapp className="text-2xl text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-green-900 mb-1">
                        Importante:
                      </p>
                      <p className="text-sm text-green-800">
                        Certifique-se de que o número de WhatsApp informado está correto e ativo. O link será enviado exclusivamente por este canal.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0047c7]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#0047c7] font-bold text-lg">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    Download Ilimitado
                  </h3>
                  <p className="text-gray-600">
                    Assim que receber o link, você poderá baixar suas fotos quantas vezes quiser, quando e onde quiser. Seu acesso é vitalício!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0047c7]/10 to-[#e5107a]/10 rounded-2xl shadow-xl p-8 mb-8 border border-[#0047c7]/20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
              Quer algo ainda mais especial?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Transforme suas memórias em álbuns físicos de alta qualidade
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Álbum <span className="text-[#0047c7]">Platinum</span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#0047c7] to-[#0047c7]/50 rounded-full"></div>
                </div>
                <ul className="space-y-3 mb-6 text-gray-600">
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-[#0047c7] flex-shrink-0 mt-1" />
                    <span>Capa dura premium com acabamento luxuoso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-[#0047c7] flex-shrink-0 mt-1" />
                    <span>Papel fotográfico de alta qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-[#0047c7] flex-shrink-0 mt-1" />
                    <span>Até 50 páginas personalizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-[#0047c7] flex-shrink-0 mt-1" />
                    <span>Design exclusivo e personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-[#0047c7] flex-shrink-0 mt-1" />
                    <span>Embalagem especial para presente</span>
                  </li>
                </ul>
                <motion.a
                  href="https://nestlab.pay.yampi.com.br/r/JGEA16BQKP"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-[#0047c7] to-[#0047c7] hover:from-[#0035a0] hover:to-[#0035a0] text-white px-6 py-3 rounded-full text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Comprar Álbum Platinum
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Álbum <span className="text-gray-900">Black</span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"></div>
                </div>
                <ul className="space-y-3 mb-6 text-gray-600">
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-gray-900 flex-shrink-0 mt-1" />
                    <span>Capa dura elegante em preto premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-gray-900 flex-shrink-0 mt-1" />
                    <span>Papel fotográfico profissional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-gray-900 flex-shrink-0 mt-1" />
                    <span>Até 30 páginas personalizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-gray-900 flex-shrink-0 mt-1" />
                    <span>Layout moderno e sofisticado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IoCheckmarkCircle className="text-gray-900 flex-shrink-0 mt-1" />
                    <span>Embalagem resistente e elegante</span>
                  </li>
                </ul>
                <motion.a
                  href="https://nestlab.pay.yampi.com.br/r/JGEA16BQKP"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-6 py-3 rounded-full text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Comprar Álbum Black
                </motion.a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0047c7]/10 rounded-full flex items-center justify-center">
                  <IoCall className="text-2xl text-[#0047c7]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Precisa de ajuda?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Entre em contato conosco
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5541984486841"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <IoLogoWhatsapp className="text-xl" />
                <span>(41) 98448-6841</span>
              </a>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Image
              src="/LogoMYT.svg"
              alt="Studio MYT"
              width={150}
              height={60}
              className="mx-auto h-auto opacity-80"
            />
            <p className="text-gray-500 text-sm mt-4">
              Studio MYT - Preservando memórias especiais com qualidade profissional
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

