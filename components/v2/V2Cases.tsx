import Link from 'next/link';
import MediaSlot from '@/components/MediaSlot';

const cases = [
  {
    title: 'Aadicura Hospital',
    chip: 'Documentary + Short form',
    href: '/case-studies/aadicura-hospital',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786474990/Aadicura_hospital__1_i6uwwd.png',
    stats: [
      ['40K+', 'Instagram followers, organic'],
      ['54K+', 'YouTube subscribers'],
      ['33M+', 'YouTube views'],
    ],
    desc: 'Educational healthcare, service-led and patient case-study content that turned a hospital into a trusted digital destination.',
  },
  {
    title: 'Dr. Mithun Panchal',
    chip: 'Personal branding + Content',
    href: '/portfolio',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/v1786731804/Dr._Mithun_Panchal_1_rjggs1.png',
    stats: [
      ['165K+', 'Instagram followers'],
      ['419K+', 'YouTube subscribers'],
      ['350M+', 'YouTube views'],
    ],
    desc: 'Culturally disruptive short form and celebrity-surgery breakdowns — a Silver Play Button inside six months.',
  },
  {
    title: 'MS Design Studio',
    chip: 'Architecture + Interiors',
    href: '/portfolio',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/v1786732229/MS_Design_Studio_yi2xjg.png',
    stats: [
      ['43K+', 'Instagram followers, organic'],
      ['60M+', 'views in 6 months'],
      ['1.5M+', 'total YouTube views'],
    ],
    desc: 'Cinematic, documentary-style storytelling on high-intent topics — built to attract premium design clients.',
  },
];

export default function V2Cases() {
  return (
    <section id="cases" className="v2-ox-soft" style={{ padding: 'clamp(56px,9vh,110px) clamp(18px,4vw,44px)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(30px,5vw,78px)' }}>
          Proof, <span className="v2-dim-light">not promises</span>
        </h2>
        <Link href="/case-studies" className="v2-cta" style={{ padding: '13px 24px', fontSize: 10, color: 'var(--c-paper)' }}>
          All case studies ↗
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'clamp(30px,5vh,56px)' }}>
        {cases.map((c, i) => (
          <article
            key={c.title}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: i % 2 ? 'row-reverse' : 'row',
              alignItems: 'center',
              gap: 'clamp(22px,3.5vw,54px)',
              padding: 'clamp(26px,4vh,46px) 0',
              borderTop: '1px solid rgba(241,238,233,.16)',
            }}
          >
            <div className="v2-tile v2-grade v2-grade-soft" style={{ flex: '1 1 340px', maxWidth: 480, aspectRatio: '16 / 10' }}>
              <span className="v2-chip">{c.chip}</span>
              <MediaSlot src={c.src} alt={c.title} placeholder="Drop image" sizes="480px" />
            </div>

            <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h3 className="v2-display" style={{ fontSize: 'clamp(24px,2.8vw,42px)' }}>{c.title}</h3>
              <p style={{ margin: 0, maxWidth: '44ch', fontSize: 13.5, lineHeight: 1.7, color: 'rgba(241,238,233,.68)' }}>{c.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(18px,2.6vw,36px)' }}>
                {c.stats.map(([value, label]) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span className="v2-display" style={{ fontSize: 'clamp(22px,2.2vw,32px)', color: 'var(--c-red-bright)' }}>{value}</span>
                    <span style={{ fontSize: 11, color: 'rgba(241,238,233,.55)', maxWidth: '15ch' }}>{label}</span>
                  </div>
                ))}
              </div>
              <Link href={c.href} className="v2-micro" style={{ color: 'var(--c-paper)', textDecoration: 'underline', textUnderlineOffset: 5 }}>
                Read the case study ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
