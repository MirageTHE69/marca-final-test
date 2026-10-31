import type { GlobalConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { mediaField } from '../fields/media';
import { revalidateAfterChange } from '../hooks/revalidate';

/** Hero and closing of /case-studies. The cards themselves are in Content → Case studies. */
export const CaseStudiesPage: GlobalConfig = {
  slug: 'case-studies-page',
  label: 'Case studies page',
  versions: { drafts: true, max: 20 },
  admin: {
    group: 'Pages',
    description: 'The hero and closing of /case-studies. The cards are managed in Content → Case studies.',
    preview: () => '/case-studies',
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
            mediaField('video', { label: 'Background video', accept: 'video' }),
            {
              type: 'row',
              fields: [
                { name: 'kicker', label: 'Small label above', type: 'text', admin: { width: '25%' } },
                { name: 'title', type: 'text', required: true, admin: { width: '45%' } },
                { name: 'titleAccent', label: 'Italic ending', type: 'text', admin: { width: '30%' } },
              ],
            },
            { name: 'lede', label: 'Line under the title', type: 'textarea' },
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
