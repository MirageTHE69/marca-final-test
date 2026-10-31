import type { Field, GlobalConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { revalidateAfterChange } from '../hooks/revalidate';

const row = (name: string, label: string, description?: string): Field => ({
  name,
  label,
  type: 'group',
  admin: { description },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'kicker', label: 'Small label above', type: 'text', admin: { width: '30%' } },
        { name: 'title', type: 'text', required: true, admin: { width: '70%' } },
      ],
    },
    { name: 'description', label: 'Line under the title', type: 'textarea' },
  ],
});

/** Headings on the portfolio page. The work itself lives in Content → Portfolio. */
export const PortfolioPage: GlobalConfig = {
  slug: 'portfolio-page',
  label: 'Portfolio page',
  versions: { drafts: true, max: 20 },
  admin: {
    group: 'Pages',
    description: 'Headings on /portfolio. The images and videos are managed in Content → Portfolio and the Home page lists.',
    preview: () => '/portfolio',
  },
  access: { read: isLoggedIn, update: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'scriptLine', label: 'Handwritten line', type: 'text', admin: { width: '40%' } },
                { name: 'bigWord', label: 'Giant word', type: 'text', required: true, admin: { width: '30%' } },
                { name: 'buttonLabel', label: 'Button', type: 'text', admin: { width: '30%' } },
              ],
            },
            { name: 'title', label: 'Serif title', type: 'text' },
            { name: 'lede', label: 'Line under the title', type: 'textarea' },
          ],
        },
        {
          name: 'sections',
          label: 'Rows',
          fields: [
            row('fashionShoots', 'Fashion Shoots'),
            row('productShoots', 'Product Shoots'),
            row('brandingPackaging', 'Branding and Packaging'),
            row('adCampaigns', 'Ad Campaigns'),
            row('instagramReels', 'Instagram Reels', 'Videos come from Home page → Instagram.'),
            row('youtubeVideos', 'YouTube Videos', 'Videos come from Home page → YouTube.'),
          ],
        },
        {
          name: 'closing',
          label: 'Closing',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'title', type: 'text', required: true, admin: { width: '45%' } },
                { name: 'titleAccent', label: 'Italic ending', type: 'text', admin: { width: '30%' } },
                { name: 'buttonLabel', label: 'Button', type: 'text', admin: { width: '25%' } },
              ],
            },
          ],
        },
      ],
    },
  ],
};
