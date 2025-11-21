import {
  HeroSection,
  TextDivider,
  ValueSection,
  ParallaxImage,
  EmotionalSection,
  FeaturesSection,
  CtaSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <HeroSection />
      <TextDivider />
      <ValueSection />
      <ParallaxImage />
      <EmotionalSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
