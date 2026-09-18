import { site } from '@/content-lib/site';

export default function V2Contact() {
  return (
    <section
      id="contact"
      className="v2-ox"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(60px,10vh,120px) clamp(18px,4vw,44px) 0',
      }}
    >
      <span className="v2-micro" style={{ color: 'var(--c-red-bright)' }}>10 — Let&apos;s talk</span>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 'clamp(24px,4vw,60px)',
          marginTop: 'clamp(20px,3vh,34px)',
        }}
      >
        <h2 className="v2-display" style={{ flex: '1 1 520px', fontSize: 'clamp(30px,4.8vw,76px)', maxWidth: '17ch' }}>
          Somebody is going to tell your story this year. It should be{' '}
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              textTransform: 'none',
              color: 'var(--c-red-bright)',
            }}
          >
            you.
          </span>
        </h2>

        <div style={{ flex: '0 1 300px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href={`mailto:${site.email}`} className="v2-cta v2-cta-solid">
              Start your project ↗
            </a>
            <a href={site.phone.href} className="v2-cta" style={{ color: 'var(--c-paper)' }}>
              Schedule a discovery call
            </a>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(241,238,233,.6)' }}>Usually a reply within a day.</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <a href={`mailto:${site.email}`} style={{ fontSize: 14, fontWeight: 600, color: 'var(--c-paper)' }}>{site.email}</a>
            <a href={site.phone.href} className="v2-micro" style={{ color: 'rgba(241,238,233,.6)' }}>{site.phone.display}</a>
          </div>
        </div>
      </div>

      {/* Oversized closing wordmark, cropped by the section edge */}
      <div
        aria-hidden="true"
        className="v2-display"
        style={{
          marginTop: 'clamp(30px,6vh,70px)',
          fontSize: 'clamp(64px,19vw,300px)',
          lineHeight: .78,
          textAlign: 'center',
          color: 'rgba(241,238,233,.1)',
          userSelect: 'none',
        }}
      >
        MARCA
      </div>
    </section>
  );
}
