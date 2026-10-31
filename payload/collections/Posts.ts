import type { CollectionConfig } from 'payload';

import { POST_CATEGORIES } from '../../lib/blog';
import { isLoggedIn } from '../access/isLoggedIn';
import { mediaField } from '../fields/media';
import { slugField } from '../fields/shared';
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate';
import { richTextEditor } from '../richText';

/** Blog posts. Save as a draft while writing; publish to put it on /blog. */
export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Blog post', plural: 'Blog' },
  defaultSort: '-publishedAt',
  versions: { drafts: { autosave: { interval: 2000 } }, maxPerDoc: 30 },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'category', '_status', 'publishedAt'],
    listSearchableFields: ['title', 'excerpt', 'category'],
    description: 'Articles on /blog. Drafts save as you type; nothing goes live until you publish.',
    preview: (doc) => (doc?.slug ? `/blog/${doc.slug}` : '/blog'),
  },
  access: { create: isLoggedIn, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
    beforeChange: [
      ({ data }) => {
        if (data?._status === 'published' && !data.publishedAt) data.publishedAt = new Date().toISOString();
        return data;
      },
    ],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'excerpt',
      label: 'Summary',
      type: 'textarea',
      admin: { description: 'One or two sentences for the blog list and search results.' },
    },
    mediaField('cover', { label: 'Cover image', accept: 'image' }),
    { name: 'content', type: 'richText', editor: richTextEditor, required: true },
    slugField(),
    {
      name: 'category',
      type: 'select',
      defaultValue: 'insights',
      options: [...POST_CATEGORIES],
      admin: { position: 'sidebar' },
    },
    { name: 'author', type: 'text', defaultValue: 'Marca Creatives', admin: { position: 'sidebar' } },
    {
      name: 'publishedAt',
      label: 'Publish date',
      type: 'date',
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly', displayFormat: 'd MMM yyyy' }, description: 'Set automatically when first published.' },
    },
    {
      name: 'seo',
      label: 'Search & sharing',
      type: 'group',
      admin: { description: 'Optional. Falls back to the title, summary and cover image.' },
      fields: [
        { name: 'title', label: 'Search title', type: 'text' },
        { name: 'description', label: 'Search description', type: 'textarea' },
      ],
    },
  ],
};
