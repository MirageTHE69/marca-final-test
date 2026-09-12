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
        className="riot-cream-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 22,
          padding: 'clamp(70px,11vh,140px) clamp(24px,6vw,60px) clamp(50px,6vh,72px)',
          textAlign: 'center',
          ['--card-accent' as string]: 'var(--accent-ads)',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent-ads)', fontWeight: 700 }}>
          <span className="pf-kicker-dot" aria-hidden="true" />
          Portfolio
        </span>
        <h1 className="riot-heading" style={{ margin: 0, maxWidth: '18ch', fontSize: 'clamp(52px,9vw,168px)' }}>
          Everything we{' '}
          <span className="riot-mark" style={{ ['--mark-color' as string]: 'var(--accent-fashion)' }}>have made</span>.
        </h1>
        <p style={{ margin: 0, maxWidth: '56ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#4A443A' }}>
          Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you came to see.
        </p>
      </section>

      <PortfolioSections />

      <section
        className="riot-black-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 26,
          padding: 'clamp(70px,10vh,120px) clamp(24px,6vw,60px) clamp(90px,13vh,160px)',
          borderTop: '2px solid var(--accent-ads)',
          textAlign: 'center',
        }}
      >
        <h2 className="riot-heading" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(36px,5vw,84px)' }}>
          Something here look like{' '}
          <span className="riot-mark" style={{ ['--mark-color' as string]: 'var(--accent-ads)' }}>your project</span>?
        </h2>
        <Link href="/#contact" className="riot-pill" style={{ ['--card-accent' as string]: 'var(--accent-ads)', padding: '16px 32px', fontSize: 12 }}>
          Start a project <span>→</span>
        </Link>
      </section>
    </main>
  );
}
