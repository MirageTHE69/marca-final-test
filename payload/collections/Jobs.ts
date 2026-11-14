import type { CollectionConfig } from 'payload';

import { JOB_DEPARTMENTS, JOB_MODES, JOB_TYPES } from '../../lib/careers';
import { isLoggedIn } from '../access/isLoggedIn';
import { slugField } from '../fields/shared';
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate';
import { richTextEditor } from '../richText';

const bulletList = (name: string, label: string, description: string) => ({
  name,
  label,
  type: 'array' as const,
  labels: { singular: 'Point', plural: 'Points' },
  admin: { description, initCollapsed: false },
  fields: [{ name: 'text', type: 'text' as const, required: true }],
});

/**
 * Open roles on /careers. Publish a job to list it; set it to "Closed" to
 * stop new applications while keeping it (and its applicants) on file.
 * Drag rows in the list to set the order on the page.
 */
export const Jobs: CollectionConfig = {
  slug: 'jobs',
  labels: { singular: 'Job', plural: 'Jobs' },
  orderable: true,
  versions: { drafts: true, maxPerDoc: 20 },
  admin: {
    useAsTitle: 'title',
    group: 'Careers',
    defaultColumns: ['title', 'department', 'employmentType', 'status', '_status', 'updatedAt'],
    listSearchableFields: ['title', 'location', 'summary'],
    description: 'Vacancies on the Careers page. Publish to list a role; set it to Closed to stop applications. Drag to reorder.',
    preview: (doc) => (doc?.slug ? `/careers/${doc.slug}` : '/careers'),
  },
  access: { create: isLoggedIn, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'The role',
          fields: [
            { name: 'title', label: 'Job title', type: 'text', required: true, admin: { placeholder: 'Video Editor' } },
            {
              type: 'row',
              fields: [
                { name: 'department', type: 'select', required: true, defaultValue: 'editing', options: [...JOB_DEPARTMENTS], admin: { width: '34%' } },
                { name: 'employmentType', label: 'Type', type: 'select', required: true, defaultValue: 'full-time', options: [...JOB_TYPES], admin: { width: '33%' } },
                { name: 'workMode', label: 'Where (optional)', type: 'select', options: [...JOB_MODES], admin: { width: '33%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'location', type: 'text', required: true, defaultValue: 'Ahmedabad', admin: { width: '34%' } },
                { name: 'experience', type: 'text', admin: { width: '33%', placeholder: '1–3 years' } },
                { name: 'salary', label: 'Pay (optional)', type: 'text', admin: { width: '33%', placeholder: '₹25k–40k / month' } },
              ],
            },
            {
              name: 'summary',
              type: 'textarea',
              admin: { description: 'One or two sentences shown on the Careers page list.' },
            },
          ],
        },
        {
          label: 'Details',
          fields: [
            {
              name: 'description',
              label: 'About the role',
              type: 'richText',
              editor: richTextEditor,
              admin: { description: 'The full write-up on the job page.' },
            },
            bulletList('responsibilities', 'What you will do', 'Short points, one per line.'),
            bulletList('requirements', 'What we are looking for', 'Must-haves.'),
            bulletList('niceToHave', 'Nice to have', 'Optional extras.'),
          ],
        },
        {
          label: 'Applications',
          fields: [
            {
              name: 'applications',
              type: 'join',
              collection: 'applications',
              on: 'job',
              admin: { defaultColumns: ['name', 'email', 'experience', 'status', 'createdAt'] },
            },
          ],
        },
      ],
    },
    slugField(),
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'open',
      options: [
        { label: 'Open — taking applications', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Closed roles leave the Careers list; their page says the role is closed.',
        components: { Cell: '/payload/admin/StatusCell#JobStatusCell' },
      },
    },
  ],
};
