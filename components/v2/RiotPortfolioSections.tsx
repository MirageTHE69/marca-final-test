import MediaSlot from '@/components/MediaSlot';
import RiotReelVideo from './RiotReelVideo';
import ScrollRail from '@/components/ScrollRail';
import type { PortfolioItem, PortfolioSection } from '@/components/portfolio/portfolioItems';
import RiotHead from './RiotHead';

/** One row of the page: its heading and the work in it. */
export type PortfolioRow = PortfolioSection & { items: PortfolioItem[] };

/**
 * Surface and heading colour cycle together so every heading stays
 * readable: red on cream, red on the gingham band (as the home page's
 * Thumbnails section), yellow on black.
 */
const THEMES = [
  { surface: 'riot-cream', heading: 'var(--r-h-red)', text: 'var(--r-muted)', caption: 'var(--r-ink)', band: false },
  { surface: 'riot-stripes', heading: 'var(--r-h-red)', text: 'var(--r-muted)', caption: 'var(--r-ink)', band: true },
  { surface: 'riot-black', heading: 'var(--r-h-yellow)', text: 'rgba(243,240,221,.7)', caption: 'var(--r-cream)', band: false },
] as const;

const RAIL_HEIGHT = 'clamp(250px, 40vh, 420px)';

/** "Ad Campaigns": the label goes over "gns", after the "i". */
const LABEL_AFTER: Record<string, string> = { 'ad-campaigns': 'Campai' };

type Theme = (typeof THEMES)[number];

function Caption({ item, theme }: { item: PortfolioItem; theme: Theme }) {
  // On the gingham the words sit on an off-white tag so they read cleanly.
  const onCheck = theme.surface === 'riot-stripes';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        ...(onCheck
          ? { alignSelf: 'flex-start', maxWidth: '100%', boxSizing: 'border-box', padding: '10px 14px', background: 'var(--r-cream)', border: '2px solid var(--r-black)', borderRadius: 12 }
          : null),
      }}
    >
      <span style={{ fontSize: 'clamp(16px,1.25vw,19px)', fontWeight: 800, letterSpacing: '-.015em', lineHeight: 1.25, color: theme.caption }}>{item.title}</span>
      <span style={{ fontSize: 'clamp(13px,1.02vw,15px)', fontWeight: 600, color: theme.text }}>{item.label}</span>
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
          <RiotReelVideo src={item.src} poster={item.poster} />
        ) : (
          <MediaSlot src={item.src} alt={item.title} placeholder="Drop image" sizes="500px" fit={item.fit ?? 'cover'} />
        )}
      </div>
      <Caption item={item} theme={theme} />
    </article>
  );
}

function CategorySection({ section, index }: { section: PortfolioRow; index: number }) {
  const theme = THEMES[index % THEMES.length];
  const items = section.items;

  return (
    <section
      id={section.key}
      className={theme.surface}
      style={{
        position: 'relative',
        color: theme.surface === 'riot-stripes' ? 'var(--r-ink)' : undefined,
        padding: 'clamp(56px,9vh,110px) 0',
        borderRadius: theme.band ? 'clamp(28px,4vw,56px) clamp(28px,4vw,56px) 0 0' : undefined,
        borderTop: theme.band ? '2px solid var(--r-black)' : undefined,
        scrollMarginTop: 64,
      }}
    >
      <div style={{ padding: '0 clamp(18px,4vw,44px)' }}>
        <RiotHead
          kicker={section.kicker}
          title={section.title}
          lede={section.description}
          color={theme.heading}
          kickerStyle={{ color: theme.caption }}
          // Where the label sits beside the letters, when it should skip the first gap.
          labelAfter={LABEL_AFTER[section.key]}
          labelFirstGap={section.key === 'instagram-reels'}
          ledeStyle={{ color: theme.caption }}
        />
      </div>

      <ScrollRail ariaLabel={section.title}>
        {items.map((item) => (
          <Card key={item.id} item={item} theme={theme} layout={section.layout} />
        ))}
      </ScrollRail>
    </section>
  );
}

export default function RiotPortfolioSections({ rows }: { rows: PortfolioRow[] }) {
  return (
    <>
      {rows.map((section, index) => (
        <CategorySection key={section.key} section={section} index={index} />
      ))}
    </>
  );
}
