import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const films = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785482138/MARCA_WEBSITE_02_ci6tgd.mp4',
    duration: '04:12',
    category: 'Healthcare — Documentary',
    title: 'Aadicura Hospital — ',
    titleSerif: 'Still Here',
    desc: 'Four weeks embedded with a night-shift trauma team. No script, no stock, no music until the final cut.',
    href: '/case-studies/aadicura-hospital',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486291/22K_egrmzj.mp4',
    duration: '01:30',
    category: 'Interior Design — Commercial',
    title: 'Vantara Interiors',
    desc: "A 90-second film shot across three finished homes — the studio's only sales asset for a full year.",
    href: '#case-studies',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486111/ACCENT_WALL_25K_VIEWS_dmvtj8.mp4',
    duration: '02:48',
    category: 'Startup — Brand Film',
    title: 'Ledgerloop, Series A',
    desc: 'The film the founders opened every investor meeting with — one interview, four locations, zero jargon.',
    href: '#case-studies',
  },
  {
    category: 'Documentary',
    title: 'Film 04',
  },
];

export default function LongFormSection() {
  return (
    <section
      id="long-form"
      style={{
        position: 'relative',
        zIndex: 3,
        padding: 'clamp(80px,11vh,140px) 0 clamp(70px,10vh,120px)',
        background: 'linear-gradient(180deg, #070C18 0%, #05070B 55%, #070C18 100%)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Long Form</span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          Films that hold a room <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>quiet.</span>
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Commercials, documentaries, brand films and interviews — written, directed and produced entirely in-house.
        </p>
      </div>

      <ScrollRail ariaLabel="films">
        {films.map((film, i) => (
          <article key={i} style={{ flex: '0 0 clamp(320px,42vw,620px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 14, background: '#0B1220', border: '1px solid rgba(242,244,248,.08)' }}>
              {film.src ? (
                <MediaSlot type="video" src={film.src} placeholder="Drop film" sizes="620px" />
              ) : (
                <MediaSlot placeholder="Drop film" />
              )}
              {film.duration && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 14,
                    right: 14,
                    padding: '6px 12px',
                    borderRadius: 999,
                    background: 'rgba(8,9,13,.62)',
                    backdropFilter: 'blur(6px)',
                    fontSize: 9,
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    color: '#D8DEEA',
                    pointerEvents: 'none',
                  }}
                >
                  {film.duration}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92' }}>{film.category}</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(20px,1.9vw,30px)', fontWeight: 600, letterSpacing: '-.028em', lineHeight: 1.1 }}>
                {film.title}
                {film.titleSerif && (
                  <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>{film.titleSerif}</span>
                )}
              </h3>
              {film.desc && (
                <p style={{ margin: 0, maxWidth: '46ch', fontSize: 14, lineHeight: 1.65, color: '#8E9BB0' }}>{film.desc}</p>
              )}
              {film.href && (
                <a href={film.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 2, fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  Learn more <span>→</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
