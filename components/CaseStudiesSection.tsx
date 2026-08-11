'use client';

import { useState } from 'react';
import MediaSlot from '@/components/MediaSlot';

interface Story {
  chip: string;
  image: string;
  beforeImage?: string;
  beforeStat: string;
  afterImage: string;
  afterStat: string;
  category: string;
  year: string;
  title: string;
  desc: string;
  whatWeDid: string[];
  href: string;
}

const stories: Story[] = [
  {
    chip: 'Healthcare',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785488252/ChatGPT_Image_Jul_31_2026_02_27_07_PM_tvldb0.png',
    beforeImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1786474990/Aadicura_hospital__1_i6uwwd.png',
    beforeStat: '0 followers',
    afterImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1786474990/Aadicura_hospital_1_zlrdha.png',
    afterStat: '40.5K followers',
    category: 'Documentary + Short form',
    year: '2026',
    title: 'Aadicura Hospital',
    desc: 'A 40-year-old hospital group with no voice online, in a city where patients choose by search.',
    whatWeDid: [
      'Four weeks embedded with the night-shift trauma team',
      'One long-form documentary, twelve vertical cutdowns',
      'Doctor-led series scripted and shot monthly',
    ],
    href: '/case-studies/aadicura-hospital',
  },
  {
    chip: 'Personal Branding',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475276/Dr._Aditya_Shah_1_q8znli.png',
    beforeImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1786475167/Dr._Aditya_Shah__r8jtvh.png',
    beforeStat: '0 followers',
    afterImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1786475167/Dr._Aditya_Shah_oqzptd.png',
    afterStat: '85.2K followers',
    category: 'Personal Branding + Skincare',
    year: '2026',
    title: 'Dr. Aditya Shah',
    desc: 'A dermatologist with zero social presence, running a skin and laser clinic almost no one outside his patient list had heard of.',
    whatWeDid: [
      'Weekly skincare content built around real patient questions',
      'Before-and-after treatment documentation folded into every post',
      'A consistent visual system across Reels, carousels and consults',
    ],
    href: '/portfolio',
  },
  {
    chip: 'Consumer',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786475349/The_Nutty_Affair_ya0nky.png',
    beforeStat: 'New account',
    afterImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1786475349/The_Nutty_Affair_ya0nky.png',
    afterStat: '7,274 followers',
    category: 'Retail + Social Growth',
    year: '2026',
    title: 'Nutty Affair',
    desc: 'A premium dry-fruits and gifting brand in Vadodara, known by word of mouth and almost nowhere online.',
    whatWeDid: [
      'Weekly reel series built around product close-ups and gifting moments',
      'A repeatable hook format tailored to their bestsellers',
      'Consistent packaging-led visual identity carried across every post',
    ],
    href: '/portfolio',
  },
];

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="case-studies" style={{ position: 'relative', zIndex: 6, background: '#04060A' }}>
      <div style={{ position: 'relative', height: '300vh' }}>
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: 'clamp(84px,11vh,124px) 0 clamp(28px,4vh,52px)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Case Studies</span>
            <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.8vw,62px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
              Proof, told as <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>a story.</span>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, paddingTop: 4 }}>
              {stories.map((s, i) => (
                <button
                  key={s.chip}
                  type="button"
                  className={`filter-chip${active === i ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {s.chip}
                </button>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', flex: 1, minHeight: 0, marginTop: 'clamp(26px,4vh,48px)' }}>
            {stories.map((story, i) => (
              <article
                key={story.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: 'clamp(28px,4vw,72px)',
                  padding: '0 clamp(24px,6vw,60px) clamp(6px,1vh,14px)',
                  minHeight: 0,
                  overflow: 'hidden',
                  opacity: active === i ? 1 : 0,
                  transition: 'opacity 600ms cubic-bezier(.2,.7,.2,1)',
                  pointerEvents: active === i ? 'auto' : 'none',
                }}
              >
                <div style={{ flex: '1 1 44%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(12px,1.6vh,20px)' }}>
                  <div style={{ position: 'relative', flex: '1 1 0', minHeight: 0, overflow: 'hidden', borderRadius: 14, background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
                    <MediaSlot src={story.image} alt={story.title} placeholder={`${story.title} — cover`} sizes="44vw" />
                  </div>
                  <div style={{ flex: '0 0 auto', display: 'flex', gap: 'clamp(12px,1.4vw,20px)' }}>
                    {story.beforeImage ? (
                      <>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                          <div style={{ position: 'relative', height: 'clamp(150px,20vh,250px)', overflow: 'hidden', borderRadius: 10, background: '#0A1120', border: '1px solid rgba(242,244,248,.08)' }}>
                            <MediaSlot src={story.beforeImage} alt="" placeholder="Before — Instagram" sizes="260px" fit="contain" />
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Before — Instagram</span>
                            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', color: '#8E9BB0' }}>{story.beforeStat}</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                          <div style={{ position: 'relative', height: 'clamp(150px,20vh,250px)', overflow: 'hidden', borderRadius: 10, background: '#0A1120', border: '1px solid rgba(242,244,248,.08)' }}>
                            <MediaSlot src={story.afterImage} alt="" placeholder="After — Instagram" sizes="260px" fit="contain" />
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>After — Instagram</span>
                            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', color: '#F2F4F8' }}>{story.afterStat}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                        <div style={{ position: 'relative', height: 'clamp(150px,20vh,250px)', overflow: 'hidden', borderRadius: 10, background: '#0A1120', border: '1px solid rgba(242,244,248,.08)' }}>
                          <MediaSlot src={story.afterImage} alt="" placeholder="Instagram" sizes="520px" fit="contain" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                          <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Instagram</span>
                          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', color: '#F2F4F8' }}>{story.afterStat}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ flex: '1 1 56%', minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 'clamp(6px,1.2vh,18px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92' }}>
                    <span>{story.category}</span><span>{story.year}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 'clamp(24px,min(3.4vw,6.4vh),58px)', fontWeight: 700, letterSpacing: '-.035em', lineHeight: 1.03 }}>{story.title}</h3>
                  <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'clamp(13px,min(1.05vw,2.3vh),17px)', lineHeight: 1.55, color: '#A7B2C4' }}>{story.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px,.9vh,10px)', paddingTop: 4, borderTop: '1px solid rgba(242,244,248,.08)' }}>
                    <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6C7A92', paddingTop: 'clamp(4px,1vh,10px)' }}>What we did</span>
                    {story.whatWeDid.map((line) => (
                      <span key={line} style={{ fontSize: 'clamp(13px,min(1vw,2.1vh),15px)', lineHeight: 1.45, color: '#D8DEEA' }}>{line}</span>
                    ))}
                  </div>
                  <a
                    href={story.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      alignSelf: 'flex-start',
                      marginTop: 'clamp(2px,.8vh,8px)',
                      padding: 'clamp(10px,1.6vh,14px) 26px',
                      border: '1px solid rgba(242,244,248,.2)',
                      borderRadius: 999,
                      fontSize: 11,
                      letterSpacing: '.2em',
                      textTransform: 'uppercase',
                      flex: '0 0 auto',
                    }}
                    className="btn-outline"
                  >
                    Read case study <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', padding: 'clamp(50px,7vh,86px) clamp(24px,6vw,60px) clamp(70px,10vh,120px)', background: '#04060A' }}>
        <a href="/portfolio" className="btn-outline" style={{ padding: '16px 30px' }}>
          See more case studies <span>→</span>
        </a>
      </div>
    </section>
  );
}
