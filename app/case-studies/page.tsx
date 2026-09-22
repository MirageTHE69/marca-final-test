import type { Metadata } from 'next';
import Link from 'next/link';
import RiotNav from '@/components/v2/RiotNav';
import RiotFooter from '@/components/v2/RiotFooter';
import RiotCaseStudyCard, { CARD_ACCENTS } from '@/components/v2/RiotCaseStudyCard';
import { caseStudies } from '@/components/casestudy/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies — Marca Creatives',
  description: 'Brands and founders we have built digital presence for — the numbers, the before and after, and what it took.',
};

/** Case studies in the Riot theme, matching the landing page. */
export default function CaseStudiesPage() {
  return (
    <main className="riot">
      <RiotNav />

      {/* Hero */}
      <section
        className="riot-stripes"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          padding: 'clamp(54px,9vh,120px) clamp(18px,4vw,44px)',
          borderBottom: '2px solid var(--r-black)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
          Case Studies
        </span>
        <h1 className="riot-display" style={{ maxWidth: '16ch', fontSize: 'clamp(40px,7vw,116px)', color: 'var(--r-h-red)' }}>
          Proof, told as{' '}
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              textTransform: 'none',
              color: 'var(--r-ink)',
            }}
          >
            a story.
          </span>
        </h1>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: 'var(--r-ink)' }}>
          Every brand here started somewhere quieter. These are the accounts we built, the numbers behind them, and the
          content strategy that got them there.
        </p>
      </section>

      {/* The deck */}
      <section
        className="riot-cream"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(22px,3vw,40px)',
          maxWidth: 1240,
          width: '100%',
          margin: '0 auto',
          padding: 'clamp(46px,7vh,90px) clamp(18px,4vw,44px) clamp(56px,9vh,110px)',
          boxSizing: 'border-box',
        }}
      >
        {caseStudies.map((story, i) => (
          <RiotCaseStudyCard key={story.title} story={story} accent={CARD_ACCENTS[i % CARD_ACCENTS.length]} />
        ))}
      </section>

      {/* Closing */}
      <section
        className="riot-black"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 22,
          padding: 'clamp(70px,11vh,130px) clamp(18px,4vw,44px)',
          borderTop: '2px solid var(--r-black)',
          textAlign: 'center',
        }}
      >
        <h2 className="riot-display" style={{ maxWidth: '18ch', fontSize: 'clamp(34px,5.4vw,82px)', color: 'var(--r-h-yellow)' }}>
          Want results like{' '}
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--r-cream)' }}>
            these?
          </span>
        </h2>
        <Link href="/#contact" className="riot-btn riot-btn-yellow" style={{ padding: '16px 32px', fontSize: 13 }}>
          Start a project →
        </Link>
      </section>

      <RiotFooter />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Previous case studies page (dark / blue theme). Kept for reference —
// to restore it, delete everything above and uncomment below.
// ─────────────────────────────────────────────────────────────────────
//
// import type { Metadata } from 'next';
// import Link from 'next/link';
// import PageNav from '@/components/PageNav';
// import CaseStudyCard from '@/components/casestudy/CaseStudyCard';
// import { caseStudies } from '@/components/casestudy/caseStudies';
//
// export const metadata: Metadata = {
//   title: 'Case Studies — Marca Creatives',
//   description: 'Brands and founders we have built digital presence for — the numbers, the before and after, and what it took.',
// };
//
// export default function CaseStudiesPage() {
//   return (
//     <main>
//       <PageNav />
//
//       <section
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 16,
//           padding: 'clamp(70px,11vh,140px) clamp(24px,6vw,60px) clamp(28px,4vh,44px)',
//           textAlign: 'center',
//         }}
//       >
//         <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Case Studies</span>
//         <h1 style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(30px,3.8vw,58px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
//           Proof, told as <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>a story.</span>
//         </h1>
//         <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
//           Every brand here started somewhere quieter. These are the accounts we built, the numbers behind them, and the content strategy that got them there.
//         </p>
//       </section>
//
//       <section
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 'clamp(28px,4vw,56px)',
//           maxWidth: 1080,
//           width: '100%',
//           margin: '0 auto',
//           padding: '0 clamp(24px,6vw,60px) clamp(60px,8vh,100px)',
//           boxSizing: 'border-box',
//         }}
//       >
//         {caseStudies.map((story) => (
//           <CaseStudyCard key={story.title} story={story} variant="flow" />
//         ))}
//       </section>
//
//       <section
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 22,
//           padding: 'clamp(70px,10vh,120px) clamp(24px,6vw,60px) clamp(90px,13vh,160px)',
//           borderTop: '1px solid rgba(242,244,248,.08)',
//           textAlign: 'center',
//         }}
//       >
//         <h2 style={{ margin: 0, maxWidth: '24ch', fontSize: 'clamp(28px,3.4vw,54px)', fontWeight: 700, letterSpacing: '-.038em', lineHeight: 1.04 }}>
//           Want results like <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>these?</span>
//         </h2>
//         <Link href="/#contact" className="btn-outline">
//           Start a project <span>→</span>
//         </Link>
//       </section>
//     </main>
//   );
// }
