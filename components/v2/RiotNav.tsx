'use client';

import { useState } from 'react';
import { site } from '@/content-lib/site';

const links = [
  { href: '#short-form', label: 'Short Form' },
  { href: '#long-form', label: 'Long Form' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function RiotNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '12px clamp(18px,4vw,44px)',
          background: 'var(--r-yellow)',
          borderBottom: '2px solid var(--r-black)',
        }}
      >
        <a href="#top" className="riot-display" style={{ fontSize: 'clamp(18px,2vw,24px)', color: 'var(--r-black)', textDecoration: 'none' }}>
          Marca
        </a>

        <nav className="riot-nav-links" style={{ alignItems: 'center', gap: 'clamp(14px,2vw,28px)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 12, fontWeight: 700, color: 'var(--r-black)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#contact" className="riot-btn riot-nav-cta" style={{ padding: '9px 18px', fontSize: 11 }}>
            Discovery call
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="riot-menu-btn"
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              border: '2px solid var(--r-black)',
              background: 'transparent',
              color: 'var(--r-black)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            {menuOpen ? '×' : '≡'}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'var(--r-cream)',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px clamp(18px,5vw,48px) clamp(26px,5vh,48px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="riot-display" style={{ fontSize: 22, color: 'var(--r-black)' }}>Marca</span>
            <button
              type="button"
              onClick={toggleMenu}
              style={{
                border: '2px solid var(--r-black)',
                borderRadius: 999,
                background: 'transparent',
                color: 'var(--r-black)',
                cursor: 'pointer',
                fontSize: 11,
                fontWeight: 700,
                padding: '8px 16px',
              }}
            >
              Close
            </button>
          </div>

          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={toggleMenu}
                className="riot-display"
                style={{ fontSize: 'clamp(28px,6vw,60px)', color: 'var(--r-black)', textDecoration: 'none', padding: '6px 0' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between' }}>
            <a href={`mailto:${site.email}`} style={{ fontSize: 14, fontWeight: 700, color: 'var(--r-black)' }}>{site.email}</a>
            <div style={{ display: 'flex', gap: 16 }}>
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 700, color: 'var(--r-black)' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
