'use client';

import { useCinemaScroll } from '@/hooks/useCinemaScroll';
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
import FaqSection from '@/components/FaqSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Version 2 — currently an exact copy of the landing page, as the
 * starting point for tweaks. It renders the same components as `/`, so
 * the two are identical until a section is forked to diverge.
 */
export default function V2Page() {
  useCinemaScroll();

  return (
    <main>
      <Nav />
      <HeroSection />
      <TickerBanner />
      <ShortFormSection />
      <LongFormSection />
      <DesignSection />
      <ProcessSection />
      <CaseStudiesSection />
      <PortfolioSection />
      <PackagesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
