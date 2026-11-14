import type { PortfolioPage } from '@/payload/payload-types';

import FitTitle from './FitTitle';
import RiotTicker from './RiotTicker';
import { Dot, Squiggle, Star } from './RiotPortfolioIntro';

const MARKS = { squiggle: Squiggle, star: Star, dot: Dot } as const;

/**
 * Text with [squiggle] / [star] / [dot] swapped for the little drawn marks.
 * Each mark is tied to the word before it, so a line never starts with one.
 */
function WithMarks({ text }: { text: string }) {
  const parts = text.split(/\[(squiggle|star|dot)\]/i);
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    let words = parts[i];
    const mark = parts[i + 1];
    if (!mark) {
      out.push(words);
      break;
    }
    const Mark = MARKS[mark.toLowerCase() as keyof typeof MARKS];
    words = words.trimEnd();
    const cut = words.lastIndexOf(' ') + 1;
    out.push(
      words.slice(0, cut),
      <span key={i} style={{ whiteSpace: 'nowrap' }}>
        {words.slice(cut)} <Mark />
      </span>,
    );
  }
  return out;
}

type SectionLink = { key: string; title: string };

/** Rotating sticker, text running around the ring. */
function Badge() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 'clamp(14px,3vw,34px)',
        right: 'clamp(14px,3vw,34px)',
        width: 'clamp(96px,11vw,138px)',
        height: 'clamp(96px,11vw,138px)',
      }}
    >
      <svg viewBox="0 0 140 140" width="100%" height="100%">
        <circle cx="70" cy="70" r="67" fill="var(--r-yellow)" stroke="var(--r-black)" strokeWidth="2" />
        <g className="riot-badge-ring">
          <defs>
            <path id="riot-badge-path" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
          </defs>
          <text fontFamily="Archivo, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="2.6" fill="var(--r-h-red)">
            <textPath href="#riot-badge-path">MARCA CREATIVES · CONTENT · FILM · IDENTITY ·</textPath>
          </text>
        </g>
        <text
          x="70"
          y="82"
          textAnchor="middle"
          fontFamily="'Bricolage Grotesque', 'Archivo Black', sans-serif"
          fontSize="38"
          fontWeight="800"
          fill="var(--r-h-red)"
        >
          M
        </text>
      </svg>
    </div>
  );
}

export default function RiotPortfolioHero({ hero, sections: portfolioSections }: { hero: PortfolioPage['hero']; sections: SectionLink[] }) {
  return (
    <>
      {/* Type-only hero — the work below carries the pictures. */}
      <section
        className="riot-stripes"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 'clamp(12px,2vh,20px)',
          minHeight: 'clamp(380px, 68vh, 820px)',
          // Extra room at the bottom for the curved band that overlaps the hero.
          padding: 'clamp(84px,11vh,150px) clamp(20px,5vw,72px) calc(clamp(20px,3vh,36px) + var(--wave-overlap))',
        }}
      >
        <Badge />

        {hero.scriptLine && (
          <span className="riot-script" style={{ fontSize: 'clamp(24px,2.6vw,38px)', color: 'var(--r-ink)' }}>
          {hero.scriptLine}
        </span>
        )}

        <div className="riot-fit-wrap" style={{ marginInline: 'calc(-1 * clamp(20px,5vw,72px))' }}>
          {/* With no serif title, the giant word is the page heading. */}
          <FitTitle as={hero.title ? 'span' : 'h1'} text={hero.bigWord} className="riot-display" style={{ color: 'var(--r-h-red)', letterSpacing: '-.055em', lineHeight: 0.82 }}>
            {hero.bigWord}
          </FitTitle>
        </div>

        {/* Serif statement with small inline marks. In the admin, write
            [squiggle], [star] or [dot] in the title where a mark should go. */}
        {hero.title && (
          <h1
            className="riot-head__title"
            style={{
              margin: 0,
              maxWidth: '30ch',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(28px,3.6vw,52px)',
              lineHeight: 1.14,
              letterSpacing: '-.015em',
              color: 'var(--r-ink)',
            }}
          >
            <WithMarks text={hero.title} />
          </h1>
        )}

        {hero.lede && (
          <p className="riot-lede" style={{ maxWidth: '52ch' }}>
            {hero.lede}
          </p>
        )}

        <a
          href={`#${portfolioSections[0]?.key ?? 'fashion-shoots'}`}
          className="riot-btn"
          style={{ background: 'var(--r-h-red)', color: '#FFFFFF', marginTop: 'clamp(6px,1.4vh,14px)', padding: '16px 32px', fontSize: 13 }}
        >
          {hero.buttonLabel || 'Explore the work ↓'}
        </a>
      </section>

      {/* Work categories on the same curved band as the home page hero. */}
      <RiotTicker names={portfolioSections.map((s) => s.title)} label="Work" />
    </>
  );
}
