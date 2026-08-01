'use client';

import { useState } from 'react';

interface NavProps {
  isScrolled?: boolean;
}

export default function Nav({ isScrolled }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(v => !v);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '26px clamp(24px,6vw,60px)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(8,9,13,.8) 0%, rgba(8,9,13,0) 100%)',
            opacity: isScrolled ? 1 : 0,
            pointerEvents: 'none',
            transition: 'opacity 400ms',
          }}
        />
        <a
          href="#top"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: '-.02em',
            transformOrigin: 'center',
          }}
        >
          <span>MARCA<span style={{ color: 'var(--accent)' }}>.</span></span>
        </a>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'clamp(18px,3vw,40px)' }}>
          <span style={{ fontSize: 10, letterSpacing: '.26em', textTransform: 'uppercase', color: '#7A879C' }}>
            Content · Film · Identity
          </span>
          <button
            onClick={toggleMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'transparent',
              border: 0,
              color: '#F2F4F8',
              cursor: 'pointer',
              fontSize: 11,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              padding: '8px 0',
            }}
          >
            Menu
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ display: 'block', width: 22, height: 1, background: '#F2F4F8' }} />
              <span style={{ display: 'block', width: 22, height: 1, background: '#F2F4F8' }} />
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(5,7,11,.97)',
            display: 'flex',
            flexDirection: 'column',
            padding: '26px clamp(24px,6vw,60px) clamp(30px,6vh,60px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.02em' }}>
              MARCA<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
            <button
              onClick={toggleMenu}
              style={{
                background: 'transparent',
                border: 0,
                color: '#F2F4F8',
                cursor: 'pointer',
                fontSize: 11,
                letterSpacing: '.24em',
                textTransform: 'uppercase',
              }}
            >
              Close
            </button>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'clamp(40px,8vw,120px)',
              padding: '40px 0',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { href: '#short-form', label: 'Short Form' },
                { href: '#long-form', label: 'Long Form' },
                { href: '#case-studies', label: 'Case Studies' },
                { href: '#branding', label: 'Identity' },
                { href: '#portfolio', label: 'Portfolio', italic: true },
                { href: '#contact', label: 'Contact' },
              ].map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  style={{
                    fontSize: 'clamp(34px,5.5vw,72px)',
                    fontWeight: item.italic ? 400 : 700,
                    letterSpacing: '-.04em',
                    lineHeight: 1.05,
                    fontFamily: item.italic ? "'Instrument Serif', Georgia, serif" : undefined,
                    fontStyle: item.italic ? 'italic' : undefined,
                    color: '#F2F4F8',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 300 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: '#55627A' }}>Studio</span>
                <span style={{ fontSize: 15, lineHeight: 1.6, color: '#9AA6BA' }}>4th Floor, Kabir House, Baner Road, Pune 411045</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: '#55627A' }}>Enquiries</span>
                <a href="#contact" style={{ fontSize: 15, color: '#F2F4F8' }}>studio@marcacreatives.co</a>
                <a href="#contact" style={{ fontSize: 15, color: '#9AA6BA' }}>+91 98220 41188</a>
              </div>
              <div style={{ display: 'flex', gap: 18 }}>
                {['Instagram', 'YouTube', 'Vimeo'].map(s => (
                  <a key={s} href="#contact" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#9AA6BA' }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
