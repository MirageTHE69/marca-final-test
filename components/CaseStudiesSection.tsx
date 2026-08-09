'use client';

import { useState } from 'react';
import Image from 'next/image';

const stories = [
  {
    chip: 'Healthcare',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785488252/ChatGPT_Image_Jul_31_2026_02_27_07_PM_tvldb0.png',
    beforeImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1785487014/5_rnslzq.png',
    beforeStat: '1,240 followers',
    afterImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1785486928/5_hw5ng6.png',
    afterStat: '48,600 followers',
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
    chip: 'Consumer',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494169/WhatsApp_Image_2026-07-31_at_2.34.46_PM_f1ofwi.jpg',
    beforeImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.47_PM_plfmhl.jpg',
    beforeStat: '3,800 followers',
    afterImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.48_PM_x4bfca.jpg',
    afterStat: '26,000 followers',
    category: 'Short form + Campaign',
    year: '2026',
    title: 'Kindra',
    desc: 'A founder-led consumer brand posting often, remembered rarely.',
    whatWeDid: [
      'Reel format built around a single repeatable hook',
      '36 posts shipped in one quarter',
      'Campaign cutdowns for paid social',
    ],
    href: '/portfolio',
  },
  {
    chip: 'Startups',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785487016/4_ab0ehj.jpg',
    beforeImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1785487254/9_1_drw2xh.jpg',
    beforeStat: '900 followers',
    afterImage: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_700/v1785486926/4_c5ql8a.png',
    afterStat: '14,200 followers',
    category: 'Brand film + Design system',
    year: '2025',
    title: 'Ledgerloop',
    desc: 'A Series A fintech that could explain itself to investors, but not to anyone else.',
    whatWeDid: [
      'One founder film used to open every investor meeting',
      'Social design kit their in-house team still runs',
      'Thumbnail and cover system across channels',
    ],
    href: '/case-studies/aster-health',
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
                    <Image src={story.image} alt={story.title} fill sizes="44vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: '0 0 auto', display: 'flex', gap: 'clamp(12px,1.4vw,20px)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                      <div style={{ position: 'relative', height: 'clamp(78px,11vh,124px)', overflow: 'hidden', borderRadius: 10, background: '#0A1120', border: '1px solid rgba(242,244,248,.08)' }}>
                        <Image src={story.beforeImage} alt="" fill sizes="200px" style={{ objectFit: 'contain', objectPosition: 'center' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>Before — Instagram</span>
                        <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', color: '#8E9BB0' }}>{story.beforeStat}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 0', minWidth: 0 }}>
                      <div style={{ position: 'relative', height: 'clamp(78px,11vh,124px)', overflow: 'hidden', borderRadius: 10, background: '#0A1120', border: '1px solid rgba(242,244,248,.08)' }}>
                        <Image src={story.afterImage} alt="" fill sizes="200px" style={{ objectFit: 'contain', objectPosition: 'center' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <span style={{ fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>After — Instagram</span>
                        <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', color: '#F2F4F8' }}>{story.afterStat}</span>
                      </div>
                    </div>
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
