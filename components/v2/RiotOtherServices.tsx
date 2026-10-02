'use client';

import { useState, useEffect, type FormEvent } from 'react';
import MediaSlot from '@/components/MediaSlot';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  bg: string;
  images: { src: string; caption: string }[];
}

/**
 * Photoshoot and Packaging show the first image of each numbered sub-folder
 * under Cloudinary PORTFOLIO/1. FASHION SHOOT and PORTFOLIO/3. PACKAGING DESIGN.
 */
const otherServices: ServiceItem[] = [
  {
    id: 'photoshoot',
    num: '01',
    title: 'Photoshoot',
    tagline: 'Product, portrait, lifestyle and editorial shoots designed to feed high-authority visual content across all channels.',
    bg: 'var(--r-yellow)',
    // Portrait shots in a 4:3 frame: crop from the top so faces stay in.
    images: [
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857280/ChatGPT_Image_Jul_17_2026_02_47_38_PM.png', caption: 'Menswear Sherwani Editorial' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857363/ChatGPT_Image_Jul_17_2026_02_25_58_PM.png', caption: 'Summer Dress Campaign' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857558/ChatGPT_Image_Jul_16_2026_06_10_05_PM.png', caption: 'Bridal Lehenga Editorial' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857651/ChatGPT_Image_Jul_16_2026_06_26_24_PM.png', caption: 'Festive Lehenga Outdoor Shoot' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857833/ChatGPT_Image_Jul_16_2026_05_41_45_PM.png', caption: 'Lifestyle Picnic Shoot' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790858055/ChatGPT_Image_Aug_12_2026_01_54_28_PM.png', caption: 'Studio Lehenga Shoot' },
    ],
  },
  {
    id: 'ad-campaigns',
    num: '02',
    title: 'Ad Campaigns',
    tagline: 'High-converting concept, script, production, and platform-native cutdowns engineered for maximum ROAS and reach.',
    bg: 'var(--r-blue)',
    images: [
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1785486926/4_c5ql8a.png', caption: 'Paid Social Performance Ads' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786733662/EOS_Couture_ijyzyw.png', caption: 'Luxury Fashion Campaign Film' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607736/ChatGPT_Image_Jul_16_2026_05_53_26_PM_c90ttf.png', caption: 'Commercial Creative Direction' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607732/ChatGPT_Image_Jul_16_2026_05_53_35_PM_oewfwt.png', caption: 'Brand Storytelling Cutdowns' },
    ],
  },
  {
    id: 'packaging-creative-design',
    num: '03',
    title: 'Packaging & Creative Design',
    tagline: 'Tactile packaging, SKU label architectures, and brand systems crafted to win customer attention on shelves and feeds.',
    bg: 'var(--r-orange)',
    images: [
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859073/ChatGPT_Image_Aug_20_2026_06_16_38_PM.png', caption: 'Floral Octagon Gift Box' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859103/ChatGPT_Image_Aug_20_2026_06_20_56_PM.png', caption: 'Illustrated Gifting Box' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859136/ChatGPT_Image_Aug_20_2026_06_44_34_PM.png', caption: 'Seeds & Berries Stand-Up Pouch' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859164/ChatGPT_Image_Aug_20_2026_07_13_39_PM.png', caption: 'Fox Nuts Tin — Chilli & Cheese' },
    ],
  },
];

function ServiceCard({ service, onBook }: { service: ServiceItem; onBook: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % service.images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [service.images.length]);

  return (
    <article
      className="riot-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'clamp(16px,2vh,24px)',
        padding: 'clamp(20px,2.2vw,30px)',
        background: service.bg,
        color: 'var(--r-black)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' }}>
          {service.num} · Service
        </span>
        <h3 className="riot-display" style={{ fontSize: 'clamp(25px,2.7vw,40px)', lineHeight: .98 }}>{service.title}</h3>
        <p style={{ margin: 0, fontSize: 'clamp(12px,.95vw,14px)', lineHeight: 1.6, color: 'rgba(18,18,18,.78)' }}>
          {service.tagline}
        </p>
      </div>

      <div className="riot-media" style={{ width: '100%', aspectRatio: '4 / 3', borderRadius: 14 }}>
        {service.images.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentIdx === idx ? 1 : 0,
              transition: 'opacity 700ms cubic-bezier(.2,.8,.2,1)',
              pointerEvents: currentIdx === idx ? 'auto' : 'none',
            }}
          >
            <MediaSlot src={img.src} alt={img.caption} placeholder="Drop image" sizes="(max-width: 768px) 100vw, 420px" />
          </div>
        ))}

        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            zIndex: 4,
            padding: '5px 12px',
            borderRadius: 999,
            background: 'var(--r-cream)',
            border: '2px solid var(--r-black)',
            color: 'var(--r-black)',
            fontSize: 10,
            fontWeight: 700,
            maxWidth: 'calc(100% - 92px)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            pointerEvents: 'none',
          }}
        >
          {service.images[currentIdx]?.caption}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            padding: '6px 9px',
            borderRadius: 999,
            background: 'var(--r-cream)',
            border: '2px solid var(--r-black)',
          }}
        >
          {service.images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIdx(dotIdx)}
              aria-label={`Show image ${dotIdx + 1}`}
              style={{
                width: currentIdx === dotIdx ? 15 : 5,
                height: 5,
                borderRadius: 999,
                background: currentIdx === dotIdx ? 'var(--r-black)' : 'rgba(18,18,18,.3)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>
      </div>

      <button type="button" className="riot-btn riot-btn-cream" onClick={onBook} style={{ width: '100%', marginTop: 'auto' }}>
        Book service →
      </button>
    </article>
  );
}

export default function RiotOtherServices() {
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
    <section id="other-services" className="riot-cream" style={{ position: 'relative', padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)', borderTop: '2px solid var(--r-black)' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          textAlign: 'center',
          maxWidth: 960,
          margin: '0 auto clamp(38px,6vh,64px)',
        }}
      >
        <span className="riot-kicker">
          Other Services
        </span>
        <h2 className="riot-display" style={{ fontSize: 'clamp(38px,6.8vw,104px)', color: 'var(--r-h-blue)' }}>Other Services</h2>
        <p className="riot-lede" style={{ maxWidth: '68ch' }}>
          From photoshoots and ad campaigns to packaging and creative design, we offer end to end creative solutions that
          bring your brand to life and create a strong, consistent, and memorable presence across every touchpoint.
        </p>
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(18px,2.2vw,30px)',
          alignItems: 'stretch',
        }}
      >
        {otherServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} onBook={() => setBooking(index)} />
        ))}
      </div>

      {booking !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            background: 'rgba(18,18,18,.78)',
          }}
        >
          <div
            style={{
              width: 'min(520px, 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              padding: 'clamp(24px,3vw,40px)',
              border: '2px solid var(--r-black)',
              borderRadius: 20,
              background: 'var(--r-cream)',
              color: 'var(--r-ink)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 18 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
                  Inquire About Service
                </span>
                <h3 className="riot-display" style={{ fontSize: 'clamp(20px,2vw,28px)' }}>{otherServices[booking].title}</h3>
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
                  border: '2px solid var(--r-black)',
                  background: 'transparent',
                  color: 'var(--r-black)',
                  fontSize: 16,
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
            </div>
            {sent ? (
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--r-muted)' }}>
                Thanks — we have your request. Expect a reply within one working day.
              </p>
            ) : (
              <form onSubmit={submitBooking} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input name="name" type="text" placeholder="Your name" required style={inputStyle} />
                <input name="email" type="email" placeholder="Email" required style={inputStyle} />
                <input name="brand" type="text" placeholder="Brand or company" style={inputStyle} />
                <textarea name="brief" rows={3} placeholder="What do you need?" style={{ ...inputStyle, resize: 'vertical' }} />
                <button type="submit" className="riot-btn riot-btn-yellow" style={{ marginTop: 4, width: '100%' }}>
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
  padding: '13px 15px',
  border: '2px solid var(--r-black)',
  borderRadius: 10,
  background: '#EDEEE2',
  color: 'var(--r-ink)',
  fontFamily: 'inherit',
  fontSize: 14,
};
