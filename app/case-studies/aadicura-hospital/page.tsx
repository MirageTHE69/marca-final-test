import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageNav from '@/components/PageNav';
import MediaSlot from '@/components/MediaSlot';
import CountUpStat from '@/components/casestudy/CountUpStat';
import CompareSlider from '@/components/casestudy/CompareSlider';
import Reveal from '@/components/casestudy/Reveal';
import CaseStudyFooter from '@/components/casestudy/CaseStudyFooter';
import MediaCard from '@/components/casestudy/MediaCard';

const ACCENT = '#2563EB';
const CREAM = '#EFE9DC';
const HERO_VIDEO = 'https://res.cloudinary.com/ts350ak2/video/upload/v1785482138/MARCA_WEBSITE_02_ci6tgd.mp4';

export const metadata: Metadata = {
  title: 'Aadicura Hospital — Marca Creatives',
  description: 'Helping a multi-speciality hospital become a trusted, digital-first healthcare brand through documentary storytelling.',
};

const overviewMeta = [
  { label: 'Client', value: 'Aadicura Hospital' },
  { label: 'Industry', value: 'Healthcare' },
  { label: 'Services', value: 'Brand strategy, Creative direction, Photography, Video production, Social media, Brand identity' },
  { label: 'Team', value: 'Creative director, Photographer, Filmmaker, Editor, Designer' },
  { label: 'Timeline', value: '6 months' },
  { label: 'Deliverables', value: 'Brand film, Photography library, Social campaign, Motion assets, Visual identity' },
];

const reels = [
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486188/3M_tbl2fe.mp4', caption: '3M views · Reel' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486291/22K_egrmzj.mp4', caption: '22K views · Reel' },
  { src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486111/ACCENT_WALL_25K_VIEWS_dmvtj8.mp4', caption: '25K views · Accent wall' },
];

const episodes = [
  { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494169/WhatsApp_Image_2026-07-31_at_2.34.46_PM_f1ofwi.jpg', caption: 'Episode 01' },
  { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494168/WhatsApp_Image_2026-07-31_at_2.34.49_PM_1_mwdfi8.jpg', caption: 'Episode 02' },
  { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.48_PM_x4bfca.jpg', caption: 'Episode 03' },
  { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.47_PM_plfmhl.jpg', caption: 'Episode 04' },
  { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.49_PM_du5z6r.jpg', caption: 'Episode 05' },
];

function SectionEyebrow({ children }: { children: string }) {
  return <span style={{ fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: ACCENT }}>{children}</span>;
}

export default function AadicuraHospitalPage() {
  return (
    <main style={{ background: '#08090D', color: '#F5F6F8' }}>
      <PageNav variant="fixed-progress" accent={ACCENT} navLinks={[{ label: 'Work', href: '/' }, { label: 'Studio', href: '/' }]} />

      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <video autoPlay muted loop playsInline src={HERO_VIDEO} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(100deg, rgba(6,7,10,.9) 0%, rgba(6,7,10,.62) 42%, rgba(6,7,10,.3) 72%, rgba(6,7,10,.6) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(6,7,10,.62), transparent 30%, rgba(8,9,13,.92))' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px,2.8vh,30px)', padding: '0 clamp(20px,5vw,56px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 30, height: 1, background: ACCENT }} />
            <SectionEyebrow>Case study — 2026</SectionEyebrow>
          </div>
          <h1 style={{ margin: 0, fontSize: 'clamp(42px,10vw,150px)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .96, textTransform: 'uppercase' }}>Aadicura</h1>
          <span style={{ fontSize: 13, letterSpacing: '.1em', color: '#C4CBD8' }}>Healthcare</span>
          <span style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#8E96A8' }}>Brand Strategy • Brand Film • Photography • Social Media</span>
          <p style={{ margin: 0, maxWidth: '44ch', fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(19px,1.9vw,28px)', lineHeight: 1.4, color: CREAM }}>
            Helping a multi-speciality hospital become a trusted, digital-first healthcare brand through documentary storytelling.
          </p>
        </div>
        <div style={{ position: 'absolute', left: 'clamp(20px,5vw,56px)', bottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 1, height: 34, background: 'linear-gradient(180deg, rgba(245,246,248,.6), transparent)' }} />
          <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7C8598' }}>Scroll to begin</span>
        </div>
      </section>

      {/* Project overview */}
      <section style={{ padding: 'clamp(80px,11vh,140px) clamp(20px,5vw,56px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px,6vw,80px)' }}>
        <Reveal style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <SectionEyebrow>01 — Project overview</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.08 }}>Project Overview</h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#8E96A8' }}>
            Aadicura Hospital is a multi-speciality hospital with one of the busiest emergency units in the city. They came to MARCA after a year of advertising that reached everyone and moved no one — the brand was recognised, never chosen.
          </p>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#8E96A8' }}>
            Success was defined in one line before we started: families should be able to name a doctor at Aadicura before they ever need one. Everything we made had to earn that.
          </p>
          <span style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#626B7E' }}>Six months · one embedded crew · nothing staged</span>
        </Reveal>
        <Reveal delay={120} style={{ flex: '1 1 320px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 'clamp(24px,2.4vw,34px)', border: '1px solid rgba(245,246,248,.1)', borderRadius: 16, background: '#0B0D13' }}>
            {overviewMeta.map((m) => (
              <div key={m.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#626B7E' }}>{m.label}</span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: '#EDEFF4' }}>{m.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Challenge */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,44px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>02 — Where we started</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>The Challenge</h2>
        </div>
        <Reveal style={{ position: 'relative', aspectRatio: '21 / 9', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(245,246,248,.08)' }}>
          <Image
            src="https://res.cloudinary.com/ts350ak2/image/upload/v1785488252/ChatGPT_Image_Jul_31_2026_02_27_07_PM_tvldb0.png"
            alt="Campus B · night rounds"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <span style={{ position: 'absolute', bottom: 18, left: 18, padding: '8px 16px', borderRadius: 999, background: 'rgba(8,9,13,.6)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#EDEFF4' }}>
            Campus B · night rounds
          </span>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)' }}>
          <p style={{ flex: '1 1 380px', margin: 0, fontSize: 15, lineHeight: 1.75, color: '#8E96A8' }}>
            The hospital delivered exceptional healthcare, but their online presence lacked emotional connection. Patients saw another institution instead of the people behind it — stock photography, superlatives, and a directory nobody read. High intent, near-zero recall.
          </p>
          <p style={{ flex: '1 1 320px', margin: 0, paddingLeft: 20, borderLeft: `2px solid ${ACCENT}`, fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(19px,1.8vw,26px)', lineHeight: 1.4, color: CREAM }}>
            We needed people to trust our doctors before they even walked through the doors.
          </p>
        </div>
      </section>

      {/* What we created */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', background: '#0A0B10', display: 'flex', flexDirection: 'column', gap: 'clamp(44px,6vh,72px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>03 — Selected work</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>What We Created</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E96A8' }}>
            <span style={{ width: 18, height: 1, background: ACCENT }} /> Brand film
          </span>
          <MediaCard type="video" src={HERO_VIDEO} aspect="16 / 9" caption="Documentary cut · full length" placeholder="Brand film" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E96A8' }}>
            <span style={{ width: 18, height: 1, background: ACCENT }} /> Short form · reels
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
            {reels.map((r) => (
              <MediaCard key={r.src} type="video" src={r.src} aspect="9 / 16" caption={r.caption} placeholder="Reel" />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E96A8' }}>
            <span style={{ width: 18, height: 1, background: ACCENT }} /> Long form · YouTube
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {episodes.map((e) => (
              <MediaCard key={e.src} src={e.src} aspect="16 / 9" caption={e.caption} placeholder="Episode" />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#8E96A8' }}>
            <span style={{ width: 18, height: 1, background: ACCENT }} /> Identity &amp; packaging
          </span>
          <MediaCard src="https://res.cloudinary.com/ts350ak2/image/upload/v1785487254/9_1_drw2xh.jpg" aspect="21 / 9" caption="Visual identity — applied" placeholder="Identity" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            <MediaCard src="https://res.cloudinary.com/ts350ak2/image/upload/v1785487016/4_ab0ehj.jpg" aspect="4 / 5" caption="Packaging" placeholder="Packaging" />
            <MediaCard src="https://res.cloudinary.com/ts350ak2/image/upload/v1785487014/5_rnslzq.png" aspect="4 / 5" caption="Label system" placeholder="Label system" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            <MediaCard src="https://res.cloudinary.com/ts350ak2/image/upload/v1785486928/5_hw5ng6.png" aspect="3 / 2" caption="Campaign visual" placeholder="Campaign" />
            <MediaCard src="https://res.cloudinary.com/ts350ak2/image/upload/v1785486926/4_c5ql8a.png" aspect="3 / 2" caption="Collateral" placeholder="Collateral" />
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,44px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>04 — Drag to compare</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>Before &amp; After</h2>
        </div>
        <Reveal>
          <CompareSlider
            beforeSrc="https://res.cloudinary.com/ts350ak2/image/upload/v1785488439/Aadicura_hospital__sbh9bl.png"
            afterSrc="https://res.cloudinary.com/ts350ak2/image/upload/v1785488437/Aadicura_hospital_vsrrd6.png"
            beforePlaceholder="Before — old identity"
            afterPlaceholder="After — new identity"
          />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 24, border: '1px solid rgba(245,246,248,.12)', borderRadius: 14 }}>
            <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#626B7E' }}>Before</span>
            {['Eight logo variants, no system', 'Departments buried four clicks deep', 'Announcement-only social feed', 'Licensed stock photography'].map((line) => (
              <span key={line} style={{ fontSize: 14, lineHeight: 1.6, color: '#8E96A8' }}>{line}</span>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              padding: 24,
              border: `1px solid ${ACCENT}55`,
              borderRadius: 14,
              background: 'linear-gradient(180deg, rgba(37,99,235,.1), transparent)',
            }}
          >
            <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: ACCENT }}>After</span>
            {['One mark, one typeface, one voice', 'Site opening on the people who staff it', 'Faces in sequence, three times a week', 'A 900-frame documentary library'].map((line) => (
              <span key={line} style={{ fontSize: 14, lineHeight: 1.6, color: '#EDEFF4' }}>{line}</span>
            ))}
          </div>
        </div>
        <p style={{ margin: 0, maxWidth: '70ch', fontSize: 15, lineHeight: 1.75, color: '#8E96A8' }}>
          A complete transformation from a corporate healthcare brand into a human-first, documentary-driven identity.
        </p>
      </section>

      {/* Impact */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', background: '#0A0B10', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vh,60px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>05 — Twelve months on</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>The Impact</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(24px,3vw,44px)' }}>
          <CountUpStat value={42} suffix="M+" label="Views" accent={ACCENT} />
          <CountUpStat value={320} suffix="%" label="Engagement increase" accent={ACCENT} />
          <CountUpStat value={140} suffix="%" label="Website growth" accent={ACCENT} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'clamp(20px,2.6vw,36px)' }}>
          <CountUpStat value={5} suffix="M+" label="Reach" accent={ACCENT} size="sm" />
          <CountUpStat value={12} suffix="" label="Campaign films" accent={ACCENT} size="sm" />
          <CountUpStat value={48} suffix="" label="Photography assets" accent={ACCENT} size="sm" />
        </div>
        <p style={{ margin: 0, maxWidth: '75ch', fontSize: 15, lineHeight: 1.75, color: '#8E96A8' }}>
          The campaign repositioned Aadicura as one of the most recognisable healthcare brands in the city — self-referred appointments overtook doctor referrals for the first time in the hospital&apos;s history, and 41 clinicians applied citing the films.
        </p>
      </section>

      {/* Testimonial */}
      <section style={{ padding: 'clamp(70px,10vh,120px) clamp(20px,5vw,56px)', display: 'flex', justifyContent: 'center' }}>
        <Reveal
          style={{
            maxWidth: 720,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 26,
            padding: 'clamp(32px,4vw,56px)',
            textAlign: 'center',
            border: '1px solid rgba(245,246,248,.1)',
            borderRadius: 18,
            background: 'linear-gradient(180deg, #0C0E14, #090A0F)',
          }}
        >
          <SectionEyebrow>06 — Client</SectionEyebrow>
          <p style={{ margin: 0, fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(22px,2.6vw,34px)', lineHeight: 1.4, color: CREAM }}>
            &ldquo;They didn&apos;t just make beautiful films. They completely changed how people experienced our brand.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 54, height: 54, borderRadius: '50%', background: '#1A2540', border: '1px solid rgba(245,246,248,.1)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'left' }}>
              <span style={{ fontSize: 15, fontWeight: 600 }}>Dr. Anaya Verma</span>
              <span style={{ fontSize: 12, color: '#8E96A8' }}>Chief of Communications</span>
              <span style={{ fontSize: 12, color: '#8E96A8' }}>Aadicura Hospital</span>
            </div>
            <span style={{ width: 1, height: 34, background: 'rgba(245,246,248,.2)' }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em' }}>AADICURA</span>
          </div>
        </Reveal>
      </section>

      {/* Next projects */}
      <section style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,56px)', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vh,48px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SectionEyebrow>Two more transformations</SectionEyebrow>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, letterSpacing: '-.03em' }}>Next Projects</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
          {[
            { name: 'Kindra', category: 'Consumer brands', copy: 'One shoot day, 34 assets, sold out in nine weeks.' },
            { name: 'Ledgerloop', category: 'Startups', copy: 'A technical product explained without a single diagram.' },
          ].map((p) => (
            <Link
              key={p.name}
              href="/#case-studies"
              style={{ display: 'flex', flexDirection: 'column', gap: 14, textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', borderRadius: 24, background: '#0B0D13', border: '1px solid rgba(245,246,248,.08)' }}>
                <MediaSlot placeholder={`${p.name} — cover frame`} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
                <span style={{ fontSize: 18, fontWeight: 600 }}>{p.name}</span>
                <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#626B7E' }}>{p.category}</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#8E96A8' }}>{p.copy}</p>
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <Link href="/#case-studies" style={{ padding: '12px 24px', borderRadius: 999, border: '1px solid rgba(245,246,248,.18)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase' }}>
            ← Previous project
          </Link>
          <Link href="/#case-studies" style={{ padding: '12px 24px', borderRadius: 999, border: `1px solid ${ACCENT}`, background: 'rgba(37,99,235,.14)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase' }}>
            Next project →
          </Link>
        </div>
      </section>

      <CaseStudyFooter />
    </main>
  );
}
