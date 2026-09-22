import MediaSlot from '@/components/MediaSlot';
import ScrollRail from '@/components/ScrollRail';
import {
  portfolioItems,
  portfolioSections,
  type PortfolioItem,
  type PortfolioSection,
} from '@/components/portfolio/portfolioItems';

/**
 * Surface and heading colour cycle together so every heading stays
 * readable: red on cream, blue on the yellow band, yellow on black.
 */
const THEMES = [
  { surface: 'riot-cream', heading: 'var(--r-h-red)', text: 'var(--r-muted)', caption: 'var(--r-ink)', band: false },
  { surface: 'riot-yellow', heading: 'var(--r-h-blue)', text: 'rgba(18,18,18,.72)', caption: 'var(--r-black)', band: true },
  { surface: 'riot-black', heading: 'var(--r-h-yellow)', text: 'rgba(243,240,221,.7)', caption: 'var(--r-cream)', band: false },
] as const;

const RAIL_HEIGHT = 'clamp(250px, 40vh, 420px)';

type Theme = (typeof THEMES)[number];

function Caption({ item, theme }: { item: PortfolioItem; theme: Theme }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-.01em', color: theme.caption }}>{item.title}</span>
      <span style={{ fontSize: 12, color: theme.text }}>{item.label}</span>
    </div>
  );
}

function Card({ item, theme, layout }: { item: PortfolioItem; theme: Theme; layout: PortfolioSection['layout'] }) {
  const frame =
    layout === 'reel'
      ? { flex: '0 0 clamp(210px,20vw,280px)', box: { aspectRatio: '9 / 16' } }
      : layout === 'film'
        ? { flex: '0 0 clamp(300px,40vw,580px)', box: { aspectRatio: '16 / 9' } }
        : { flex: '0 0 auto', box: { height: RAIL_HEIGHT, aspectRatio: item.aspectRatio } };

  return (
    <article style={{ flex: frame.flex, scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div
        className="riot-media"
        style={{
          ...frame.box,
          borderRadius: 16,
          borderColor: theme.surface === 'riot-black' ? 'var(--r-cream)' : 'var(--r-black)',
        }}
      >
        {item.type === 'video' ? (
          <MediaSlot type="video" src={item.src} placeholder="Drop film" />
        ) : (
          <MediaSlot src={item.src} alt={item.title} placeholder="Drop image" sizes="500px" fit={item.fit ?? 'cover'} />
        )}
      </div>
      <Caption item={item} theme={theme} />
    </article>
  );
}

function CategorySection({ section, index }: { section: PortfolioSection; index: number }) {
  const theme = THEMES[index % THEMES.length];
  const items = portfolioItems.filter((item) => item.category === section.key);

  return (
    <section
      id={section.key}
      className={theme.surface}
      style={{
        position: 'relative',
        padding: 'clamp(56px,9vh,110px) 0',
        borderRadius: theme.band ? 'clamp(28px,4vw,56px) clamp(28px,4vw,56px) 0 0' : undefined,
        borderTop: theme.band ? '2px solid var(--r-black)' : undefined,
        scrollMarginTop: 64,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 clamp(18px,4vw,44px)', textAlign: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: theme.text }}>
          {section.kicker}
        </span>
        <h2 className="riot-display" style={{ maxWidth: '20ch', fontSize: 'clamp(36px,6.6vw,100px)', color: theme.heading }}>
          {section.title}
        </h2>
        <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: theme.text }}>
          {section.description}
        </p>
      </div>

      <ScrollRail ariaLabel={section.title}>
        {items.map((item) => (
          <Card key={item.id} item={item} theme={theme} layout={section.layout} />
        ))}
      </ScrollRail>
    </section>
  );
}

export default function RiotPortfolioSections() {
  return (
    <>
      {portfolioSections.map((section, index) => (
        <CategorySection key={section.key} section={section} index={index} />
      ))}
    </>
  );
}
