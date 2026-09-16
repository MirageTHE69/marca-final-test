'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '#reels', label: 'Instagram' },
  { href: '#films', label: 'YouTube' },
  { href: '#work', label: 'Case Studies' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQ' },
];

export default function V2Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--v2-orange)',
        borderBottom: '2px solid var(--v2-black)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '16px clamp(20px,5vw,48px)',
        }}
      >
        <Link href="/v2" className="v2-heading" style={{ fontSize: 24, color: 'var(--v2-black)', textDecoration: 'none' }}>
          MARCA.
        </Link>

        <nav className="v2-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2vw,30px)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 13, fontWeight: 600, color: 'var(--v2-black)', textDecoration: 'none' }}
              className="v2-nav-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#contact" className="v2-btn" style={{ padding: '10px 20px', fontSize: 12 }}>
            Discovery call <span>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              border: '2px solid var(--v2-black)',
              background: 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="v2-menu-toggle"
          >
            {open ? '×' : '≡'}
          </button>
        </div>
      </div>

      {open && (
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: '0 clamp(20px,5vw,48px) 20px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ padding: '10px 0', fontSize: 16, fontWeight: 600, color: 'var(--v2-black)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
