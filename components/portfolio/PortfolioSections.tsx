import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';
import { portfolioItems, portfolioSections, type PortfolioItem, type PortfolioSection } from './portfolioItems';

const RAIL_HEIGHT = 'clamp(260px, 40vh, 420px)';

const TILTS = [-3, 2, -1.5, 3, -2, 1.5, -2.5, 2.5];

/** Split `description` around `mark` and wrap the matched phrase in a riot-mark highlighter swash. */
function MarkedCopy({ description, mark, color }: { description: string; mark: string; color: string }) {
  const i = description.indexOf(mark);
  if (i === -1) return <>{description}</>;
  return (
    <>
      {description.slice(0, i)}
      <span className="riot-mark" style={{ ['--mark-color' as string]: color }}>{mark}</span>
      {description.slice(i + mark.length)}
    </>
  );
}

function ItemCaption({ item, dark }: { item: PortfolioItem; dark: boolean }) {
  return (
    <div className="polaroid-caption" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-.01em', color: dark ? '#F2F4F8' : 'var(--riot-ink)' }}>{item.title}</span>
      <span style={{ fontSize: 11, color: dark ? '#8E9BB0' : '#6B6459' }}>{item.label}</span>
    </div>
  );
}

function MixedRow({ items, dark }: { items: PortfolioItem[]; dark: boolean }) {
  return (
    <>
      {items.map((item, i) => (
        <article key={item.id} className="polaroid" style={{ flex: '0 0 auto', scrollSnapAlign: 'center', ['--tilt' as string]: `${TILTS[i % TILTS.length]}deg` }}>
          <span className="polaroid-tape" aria-hidden="true" />
          <div className="polaroid-frame" style={{ height: RAIL_HEIGHT, aspectRatio: item.aspectRatio, borderRadius: 1 }}>
            <MediaSlot src={item.src} alt={item.title} placeholder="Drop image" sizes="500px" fit={item.fit ?? 'cover'} />
          </div>
          <ItemCaption item={item} dark={dark} />
        </article>
      ))}
    </>
  );
}

function ReelRow({ items, dark }: { items: PortfolioItem[]; dark: boolean }) {
  return (
    <>
      {items.map((item, i) => (
        <article key={item.id} className="polaroid" style={{ flex: '0 0 clamp(230px,22vw,300px)', scrollSnapAlign: 'center', ['--tilt' as string]: `${TILTS[i % TILTS.length]}deg` }}>
          <span className="polaroid-tape" aria-hidden="true" />
          <div className="polaroid-frame" style={{ aspectRatio: '9 / 16', borderRadius: 1 }}>
            <MediaSlot type="video" src={item.src} placeholder="Drop reel" sizes="300px" />
          </div>
          <ItemCaption item={item} dark={dark} />
        </article>
      ))}
    </>
  );
}

function FilmRow({ items, dark }: { items: PortfolioItem[]; dark: boolean }) {
  return (
    <>
      {items.map((item, i) => (
        <article key={item.id} className="polaroid" style={{ flex: '0 0 clamp(320px,42vw,620px)', scrollSnapAlign: 'center', ['--tilt' as string]: `${TILTS[i % TILTS.length]}deg` }}>
          <span className="polaroid-tape" aria-hidden="true" />
          <div className="polaroid-frame" style={{ aspectRatio: '16 / 9', borderRadius: 1, boxShadow: '0 24px 60px -12px rgba(0,0,0,0.85)' }}>
            <MediaSlot type="video" src={item.src} placeholder="Drop film" sizes="620px" />
          </div>
          <ItemCaption item={item} dark={dark} />
        </article>
      ))}
    </>
  );
}

function CategorySection({ section, items, index }: { section: PortfolioSection; items: PortfolioItem[]; index: number }) {
  const dark = index % 2 === 0;

  return (
    <section
      id={section.key}
      className={dark ? 'riot-black-section' : 'riot-cream-section'}
      style={{
        position: 'relative',
        padding: 'clamp(70px,10vh,120px) 0',
        ['--card-accent' as string]: section.accent,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 clamp(24px,6vw,60px)', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: section.accent, fontWeight: 700 }}>
          <span className="pf-kicker-dot" aria-hidden="true" />
          {section.kicker}
        </span>
        <h2 className="riot-heading" style={{ margin: 0, maxWidth: '22ch', fontSize: 'clamp(40px,6.2vw,104px)' }}>
          {section.title}
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: dark ? '#B8BFCC' : '#4A443A' }}>
          <MarkedCopy description={section.description} mark={section.mark} color={section.accent} />
        </p>
      </div>

      <ScrollRail ariaLabel={section.title}>
        {section.layout === 'mixed' && <MixedRow items={items} dark={dark} />}
        {section.layout === 'reel' && <ReelRow items={items} dark={dark} />}
        {section.layout === 'film' && <FilmRow items={items} dark={dark} />}
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
