import type { Metadata } from 'next';
import Link from 'next/link';
import PageNav from '@/components/PageNav';
import PortfolioSections from '@/components/portfolio/PortfolioSections';

export const metadata: Metadata = {
  title: 'Portfolio — Marca Creatives',
  description: 'Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you came to see.',
};

export default function PortfolioPage() {
  return (
    <main>
      <PageNav />

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          padding: 'clamp(70px,11vh,140px) clamp(24px,6vw,60px) clamp(30px,4vh,48px)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Portfolio</span>
        <h1 style={{ margin: 0, maxWidth: '22ch', fontSize: 'clamp(38px,5.4vw,88px)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .98 }}>
          Everything we have <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>made.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: '56ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you came to see.
        </p>
      </section>

      <PortfolioSections />

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
          Something here look like <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>your project?</span>
        </h2>
        <Link href="/#contact" className="btn-outline">
          Start a project <span>→</span>
        </Link>
      </section>
    </main>
  );
}
