import type { Metadata } from 'next';
import V2Nav from '@/components/v2/V2Nav';
import V2Hero from '@/components/v2/V2Hero';
import V2Ticker from '@/components/v2/V2Ticker';
import V2Intro from '@/components/v2/V2Intro';
import V2Reels from '@/components/v2/V2Reels';
import V2Films from '@/components/v2/V2Films';
import V2Design from '@/components/v2/V2Design';
import V2Process from '@/components/v2/V2Process';
import V2CaseStudies from '@/components/v2/V2CaseStudies';
import V2Services from '@/components/v2/V2Services';
import V2Packages from '@/components/v2/V2Packages';
import V2Testimonials from '@/components/v2/V2Testimonials';
import V2Faq from '@/components/v2/V2Faq';
import V2Contact from '@/components/v2/V2Contact';
import V2Footer from '@/components/v2/V2Footer';

export const metadata: Metadata = {
  title: 'MARCA Creatives — Concept v2',
  description: 'A bold, color-blocked concept theme for the Marca Creatives landing page — same content, new visual direction.',
};

export default function V2Page() {
  return (
    <main className="v2-page">
      <V2Nav />
      <V2Hero />
      <V2Ticker />
      <V2Intro />
      <V2Reels />
      <V2Films />
      <V2Design />
      <V2Process />
      <V2CaseStudies />
      <V2Services />
      <V2Packages />
      <V2Testimonials />
      <V2Faq />
      <V2Contact />
      <V2Footer />
    </main>
  );
}
