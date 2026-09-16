import Link from 'next/link';
import MediaSlot from '@/components/MediaSlot';

const studies = [
  {
    title: 'Aadicura Hospital',
    category: 'Documentary + Short Form',
    href: '/case-studies/aadicura-hospital',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786474990/Aadicura_hospital__1_i6uwwd.png',
    stats: [
      { value: '40K+', label: 'Instagram followers organically built' },
      { value: '54K+', label: 'YouTube subscribers' },
      { value: '33M+', label: 'YouTube views' },
    ],
    desc: 'Built a stronger digital presence through educational healthcare, service-based and patient case-study content.',
  },
  {
    title: 'Dr. Mithun Panchal',
    category: 'Personal Branding + Content',
    href: '/portfolio',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/v1786731804/Dr._Mithun_Panchal_1_rjggs1.png',
    stats: [
      { value: '165K+', label: 'Instagram followers' },
      { value: '419K+', label: 'YouTube subscribers' },
      { value: '350M+', label: 'YouTube views' },
    ],
    desc: 'Built a highly recognizable cosmetic surgery presence through culturally disruptive short-form content.',
  },
  {
    title: 'MS Design Studio',
    category: 'Architecture + Interiors',
    href: '/portfolio',
    image: 'https://res.cloudinary.com/ts350ak2/image/upload/v1786732229/MS_Design_Studio_yi2xjg.png',
    stats: [
      { value: '43K+', label: 'Instagram followers organically built' },
      { value: '60M+', label: 'views in 6 months' },
      { value: '1.5M+', label: 'total YouTube views' },
    ],
    desc: 'Built stronger authority and visibility for the architecture brand, positioning it for premium clients.',
  },
];

export default function V2CaseStudies() {
  return (
    <section
      id="work"
      className="v2-black-section"
      style={{ padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 'clamp(44px,6vh,72px)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--v2-orange)' }}>
          Case studies
        </span>
        <h2 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(40px,6vw,84px)', color: 'var(--v2-cream)' }}>
          Proof, told as{' '}
          <span className="v2-mark" style={{ ['--mark-color' as string]: 'var(--v2-orange)', color: 'var(--v2-black)' }}>a story</span>.
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vh,68px)' }}>
        {studies.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={s.title}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: reverse ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: 'clamp(28px,4vw,56px)',
                paddingBottom: i < studies.length - 1 ? 'clamp(40px,6vh,68px)' : 0,
                borderBottom: i < studies.length - 1 ? '2px solid rgba(244,236,222,.15)' : undefined,
              }}
            >
              <div className="v2-polaroid" style={{ flex: '1 1 380px', maxWidth: 460, ['--tilt' as string]: reverse ? '2deg' : '-2deg' }}>
                <span className="v2-tape" aria-hidden="true" />
                <div className="v2-polaroid-frame" style={{ aspectRatio: '16 / 9', borderRadius: 1 }}>
                  <MediaSlot src={s.image} alt={s.title} placeholder="Drop image" sizes="460px" />
                </div>
              </div>

              <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--v2-orange)' }}>
                  {s.category}
                </span>
                <h3 className="v2-heading" style={{ margin: 0, fontSize: 'clamp(30px,3.4vw,48px)', color: 'var(--v2-cream)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(244,236,222,.68)' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px,2vw,28px)', marginTop: 6 }}>
                  {s.stats.map((stat) => (
                    <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span className="v2-heading" style={{ fontSize: 26, color: 'var(--v2-orange)' }}>{stat.value}</span>
                      <span style={{ fontSize: 12, color: 'rgba(244,236,222,.6)', maxWidth: '16ch' }}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <Link href={s.href} className="v2-btn v2-btn-yellow" style={{ alignSelf: 'flex-start', marginTop: 8, padding: '12px 24px', fontSize: 12 }}>
                  Read case study <span>→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
