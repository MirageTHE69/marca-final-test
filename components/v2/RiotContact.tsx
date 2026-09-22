import MediaSlot from '@/components/MediaSlot';
import { site } from '@/content-lib/site';

/** Same closing statement and actions as ContactSection. */
export default function RiotContact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(70px,12vh,150px) clamp(18px,4vw,44px)',
        overflow: 'hidden',
        background: 'var(--r-black)',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: .35, overflow: 'hidden' }}>
        <MediaSlot
          type="video"
          src="https://ik.imagekit.io/5feqwwaxb/MARCA%20WEBSITE%2001.mp4"
          placeholder="Drop closing film"
        />
      </div>
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,.72), rgba(18,18,18,.92))', pointerEvents: 'none' }}
      />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vw,52px)', maxWidth: 1100 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>
          10 — Let&apos;s talk
        </span>
        <h2 className="riot-display" style={{ fontSize: 'clamp(36px,7.2vw,124px)', color: 'var(--r-h-yellow)' }}>
          Somebody is going to tell your story this year. It should be{' '}
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--r-cream)' }}>
            you.
          </span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
          <a href={`mailto:${site.email}`} className="riot-btn riot-btn-yellow" style={{ padding: '17px 32px', fontSize: 13 }}>
            Start your project →
          </a>
          <a href={site.phone.href} className="riot-btn riot-btn-ghost" style={{ padding: '17px 32px', fontSize: 13, color: 'var(--r-cream)' }}>
            Schedule a discovery call
          </a>
          <span style={{ fontSize: 12, color: 'rgba(243,240,221,.6)' }}>Usually a reply within a day.</span>
        </div>
      </div>
    </section>
  );
}
