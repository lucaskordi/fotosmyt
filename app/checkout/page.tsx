'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import ParticlesBackground from '@/components/particles-background';

export default function Checkout() {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    fetch('/Check Animation.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <ParticlesBackground />
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-2xl w-full text-center relative z-10">
        {animationData && (
          <div className="flex justify-center mb-6">
            <Lottie
              animationData={animationData}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          Sua compra está confirmada! Obrigado por confiar no Studio MYT. 💜
        </h1>
        <p className="text-xl text-gray-600">
          Em breve entraremos em contato para os próximos passos!
        </p>
      </div>
    </main>
  );
}
