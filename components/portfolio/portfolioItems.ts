export type PortfolioCategory = 'branding' | 'photoshoot' | 'packaging' | 'long' | 'short';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  span2?: boolean;
  aspectRatio: string;
  type: 'video' | 'image';
  src: string;
  duration?: string;
  title: string;
  label: string;
}

export const filters: { key: 'all' | PortfolioCategory; label: string; countLabel: string }[] = [
  { key: 'all', label: 'All work', countLabel: 'pieces' },
  { key: 'branding', label: 'Branding', countLabel: 'branding projects' },
  { key: 'photoshoot', label: 'Photoshoot', countLabel: 'shoots' },
  { key: 'packaging', label: 'Packaging', countLabel: 'packaging projects' },
  { key: 'long', label: 'Long video', countLabel: 'films' },
  { key: 'short', label: 'Short video', countLabel: 'reels' },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'aadicura-still-here',
    category: 'long',
    span2: true,
    aspectRatio: '16 / 9',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785482138/MARCA_WEBSITE_02_ci6tgd.mp4',
    duration: '04:12',
    title: 'Aadicura Hospital — Still Here',
    label: 'Documentary',
  },
  {
    id: 'anaya-verma-reel',
    category: 'short',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486188/3M_tbl2fe.mp4',
    title: 'Dr. Anaya Verma',
    label: 'Reel',
  },
  {
    id: 'ledgerloop-identity',
    category: 'branding',
    aspectRatio: '4 / 5',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785487016/4_ab0ehj.jpg',
    title: 'Ledgerloop',
    label: 'Identity',
  },
  {
    id: 'sol-grain-packaging',
    category: 'packaging',
    aspectRatio: '4 / 5',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785486928/5_hw5ng6.png',
    title: 'Sol & Grain',
    label: 'Packaging',
  },
  {
    id: 'kindra-studio-day',
    category: 'photoshoot',
    span2: true,
    aspectRatio: '3 / 2',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494169/WhatsApp_Image_2026-07-31_at_2.34.46_PM_f1ofwi.jpg',
    title: 'Kindra — Studio day',
    label: 'Product & portrait',
  },
  {
    id: 'kindra-short',
    category: 'short',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486291/22K_egrmzj.mp4',
    title: 'Kindra',
    label: 'Short',
  },
  {
    id: 'ledgerloop-social-kit',
    category: 'branding',
    aspectRatio: '1 / 1',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785486926/4_c5ql8a.png',
    title: 'Ledgerloop social kit',
    label: 'Design system',
  },
  {
    id: 'sol-grain-campaign',
    category: 'short',
    aspectRatio: '9 / 16',
    type: 'video',
    src: 'https://res.cloudinary.com/ts350ak2/video/upload/v1785486111/ACCENT_WALL_25K_VIEWS_dmvtj8.mp4',
    title: 'Sol & Grain',
    label: 'Campaign',
  },
  {
    id: 'norwood-on-location',
    category: 'photoshoot',
    aspectRatio: '4 / 5',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.49_PM_du5z6r.jpg',
    title: 'Norwood Clinics',
    label: 'On location',
  },
  {
    id: 'sol-grain-retail',
    category: 'packaging',
    aspectRatio: '1 / 1',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785487014/5_rnslzq.png',
    title: 'Sol & Grain — Retail',
    label: 'Label system',
  },
  {
    id: 'vantara-commercial',
    category: 'long',
    span2: true,
    aspectRatio: '16 / 9',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785488252/ChatGPT_Image_Jul_31_2026_02_27_07_PM_tvldb0.png',
    duration: '01:30',
    title: 'Vantara Interiors',
    label: 'Commercial',
  },
  {
    id: 'long-game-cover',
    category: 'branding',
    aspectRatio: '4 / 5',
    type: 'image',
    src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1100/v1785494167/WhatsApp_Image_2026-07-31_at_2.34.47_PM_plfmhl.jpg',
    title: 'The Long Game',
    label: 'Cover system',
  },
];
