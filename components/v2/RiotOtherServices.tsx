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

/** Same three services, images and copy as PortfolioSection. */
const otherServices: ServiceItem[] = [
  {
    id: 'photoshoot',
    num: '01',
    title: 'Photoshoot',
    tagline: 'Product, portrait, lifestyle and editorial shoots designed to feed high-authority visual content across all channels.',
    bg: 'var(--r-yellow)',
    images: [
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786608765/ChatGPT_Image_Jul_16_2026_05_41_45_PM_hox3lo.png', caption: 'Lifestyle & Product Launch' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786608769/ChatGPT_Image_Jul_16_2026_06_10_05_PM_c7dwfy.png', caption: 'Bridal & Fashion Editorial' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607738/ChatGPT_Image_Jul_16_2026_06_08_31_PM_ckdz6t.png', caption: 'Studio Culinary Storytelling' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607737/ChatGPT_Image_Jul_16_2026_05_55_07_PM_nx1dgt.png', caption: 'Festive Menswear Campaign' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1785494169/WhatsApp_Image_2026-07-31_at_2.34.46_PM_f1ofwi.jpg', caption: 'Executive Portrait Shoot' },
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
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607756/1_2_yk2t4j.jpg', caption: 'Seeds & Berries Stand-Up Pouch' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607755/BOOK_qmgybt.jpg', caption: '20+ Flavor Mukhwas Tube System' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607741/FRUITS_MAGAZINE_tgo2hn.jpg', caption: 'Dehydrated Fruits SKU Packaging' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607738/WhatsApp_Image_2021-02-12_at_3.55.13_AM_20_f5w1vq.jpg', caption: 'Festive Green Kraft Gifting Box' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1785487014/5_rnslzq.png', caption: 'Identity & Typography System' },
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
        <h3 className="riot-display" style={{ fontSize: 'clamp(20px,1.9vw,28px)' }}>{service.title}</h3>
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
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-muted)' }}>
          Other Services
        </span>
        <h2 className="riot-display" style={{ fontSize: 'clamp(38px,6.8vw,104px)', color: 'var(--r-h-blue)' }}>Other Services</h2>
        <p style={{ margin: 0, maxWidth: '68ch', fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.65, color: 'var(--r-muted)' }}>
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
  background: '#FFFFFF',
  color: 'var(--r-ink)',
  fontFamily: 'inherit',
  fontSize: 14,
};
