'use client';

import { useEffect, useState } from 'react';

interface Particle {
  left: number;
  top: number;
  width: number;
  height: number;
  animationDelay: number;
  animationDuration: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [largeParticles, setLargeParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const smallParticles = Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      animationDelay: Math.random() * 20,
      animationDuration: Math.random() * 10 + 10,
    }));

    const largeParticlesData = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 6 + 4,
      height: Math.random() * 6 + 4,
      animationDelay: Math.random() * 20,
      animationDuration: Math.random() * 15 + 15,
    }));

    setParticles(smallParticles);
    setLargeParticles(largeParticlesData);
  }, []);

  if (particles.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#0047c7]/10 animate-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
      {largeParticles.map((particle, i) => (
        <div
          key={`large-${i}`}
          className="absolute rounded-full bg-[#e5107a]/10 animate-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
}

