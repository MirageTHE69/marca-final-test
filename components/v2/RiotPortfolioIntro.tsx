import { portfolioSections } from '@/components/portfolio/portfolioItems';

const PILL_COLOURS = ['var(--r-yellow)', 'var(--r-blue)', 'var(--r-orange)'];

/** Small inline marks, standing in for the reference's illustrated icons. */
function Squiggle() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 30" width="1.25em" height=".6em" style={{ verticalAlign: 'middle', margin: '0 .12em' }}>
      <rect x="1" y="1" width="62" height="28" rx="14" fill="var(--r-blue)" stroke="var(--r-black)" strokeWidth="2" />
      <path d="M10 16 C 17 6, 24 26, 32 15 S 47 6, 54 15" fill="none" stroke="var(--r-black)" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function Star() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" width=".72em" height=".72em" style={{ verticalAlign: 'middle', margin: '0 .12em' }}>
      <path
        d="M20 2 L24.5 14.5 L38 15 L27.5 23.5 L31 37 L20 29 L9 37 L12.5 23.5 L2 15 L15.5 14.5 Z"
        fill="var(--r-h-red)"
        stroke="var(--r-black)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dot() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" width=".62em" height=".62em" style={{ verticalAlign: 'middle', margin: '0 .12em' }}>
      <circle cx="20" cy="20" r="17" fill="var(--r-yellow)" stroke="var(--r-black)" strokeWidth="2.4" />
    </svg>
  );
}

/** Hand-drawn arrows flanking the callout. */
function LeftDoodle() {
  return (
    <svg className="riot-doodle" aria-hidden="true" viewBox="0 0 180 210" width="150" height="176" style={{ flexShrink: 0 }}>
      <path
        d="M52 8 C 12 30, 66 58, 38 88 C 10 118, 64 138, 40 164 C 66 186, 116 178, 160 166"
        fill="none"
        stroke="var(--r-black)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M146 154 L162 166 L146 178" fill="none" stroke="var(--r-black)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RightDoodle() {
  return (
    <svg className="riot-doodle" aria-hidden="true" viewBox="0 0 170 220" width="150" height="194" style={{ flexShrink: 0 }}>
      <path
        d="M24 10 C 108 6, 146 58, 114 100 C 94 126, 60 112, 76 90 C 96 66, 146 108, 124 158 C 112 186, 80 202, 38 206"
        fill="none"
        stroke="var(--r-black)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M54 194 L36 206 L52 218" fill="none" stroke="var(--r-black)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RiotPortfolioIntro() {
  return (
    <section className="riot-cream" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px) clamp(60px,10vh,120px)' }}>
      <p
        style={{
          margin: '0 auto',
          maxWidth: '30ch',
          textAlign: 'center',
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: 'clamp(28px,3.6vw,52px)',
          lineHeight: 1.14,
          letterSpacing: '-.015em',
          color: 'var(--r-ink)',
        }}
      >
        We turn founders into content machines <Squiggle /> that attract clients, build authority <Star /> and
        drive revenue <Dot />
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(8px,2vw,28px)',
          marginTop: 'clamp(34px,6vh,64px)',
        }}
      >
        <LeftDoodle />

        <div
          style={{
            flex: '0 1 560px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 16,
            padding: 'clamp(26px,3.4vw,44px) clamp(18px,3vw,40px)',
            border: '2px dashed var(--r-h-red)',
            borderRadius: 18,
          }}
        >
          <span
            style={{
              padding: '5px 12px',
              background: 'var(--r-blue)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'var(--r-black)',
            }}
          >
            Before you scroll any further
          </span>
          <h2
            style={{
              margin: 0,
              maxWidth: '18ch',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(26px,3vw,42px)',
              lineHeight: 1.08,
              color: 'var(--r-ink)',
            }}
          >
            Jump to the kind of work you came to see
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 4 }}>
            {portfolioSections.map((s, i) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="riot-btn"
                style={{ padding: '8px 15px', fontSize: 11, background: PILL_COLOURS[i % PILL_COLOURS.length] }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        <RightDoodle />
      </div>
    </section>
  );
}
