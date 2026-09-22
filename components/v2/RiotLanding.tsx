import RiotNav from './RiotNav';
import RiotHero from './RiotHero';
import RiotTicker from './RiotTicker';
import RiotShortForm from './RiotShortForm';
import RiotLongForm from './RiotLongForm';
import RiotDesign from './RiotDesign';
import RiotProcess from './RiotProcess';
import RiotCaseStudies from './RiotCaseStudies';
import RiotOtherServices from './RiotOtherServices';
import RiotPackages from './RiotPackages';
import RiotTestimonials from './RiotTestimonials';
import RiotFaq from './RiotFaq';
import RiotContact from './RiotContact';
import RiotFooter from './RiotFooter';

/** The landing page in the Riot theme — served at `/` and `/v2`. */
export default function RiotLanding() {
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
