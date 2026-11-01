'use client';

import { useState, useEffect, useTransition, type FormEvent } from 'react';
import MediaSlot from '@/components/MediaSlot';
import { asMedia, imageUrl } from '@/lib/media';
import { submitLead } from '@/lib/submitLead';
import { colourVar, pad2 } from '@/lib/theme';
import type { Home } from '@/payload/payload-types';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  bg: string;
  images: { src: string; caption: string }[];
}

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

/** When the form was opened; the server rejects instant (bot) submissions. */
const timestamp = () => Date.now();

/** The service cards, each with an image slideshow and a booking form. */
export default function RiotOtherServices({ data, email }: { data: Home['services']; email: string }) {
  const otherServices: ServiceItem[] = (data.items ?? []).map((s, i) => ({
    id: s.leadService,
    num: pad2(i + 1),
    title: s.title,
    tagline: s.tagline ?? '',
    bg: colourVar(s.colour),
    images: (s.images ?? []).map((img) => ({
      src: imageUrl(asMedia(img.image), { width: 1000, aspect: '4:3' }) ?? '',
      caption: img.caption ?? '',
    })),
  }));
  const [booking, setBooking] = useState<number | null>(null);
  const [openedAt, setOpenedAt] = useState(0);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [sending, startSending] = useTransition();

  const openBooking = (idx: number) => {
    setBooking(idx);
    setOpenedAt(timestamp());
    setSent(false);
    setError('');
  };

  const closeBooking = () => {
    setBooking(null);
    setSent(false);
    setError('');
  };

  const submitBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setError('');
    startSending(async () => {
      const result = await submitLead(data);
      if (result.ok) setSent(true);
      else setError(result.error);
    });
  };

  return (
    <section id="other-services" className="riot-cream" style={{ position: 'relative', padding: 'clamp(56px,9vh,120px) clamp(18px,4vw,44px)', borderTop: '2px solid var(--r-black)' }}>
      <div
        className="riot-head"
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
        {data.kicker && <span className="riot-kicker">{data.kicker}</span>}
        <h2 className="riot-display" style={{ fontSize: 'clamp(38px,6.8vw,104px)', color: 'var(--r-h-blue)' }}>{data.title}</h2>
        <p className="riot-lede" style={{ maxWidth: '68ch' }}>
          {data.lede}
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
          <ServiceCard key={service.id} service={service} onBook={() => openBooking(index)} />
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
                <input type="hidden" name="service" value={otherServices[booking].id} />
                <input type="hidden" name="source" value="Book service" />
                <input type="hidden" name="openedAt" value={openedAt} />
                {/* Spam trap: hidden from people, filled in by bots. */}
                <input
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                />
                <input name="name" type="text" placeholder="Your name" required maxLength={120} style={inputStyle} />
                <input name="email" type="email" placeholder="Email" required maxLength={200} style={inputStyle} />
                <input name="phone" type="tel" placeholder="Phone (optional)" maxLength={40} style={inputStyle} />
                <input name="brand" type="text" placeholder="Brand or company" maxLength={160} style={inputStyle} />
                <textarea name="message" rows={3} placeholder="What do you need?" maxLength={4000} style={{ ...inputStyle, resize: 'vertical' }} />
                {error && (
                  <p role="alert" style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--r-h-red)' }}>
                    {error} <a href={`mailto:${email}`} style={{ color: 'inherit' }}>{email}</a>
                  </p>
                )}
                <button type="submit" disabled={sending} className="riot-btn riot-btn-yellow" style={{ marginTop: 4, width: '100%', opacity: sending ? 0.6 : 1 }}>
                  {sending ? 'Sending…' : 'Send request'}
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
