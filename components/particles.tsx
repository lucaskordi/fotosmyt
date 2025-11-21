'use client';

export default function Particles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow azul mais em cima - cobrindo toda a parte superior */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full bg-[#0047c7] blur-3xl logo-glow-blue" style={{ opacity: 0.2 }}></div>
      <div className="absolute top-0 left-0 w-[900px] h-[700px] rounded-full bg-[#0047c7] blur-3xl logo-glow-blue" style={{ animationDelay: '2s', opacity: 0.2 }}></div>
      <div className="absolute top-0 right-0 w-[900px] h-[700px] rounded-full bg-[#0047c7] blur-3xl logo-glow-blue" style={{ animationDelay: '4s', opacity: 0.2 }}></div>
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] rounded-full bg-[#0047c7] blur-2xl logo-glow-rotate" style={{ opacity: 0.15 }}></div>
      
      {/* Glow rosa mais embaixo - cobrindo toda a parte inferior */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full bg-[#e5107a] blur-3xl logo-glow-pink" style={{ opacity: 0.2 }}></div>
      <div className="absolute bottom-0 left-0 w-[900px] h-[700px] rounded-full bg-[#e5107a] blur-3xl logo-glow-pink" style={{ animationDelay: '3s', opacity: 0.2 }}></div>
      <div className="absolute bottom-0 right-0 w-[900px] h-[700px] rounded-full bg-[#e5107a] blur-3xl logo-glow-pink" style={{ animationDelay: '5s', opacity: 0.2 }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[500px] rounded-full bg-[#e5107a] blur-2xl logo-glow-rotate" style={{ animationDelay: '1s', opacity: 0.15 }}></div>
    </div>
  );
}

