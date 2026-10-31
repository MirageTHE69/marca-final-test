import type { CollectionConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { mediaField } from '../fields/media';
import { slugField } from '../fields/shared';
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate';
import { richTextEditor } from '../richText';

/** Case study cards, and an optional full page for each. Drag rows in the list to reorder. */
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: { singular: 'Case study', plural: 'Case studies' },
  orderable: true,
  versions: { drafts: true, maxPerDoc: 20 },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'category', 'featured', '_status', 'updatedAt'],
    listSearchableFields: ['title', 'category', 'chip'],
    description: 'Cards on the Case Studies page and the landing page. Drag to reorder; publish to put a change live.',
    preview: () => '/case-studies',
  },
  access: { create: isLoggedIn, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Card',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'title', type: 'text', required: true, admin: { width: '50%' } },
                { name: 'category', type: 'text', required: true, admin: { width: '30%', placeholder: 'Documentary + Short form' } },
                { name: 'year', type: 'text', admin: { width: '20%', placeholder: '2026' } },
              ],
            },
            {
              type: 'row',
              fields: [
                mediaField('logo', { label: 'Profile image', accept: 'image' }),
                mediaField('beforeImage', { label: 'Before screenshot', accept: 'image', description: 'Leave empty if there is no "before".' }),
                mediaField('afterImage', { label: 'After screenshot', accept: 'image', required: true }),
              ],
            },
            {
              name: 'stats',
              label: 'Numbers',
              type: 'array',
              labels: { singular: 'Number', plural: 'Numbers' },
              admin: { initCollapsed: false, components: { RowLabel: '/payload/admin/RowLabel#StatRowLabel' } },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'value', type: 'text', admin: { width: '30%', placeholder: '40K+' } },
                    { name: 'label', type: 'text', required: true, admin: { width: '70%', placeholder: 'Instagram followers' } },
                  ],
                },
              ],
            },
            {
              name: 'descriptions',
              label: 'Description paragraphs',
              type: 'array',
              labels: { singular: 'Paragraph', plural: 'Paragraphs' },
              fields: [{ name: 'text', type: 'textarea', required: true }],
            },
          ],
        },
        {
          label: 'Full page',
          description: 'Optional. Write a full case study and the card gets a "Read case study" button.',
          fields: [
            mediaField('heroMedia', { label: 'Page hero image or video' }),
            { name: 'intro', label: 'Intro line', type: 'textarea' },
            { name: 'content', type: 'richText', editor: richTextEditor },
            {
              name: 'link',
              label: 'Or link the button somewhere else',
              type: 'text',
              admin: { description: 'For case studies with a hand-built page, e.g. /case-studies/aadicura-hospital.' },
            },
          ],
        },
      ],
    },
    slugField(),
    {
      name: 'chip',
      label: 'Industry',
      type: 'text',
      admin: { position: 'sidebar', placeholder: 'Healthcare' },
    },
    {
      name: 'featured',
      label: 'Show on the landing page',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
};
