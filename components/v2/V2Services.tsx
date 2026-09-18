import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

const services = [
  {
    chip: 'Short form',
    title: 'Instagram Reels',
    desc: 'Scripted, shot and edited reels that grow real followings — not vanity metrics.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786691120/ChatGPT_Image_Jul_17_2026_12_51_06_PM_rguzdl.png',
    href: '#work',
  },
  {
    chip: 'Long form',
    title: 'YouTube Films',
    desc: 'Documentary-style long form built to hook early and hold attention to the end.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786475458/Brain_tumour_treatment_without_surgery_Gamma_knife_on74fv.jpg',
    href: '#work',
  },
  {
    chip: 'Creative look',
    title: 'Thumbnail Design',
    desc: 'Click-earning thumbnails with bold visuals, clear messaging and instant curiosity.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786475475/1_1_jwps5a.png',
    href: '#work',
  },
  {
    chip: 'Brand core',
    title: 'Branding & Packaging',
    desc: 'Identity systems, labels and packaging engineered to win shelf and feed attention.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786607756/1_2_yk2t4j.jpg',
    href: '/portfolio',
  },
  {
    chip: 'Visual system',
    title: 'Photoshoots',
    desc: 'Product, portrait, lifestyle and editorial shoots that feed every channel you run.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786608765/ChatGPT_Image_Jul_16_2026_05_41_45_PM_hox3lo.png',
    href: '/portfolio',
  },
  {
    chip: 'Brand narrative',
    title: 'Ad Campaigns',
    desc: 'Concept to platform-native cutdown, engineered for reach and return on spend.',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_900/v1786733662/EOS_Couture_ijyzyw.png',
    href: '/portfolio',
  },
];

export default function V2Services() {
  return (
    <section id="services" className="v2-paper" style={{ padding: 'clamp(40px,6vh,80px) 0 clamp(56px,9vh,110px)' }}>
      <div style={{ padding: '0 clamp(18px,4vw,44px)' }}>
        <h2 className="v2-display" style={{ fontSize: 'clamp(28px,4.6vw,72px)', textAlign: 'center' }}>
          Everything <span className="v2-dim-dark">your</span>
          <br />
          brand needs to grow
        </h2>
        <p
          style={{
            margin: 'clamp(18px,2.6vh,30px) auto 0',
            maxWidth: '58ch',
            textAlign: 'center',
            fontSize: 13.5,
            lineHeight: 1.7,
            color: 'var(--c-dim-dark)',
          }}
        >
          Six services, one team, one strategy. Pick the piece you need or hand us the whole content engine.
        </p>
      </div>

      <ScrollRail ariaLabel="services">
        {services.map((s) => (
          <a
            key={s.title}
            href={s.href}
            className="v2-tile v2-grade"
            style={{
              flex: '0 0 clamp(250px,26vw,340px)',
              aspectRatio: '3 / 4',
              scrollSnapAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 18,
              textDecoration: 'none',
              color: 'var(--c-paper)',
            }}
          >
            <span className="v2-chip">{s.chip}</span>
            <MediaSlot src={s.src} alt={s.title} placeholder="Drop image" sizes="340px" />
            <div style={{ position: 'relative', zIndex: 6, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 className="v2-display" style={{ fontSize: 'clamp(19px,1.8vw,26px)', letterSpacing: '-.02em' }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.55, color: 'rgba(241,238,233,.78)' }}>{s.desc}</p>
            </div>
          </a>
        ))}
      </ScrollRail>
    </section>
  );
}
