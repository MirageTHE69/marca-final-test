import MediaSlot from '@/components/MediaSlot';
import { asMedia, videoUrl } from '@/lib/media';
import type { Home, Setting } from '@/payload/payload-types';

import RiotContactForm from './RiotContactForm';

/** Closing statement, contact buttons and the enquiry form. */
export default function RiotContact({ data, settings, services }: { data: Home['contact']; settings: Setting; services: { value: string; label: string }[] }) {
  const film = videoUrl(asMedia(data.video));

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
      {film && (
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, overflow: 'hidden' }}>
          <MediaSlot type="video" src={film} placeholder="Drop closing film" />
        </div>
      )}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,.72), rgba(18,18,18,.92))', pointerEvents: 'none' }}
      />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vw,52px)' }}>
        {data.kicker && (
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--r-yellow)' }}>{data.kicker}</span>
        )}
        <h2 className="riot-display" style={{ maxWidth: 1100, fontSize: 'clamp(36px,7.2vw,124px)', color: 'var(--r-h-yellow)' }}>
          {data.title}{' '}
          {data.titleAccent && (
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--r-cream)' }}>
              {data.titleAccent}
            </span>
          )}
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'clamp(28px,4vw,56px)' }}>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
              <a href={`mailto:${settings.email}`} className="riot-btn riot-btn-yellow" style={{ padding: '17px 32px', fontSize: 13 }}>
                {data.primaryButton || 'Start your project →'}
              </a>
              <a href={`tel:${settings.phoneLink}`} className="riot-btn riot-btn-ghost" style={{ padding: '17px 32px', fontSize: 13, color: 'var(--r-cream)' }}>
                {data.secondaryButton || 'Schedule a discovery call'}
              </a>
            </div>
            {data.note && <span style={{ fontSize: 12, color: 'rgba(243,240,221,.6)' }}>{data.note}</span>}
          </div>
          <RiotContactForm title={data.formTitle} button={data.formButton} services={services} email={settings.email} />
        </div>
      </div>
    </section>
  );
}
