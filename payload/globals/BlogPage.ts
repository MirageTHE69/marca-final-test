import type { GlobalConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { revalidateAfterChange } from '../hooks/revalidate';

/** The heading of /blog. The posts themselves are in Content → Blog. */
export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  label: 'Blog page',
  admin: {
    group: 'Pages',
    description: 'The heading of /blog. Write posts in Content → Blog.',
    preview: () => '/blog',
  },
  access: { read: isLoggedIn, update: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange] },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'scriptLine', label: 'Handwritten line', type: 'text', defaultValue: 'notes from the studio', admin: { width: '50%' } },
        { name: 'bigWord', label: 'Giant word', type: 'text', required: true, defaultValue: 'the blog', admin: { width: '50%' } },
      ],
    },
    {
      name: 'lede',
      label: 'Line under the title',
      type: 'textarea',
      defaultValue: 'What we are learning about content, film and building brands people choose — straight from the shoots, edits and strategy calls.',
    },
    {
      name: 'emptyMessage',
      label: 'Shown before the first post',
      type: 'text',
      defaultValue: 'The first stories are on their way.',
    },
  ],
};
