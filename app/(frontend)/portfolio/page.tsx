import type { Metadata } from 'next';
import Link from 'next/link';

import type { PortfolioItem as ItemView, PortfolioSectionKey } from '@/components/portfolio/portfolioItems';
import RiotFooter from '@/components/v2/RiotFooter';
import RiotNav from '@/components/v2/RiotNav';
import RiotPortfolioHero from '@/components/v2/RiotPortfolioHero';
import RiotPortfolioIntro from '@/components/v2/RiotPortfolioIntro';
import RiotPortfolioSections, { type PortfolioRow } from '@/components/v2/RiotPortfolioSections';
import { getHome, getPortfolioItems, getPortfolioPage } from '@/lib/cms';
import { asMedia, imageUrl, posterUrl, videoUrl, type MediaRef } from '@/lib/media';
import type { PortfolioPage as PortfolioPageData } from '@/payload/payload-types';

export const metadata: Metadata = {
  title: 'Portfolio — Marca Creatives',
  description: 'Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you came to see.',
};

/** The rows, in page order: which heading group in the admin, and how the work is laid out. */
const ROWS: { key: PortfolioSectionKey; group: keyof PortfolioPageData['sections']; layout: PortfolioRow['layout'] }[] = [
  { key: 'fashion-shoots', group: 'fashionShoots', layout: 'mixed' },
  { key: 'product-shoots', group: 'productShoots', layout: 'mixed' },
  { key: 'branding-packaging', group: 'brandingPackaging', layout: 'mixed' },
  { key: 'ad-campaigns', group: 'adCampaigns', layout: 'reel' },
  { key: 'instagram-reels', group: 'instagramReels', layout: 'reel' },
  { key: 'youtube-videos', group: 'youtubeVideos', layout: 'film' },
];

/** A library file as a portfolio tile. */
function tile(id: string, category: PortfolioSectionKey, ref: MediaRef, title: string, label: string): ItemView | null {
  const m = asMedia(ref);
  if (!m) return null;
  if (m.resourceType === 'video') {
    return { id, category, type: 'video', aspectRatio: '9 / 16', src: videoUrl(m) ?? '', poster: posterUrl(m, category === 'youtube-videos' ? 900 : 540, category === 'youtube-videos' ? 2 : 0), title, label };
  }
  return { id, category, type: 'image', aspectRatio: m.width && m.height ? `${m.width} / ${m.height}` : '4 / 5', src: imageUrl(m, { width: 1000 }) ?? '', title, label };
}

/** Portfolio: hero, intro, a row per kind of work, closing. Content comes from the admin. */
export default async function PortfolioPage() {
  const [page, items, home] = await Promise.all([getPortfolioPage(), getPortfolioItems(), getHome()]);

  const work: Record<PortfolioSectionKey, ItemView[]> = {
    'fashion-shoots': [],
    'product-shoots': [],
    'branding-packaging': [],
    'ad-campaigns': [],
    'instagram-reels': (home.instagram.reels ?? []).map((r) => tile(`reel-${r.id}`, 'instagram-reels', r.video, r.title, r.subtitle ?? '')).filter((t): t is ItemView => Boolean(t)),
    'youtube-videos': (home.youtube.films ?? [])
      .map((f) => tile(`film-${f.id}`, 'youtube-videos', f.video, f.titleAccent ? `${f.title} — ${f.titleAccent}` : f.title, f.category ?? ''))
      .filter((t): t is ItemView => Boolean(t)),
  };
  for (const item of items) {
    const t = tile(item.id, item.category, item.media, item.title, item.label ?? '');
    if (t) work[item.category].push(t);
  }

  const rows: PortfolioRow[] = ROWS.filter((r) => work[r.key].length).map((r) => {
    const meta = page.sections[r.group];
    return { key: r.key, layout: r.layout, kicker: meta?.kicker ?? '', title: meta?.title ?? '', description: meta?.description ?? '', items: work[r.key] };
  });
  const links = rows.map((r) => ({ key: r.key, title: r.title }));
  const { closing } = page;

  return (
    <main className="riot">
      <RiotNav />
      <RiotPortfolioHero hero={page.hero} sections={links} />
      <RiotPortfolioIntro sections={links} />
      <RiotPortfolioSections rows={rows} />

      <section
        className="riot-black"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 22,
          padding: 'clamp(70px,11vh,130px) clamp(18px,4vw,44px)',
          borderTop: '2px solid var(--r-black)',
          textAlign: 'center',
        }}
      >
        <h2 className="riot-display" style={{ maxWidth: '18ch', fontSize: 'clamp(34px,5.4vw,82px)', color: 'var(--r-h-yellow)' }}>
          {closing.title}{' '}
          {closing.titleAccent && (
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--r-cream)' }}>
              {closing.titleAccent}
            </span>
          )}
        </h2>
        <Link href="/#contact" className="riot-btn riot-btn-yellow" style={{ padding: '16px 32px', fontSize: 13 }}>
          {closing.buttonLabel || 'Start a project →'}
        </Link>
      </section>

      <RiotFooter />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Previous portfolio page (dark / blue theme). Kept for reference — to
// restore it, delete everything above and uncomment everything below.
// ─────────────────────────────────────────────────────────────────────
//
// import type { Metadata } from 'next';
// import Link from 'next/link';
// import PageNav from '@/components/PageNav';
// import PortfolioSections from '@/components/portfolio/PortfolioSections';
//
// export const metadata: Metadata = {
//   title: 'Portfolio — Marca Creatives',
//   description: 'Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you came to see.',
// };
//
// export default function PortfolioPage() {
//   return (
//     <main>
//       <PageNav />
//
//       <section
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 20,
//           padding: 'clamp(70px,11vh,140px) clamp(24px,6vw,60px) clamp(30px,4vh,48px)',
//           textAlign: 'center',
//         }}
//       >
//         <span style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Portfolio</span>
//         <h1 style={{ margin: 0, maxWidth: '22ch', fontSize: 'clamp(38px,5.4vw,88px)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .98 }}>
//           Everything we have <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>made.</span>
//         </h1>
//         <p style={{ margin: 0, maxWidth: '56ch', fontSize: 'clamp(14px,1.05vw,17px)', lineHeight: 1.65, color: '#A7B2C4' }}>
//           Fashion shoots, product shoots, branding, ad campaigns, reels and films — organised by the kind of work you came to see.
//         </p>
//       </section>
//
//       <PortfolioSections />
//
//       <section
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 22,
//           padding: 'clamp(70px,10vh,120px) clamp(24px,6vw,60px) clamp(90px,13vh,160px)',
//           borderTop: '1px solid rgba(242,244,248,.08)',
//           textAlign: 'center',
//         }}
//       >
//         <h2 style={{ margin: 0, maxWidth: '24ch', fontSize: 'clamp(28px,3.4vw,54px)', fontWeight: 700, letterSpacing: '-.038em', lineHeight: 1.04 }}>
//           Something here look like <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>your project?</span>
//         </h2>
//         <Link href="/#contact" className="btn-outline">
//           Start a project <span>→</span>
//         </Link>
//       </section>
//     </main>
//   );
// }
