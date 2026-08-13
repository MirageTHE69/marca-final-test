import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';

interface Piece {
  src: string;
  category: string;
  title: string;
  desc: string;
  aspect: string;
  fit?: 'cover' | 'contain';
}

const pieces: Piece[] = [
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607756/1_2_yk2t4j.jpg',
    category: 'Packaging — Nutty Affair',
    title: 'Seeds & Berries Pouch',
    desc: 'Stand-up pouch design for a dried seeds & berries trail mix blend.',
    aspect: '4 / 5',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607755/BOOK_qmgybt.jpg',
    category: 'Packaging — Nutty Affair',
    title: 'Mukhwas Tube System',
    desc: 'A digestive mukhwas range across twenty-plus flavours, unified by one label grid.',
    aspect: '4 / 3',
    fit: 'contain',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607741/FRUITS_MAGAZINE_tgo2hn.jpg',
    category: 'Packaging — Nutty Affair',
    title: 'Dehydrated Fruits Range',
    desc: 'Nine dehydrated-fruit SKUs, colour-coded for instant shelf recognition.',
    aspect: '4 / 3',
    fit: 'contain',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607738/WhatsApp_Image_2021-02-12_at_3.55.13_AM_20_f5w1vq.jpg',
    category: 'Packaging',
    title: 'Celebration Gifting Box',
    desc: 'A festive gifting box, hand-drawn linework printed on kraft green.',
    aspect: '4 / 3',
    fit: 'contain',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786608765/ChatGPT_Image_Jul_16_2026_05_41_45_PM_hox3lo.png',
    category: 'Photoshoot — Lifestyle',
    title: 'Picnic Set Launch',
    desc: "Lifestyle photography built around a founder's picnic-set launch.",
    aspect: '4 / 5',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786608769/ChatGPT_Image_Jul_16_2026_06_10_05_PM_c7dwfy.png',
    category: 'Photoshoot — Fashion',
    title: 'Bridal Lehenga Editorial',
    desc: 'Bridal lehenga campaign, shot on location.',
    aspect: '4 / 5',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607738/ChatGPT_Image_Jul_16_2026_06_08_31_PM_ckdz6t.png',
    category: 'Photoshoot — Food',
    title: 'Moody Edits',
    desc: "Studio food photography built for a bakery's Reels library.",
    aspect: '4 / 5',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607737/ChatGPT_Image_Jul_16_2026_06_02_05_PM_zx5xye.png',
    category: 'Photoshoot — Food',
    title: 'Dessert Menu Relaunch',
    desc: 'Product photography built for a dessert menu relaunch.',
    aspect: '4 / 5',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607737/ChatGPT_Image_Jul_16_2026_05_55_07_PM_nx1dgt.png',
    category: 'Photoshoot — Fashion',
    title: 'Festive Menswear Campaign',
    desc: 'A festive sherwani campaign, shot on location — three looks, one palette.',
    aspect: '4 / 5',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607736/ChatGPT_Image_Jul_16_2026_05_53_26_PM_c90ttf.png',
    category: 'Photoshoot — Fashion',
    title: 'Menswear Portrait Duo',
    desc: 'Close-up campaign frames from the same menswear shoot.',
    aspect: '4 / 5',
  },
  {
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1786607732/ChatGPT_Image_Jul_16_2026_05_53_35_PM_oewfwt.png',
    category: 'Photoshoot — Fashion',
    title: 'Everyday Menswear Campaign',
    desc: 'A quieter campaign card from the same collection — occasion wear, made everyday.',
    aspect: '4 / 5',
  },
];

export default function BrandWorkSection() {
  return (
    <section
      id="brand-work"
      style={{
        position: 'relative',
        zIndex: 7,
        padding: 'clamp(80px,11vh,140px) 0 clamp(70px,10vh,120px)',
        background: 'linear-gradient(180deg, #04060A 0%, #0A1120 55%, #04060A 100%)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span data-reveal="1" style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Branding & Packaging</span>
        <h2 data-reveal="1" style={{ margin: 0, maxWidth: '22ch', fontSize: 'clamp(34px,4.6vw,76px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02 }}>
          The brand, <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>in every hand.</span>
        </h2>
        <p data-reveal="1" style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          Logos, packaging systems and the photography that carries a brand from shelf to feed — designed to be picked up, not just looked at.
        </p>
      </div>

      <ScrollRail ariaLabel="branding and packaging work">
        {pieces.map((piece, i) => (
          <article key={i} style={{ flex: '0 0 clamp(260px,26vw,380px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ position: 'relative', aspectRatio: piece.aspect, overflow: 'hidden', borderRadius: 14, background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
              <MediaSlot src={piece.src} alt={piece.title} placeholder={piece.title} sizes="380px" fit={piece.fit ?? 'cover'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6C7A92' }}>{piece.category}</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(17px,1.5vw,22px)', fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.2, color: '#F2F4F8' }}>{piece.title}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: '#8E9BB0' }}>{piece.desc}</p>
            </div>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
