'use client';

import { useState, useEffect, type FormEvent } from 'react';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  images: { src: string; caption: string }[];
}

const otherServices: ServiceItem[] = [
  {
    id: 'photoshoot',
    num: '01',
    title: 'Photoshoot',
    tagline: 'Product, portrait, lifestyle and editorial shoots designed to feed high-authority visual content across all channels.',
    images: [
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786608765/ChatGPT_Image_Jul_16_2026_05_41_45_PM_hox3lo.png',
        caption: 'Lifestyle & Product Launch',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786608769/ChatGPT_Image_Jul_16_2026_06_10_05_PM_c7dwfy.png',
        caption: 'Bridal & Fashion Editorial',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607738/ChatGPT_Image_Jul_16_2026_06_08_31_PM_ckdz6t.png',
        caption: 'Studio Culinary Storytelling',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607737/ChatGPT_Image_Jul_16_2026_05_55_07_PM_nx1dgt.png',
        caption: 'Festive Menswear Campaign',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1785494169/WhatsApp_Image_2026-07-31_at_2.34.46_PM_f1ofwi.jpg',
        caption: 'Executive Portrait Shoot',
      },
    ],
  },
  {
    id: 'ad-campaigns',
    num: '02',
    title: 'Ad Campaigns',
    tagline: 'High-converting concept, script, production, and platform-native cutdowns engineered for maximum ROAS and reach.',
    images: [
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1785486926/4_c5ql8a.png',
        caption: 'Paid Social Performance Ads',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786733662/EOS_Couture_ijyzyw.png',
        caption: 'Luxury Fashion Campaign Film',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607736/ChatGPT_Image_Jul_16_2026_05_53_26_PM_c90ttf.png',
        caption: 'Commercial Creative Direction',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607732/ChatGPT_Image_Jul_16_2026_05_53_35_PM_oewfwt.png',
        caption: 'Brand Storytelling Cutdowns',
      },
    ],
  },
  {
    id: 'packaging-creative-design',
    num: '03',
    title: 'Packaging & Creative Design',
    tagline: 'Tactile packaging, SKU label architectures, and brand systems crafted to win customer attention on shelves and feeds.',
    images: [
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607756/1_2_yk2t4j.jpg',
        caption: 'Seeds & Berries Stand-Up Pouch',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607755/BOOK_qmgybt.jpg',
        caption: '20+ Flavor Mukhwas Tube System',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607741/FRUITS_MAGAZINE_tgo2hn.jpg',
        caption: 'Dehydrated Fruits SKU Packaging',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607738/WhatsApp_Image_2021-02-12_at_3.55.13_AM_20_f5w1vq.jpg',
        caption: 'Festive Green Kraft Gifting Box',
      },
      {
        src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1785487014/5_rnslzq.png',
        caption: 'Identity & Typography System',
      },
    ],
  },
];

function ServiceCard({ service, onBook }: { service: ServiceItem; onBook: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % service.images.length);
    }, 2500); // changes image every 2.5s

    return () => clearInterval(timer);
  }, [service.images.length]);

  return (
    <article
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'clamp(18px, 2.2vh, 26px)',
        padding: 'clamp(22px, 2.4vw, 32px)',
        borderRadius: 'clamp(18px, 1.8vw, 26px)',
        background: 'radial-gradient(110% 120% at 20% 0%, #0F172A 0%, #080D1A 50%, #040711 100%)',
        border: '1px solid rgba(242, 244, 248, 0.1)',
        boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.75)',
        overflow: 'hidden',
        transition: 'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(62, 109, 255, 0.4)';
        e.currentTarget.style.boxShadow = '0 30px 70px -10px rgba(30, 68, 175, 0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(242, 244, 248, 0.1)';
        e.currentTarget.style.boxShadow = '0 24px 60px -12px rgba(0, 0, 0, 0.75)';
      }}
    >
      {/* ── Top Header of Card ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
          {service.num} · Service
        </span>
        <h3 style={{ margin: 0, fontSize: 'clamp(20px, 1.8vw, 28px)', fontWeight: 700, letterSpacing: '-.03em', color: '#F2F4F8', lineHeight: 1.15 }}>
          {service.title}
        </h3>
        <p style={{ margin: 0, fontSize: 'clamp(12px, 0.95vw, 14px)', lineHeight: 1.6, color: '#9EB0CB' }}>
          {service.tagline}
        </p>
      </div>

      {/* ── Auto-Sliding Image Showcase Frame (Changes every 2.5s) ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: 'clamp(12px, 1.2vw, 18px)',
          overflow: 'hidden',
          background: '#070B14',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 14px 34px rgba(0, 0, 0, 0.5)',
        }}
      >
        {service.images.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentIdx === idx ? 1 : 0,
              transform: currentIdx === idx ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 700ms cubic-bezier(.2,.8,.2,1), transform 900ms ease-out',
              pointerEvents: currentIdx === idx ? 'auto' : 'none',
            }}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: 'cover' }}
              priority={idx === 0}
            />
            {/* Subtle bottom vignette gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 'auto 0 0 0',
                height: '45%',
                background: 'linear-gradient(180deg, transparent 0%, rgba(3, 6, 14, 0.85) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        ))}

        {/* Dynamic Image Caption */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 14,
            zIndex: 3,
            padding: '5px 12px',
            borderRadius: 999,
            background: 'rgba(5, 8, 16, 0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#E2E8F0',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '-.01em',
            pointerEvents: 'none',
            maxWidth: 'calc(100% - 100px)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {service.images[currentIdx]?.caption}
        </div>

        {/* Progress Dots */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 14,
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'rgba(5, 8, 16, 0.65)',
            backdropFilter: 'blur(8px)',
            padding: '5px 8px',
            borderRadius: 999,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {service.images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIdx(dotIdx)}
              aria-label={`Show image ${dotIdx + 1}`}
              style={{
                width: currentIdx === dotIdx ? 16 : 5,
                height: 5,
                borderRadius: 999,
                background: currentIdx === dotIdx ? 'var(--accent)' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom Card CTA ── */}
      <button
        type="button"
        className="btn-outline"
        onClick={onBook}
        style={{
          width: '100%',
          justifyContent: 'center',
          padding: '12px 20px',
          fontSize: 10,
          borderRadius: 999,
          marginTop: 'auto',
        }}
      >
        Book service <span>→</span>
      </button>
    </article>
  );
}

export default function PortfolioSection() {
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
      id="other-services"
      style={{
        position: 'relative',
        zIndex: 8,
        padding: 'clamp(80px, 11vh, 140px) clamp(24px, 6vw, 60px)',
        background: '#04060A',
        borderTop: '1px solid rgba(242, 244, 248, 0.08)',
      }}
    >
      {/* ── Centered Section Header ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          textAlign: 'center',
          maxWidth: 960,
          margin: '0 auto clamp(44px, 6.5vh, 72px)',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
          Other Services
        </span>
        <h2
          style={{
            margin: 0,
            fontSize: 'clamp(32px, 4.2vw, 68px)',
            fontWeight: 700,
            letterSpacing: '-.04em',
            lineHeight: 1.04,
            color: '#F2F4F8',
          }}
        >
          Other Services
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: '68ch',
            fontSize: 'clamp(14px, 1.1vw, 17px)',
            lineHeight: 1.65,
            color: '#A0B0CC',
          }}
        >
          From photoshoots and ad campaigns to packaging and creative design, we offer end to end creative solutions that bring your brand to life and create a strong, consistent, and memorable presence across every touchpoint.
        </p>
      </div>

      {/* ── 3-Column Responsive Row Grid ── */}
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(20px, 2.4vw, 32px)',
          alignItems: 'stretch',
        }}
      >
        {otherServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            onBook={() => setBooking(index)}
          />
        ))}
      </div>

      {/* ── Booking Inquiry Modal ── */}
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
            background: 'rgba(3, 5, 9, 0.82)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              width: 'min(520px, 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
              padding: 'clamp(28px, 3vw, 44px)',
              border: '1px solid rgba(242, 244, 248, 0.12)',
              borderRadius: 20,
              background: '#090E1A',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  Inquire About Service
                </span>
                <h3 style={{ margin: 0, fontSize: 'clamp(22px, 2.2vw, 30px)', fontWeight: 600, letterSpacing: '-.028em', color: '#F2F4F8' }}>
                  {otherServices[booking].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                aria-label="Close"
                style={{
                  flex: '0 0 auto',
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  border: '1px solid rgba(242, 244, 248, 0.18)',
                  background: 'transparent',
                  color: '#F2F4F8',
                  fontSize: 16,
                  cursor: 'pointer',
                }}
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
  border: '1px solid rgba(242, 244, 248, 0.16)',
  borderRadius: 10,
  background: 'rgba(242, 244, 248, 0.03)',
  color: '#F2F4F8',
  fontFamily: 'inherit',
  fontSize: 14,
};
