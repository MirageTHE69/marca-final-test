import type { Metadata } from 'next';
import Link from 'next/link';
import PageNav from '@/components/PageNav';
import CaseStudyCard from '@/components/casestudy/CaseStudyCard';
import { caseStudies } from '@/components/casestudy/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies — Marca Creatives',
  description: 'Brands and founders we have built digital presence for — the numbers, the before and after, and what it took.',
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageNav />

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          padding: 'clamp(70px,11vh,140px) clamp(24px,6vw,60px) clamp(28px,4vh,44px)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Case Studies</span>
        <h1 style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(30px,3.8vw,58px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          Proof, told as <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>a story.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Every brand here started somewhere quieter. These are the accounts we built, the numbers behind them, and the content strategy that got them there.
        </p>
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(28px,4vw,56px)',
          maxWidth: 1080,
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(24px,6vw,60px) clamp(60px,8vh,100px)',
          boxSizing: 'border-box',
        }}
      >
        {caseStudies.map((story) => (
          <CaseStudyCard key={story.title} story={story} variant="flow" />
        ))}
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 22,
          padding: 'clamp(70px,10vh,120px) clamp(24px,6vw,60px) clamp(90px,13vh,160px)',
          borderTop: '1px solid rgba(242,244,248,.08)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: 0, maxWidth: '24ch', fontSize: 'clamp(28px,3.4vw,54px)', fontWeight: 700, letterSpacing: '-.038em', lineHeight: 1.04 }}>
          Want results like <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>these?</span>
        </h2>
        <Link href="/#contact" className="btn-outline">
          Start a project <span>→</span>
        </Link>
      </section>
    </main>
  );
}
