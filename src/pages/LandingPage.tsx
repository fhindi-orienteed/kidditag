import Hero from '../components/Hero';
import TrustLogos from '../components/TrustLogos';
import HowItWorks from '../components/HowItWorks';
import InteractiveScanDemo from '../components/InteractiveScanDemo';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import CtaBanner from '../components/CtaBanner';
import PrivacyRibbon from '../components/PrivacyRibbon';
import { useWebsiteContext } from '../layout/websiteContext';

interface LandingPageProps {
  onOpenActivation?: (code?: string) => void;
}

export default function LandingPage({ onOpenActivation: propOpenActivation }: LandingPageProps) {
  const ctx = useWebsiteContext();
  const onOpenActivation = propOpenActivation || ctx?.onOpenActivation;

  return (
    <>
      {/* 1. Hero Section */}
      <Hero onOpenActivation={handleOpenActivation(onOpenActivation)} />

      {/* 2. Trust Badges / Partners Bar */}
      <TrustLogos />

      {/* 3. How KiddieTag works (3 steps) */}
      <HowItWorks onOpenActivation={() => onOpenActivation?.()} />

      {/* 4. Experience the tag scan in action (Live Interactive QR & Simulator) */}
      <InteractiveScanDemo onOpenActivation={() => onOpenActivation?.()} />

      {/* 5. Designed for anywhere kids wander (4 Use Cases) */}
      <UseCases onOpenActivation={() => onOpenActivation?.()} />

      {/* 6. What caring parents say (Testimonials) */}
      <Testimonials />

      {/* 7. Pricing (Monthly / Yearly toggle & plans) */}
      <Pricing onOpenActivation={() => onOpenActivation?.()} />

      {/* 8. Frequently Asked Questions (Accordion) */}
      <Faq />

      {/* 9. High-impact CTA Banner */}
      <CtaBanner onOpenActivation={() => onOpenActivation?.()} />

      {/* 10. Privacy & Trust Ribbon */}
      <PrivacyRibbon />
    </>
  );
}

function handleOpenActivation(onOpenActivation?: (code?: string) => void) {
  return (code?: string) => {
    if (onOpenActivation) onOpenActivation(code);
  };
}
