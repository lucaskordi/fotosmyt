import {
  HeroSection,
  ValueSection,
  EmotionalSection,
  FeaturesSection,
  CtaSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueSection />
      <EmotionalSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
