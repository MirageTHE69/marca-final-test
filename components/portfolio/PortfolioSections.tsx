import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';
import { portfolioItems, portfolioSections, type PortfolioItem, type PortfolioSection } from './portfolioItems';

const BACKGROUNDS = [
  'linear-gradient(180deg, #05070B 0%, #070C18 55%, #05070B 100%)',
  'linear-gradient(180deg, #05070B 0%, #080D18 55%, #05070B 100%)',
  `radial-gradient(140% 70% at 50% -10%, rgba(45, 105, 255, 0.22) 0%, rgba(26, 68, 190, 0.14) 30%, rgba(12, 28, 88, 0.08) 60%, rgba(5, 7, 11, 0) 82%),
   linear-gradient(180deg, #081024 0%, #05070B 48%, #060C1C 100%)`,
];

const RAIL_HEIGHT = 'clamp(260px, 40vh, 420px)';

function ItemCaption({ item }: { item: PortfolioItem }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-.01em', color: '#F2F4F8' }}>{item.title}</span>
      <span style={{ fontSize: 12, color: '#8E9BB0' }}>{item.label}</span>
    </div>
  );
}

function MixedRow({ items }: { items: PortfolioItem[] }) {
  return (
    <>
      {items.map((item) => (
        <article key={item.id} className="pf-card" style={{ flex: '0 0 auto', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            className="pf-media"
            style={{
              position: 'relative',
              height: RAIL_HEIGHT,
              aspectRatio: item.aspectRatio,
              overflow: 'hidden',
              borderRadius: 14,
              background: '#0C1526',
              border: '1px solid rgba(242,244,248,.08)',
            }}
          >
            <MediaSlot src={item.src} alt={item.title} placeholder="Drop image" sizes="500px" fit={item.fit ?? 'cover'} />
          </div>
          <ItemCaption item={item} />
        </article>
      ))}
    </>
  );
}

function ReelRow({ items }: { items: PortfolioItem[] }) {
  return (
    <>
      {items.map((item) => (
        <article key={item.id} className="pf-card" style={{ flex: '0 0 clamp(230px,22vw,300px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="pf-media" style={{ position: 'relative', aspectRatio: '9 / 16', overflow: 'hidden', borderRadius: 14, background: '#0C1526', border: '1px solid rgba(242,244,248,.08)' }}>
            <MediaSlot type="video" src={item.src} placeholder="Drop reel" sizes="300px" />
          </div>
          <ItemCaption item={item} />
        </article>
      ))}
    </>
  );
}

function FilmRow({ items }: { items: PortfolioItem[] }) {
  return (
    <>
      {items.map((item) => (
        <article key={item.id} className="pf-card" style={{ flex: '0 0 clamp(320px,42vw,620px)', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            className="pf-media"
            style={{
              position: 'relative',
              aspectRatio: '16 / 9',
              overflow: 'hidden',
              borderRadius: 16,
              background: '#0C1528',
              border: '1px solid rgba(242,244,248,.1)',
              boxShadow: '0 24px 60px -12px rgba(0,0,0,0.85)',
            }}
          >
            <MediaSlot type="video" src={item.src} placeholder="Drop film" sizes="620px" />
          </div>
          <ItemCaption item={item} />
        </article>
      ))}
    </>
  );
}

function CategorySection({ section, items, index }: { section: PortfolioSection; items: PortfolioItem[]; index: number }) {
  return (
    <section
      id={section.key}
      style={{
        position: 'relative',
        padding: 'clamp(70px,10vh,120px) 0',
        background: BACKGROUNDS[index % BACKGROUNDS.length],
        ['--card-accent' as string]: section.accent,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: section.accent }}>
          <span className="pf-kicker-dot" aria-hidden="true" />
          {section.kicker}
        </span>
        <h2 style={{ margin: 0, maxWidth: '22ch', fontSize: 'clamp(32px,4.2vw,64px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.04 }}>
          {section.title}
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
          {section.description}
        </p>
      </div>

      <ScrollRail ariaLabel={section.title}>
        {section.layout === 'mixed' && <MixedRow items={items} />}
        {section.layout === 'reel' && <ReelRow items={items} />}
        {section.layout === 'film' && <FilmRow items={items} />}
      </ScrollRail>
    </section>
  );
}

export default function PortfolioSections() {
  return (
    <>
      {portfolioSections.map((section, index) => (
        <CategorySection
          key={section.key}
          section={section}
          index={index}
          items={portfolioItems.filter((item) => item.category === section.key)}
        />
      ))}
    </>
  );
}
