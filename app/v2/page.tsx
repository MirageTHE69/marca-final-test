import type { Metadata } from 'next';
import V2Nav from '@/components/v2/V2Nav';
import V2Hero from '@/components/v2/V2Hero';
import V2Statement from '@/components/v2/V2Statement';
import V2Services from '@/components/v2/V2Services';
import V2Pillars from '@/components/v2/V2Pillars';
import V2Work from '@/components/v2/V2Work';
import V2Cases from '@/components/v2/V2Cases';
import V2Process from '@/components/v2/V2Process';
import V2Packages from '@/components/v2/V2Packages';
import V2Voices from '@/components/v2/V2Voices';
import V2Faq from '@/components/v2/V2Faq';
import V2Contact from '@/components/v2/V2Contact';
import V2Footer from '@/components/v2/V2Footer';

export const metadata: Metadata = {
  title: 'MARCA Creatives — Concept v2',
  description: 'A crimson editorial concept for the Marca Creatives landing page — same content, a bolder visual direction.',
};

export default function V2Page() {
  return (
    <main className="v2-page">
      <V2Nav />
      <V2Hero />
      <V2Statement />
      <V2Services />
      <V2Pillars />
      <V2Work />
      <V2Cases />
      <V2Process />
      <V2Packages />
      <V2Voices />
      <V2Faq />
      <V2Contact />
      <V2Footer />
    </main>
  );
}
