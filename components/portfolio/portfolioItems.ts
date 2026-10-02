import { fashionShoots, productShoots, packagingDesigns, reels, films, imageUrl, videoUrl, posterUrl, type PortfolioShot } from './cloudinaryMedia';

export type PortfolioSectionKey =
  | 'fashion-shoots'
  | 'product-shoots'
  | 'branding-packaging'
  | 'ad-campaigns'
  | 'instagram-reels'
  | 'youtube-videos';

export interface PortfolioItem {
  id: string;
  category: PortfolioSectionKey;
  aspectRatio: string;
  fit?: 'cover' | 'contain';
  type: 'video' | 'image';
  src: string;
  /** Still frame shown before a video plays. */
  poster?: string;
  title: string;
  label: string;
}

export interface PortfolioSection {
  key: PortfolioSectionKey;
  kicker: string;
  title: string;
  description: string;
  /** `mixed` — natural-width row of varied-aspect stills. `reel` — fixed 9:16 columns. `film` — fixed 16:9 columns. */
  layout: 'mixed' | 'reel' | 'film';
}

export const portfolioSections: PortfolioSection[] = [
  {
    key: 'fashion-shoots',
    kicker: 'Photoshoot',
    title: 'Fashion Shoots',
    description: 'Editorial and bridal fashion photography built to make a brand’s visual identity unmistakable.',
    layout: 'mixed',
  },
  {
    key: 'product-shoots',
    kicker: 'Photoshoot',
    title: 'Product Shoots',
    description: 'Product, food and lifestyle photography styled to make every SKU impossible to scroll past.',
    layout: 'mixed',
  },
  {
    key: 'branding-packaging',
    kicker: 'Identity',
    title: 'Branding and Packaging',
    description: 'Brand systems, labels and packaging design engineered to win shelf and feed attention.',
    layout: 'mixed',
  },
  {
    key: 'ad-campaigns',
    kicker: 'Paid Media',
    title: 'Ad Campaigns',
    description: 'Scroll-stopping performance ads — concept to platform-native cutdown — engineered for maximum ROAS.',
    layout: 'reel',
  },
  {
    key: 'instagram-reels',
    kicker: 'Short Form',
    title: 'Instagram Reels',
    description: 'Organic short-form content built to grow followings, drive views, and build creator authority.',
    layout: 'reel',
  },
  {
    key: 'youtube-videos',
    kicker: 'Long Form',
    title: 'Youtube Videos',
    description: 'Documentary-style long-form films crafted to hook viewers early and keep them watching.',
    layout: 'film',
  },
];

/** What each numbered sub-folder shows: [title, line under it]. */
type SetNames = Record<number, [string, string]>;

const fashionSets: SetNames = {
  1: ['Festive Menswear Editorial', 'Fashion Shoot · Menswear'],
  2: ['Summer Dress Campaign', 'Fashion Shoot · Womenswear'],
  3: ['Bridal Lehenga Editorial', 'Fashion Shoot · Bridal'],
  4: ['Festive Lehenga Outdoor Shoot', 'Fashion Shoot · Festive'],
  5: ['Picnic Lifestyle Shoot', 'Fashion Shoot · Lifestyle'],
  6: ['Studio Lehenga Collection', 'Fashion Shoot · Studio'],
};

const productSets: SetNames = {
  1: ['Sculptural Lighting Collection', 'Product Shoot · Home Decor'],
  2: ['Artisan Cake Styling', 'Product Shoot · Food'],
  3: ['Handcrafted Silver Jewellery', 'Product Shoot · Jewellery'],
  4: ['Fabric & Textile Stills', 'Product Shoot · Textiles'],
  5: ['Menswear Boutique Showcase', 'Product Shoot · Retail'],
};

const packagingSets: SetNames = {
  1: ['Floral Octagon Gift Box', 'Packaging Design · Gifting'],
  2: ['Illustrated City Gift Box', 'Packaging Design · Gifting'],
  3: ['Nutty Affair Stand-Up Pouches', 'Packaging Design · FMCG'],
  4: ['Nutty Affair Fox Nuts Tins', 'Packaging Design · FMCG'],
};

const shots = (category: PortfolioSectionKey, names: SetNames, list: PortfolioShot[]): PortfolioItem[] =>
  list.map((shot, i) => ({
    id: `${category}-${i + 1}`,
    category,
    aspectRatio: `${shot.width} / ${shot.height}`,
    type: 'image',
    src: imageUrl(shot.id),
    title: names[shot.set][0],
    label: names[shot.set][1],
  }));

export const portfolioItems: PortfolioItem[] = [
  ...shots('fashion-shoots', fashionSets, fashionShoots),
  ...shots('product-shoots', productSets, productShoots),
  ...shots('branding-packaging', packagingSets, packagingDesigns),

  // ── Ad Campaigns ──
  {
    id: 'ayushi-clairveda',
    category: 'ad-campaigns',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553225/Video-59256_f9vyja.mp4',
    title: "Ayushi | Founder Ayu's Clairveda",
    label: 'Cinematic Ad',
  },
  {
    id: 'rajvi-cinematic-1',
    category: 'ad-campaigns',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553180/Video-38021_hhhbkc.mp4',
    title: 'Rajvi | Co-Founder Marca Creatives',
    label: 'Cinematic Ad',
  },
  {
    id: 'rajvi-cinematic-2',
    category: 'ad-campaigns',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553181/Video-81552_skecuv.mp4',
    title: 'Rajvi | Co-Founder Marca Creatives',
    label: 'Cinematic Ad',
  },
  {
    id: 'eos-couture',
    category: 'ad-campaigns',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553217/Video-12950_kemi72.mp4',
    title: 'EOS Couture',
    label: 'Ad Campaign',
  },
  {
    id: 'nutty-affair-short',
    category: 'ad-campaigns',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1786553006/Video-95206_dmsnpi.mp4',
    title: 'Nutty Affair',
    label: 'Ad Campaign',
  },

  // ── Instagram Reels — same list as the landing page ──
  ...reels.map((reel, i): PortfolioItem => ({
    id: `instagram-reel-${i + 1}`,
    category: 'instagram-reels',
    aspectRatio: '9 / 16',
    type: 'video',
    src: videoUrl(reel.id),
    poster: posterUrl(reel.id, 540),
    title: reel.title,
    label: reel.subtitle,
  })),

  // ── Youtube Videos — same list as the landing page ──
  ...films.map((film, i): PortfolioItem => ({
    id: `youtube-video-${i + 1}`,
    category: 'youtube-videos',
    aspectRatio: '16 / 9',
    type: 'video',
    src: videoUrl(film.id),
    poster: posterUrl(film.id, 900, 2),
    title: film.titleSerif ? `${film.title} — ${film.titleSerif}` : film.title,
    label: film.category,
  })),
];
