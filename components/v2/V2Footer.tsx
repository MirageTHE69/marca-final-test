import { site } from '@/content-lib/site';

export default function V2Footer() {
  return (
    <footer className="v2-orange-section" style={{ padding: 'clamp(50px,7vh,80px) clamp(20px,5vw,48px) 28px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(30px,5vw,64px)', paddingBottom: 'clamp(36px,5vw,56px)' }}>
        <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="v2-heading" style={{ fontSize: 26 }}>MARCA.</span>
          <p style={{ margin: 0, maxWidth: '30ch', fontSize: 14, lineHeight: 1.6 }}>
            A creative production studio for content, film and brand identity.
          </p>
          <div style={{ display: 'flex', gap: 16, paddingTop: 4 }}>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 700, color: 'var(--v2-black)' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ flex: '0 1 170px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', opacity: 0.7 }}>Studio</span>
          {[
            { href: '#reels', label: 'Short form' },
            { href: '#films', label: 'Long form' },
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/case-studies', label: 'Case studies' },
            { href: '/faq', label: 'FAQ' },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 14, color: 'var(--v2-black)' }}>{l.label}</a>
          ))}
        </div>

        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', opacity: 0.7 }}>Get in touch</span>
          <a href={`mailto:${site.email}`} style={{ fontSize: 'clamp(16px,1.5vw,19px)', fontWeight: 700, color: 'var(--v2-black)' }}>{site.email}</a>
          <a href={site.phone.href} style={{ fontSize: 14, color: 'var(--v2-black)' }}>{site.phone.display}</a>
          <span style={{ fontSize: 13, lineHeight: 1.6 }}>{site.address.line1}<br />{site.address.line2}</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 22, borderTop: '2px solid var(--v2-black)' }}>
        <span style={{ fontSize: 12, fontWeight: 600 }}>© 2026 Marca Creatives. All rights reserved.</span>
        <span style={{ fontSize: 12, fontWeight: 600 }}>Concept theme — v2</span>
      </div>
    </footer>
  );
}
