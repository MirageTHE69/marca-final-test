import { site } from '@/content-lib/site';
import Link from 'next/link';

/** Same four columns and links as Footer. */
export default function RiotFooter() {
  return (
    <footer
      className="riot-yellow"
      style={{ padding: 'clamp(50px,8vh,90px) clamp(18px,4vw,44px) 30px', borderTop: '2px solid var(--r-black)' }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(30px,5vw,72px)', paddingBottom: 'clamp(38px,5vw,64px)' }}>
        <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span className="riot-display" style={{ fontSize: 'clamp(26px,3vw,40px)' }}>Marca</span>
          <p style={{ margin: 0, maxWidth: '30ch', fontSize: 14, lineHeight: 1.7, color: 'rgba(18,18,18,.72)' }}>
            A creative production studio for content, film and brand identity.
          </p>
          <div style={{ display: 'flex', gap: 16, paddingTop: 4 }}>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--r-black)' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ flex: '0 1 160px', display: 'flex', flexDirection: 'column', gap: 13 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(18,18,18,.6)' }}>Services</span>
          {[
            { href: '/#short-form', label: 'Short form' },
            { href: '/#long-form', label: 'Long form' },
            { href: '/#design', label: 'Thumbnail design' },
            { href: '/portfolio', label: 'Logo & packaging' },
            { href: '/#packages', label: 'Photography' },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ fontSize: 14, color: 'var(--r-black)' }}>{link.label}</a>
          ))}
        </div>

        <div style={{ flex: '0 1 160px', display: 'flex', flexDirection: 'column', gap: 13 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(18,18,18,.6)' }}>Studio</span>
          {[
            { href: '/portfolio', label: 'Services' },
            { href: '/case-studies', label: 'Case studies' },
            { href: '/#process', label: 'Process' },
            { href: '/#packages', label: 'Packages' },
            { href: '/faq', label: 'FAQ' },
            { href: '/#contact', label: 'Contact' },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ fontSize: 14, color: 'var(--r-black)' }}>{link.label}</a>
          ))}
        </div>

        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 13 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(18,18,18,.6)' }}>Get in touch</span>
          <a href={`mailto:${site.email}`} style={{ fontSize: 'clamp(16px,1.5vw,20px)', fontWeight: 700, letterSpacing: '-.01em', color: 'var(--r-black)' }}>
            {site.email}
          </a>
          <a href={site.phone.href} style={{ fontSize: 14, color: 'var(--r-black)' }}>{site.phone.display}</a>
          <span style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(18,18,18,.7)' }}>
            {site.address.line1}
            <br />
            {site.address.line2}
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          paddingTop: 24,
          borderTop: '2px solid var(--r-black)',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(18,18,18,.7)' }}>© 2026 Marca Creatives. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/#contact" style={{ fontSize: 11, fontWeight: 600, color: 'rgba(18,18,18,.7)' }}>Privacy policy</Link>
          <Link href="/#contact" style={{ fontSize: 11, fontWeight: 600, color: 'rgba(18,18,18,.7)' }}>Terms &amp; conditions</Link>
        </div>
      </div>
    </footer>
  );
}
