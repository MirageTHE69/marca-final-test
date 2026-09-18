import type { Metadata } from 'next';
import V2Nav from '@/components/v2/V2Nav';
import V2Hero from '@/components/v2/V2Hero';
import V2Ticker from '@/components/v2/V2Ticker';
import V2Instagram from '@/components/v2/V2Instagram';
import V2YouTube from '@/components/v2/V2YouTube';
import V2Thumbnails from '@/components/v2/V2Thumbnails';
import V2Process from '@/components/v2/V2Process';
import V2Cases from '@/components/v2/V2Cases';
import V2OtherServices from '@/components/v2/V2OtherServices';
import V2Packages from '@/components/v2/V2Packages';
import V2Testimonials from '@/components/v2/V2Testimonials';
import V2Faq from '@/components/v2/V2Faq';
import V2Contact from '@/components/v2/V2Contact';
import V2Footer from '@/components/v2/V2Footer';

export const metadata: Metadata = {
  title: 'MARCA Creatives — Concept v2',
  description: 'A crimson editorial concept for the Marca Creatives landing page — the same content in a bolder visual direction.',
};

/**
 * Section order mirrors the live landing page one-for-one, so the two
 * versions can be compared on design alone rather than on content.
 */
export default function V2Page() {
  return (
    <main className="v2-page">
      <V2Nav />
      <V2Hero />
      <V2Ticker />
      <V2Instagram />
      <V2YouTube />
      <V2Thumbnails />
      <V2Process />
      <V2Cases />
      <V2OtherServices />
      <V2Packages />
      <V2Testimonials />
      <V2Faq />
      <V2Contact />
      <V2Footer />
    </main>
  );
}
