import RiotLanding from '@/components/v2/RiotLanding';

/** The live landing page — the finalised Riot theme (also at /v2). */
export default function Home() {
  return <RiotLanding />;
}

// ─────────────────────────────────────────────────────────────────────
// Previous landing page (dark / blue theme). Kept for reference — to
// restore it, delete the export above and uncomment everything below.
// ─────────────────────────────────────────────────────────────────────
//
// 'use client';
//
// import { useCinemaScroll } from '@/hooks/useCinemaScroll';
// import Nav from '@/components/Nav';
// import HeroSection from '@/components/HeroSection';
// import TickerBanner from '@/components/TickerBanner';
// import WorkIntroSection from '@/components/WorkIntroSection';
// import ShortFormSection from '@/components/ShortFormSection';
// import LongFormSection from '@/components/LongFormSection';
// import DesignSection from '@/components/DesignSection';
// import ProcessSection from '@/components/ProcessSection';
// import CaseStudiesSection from '@/components/CaseStudiesSection';
// import PortfolioSection from '@/components/PortfolioSection';
// import PackagesSection from '@/components/PackagesSection';
// import FaqSection from '@/components/FaqSection';
// import TestimonialsSection from '@/components/TestimonialsSection';
// import ContactSection from '@/components/ContactSection';
// import Footer from '@/components/Footer';
//
// export default function Home() {
//   useCinemaScroll();
//
//   return (
//     <main>
//       <Nav />
//       <HeroSection />
//       <TickerBanner />
//       {/* <WorkIntroSection /> */}
//       <ShortFormSection />
//       <LongFormSection />
//       <DesignSection />
//       <ProcessSection />
//       <CaseStudiesSection />
//       <PortfolioSection />
//       <PackagesSection />
//       <TestimonialsSection />
//       <FaqSection />
//       <ContactSection />
//       <Footer />
//     </main>
//   );
// }
