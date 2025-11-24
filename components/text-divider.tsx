'use client';

export default function TextDivider() {
  const words = ['NOSSAS FOTOS CONTAM A SUA HISTÓRIA.'];

  return (
    <div className="relative w-full overflow-hidden bg-white py-6">
      <div className="flex whitespace-nowrap animate-scroll-infinite">
        {[...Array(6)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex space-x-4">
            {words.map((word, index) => (
              <span key={`${groupIndex}-${index}`} className="text-4xl font-bold text-[#e5107a] mx-3">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="flex whitespace-nowrap flex-row-reverse mt-0 animate-scroll-infinite-reverse">
        {[...Array(6)].map((_, groupIndex) => (
          <div key={`inverted-${groupIndex}`} className="flex space-x-4 flex-row-reverse">
            {words.map((word, index) => (
              <span key={`inverted-${groupIndex}-${index}`} className="text-4xl font-bold text-[#0047c7] mx-3">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

