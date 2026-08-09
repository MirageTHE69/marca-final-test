import type { Metadata } from 'next';
import Link from 'next/link';
import PageNav from '@/components/PageNav';
import MediaSlot from '@/components/MediaSlot';
import CountUpStat from '@/components/casestudy/CountUpStat';
import CompareSlider from '@/components/casestudy/CompareSlider';
import Reveal from '@/components/casestudy/Reveal';
import CaseStudyFooter from '@/components/casestudy/CaseStudyFooter';
import MediaCard from '@/components/casestudy/MediaCard';

const ACCENT = '#3E6DFF';

export const metadata: Metadata = {
  title: 'Aster Health — Marca Creatives',
  description: "We turned one of the region's largest hospitals into a brand people trust — through documentary storytelling, not advertising.",
};

const overviewRows = [
  { label: 'Industry', value: 'Healthcare' },
  { label: 'Duration', value: '6 months' },
  { label: 'Team', value: '6 creatives' },
  { label: 'Year', value: '2026' },
];

const processChapters = [
  {
    num: '01',
    label: 'Research',
    placeholder: 'Research — interview notes and ward walkthroughs',
    heading: 'Nineteen days before a camera came out.',
    body: 'We shadowed night rounds, sat in on family briefings, and interviewed 34 staff. The insight was in the handovers — the moment one shift trusts the next with a life.',
  },
  {
    num: '02',
    label: 'Strategy',
    placeholder: 'Strategy — positioning wall and message architecture',
    heading: 'One promise, told by the people who keep it.',
    body: null,
  },
  {
    num: '03',
    label: 'Production',
    placeholder: 'Production — behind the scenes, crew on the ward',
    heading: 'Twelve shoot days that moved when the team moved.',
    body: 'One camera, available light, 86 hours of rushes. The grade stays cold in the corridors and warms only in the rooms where people recover.',
    tags: ['Sony FX6 · 40mm', 'Crew of 6', 'Zero staged scenes'],
  },
  {
    num: '04',
    label: 'Launch',
    placeholder: 'Launch — campaign in place, cinema and social',
    heading: 'A film first, then a year of proof.',
    body: 'The brand film opened in cinemas across two districts, then broke into 72 verticals — each one answering exactly one question a family had already asked at the front desk.',
  },
];

function SectionEyebrow({ children }: { children: string }) {
  return <span style={{ fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: ACCENT }}>{children}</span>;
}

export default function AsterHealthPage() {
  return (
    <main style={{ background: '#05070B', color: '#F2F4F8' }}>
      <PageNav variant="fixed-progress" accent={ACCENT} rightLabel="Case study · 06" ctaLabel="All work" ctaHref="/" />

      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <MediaSlot placeholder="Cinematic hero film — slow push through the ward at dawn" />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(5,7,11,.62), transparent 30%, rgba(5,7,11,.92))' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 'clamp(18px,2.8vh,30px)', padding: 'clamp(80px,10vh,120px) clamp(20px,5vw,56px) clamp(60px,8vh,90px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 30, height: 1, background: ACCENT }} />
            <SectionEyebrow>Case study</SectionEyebrow>
          </div>
          <h1 style={{ margin: 0, fontSize: 'clamp(46px,11vw,168px)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .94 }}>Aster Health</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {['Healthcare', '2026', 'Bengaluru · 2 campuses'].map((tag) => (
              <span key={tag} style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#93A0B4' }}>{tag}</span>
            ))}
          </div>
          <p style={{ margin: 0, maxWidth: '46ch', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(19px,1.9vw,28px)', lineHeight: 1.4, color: '#E7EBF2' }}>
            We turned one of the region&apos;s largest hospitals into a brand people trust — through documentary storytelling, not advertising.
          </p>
        </div>
        <div style={{ position: 'absolute', right: 'clamp(20px,5vw,56px)', bottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Scroll</span>
          <span style={{ width: 1, height: 34, background: 'linear-gradient(180deg, rgba(242,244,248,.6), transparent)' }} />
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: 'clamp(80px,11vh,140px) clamp(20px,5vw,56px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px,6vw,80px)' }}>
        <Reveal style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <SectionEyebrow>01 — The project</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.15 }}>
            Known for its outcomes. Unknown for everything else.
          </h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#96A2B6' }}>
            Aster Health runs 1,400 beds across two campuses and one of the busiest trauma units in the state. Online, it existed as a phone number and a parking map. Families researched it and found nothing — no faces, no voice, no reason to choose it over the hospital eleven minutes away. We were hired to give the institution a public identity that matched its clinical one.
          </p>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#96A2B6' }}>
            Six months, one embedded crew, and a rule we never broke: nothing staged.
          </p>
        </Reveal>
        <Reveal delay={120} style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 18, paddingTop: 20, borderTop: '1px solid rgba(242,244,248,.1)' }}>
          <span style={{ fontSize: 13, color: '#93A0B4' }}>
            {overviewRows.map((r) => `${r.label}: ${r.value}`).join(' · ')}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>Services</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: '#C3CBD9' }}>Brand strategy, Creative direction, Photography, Video production, Social media, Website</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>Deliverables</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: '#C3CBD9' }}>Brand film, Social campaign, Photography library, Identity refresh, Motion assets</span>
          </div>
        </Reveal>
      </section>

      {/* Challenge */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,44px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>02 — Where we started</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>The Challenge</h2>
        </div>
        <Reveal style={{ position: 'relative', aspectRatio: '21 / 9', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(242,244,248,.08)' }}>
          <MediaSlot placeholder="Cinematic still — empty corridor, 4am, available light" />
          <span style={{ position: 'absolute', bottom: 18, left: 18, padding: '8px 16px', borderRadius: 999, background: 'rgba(5,7,11,.6)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#E7EBF2' }}>
            Campus B · night rounds
          </span>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)' }}>
          <p style={{ flex: '1 1 380px', margin: 0, fontSize: 15, lineHeight: 1.75, color: '#96A2B6' }}>
            Healthcare marketing defaults to stock photography and superlatives, and patients have stopped believing both. Aster&apos;s own audits showed the problem plainly: high intent, near-zero recall. People arrived because a doctor referred them, never because they had chosen the hospital themselves.
          </p>
          <p style={{ flex: '1 1 320px', margin: 0, paddingLeft: 20, borderLeft: `2px solid ${ACCENT}`, fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(19px,1.8vw,26px)', lineHeight: 1.4, color: '#E7EBF2' }}>
            The hospital had incredible clinical outcomes, but almost no emotional connection online.
          </p>
        </div>
      </section>

      {/* Process — four chapters (unique to Aster) */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(56px,8vh,96px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>03 — Four chapters</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>The Process</h2>
        </div>
        {processChapters.map((c, i) => (
          <Reveal
            key={c.num}
            style={{
              display: 'flex',
              flexWrap: i % 2 ? 'wrap-reverse' : 'wrap',
              gap: 'clamp(28px,4vw,56px)',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: '1 1 400px', position: 'relative', aspectRatio: '4 / 3', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(242,244,248,.08)' }}>
              <MediaSlot placeholder={c.placeholder} />
            </div>
            <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: ACCENT }}>{c.num}</span>
                <span style={{ width: 24, height: 1, background: 'rgba(242,244,248,.3)' }} />
                <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>{c.label}</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 'clamp(20px,2vw,28px)', fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.2 }}>{c.heading}</h3>
              {c.label === 'Strategy' ? (
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#96A2B6' }}>
                  We retired the institutional voice entirely. Every asset would come from inside the building: staff on camera, no scripts, no actors, one line of positioning —{' '}
                  <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic' }}>care that doesn&apos;t clock out</span>.
                </p>
              ) : (
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#96A2B6' }}>{c.body}</p>
              )}
              {c.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {c.tags.map((tag) => (
                    <span key={tag} style={{ padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(242,244,248,.14)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: '#93A0B4' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {/* Selected frames */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', background: '#070A11', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,44px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>04 — Selected frames</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>The Work</h2>
        </div>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ position: 'relative', aspectRatio: '21 / 9', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(242,244,248,.08)' }}>
            <MediaSlot placeholder="Brand film — 2 min 40 s master" />
            <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 999, background: 'rgba(5,7,11,.6)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: ACCENT }}>
                Hover to preview ▶
              </span>
            </span>
          </div>
          <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Care that doesn&apos;t clock out — the film</span>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
          <MediaCard aspect="4 / 5" caption="Portrait series · 01" placeholder="Portrait — surgeon, end of shift" />
          <MediaCard aspect="16 / 10" caption="Campaign key art" placeholder="Campaign still — handover, close" />
          <MediaCard aspect="3 / 2" caption="BTS · day 03" placeholder="Behind the scenes — crew, corridor" />
          <MediaCard aspect="3 / 2" caption="Storyboard · seq 04" placeholder="Moodboard / storyboard sequence" />
        </div>
      </section>

      {/* Before & after */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,44px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>05 — Drag to compare</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>Before &amp; After</h2>
        </div>
        <Reveal>
          <CompareSlider
            beforePlaceholder="Before — old identity, stock photography, 2019 site"
            afterPlaceholder="After — new identity, documentary photography, 2026 site"
          />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(24px,3vw,44px)' }}>
          {[
            { label: 'Identity', desc: 'Clinical blue and eight logo variants, reduced to one mark and a single typeface.' },
            { label: 'Social', desc: 'Announcement posts replaced by faces, in sequence, three times a week.' },
            { label: 'Website', desc: 'Departments buried four clicks deep now open with the people who staff them.' },
          ].map((pair) => (
            <div key={pair.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: ACCENT }}>{pair.label}</span>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#96A2B6' }}>{pair.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', background: '#070A11', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vh,60px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>06 — Twelve months on</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>The Impact</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(24px,3vw,44px)' }}>
          <CountUpStat value={42} suffix="M+" label="Views" accent={ACCENT} />
          <CountUpStat value={320} suffix="%" label="Increase in engagement" accent={ACCENT} />
          <CountUpStat value={4} suffix="x" label="Lead generation" accent={ACCENT} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'clamp(20px,2.6vw,36px)' }}>
          <CountUpStat value={12} suffix="" label="Campaign films" accent={ACCENT} size="sm" />
          <CountUpStat value={28} suffix="" label="Photography deliverables" accent={ACCENT} size="sm" />
          <CountUpStat value={72} suffix="" label="Social verticals" accent={ACCENT} size="sm" />
        </div>
        <p style={{ margin: 0, maxWidth: '75ch', fontSize: 15, lineHeight: 1.75, color: '#96A2B6' }}>
          Reach was never the point. Self-referred appointments overtook doctor referrals for the first time in the hospital&apos;s history, the specialist waiting list doubled, and recruitment stopped being a problem — 41 clinicians applied citing the films.
        </p>
      </section>

      {/* Testimonial — no card, sits directly on near-black background */}
      <section style={{ padding: 'clamp(90px,17vh,200px) clamp(20px,5vw,56px)', background: '#030509', display: 'flex', justifyContent: 'center' }}>
        <Reveal style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, textAlign: 'center' }}>
          <p style={{ margin: 0, fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(28px,4.4vw,54px)', lineHeight: 1.3, color: '#E7EBF2' }}>
            &ldquo;They understood our story before they picked up a camera.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 54, height: 54, borderRadius: '50%', background: '#1A2540', border: '1px solid rgba(242,244,248,.1)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'left' }}>
              <span style={{ fontSize: 15, fontWeight: 600 }}>Dr. Anaya Verma</span>
              <span style={{ fontSize: 12, color: '#8E9BB0' }}>Chief of Communications · Aster Health</span>
            </div>
            <span style={{ width: 1, height: 34, background: 'rgba(242,244,248,.2)' }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em' }}>ASTER</span>
          </div>
        </Reveal>
      </section>

      {/* Keep watching */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vh,48px)' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>Keep watching</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
          {[
            { name: 'Kindra', category: 'Consumer brands', copy: 'One shoot day, 34 assets, sold out in nine weeks.' },
            { name: 'Ledgerloop', category: 'Startups', copy: 'A technical product explained without a single diagram.' },
          ].map((p) => (
            <Link key={p.name} href="/#case-studies" style={{ display: 'flex', flexDirection: 'column', gap: 14, textDecoration: 'none', color: 'inherit' }}>
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: '#0A0F1A', border: '1px solid rgba(242,244,248,.08)' }}>
                <MediaSlot placeholder={`${p.name} — cover frame`} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
                <span style={{ fontSize: 18, fontWeight: 600 }}>{p.name}</span>
                <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>{p.category}</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#8E9BB0' }}>{p.copy}</p>
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,56px)' }}>
          <Link href="/#case-studies" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>Previous</span>
            <span style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase' }}>← Verma Dental</span>
          </Link>
          <Link href="/#case-studies" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#55627A' }}>Next</span>
            <span style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase' }}>Kindra →</span>
          </Link>
        </div>
      </section>

      <CaseStudyFooter />
    </main>
  );
}
