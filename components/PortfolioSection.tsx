'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Logo & Packaging',
    desc: 'Marks, packaging and the guidelines that keep them consistent everywhere.',
    preview: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785487014/5_rnslzq.png',
  },
  {
    title: 'Photoshoot',
    desc: 'Product, portrait and lifestyle shoots — a day that feeds a quarter of content.',
    preview: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494169/WhatsApp_Image_2026-07-31_at_2.34.46_PM_f1ofwi.jpg',
  },
  {
    title: 'Ad Campaigning',
    desc: 'Concept, creative and cutdowns built for paid — written for the platform they run on.',
    preview: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785486926/4_c5ql8a.png',
  },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [booking, setBooking] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  const closeBooking = () => {
    setBooking(null);
    setSent(false);
  };

  const submitBooking = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="portfolio"
      style={{
        position: 'relative',
        zIndex: 8,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(40px,5vw,80px)',
        padding: 'clamp(90px,14vh,180px) clamp(24px,6vw,60px)',
        background: '#070C18',
        borderTop: '1px solid rgba(242,244,248,.08)',
      }}
    >
      <div style={{ flex: '2 1 480px', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,3vw,44px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>More Services</span>
          <h2 data-reveal="1" style={{ margin: 0, fontSize: 'clamp(34px,4.4vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: .98 }}>
            The rest of<br />what we make.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,
                padding: 'clamp(22px,2.6vh,30px) 0',
                borderTop: '1px solid rgba(242,244,248,.1)',
                borderBottom: i === services.length - 1 ? '1px solid rgba(242,244,248,.1)' : undefined,
              }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(24px,2.4vw,38px)', fontWeight: 500, letterSpacing: '-.025em' }}>{service.title}</h3>
                <p style={{ margin: 0, maxWidth: '44ch', fontSize: 14, lineHeight: 1.65, color: '#8E9BB0' }}>{service.desc}</p>
              </div>
              <button type="button" className="btn-outline" style={{ flex: '0 0 auto', padding: '14px 26px', fontSize: 11 }} onClick={() => setBooking(i)}>
                Book this service <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: '1 1 320px', position: 'sticky', top: 130, alignSelf: 'flex-start' }}>
        <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 14, overflow: 'hidden', background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: activeIndex === i ? 1 : 0,
                transition: 'opacity 600ms cubic-bezier(.16,1,.3,1)',
              }}
            >
              <Image src={service.preview} alt={service.title} fill sizes="320px" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <span style={{ display: 'block', paddingTop: 14, fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>
          Hover a service to preview the work
        </span>
      </div>

      {booking !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            background: 'rgba(3,5,9,.78)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ width: 'min(520px, 100%)', display: 'flex', flexDirection: 'column', gap: 22, padding: 'clamp(28px,3vw,44px)', border: '1px solid rgba(242,244,248,.12)', borderRadius: 18, background: '#080D18' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--accent)' }}>Book a service</span>
                <h3 style={{ margin: 0, fontSize: 'clamp(22px,2.2vw,32px)', fontWeight: 600, letterSpacing: '-.028em' }}>{services[booking].title}</h3>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                aria-label="Close"
                style={{ flex: '0 0 auto', width: 38, height: 38, borderRadius: 999, border: '1px solid rgba(242,244,248,.18)', background: 'transparent', color: '#F2F4F8', fontSize: 15, cursor: 'pointer' }}
              >
                ×
              </button>
            </div>
            {sent ? (
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#A7B2C4' }}>
                Thanks — we have your request. Expect a reply within one working day.
              </p>
            ) : (
              <form onSubmit={submitBooking} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input name="name" type="text" placeholder="Your name" required style={inputStyle} />
                <input name="email" type="email" placeholder="Email" required style={inputStyle} />
                <input name="brand" type="text" placeholder="Brand or company" style={inputStyle} />
                <textarea name="brief" rows={3} placeholder="What do you need?" style={{ ...inputStyle, resize: 'vertical' }} />
                <button type="submit" className="btn-primary" style={{ marginTop: 4, justifyContent: 'center' }}>
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

const inputStyle = {
  padding: '14px 16px',
  border: '1px solid rgba(242,244,248,.16)',
  borderRadius: 10,
  background: 'rgba(242,244,248,.03)',
  color: '#F2F4F8',
  fontFamily: 'inherit',
  fontSize: 15,
};
