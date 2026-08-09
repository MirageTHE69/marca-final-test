import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const pieces = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.48_PM_x4bfca.jpg',
    category: 'YouTube — Thumbnails',
    title: 'Norwood Clinics',
    desc: '28 thumbnails A/B tested across a year of long-form uploads. The winner lifted click-through by 41%.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.47_PM_plfmhl.jpg',
    category: 'Spotify — Cover system',
    title: 'The Long Game',
    desc: 'Cover system for a founder podcast, 40 episodes deep and still on-brand.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.49_PM_du5z6r.jpg',
    category: 'Instagram — Carousel',
    title: 'Kindra',
    desc: 'Grid covers built to stay legible at thumbnail size.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785486928/5_hw5ng6.png',
    category: 'Campaign — Print to paid',
    title: 'Sol & Grain',
    desc: 'Launch creative that ran from bus shelters to paid social without a redraw.',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785486926/4_c5ql8a.png',
    category: 'Social — Design system',
    title: 'Ledgerloop',
    desc: 'A social design kit their in-house team still runs on.',
  },
];

export default function DesignSection() {
  return (
    <section
      id="design"
      style={{
        position: 'relative',
        zIndex: 4,
        padding: 'clamp(80px,11vh,140px) 0 clamp(70px,10vh,120px)',
        background: 'linear-gradient(180deg, #05070B 0%, #080D18 55%, #05070B 100%)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Design</span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '20ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          The frame people decide to <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>click.</span>
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Thumbnails, covers and campaign creative designed against the only metric that matters: whether someone stops scrolling.
        </p>
      </div>

      <ScrollRail ariaLabel="design work">
        {pieces.map((piece, i) => (
          <article key={i} style={{ flex: '0 0 clamp(300px,34vw,480px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 14, background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
              <MediaSlot src={piece.src} alt={piece.title} placeholder="Drop image" sizes="480px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92' }}>{piece.category}</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(18px,1.7vw,26px)', fontWeight: 600, letterSpacing: '-.025em', lineHeight: 1.15 }}>{piece.title}</h3>
              <p style={{ margin: 0, maxWidth: '42ch', fontSize: 14, lineHeight: 1.65, color: '#8E9BB0' }}>{piece.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
