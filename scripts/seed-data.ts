/**
 * The content the site launched with, used to fill an empty database
 * (scripts/seed.ts). After seeding, edit everything in the admin panel.
 */

export const clients = [
  'Dr. Aditya Shah',
  'MS Design Studio',
  'Dr. Sandeep Mavani',
  'The Crossed Boundaries',
  'Dr. Ashish Desai',
  'EOS Couture',
  'Nutty Affair',
  'Aadicura Hospital',
];

export const pieces = [
  {
    src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto/v1790935445/1_1_jwps5a_2.webp',
    category: 'YouTube — Thumbnails',
    title: "Don't Sleep",
    desc: 'A cinematic warning thumbnail built to stop a health scroll dead — dramatized without leaning on shock value alone.',
  },
  {
    src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto/v1790935444/4_1_obs8z8.webp',
    category: 'YouTube — Thumbnails',
    title: 'Why Some Men Never Go Bald?',
    desc: 'A curiosity-gap headline paired with a follicle cutaway to make a dermatology explainer impossible to skip.',
  },
  {
    src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto/v1790935442/5_Blood_Test_Mistakes_That_Make_Your_5_000_Reports_Useless_1_ulahya.webp',
    category: 'YouTube — Thumbnails · Dr. Sumit Kapadia',
    title: 'Blood Report? Useless.',
    desc: 'Built around the exact numbers his patients scroll past — the red circles do the explaining before the video starts.',
  },
  {
    src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto/v1790935441/2_dwdhm2.webp',
    category: 'YouTube — Thumbnails · Dr. Sumit Kapadia',
    title: 'Fix Your Morning Routine',
    desc: 'A single cutaway artery makes the health stakes of a coffee habit visible in half a second.',
  },
  {
    src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto/v1790935440/Brain_tumour_treatment_without_surgery_Gamma_knife_on74fv.webp',
    category: 'YouTube — Thumbnails · Dr. Sandip Mavani',
    title: 'Brain Tumour — No Surgery Needed',
    desc: 'A credibility card and a held brain model turn a frightening diagnosis into a reassuring watch.',
  },
  {
    src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto/v1790935439/Ashwagandha_xcygpx.webp',
    category: 'YouTube — Thumbnails',
    title: 'Ashwagandha — Wellness Explainer',
    desc: 'High-contrast type and warm product lighting built for a men’s-health topic that needed to feel clinical, not clickbait.',
  },
];

export const processSteps = [
  { num: '01', title: 'Research', desc: 'We research and analyze top-performing creators and content in your niche on social media to strategically build and establish your unique brand identity.', bg: 'var(--r-yellow)' },
  { num: '02', title: 'Scripting', desc: 'Using the research and information on you and your business, we script an entire month of short form content.', bg: 'var(--r-blue)' },
  { num: '03', title: 'Filming', desc: 'We shoot all our content in a dedicated, professionally designed setup to ensure high-quality visuals and consistency.', bg: 'var(--r-orange)' },
  { num: '04', title: 'Editing', desc: 'We edit videos using high-quality visuals and sound effects to make the content engaging and visually appealing.', bg: 'var(--r-cream)' },
  { num: '05', title: 'Social Media Management', desc: 'We manage social media accounts, upload content consistently, and optimize it for maximum reach and engagement.', bg: 'var(--r-olive)' },
];

export const otherServices = [
  {
    id: 'photoshoot',
    num: '01',
    title: 'Photoshoot',
    tagline: 'Product, portrait, lifestyle and editorial shoots designed to feed high-authority visual content across all channels.',
    bg: 'var(--r-yellow)',
    // Portrait shots in a 4:3 frame: crop from the top so faces stay in.
    images: [
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857280/ChatGPT_Image_Jul_17_2026_02_47_38_PM.png', caption: 'Menswear Sherwani Editorial' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857363/ChatGPT_Image_Jul_17_2026_02_25_58_PM.png', caption: 'Summer Dress Campaign' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857558/ChatGPT_Image_Jul_16_2026_06_10_05_PM.png', caption: 'Bridal Lehenga Editorial' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857651/ChatGPT_Image_Jul_16_2026_06_26_24_PM.png', caption: 'Festive Lehenga Outdoor Shoot' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790857833/ChatGPT_Image_Jul_16_2026_05_41_45_PM.png', caption: 'Lifestyle Picnic Shoot' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/c_fill,g_north,ar_4:3,w_1000,f_auto,q_auto/v1790858055/ChatGPT_Image_Aug_12_2026_01_54_28_PM.png', caption: 'Studio Lehenga Shoot' },
    ],
  },
  {
    id: 'ad-campaigns',
    num: '02',
    title: 'Ad Campaigns',
    tagline: 'High-converting concept, script, production, and platform-native cutdowns engineered for maximum ROAS and reach.',
    bg: 'var(--r-blue)',
    images: [
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1785486926/4_c5ql8a.png', caption: 'Paid Social Performance Ads' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786733662/EOS_Couture_ijyzyw.png', caption: 'Luxury Fashion Campaign Film' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607736/ChatGPT_Image_Jul_16_2026_05_53_26_PM_c90ttf.png', caption: 'Commercial Creative Direction' },
      { src: 'https://res.cloudinary.com/ts350ak2/image/upload/f_auto,q_auto,w_1000/v1786607732/ChatGPT_Image_Jul_16_2026_05_53_35_PM_oewfwt.png', caption: 'Brand Storytelling Cutdowns' },
    ],
  },
  {
    id: 'packaging-creative-design',
    num: '03',
    title: 'Packaging & Creative Design',
    tagline: 'Tactile packaging, SKU label architectures, and brand systems crafted to win customer attention on shelves and feeds.',
    bg: 'var(--r-orange)',
    images: [
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859073/ChatGPT_Image_Aug_20_2026_06_16_38_PM.png', caption: 'Floral Octagon Gift Box' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859103/ChatGPT_Image_Aug_20_2026_06_20_56_PM.png', caption: 'Illustrated Gifting Box' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859136/ChatGPT_Image_Aug_20_2026_06_44_34_PM.png', caption: 'Seeds & Berries Stand-Up Pouch' },
      { src: 'https://res.cloudinary.com/fhwvxdg0/image/upload/f_auto,q_auto,w_1000/v1790859164/ChatGPT_Image_Aug_20_2026_07_13_39_PM.png', caption: 'Fox Nuts Tin — Chilli & Cheese' },
    ],
  },
];

export const packages = [
  {
    num: '01',
    name: 'Instagram',
    subtitle: 'Content Package',
    bg: 'var(--r-yellow)',
    items: [
      { text: '10–15 Reels per Month', highlight: true },
      { text: 'Topic Research & Content Strategy' },
      { text: 'Custom Scriptwriting' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'High-Quality Video Editing' },
      { text: 'Captions, Hooks & Visual Elements' },
      { text: 'Done-for-You Posting & Account Management' },
      { text: 'Performance Tracking & Content Optimization' },
    ],
  },
  {
    num: '02',
    name: 'YouTube',
    subtitle: 'Long-Form Package',
    bg: 'var(--r-blue)',
    items: [
      { text: '4–8 Long-Form Videos per Month', highlight: true },
      { text: 'Topic Research & Content Strategy' },
      { text: 'Custom Scriptwriting & Storytelling' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'High-Quality Video Editing' },
      { text: 'Custom YouTube Thumbnail Design' },
      { text: 'Click-Focused Titles & Thumbnail Concepts' },
      { text: 'Video Descriptions & Upload Optimization' },
      { text: 'Performance Tracking & Content Optimization' },
    ],
  },
  {
    num: '03',
    name: 'Customized Plan',
    subtitle: 'Tailored Content Package',
    bg: 'var(--r-orange)',
    items: [
      { text: 'Flexible Content Volume', highlight: true },
      { text: 'Custom Content Strategy for Instagram & YouTube' },
      { text: 'Topic Research & Scriptwriting' },
      { text: 'Concept & Creative Direction' },
      { text: 'Professional Shooting & Production' },
      { text: 'Video Editing & Post-Production' },
      { text: 'Thumbnail & Creative Design' },
      { text: 'Social Media Management' },
      { text: 'Campaign & Advertising Content' },
      { text: 'Fully Tailored to Your Brand Goals', highlight: true },
    ],
  },
];

export const testimonials = [
  {
    quote: '"We had been posting for two years with nothing to show. Six months in, patients quote our videos back to us in consultations."',
    name: 'Dr. Anaya Verma',
    role: 'Verma Dental — Healthcare',
    bg: 'var(--r-cream)',
  },
  {
    quote: '"The most organised shoot I\'ve been on. They arrived with a plan and left us with a month of content the same week."',
    name: 'Reyansh Doshi',
    role: 'Kindra — Consumer brands',
    bg: 'var(--r-yellow)',
  },
  {
    quote: '"They made a fintech product sound human without dumbing it down. Our investors noticed before our customers did."',
    name: 'Tara Menon',
    role: 'Ledgerloop — Startups',
    bg: 'var(--r-blue)',
  },
];
