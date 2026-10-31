'use client';

import { useEffect, useRef, useState, useTransition, type FormEvent } from 'react';

import { submitLead } from '@/lib/submitLead';

type Option = { value: string; label: string };

/** When the form appeared; the server ignores instant (bot) submissions. */
const timestamp = () => Date.now();

const field: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 15px',
  border: '2px solid var(--r-black)',
  borderRadius: 12,
  background: '#F4F4EA',
  color: 'var(--r-ink)',
  fontFamily: 'inherit',
  fontSize: 14,
};

/** Enquiry form in the contact section; submissions land in the admin's Leads list. */
export default function RiotContactForm({ title, button, services, email }: { title?: string | null; button?: string | null; services: Option[]; email: string }) {
  const openedAt = useRef(0);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [sending, startSending] = useTransition();

  useEffect(() => {
    openedAt.current = timestamp();
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set('openedAt', String(openedAt.current));
    setError('');
    startSending(async () => {
      const result = await submitLead(data);
      if (result.ok) setSent(true);
      else setError(result.error);
    });
  };

  return (
    <div
      style={{
        flex: '1 1 380px',
        maxWidth: 520,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 'clamp(22px,2.6vw,32px)',
        border: '2px solid var(--r-black)',
        borderRadius: 22,
        background: 'var(--r-cream)',
        color: 'var(--r-ink)',
        boxShadow: '0 12px 0 -4px var(--r-yellow)',
      }}
    >
      {sent ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '18px 0' }}>
          <span className="riot-display" style={{ fontSize: 'clamp(26px,2.4vw,34px)' }}>Thank you!</span>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>We have your enquiry and will reply within one working day.</p>
        </div>
      ) : (
        <>
          <span className="riot-display" style={{ fontSize: 'clamp(22px,2vw,30px)' }}>{title || 'Tell us about your project'}</span>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <input type="hidden" name="source" value="Contact form" />
            {/* Spam trap: hidden from people, filled in by bots. */}
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: 11 }}>
              <input name="name" type="text" placeholder="Your name" aria-label="Your name" required maxLength={120} style={field} />
              <input name="email" type="email" placeholder="Email" aria-label="Email" required maxLength={200} style={field} />
              <input name="phone" type="tel" placeholder="Phone (optional)" aria-label="Phone" maxLength={40} style={field} />
              <select name="service" aria-label="What do you need?" defaultValue="" style={field}>
                <option value="" disabled>
                  What do you need?
                </option>
                {services.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
                <option value="other">Something else</option>
              </select>
            </div>
            <input name="brand" type="text" placeholder="Brand or company" aria-label="Brand or company" maxLength={160} style={field} />
            <textarea name="message" rows={3} placeholder="A few lines about your project" aria-label="Message" maxLength={4000} style={{ ...field, resize: 'vertical' }} />
            {error && (
              <p role="alert" style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--r-h-red)' }}>
                {error} <a href={`mailto:${email}`} style={{ color: 'inherit' }}>{email}</a>
              </p>
            )}
            <button type="submit" disabled={sending} className="riot-btn riot-btn-yellow" style={{ marginTop: 4, width: '100%', padding: '15px 24px', fontSize: 13, opacity: sending ? 0.6 : 1 }}>
              {sending ? 'Sending…' : button || 'Send enquiry →'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
