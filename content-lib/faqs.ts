/** Blocks that can appear inside a single FAQ answer. */
export type FaqBlock =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'sub'; title: string; text: string };

export interface Faq {
  question: string;
  answer: FaqBlock[];
}

export const faqs: Faq[] = [
  {
    question: 'Who do you work with?',
    answer: [
      { kind: 'p', text: 'We work with business owners and founders who want to grow online and be chosen in their category.' },
      { kind: 'p', text: 'Our clients include:' },
      {
        kind: 'list',
        items: [
          'Clinics & doctors',
          'Salons & service businesses',
          'Coaches & consultants',
          'Product brands',
          'Designers & architects',
          'Educators & creators',
        ],
      },
      { kind: 'p', text: 'If you have a business and want to grow through content — you’re a fit.' },
    ],
  },
  {
    question: 'What exactly do you do?',
    answer: [
      { kind: 'p', text: 'We help businesses and founders grow, get known, and sell online through strategic content on Instagram and YouTube.' },
      { kind: 'p', text: 'We manage everything from level zero:' },
      { kind: 'list', items: ['Strategy', 'Content creation', 'Posting', 'Growth', 'Performance tracking'] },
      { kind: 'p', text: 'You focus on your business. We build your online presence.' },
    ],
  },
  {
    question: 'What services do you offer?',
    answer: [
      {
        kind: 'sub',
        title: 'Content Strategy & Planning',
        text: 'We define your niche, audience, content pillars and monthly calendar so your content is intentional — not random.',
      },
      {
        kind: 'sub',
        title: 'Done-For-You Content Creation',
        text: 'Reels, shorts, YouTube videos, thumbnails, carousels — we script, shoot (or guide), edit and package everything.',
      },
      {
        kind: 'sub',
        title: 'Social Media Management',
        text: 'We post, write captions, schedule and monitor content so you stay consistent without lifting a finger.',
      },
      {
        kind: 'sub',
        title: 'Performance & Growth',
        text: 'We track what’s working, optimise content and align everything with your business goals — leads, bookings and sales.',
      },
    ],
  },
  {
    question: 'What happens when we work together?',
    answer: [
      { kind: 'p', text: 'Here’s what most clients experience:' },
      {
        kind: 'list',
        items: [
          'Increase in inquiries within 90 days',
          'Stronger brand recall',
          'Consistent content output',
          'Audience growth that converts',
          'Clear positioning in their niche',
        ],
      },
      { kind: 'p', text: 'Some of our results include:' },
      {
        kind: 'list',
        items: [
          '10M+ monthly views generated',
          'Pages grown to 100K followers',
          'YouTube channels scaled from zero',
          'Businesses seeing real inquiry growth',
        ],
      },
      { kind: 'p', text: 'We focus on organic, real audiences — not vanity metrics.' },
    ],
  },
  {
    question: 'I’ve never created content before. Will this work for me?',
    answer: [
      { kind: 'p', text: 'Yes. Most of our clients start from zero.' },
      { kind: 'p', text: 'You don’t need to:' },
      { kind: 'list', items: ['Know what to post', 'Be good on camera', 'Understand algorithms'] },
      { kind: 'p', text: 'That’s our job. We guide you step-by-step.' },
    ],
  },
  {
    question: 'Do I have to be on camera?',
    answer: [
      { kind: 'p', text: 'Not always.' },
      { kind: 'p', text: 'If personal branding helps your business, we guide you through it. If it doesn’t, we create brand-focused content instead.' },
      { kind: 'p', text: 'We work around your comfort level.' },
    ],
  },
  {
    question: 'How much time will this take from me?',
    answer: [
      { kind: 'p', text: 'Minimal. Usually:' },
      { kind: 'list', items: ['2–4 hours a month for shooting', 'Quick approvals', 'Occasional check-ins'] },
      { kind: 'p', text: 'We handle everything else.' },
    ],
  },
  {
    question: 'How long before I see results?',
    answer: [
      { kind: 'p', text: 'Most clients see:' },
      {
        kind: 'list',
        items: [
          'Better engagement within 4–6 weeks',
          'Noticeable growth within 3 months',
          'Strong brand positioning within 6 months',
        ],
      },
      { kind: 'p', text: 'Growth compounds with consistency. This is a long-term brand asset — not a one-post solution.' },
    ],
  },
  {
    question: 'Do you guarantee results?',
    answer: [
      { kind: 'p', text: 'We don’t promise viral numbers. No serious agency should.' },
      { kind: 'p', text: 'But we do guarantee:' },
      { kind: 'list', items: ['Strategy', 'Consistency', 'High-quality content', 'A real growth approach'] },
      { kind: 'p', text: 'And that’s what works long term.' },
    ],
  },
  {
    question: 'What makes Marca Creatives different?',
    answer: [
      { kind: 'p', text: 'We’re not just content creators.' },
      { kind: 'p', text: 'We combine:' },
      { kind: 'list', items: ['Strategy', 'Storytelling', 'Design', 'Growth mindset'] },
      {
        kind: 'p',
        text: 'You don’t juggle freelancers — you get one dedicated team. We work like an in-house growth partner, not an external vendor.',
      },
    ],
  },
  {
    question: 'How does the process work?',
    answer: [
      {
        kind: 'list',
        ordered: true,
        items: [
          'Discovery call',
          'Strategy planning',
          'Content roadmap',
          'Shooting & editing',
          'Posting & management',
          'Monthly review & optimisation',
        ],
      },
      { kind: 'p', text: 'Simple. Clear. Consistent.' },
    ],
  },
  {
    question: 'How can we start?',
    answer: [
      { kind: 'p', text: 'We offer different ways to work together:' },
      { kind: 'sub', title: 'Starter', text: 'For businesses just starting content.' },
      { kind: 'sub', title: 'Growth', text: 'For brands ready to scale.' },
      { kind: 'sub', title: 'Full Partner', text: 'For brands who want us as their content team.' },
      { kind: 'p', text: 'We customise based on your goals.' },
    ],
  },
  {
    question: 'Can we start small and scale later?',
    answer: [
      { kind: 'p', text: 'Yes. Most clients do.' },
      { kind: 'p', text: 'We often begin with a focused plan and scale once momentum builds.' },
    ],
  },
];
