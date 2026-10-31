import type { GlobalConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { mediaField } from '../fields/media';
import { revalidateAfterChange } from '../hooks/revalidate';

/** Contact details, social links and search defaults used across the whole site. */
export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Site settings',
  admin: {
    group: 'Settings',
    description: 'Contact details and links shown in the menu, footer and contact section on every page.',
  },
  access: { read: isLoggedIn, update: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contact',
          fields: [
            { name: 'email', type: 'email', required: true },
            {
              type: 'row',
              fields: [
                { name: 'phone', label: 'Phone (as shown)', type: 'text', required: true, admin: { width: '50%', placeholder: '092745 12086' } },
                {
                  name: 'phoneLink',
                  label: 'Phone (for calling)',
                  type: 'text',
                  required: true,
                  admin: { width: '50%', placeholder: '+919274512086', description: 'Country code, no spaces.' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'addressLine1', label: 'Address line 1', type: 'text', admin: { width: '50%' } },
                { name: 'addressLine2', label: 'Address line 2', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              name: 'socials',
              label: 'Social links',
              type: 'array',
              labels: { singular: 'Link', plural: 'Links' },
              admin: { components: { RowLabel: '/payload/admin/RowLabel#TitleRowLabel' } },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'name', label: 'Name', type: 'text', required: true, admin: { width: '30%', placeholder: 'Instagram' } },
                    { name: 'url', type: 'text', required: true, admin: { width: '70%' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            { name: 'footerBlurb', label: 'Line under the logo', type: 'textarea' },
            { name: 'copyright', type: 'text', admin: { placeholder: '© 2026 Marca Creatives. All rights reserved.' } },
          ],
        },
        {
          label: 'Search & sharing',
          fields: [
            { name: 'seoTitle', label: 'Default page title', type: 'text' },
            { name: 'seoDescription', label: 'Default description', type: 'textarea' },
            mediaField('shareImage', { label: 'Image shown when the site is shared', accept: 'image' }),
          ],
        },
      ],
    },
  ],
};
