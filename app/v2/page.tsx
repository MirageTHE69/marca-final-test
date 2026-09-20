import type { Metadata } from 'next';
import RiotNav from '@/components/v2/RiotNav';
import RiotHero from '@/components/v2/RiotHero';
import RiotTicker from '@/components/v2/RiotTicker';
import RiotShortForm from '@/components/v2/RiotShortForm';
import RiotLongForm from '@/components/v2/RiotLongForm';
import RiotDesign from '@/components/v2/RiotDesign';
import RiotProcess from '@/components/v2/RiotProcess';
import RiotCaseStudies from '@/components/v2/RiotCaseStudies';
import RiotOtherServices from '@/components/v2/RiotOtherServices';
import RiotPackages from '@/components/v2/RiotPackages';
import RiotTestimonials from '@/components/v2/RiotTestimonials';
import RiotFaq from '@/components/v2/RiotFaq';
import RiotContact from '@/components/v2/RiotContact';
import RiotFooter from '@/components/v2/RiotFooter';

export const metadata: Metadata = {
  title: 'MARCA Creatives — v2',
  description: 'The Marca Creatives landing page in a bold yellow/cream/black theme — same structure and content, new look.',
};

/**
 * Version 2 — the landing page's structure, section for section, in the
 * Riot theme (yellow/cream/black, heavy display type). Content matches
 * `/` exactly; only the styling differs.
 */
export default function V2Page() {
  return (
    <main className="riot">
      <RiotNav />
      <RiotHero />
      <RiotTicker />
      <RiotShortForm />
      <RiotLongForm />
      <RiotDesign />
      <RiotProcess />
      <RiotCaseStudies />
      <RiotOtherServices />
      <RiotPackages />
      <RiotTestimonials />
      <RiotFaq />
      <RiotContact />
      <RiotFooter />
    </main>
  );
}
