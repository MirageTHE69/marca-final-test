import { site } from '@/content-lib/site';

export default function V2Contact() {
  return (
    <section
      id="contact"
      className="v2-black-section"
      style={{
        padding: 'clamp(80px,12vh,150px) clamp(20px,5vw,48px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(30px,4vh,44px)',
        borderTop: '2px solid var(--v2-orange)',
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange)' }}>
        Let&apos;s talk
      </span>
      <h2 className="v2-heading" style={{ margin: 0, maxWidth: '18ch', fontSize: 'clamp(38px,7vw,108px)', color: 'var(--v2-cream)' }}>
        Somebody is going to tell your story this year. It should be{' '}
        <span className="v2-mark" style={{ ['--mark-color' as string]: 'var(--v2-orange)', color: 'var(--v2-black)' }}>you</span>.
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 18 }}>
        <a href={`mailto:${site.email}`} className="v2-btn v2-btn-yellow" style={{ padding: '18px 34px', fontSize: 14 }}>
          Start your project <span>→</span>
        </a>
        <a href={site.phone.href} className="v2-btn v2-btn-outline" style={{ borderColor: 'var(--v2-cream)', color: 'var(--v2-cream)', padding: '18px 34px', fontSize: 14 }}>
          Schedule a discovery call
        </a>
        <span style={{ fontSize: 12, color: 'rgba(244,236,222,.6)' }}>Usually a reply within a day.</span>
      </div>
    </section>
  );
}
