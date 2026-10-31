import type { CollectionConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';

export const LEAD_SERVICES = [
  { label: 'Photoshoot', value: 'photoshoot' },
  { label: 'Ad Campaigns', value: 'ad-campaigns' },
  { label: 'Packaging & Creative Design', value: 'packaging-creative-design' },
  { label: 'Social Media & Content', value: 'social-media-content' },
  { label: 'Other', value: 'other' },
] as const;

export type LeadService = (typeof LEAD_SERVICES)[number]['value'];

/**
 * Enquiries from the website's forms. The site saves them through a server
 * action with access overridden, so nobody outside the panel can read, edit
 * or create leads through the API.
 */
export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: { singular: 'Lead', plural: 'Leads' },
  defaultSort: '-createdAt',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'service', 'status', 'createdAt'],
    listSearchableFields: ['name', 'email', 'phone', 'brand'],
    description: 'Every enquiry sent from the website. Move each one along by changing its status.',
  },
  access: {
    create: isLoggedIn,
    read: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'email', type: 'email', required: true, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'phone', type: 'text', admin: { width: '50%' } },
        { name: 'brand', label: 'Brand or company', type: 'text', admin: { width: '50%' } },
      ],
    },
    { name: 'service', type: 'select', options: [...LEAD_SERVICES] },
    { name: 'message', type: 'textarea' },
    {
      name: 'notes',
      label: 'Internal notes',
      type: 'textarea',
      admin: { description: 'Only visible here — calls made, quotes sent, next steps.' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Won', value: 'won' },
        { label: 'Lost', value: 'lost' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'source',
      label: 'Sent from',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true, description: 'The form the lead came from.' },
    },
  ],
};
