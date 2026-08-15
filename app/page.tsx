'use client';

import { useCinemaScroll } from '@/hooks/useCinemaScroll';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import TickerBanner from '@/components/TickerBanner';
import WorkIntroSection from '@/components/WorkIntroSection';
import ShortFormSection from '@/components/ShortFormSection';
import LongFormSection from '@/components/LongFormSection';
import DesignSection from '@/components/DesignSection';
import ProcessSection from '@/components/ProcessSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import BrandWorkSection from '@/components/BrandWorkSection';
import PortfolioSection from '@/components/PortfolioSection';
import PackagesSection from '@/components/PackagesSection';
import WhoWeWorkWithSection from '@/components/WhoWeWorkWithSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  useCinemaScroll();

  return (
    <main>
      <Nav />
      <HeroSection />
      <TickerBanner />
      <WorkIntroSection />
      <ShortFormSection />
      <LongFormSection />
      <DesignSection />
      <ProcessSection />
      <CaseStudiesSection />
      <BrandWorkSection />
      <PortfolioSection />
      <PackagesSection />
      <WhoWeWorkWithSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
