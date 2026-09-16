import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import TickerBanner from '@/components/TickerBanner';
import ShortFormSection from '@/components/ShortFormSection';
import LongFormSection from '@/components/LongFormSection';
import DesignSection from '@/components/DesignSection';
import ProcessSection from '@/components/ProcessSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PortfolioSection from '@/components/PortfolioSection';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MARCA Creatives — v2 (Jewel-tone preview)',
  description: 'Same landing page, same content — each section now carries its own deep jewel-toned glow instead of one flat background color.',
};

// Deep, muted radial glows — same visual grammar LongFormSection already
// uses (a soft top-anchored glow fading into the site's near-black base),
// just re-hued per section so each one gets its own atmosphere instead of
// a single flat color repeated down the whole page.
const TEAL = 'radial-gradient(140% 70% at 50% -10%, rgba(13,148,136,.42) 0%, rgba(8,90,82,.28) 32%, rgba(5,7,11,0) 78%), linear-gradient(180deg, #05070B 0%, #081714 45%, #05070B 100%)';
const PLUM = 'radial-gradient(140% 70% at 50% -10%, rgba(139,60,168,.42) 0%, rgba(84,32,108,.28) 32%, rgba(5,7,11,0) 78%), linear-gradient(180deg, #05070B 0%, #150A1C 45%, #05070B 100%)';
const BRONZE = 'radial-gradient(90% 30% at 50% 3%, rgba(217,142,45,.35) 0%, rgba(120,74,18,.2) 45%, rgba(4,6,10,0) 80%), #04060A';
const EMERALD = 'radial-gradient(140% 60% at 50% -8%, rgba(16,163,105,.4) 0%, rgba(8,90,58,.24) 34%, rgba(4,6,10,0) 78%), #04060A';
const ROSE = 'radial-gradient(140% 60% at 50% -8%, rgba(190,55,105,.36) 0%, rgba(110,26,58,.22) 34%, rgba(5,7,11,0) 78%), linear-gradient(180deg, #05070B, #170A12)';

export default function V2Page() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <TickerBanner />
      <ShortFormSection background={TEAL} />
      <LongFormSection />
      <DesignSection background={PLUM} />
      <ProcessSection />
      <CaseStudiesSection background={BRONZE} />
      <PortfolioSection />
      <PackagesSection background={EMERALD} />
      <TestimonialsSection background={ROSE} />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
