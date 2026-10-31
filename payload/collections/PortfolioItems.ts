import type { CollectionConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { mediaField } from '../fields/media';
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate';

/** Rows the portfolio page groups work into. Reels and long videos come from the Home page lists. */
export const PORTFOLIO_CATEGORIES = [
  { label: 'Fashion Shoots', value: 'fashion-shoots' },
  { label: 'Product Shoots', value: 'product-shoots' },
  { label: 'Branding and Packaging', value: 'branding-packaging' },
  { label: 'Ad Campaigns', value: 'ad-campaigns' },
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number]['value'];

/** Images and videos on the portfolio page. Drag rows in the list to reorder. */
export const PortfolioItems: CollectionConfig = {
  slug: 'portfolio-items',
  labels: { singular: 'Portfolio item', plural: 'Portfolio' },
  orderable: true,
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'category', 'label', 'updatedAt'],
    listSearchableFields: ['title', 'label'],
    description: 'Work shown on the portfolio page. Filter by category, then drag to reorder.',
    preview: () => '/portfolio',
  },
  access: { create: isLoggedIn, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  fields: [
    mediaField('media', { label: 'Image or video', required: true }),
    {
      type: 'row',
      fields: [
        { name: 'title', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'label', label: 'Line under the title', type: 'text', admin: { width: '50%' } },
      ],
    },
    { name: 'category', type: 'select', required: true, options: [...PORTFOLIO_CATEGORIES], admin: { position: 'sidebar' } },
  ],
};
