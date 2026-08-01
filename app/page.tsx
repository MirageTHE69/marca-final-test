'use client';

import { useCinemaScroll } from '@/hooks/useCinemaScroll';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import TickerBanner from '@/components/TickerBanner';
import ShortFormSection from '@/components/ShortFormSection';
import LongFormSection from '@/components/LongFormSection';
import ProcessSection from '@/components/ProcessSection';
import DesignSection from '@/components/DesignSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import BrandingSection from '@/components/BrandingSection';
import PortfolioSection from '@/components/PortfolioSection';
import PackagesSection from '@/components/PackagesSection';
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
      <ShortFormSection />
      <LongFormSection />
      <ProcessSection />
      <DesignSection />
      <CaseStudiesSection />
      <BrandingSection />
      <PortfolioSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
