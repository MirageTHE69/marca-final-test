import { toCardStory } from '@/lib/caseStudyCard';
import { getCaseStudies, getHome, getSettings } from '@/lib/cms';
import { LEAD_SERVICES } from '@/payload/collections/Leads';

import RiotCaseStudies from './RiotCaseStudies';
import RiotContact from './RiotContact';
import RiotDesign from './RiotDesign';
import RiotFaq from './RiotFaq';
import RiotFooter from './RiotFooter';
import RiotHero from './RiotHero';
import RiotLongForm from './RiotLongForm';
import RiotNav from './RiotNav';
import RiotOtherServices from './RiotOtherServices';
import RiotPackages from './RiotPackages';
import RiotProcess from './RiotProcess';
import RiotShortForm from './RiotShortForm';
import RiotTestimonials from './RiotTestimonials';
import RiotTicker from './RiotTicker';

/** The landing page — served at `/` and `/v2`. All content comes from the admin's Home page. */
export default async function RiotLanding() {
  const [home, settings, caseStudies] = await Promise.all([getHome(), getSettings(), getCaseStudies()]);
  const featured = caseStudies.filter((c) => c.featured).map(toCardStory);

  // The contact form offers the services listed on the page.
  const services = (home.services.items ?? []).map((s) => ({
    value: s.leadService,
    label: s.title || LEAD_SERVICES.find((l) => l.value === s.leadService)?.label || s.leadService,
  }));

  return (
    <main className="riot">
      <RiotNav />
      <RiotHero data={home.hero} />
      <RiotTicker names={(home.clients?.names ?? []).map((n) => n.name)} />
      <RiotShortForm data={home.instagram} />
      <RiotLongForm data={home.youtube} />
      <RiotDesign data={home.thumbnails} />
      <RiotProcess data={home.process} />
      <RiotCaseStudies data={home.caseStudies} stories={featured} />
      <RiotOtherServices data={home.services} email={settings.email} />
      <RiotPackages data={home.packages} />
      <RiotTestimonials data={home.testimonials} />
      <RiotFaq data={home.faq} />
      <RiotContact data={home.contact} settings={settings} services={services} />
      <RiotFooter />
    </main>
  );
}
