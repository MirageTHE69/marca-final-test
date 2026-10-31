import type { CollectionConfig } from 'payload';
import { Forbidden } from 'payload';

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
    group: 'Inbox',
    components: { beforeListTable: ['/payload/admin/LeadsToolbar#LeadsToolbar'] },
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
      admin: { position: 'sidebar', components: { Cell: '/payload/admin/StatusCell#StatusCell' } },
    },
    {
      name: 'source',
      label: 'Sent from',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true, description: 'The form the lead came from.' },
    },
  ],
  endpoints: [
    {
      // Every lead as a spreadsheet (CSV), newest first.
      path: '/export',
      method: 'get',
      handler: async (req) => {
        if (!req.user) throw new Forbidden(req.t);
        const { docs } = await req.payload.find({ collection: 'leads', sort: '-createdAt', pagination: false, depth: 0, req });
        const cols = ['createdAt', 'status', 'name', 'email', 'phone', 'brand', 'service', 'message', 'notes', 'source'] as const;
        const cell = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
        const csv = [cols.join(','), ...docs.map((d) => cols.map((c) => cell(d[c])).join(','))].join('\r\n');
        const day = new Date().toISOString().slice(0, 10);
        // The byte-order mark makes Excel read the file as UTF-8.
        return new Response('﻿' + csv, {
          headers: {
            'Content-Type': 'text/csv; charset=utf-8',
            'Content-Disposition': `attachment; filename="marca-leads-${day}.csv"`,
          },
        });
      },
    },
  ],
};
