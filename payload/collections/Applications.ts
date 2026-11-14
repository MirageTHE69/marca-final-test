import type { CollectionConfig, Endpoint } from 'payload';
import { Forbidden, NotFound } from 'payload';

import { EXPERIENCE_LEVELS } from '../../lib/careers';
import { getCloudinary } from '../cloudinary';
import { isLoggedIn } from '../access/isLoggedIn';

export const APPLICATION_STATUSES = [
  { label: 'New', value: 'new' },
  { label: 'Reviewing', value: 'reviewing' },
  { label: 'Shortlisted', value: 'shortlisted' },
  { label: 'Interview', value: 'interview' },
  { label: 'Offer', value: 'offer' },
  { label: 'Hired', value: 'hired' },
  { label: 'Not a fit', value: 'rejected' },
] as const;

/** CVs: what we accept, and the first bytes each kind of file starts with. */
const MAX_CV_BYTES = 4 * 1024 * 1024;
const CV_KINDS = [
  { ext: 'pdf', magic: [0x25, 0x50, 0x44, 0x46] }, // %PDF
  { ext: 'docx', magic: [0x50, 0x4b, 0x03, 0x04] }, // zip
  { ext: 'doc', magic: [0xd0, 0xcf, 0x11, 0xe0] }, // old Word
] as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 3000;
const json = (body: unknown, status = 200) => Response.json(body, { status });
const text = (data: FormData, key: string, max: number) => String(data.get(key) ?? '').trim().slice(0, max);
const url = (v: string) => {
  if (!v) return undefined;
  const withScheme = /^https?:\/\//i.test(v) ? v : `https://${v}`;
  try {
    return new URL(withScheme).toString().slice(0, 400);
  } catch {
    return undefined;
  }
};

/**
 * The public application form posts here (multipart). The CV goes to
 * Cloudinary as a private file — it has no public link; staff open it through
 * the download endpoint below, which needs an admin login.
 */
const apply: Endpoint = {
  path: '/apply',
  method: 'post',
  handler: async (req) => {
    let data: FormData;
    try {
      data = await req.formData!();
    } catch {
      return json({ ok: false, error: 'Please try sending the form again.' }, 400);
    }

    // Spam traps: a hidden field and a minimum fill time. Bots get a normal-looking reply.
    const openedAt = Number(data.get('openedAt'));
    if (text(data, 'website', 200) || !openedAt || Date.now() - openedAt < MIN_FILL_MS) return json({ ok: true });

    const name = text(data, 'name', 120);
    const email = text(data, 'email', 200).toLowerCase();
    const phone = text(data, 'phone', 40);
    if (!name) return json({ ok: false, error: 'Please add your name.' }, 400);
    if (!EMAIL.test(email)) return json({ ok: false, error: 'Please add a valid email address.' }, 400);
    if (!phone) return json({ ok: false, error: 'Please add a phone number.' }, 400);

    // The role, if one was chosen and it is still open.
    const jobId = text(data, 'job', 60);
    let job: string | undefined;
    if (jobId) {
      const found = await req.payload
        .findByID({ collection: 'jobs', id: jobId, depth: 0, overrideAccess: true, disableErrors: true })
        .catch(() => null);
      if (!found || found._status !== 'published') return json({ ok: false, error: 'This role is no longer listed.' }, 400);
      if (found.status !== 'open') return json({ ok: false, error: 'Sorry — this role has just closed.' }, 400);
      job = String(found.id);
    }

    // The CV.
    const file = data.get('resume');
    if (!(file instanceof File) || file.size === 0) return json({ ok: false, error: 'Please attach your CV.' }, 400);
    if (file.size > MAX_CV_BYTES) return json({ ok: false, error: 'Your CV is over 4 MB — please send a smaller file.' }, 400);
    const bytes = new Uint8Array(await file.arrayBuffer());
    const kind = CV_KINDS.find((k) => k.magic.every((b, i) => bytes[i] === b));
    if (!kind) return json({ ok: false, error: 'Please attach your CV as a PDF or Word file.' }, 400);

    let resume: { publicId: string; fileName: string; bytes: number; format: string };
    try {
      const cloudinary = getCloudinary();
      const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'applicant';
      const uploaded = await new Promise<{ public_id: string; bytes: number }>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'raw',
            type: 'private',
            folder: 'marca/applications',
            public_id: `${safeName}-${Date.now().toString(36)}.${kind.ext}`,
            overwrite: false,
          },
          (err, res) => (err || !res ? reject(err) : resolve(res as unknown as { public_id: string; bytes: number })),
        );
        stream.end(Buffer.from(bytes));
      });
      resume = {
        publicId: uploaded.public_id,
        fileName: (file.name || `cv.${kind.ext}`).slice(0, 160),
        bytes: uploaded.bytes,
        format: kind.ext,
      };
    } catch (err) {
      req.payload.logger.error({ err }, 'CV upload failed');
      return json({ ok: false, error: 'Your CV could not be uploaded. Please try again.' }, 500);
    }

    const experience = text(data, 'experience', 20);
    const referer = req.headers.get('referer');
    try {
      await req.payload.create({
        collection: 'applications',
        overrideAccess: true,
        data: {
          job,
          name,
          email,
          phone,
          city: text(data, 'city', 80) || undefined,
          experience: EXPERIENCE_LEVELS.some((e) => e.value === experience) ? (experience as (typeof EXPERIENCE_LEVELS)[number]['value']) : undefined,
          portfolio: url(text(data, 'portfolio', 400)),
          linkedin: url(text(data, 'linkedin', 400)),
          noticePeriod: text(data, 'noticePeriod', 60) || undefined,
          message: text(data, 'message', 4000) || undefined,
          resume,
          status: 'new',
          source: referer ? new URL(referer).pathname : undefined,
        },
      });
    } catch (err) {
      req.payload.logger.error({ err }, 'Application could not be saved');
      return json({ ok: false, error: 'Something went wrong sending your application. Please try again.' }, 500);
    }
    return json({ ok: true });
  },
};

/** Staff only: a short-lived link to the applicant's CV. */
const downloadResume: Endpoint = {
  path: '/:id/resume',
  method: 'get',
  handler: async (req) => {
    if (!req.user) throw new Forbidden(req.t);
    const id = String(req.routeParams?.id ?? '');
    const doc = await req.payload.findByID({ collection: 'applications', id, depth: 0, req }).catch(() => null);
    const publicId = doc?.resume?.publicId;
    if (!publicId) throw new NotFound(req.t);
    const link = getCloudinary().utils.private_download_url(publicId, '', {
      resource_type: 'raw',
      type: 'private',
      expires_at: Math.floor(Date.now() / 1000) + 10 * 60,
    });
    return Response.redirect(link, 302);
  },
};

/** Every application as a spreadsheet (CSV), newest first. */
const exportCsv: Endpoint = {
  path: '/export',
  method: 'get',
  handler: async (req) => {
    if (!req.user) throw new Forbidden(req.t);
    const { docs } = await req.payload.find({ collection: 'applications', sort: '-createdAt', pagination: false, depth: 1, req });
    const cols = ['createdAt', 'status', 'role', 'name', 'email', 'phone', 'city', 'experience', 'noticePeriod', 'portfolio', 'linkedin', 'message', 'notes'] as const;
    const cell = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const rows = docs.map((d) => {
      const role = d.job && typeof d.job === 'object' ? d.job.title : 'General application';
      const values: Record<(typeof cols)[number], unknown> = { ...d, role } as never;
      return cols.map((c) => cell(values[c])).join(',');
    });
    const day = new Date().toISOString().slice(0, 10);
    return new Response('﻿' + [cols.join(','), ...rows].join('\r\n'), {
      headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="marca-applications-${day}.csv"` },
    });
  },
};

/**
 * People applying through the Careers page. Only the site's apply endpoint
 * creates them; nobody outside the panel can read them.
 */
export const Applications: CollectionConfig = {
  slug: 'applications',
  labels: { singular: 'Application', plural: 'Applications' },
  defaultSort: '-createdAt',
  admin: {
    useAsTitle: 'name',
    group: 'Careers',
    defaultColumns: ['name', 'job', 'experience', 'resume', 'status', 'createdAt'],
    listSearchableFields: ['name', 'email', 'phone', 'city'],
    description: 'Everyone who applied through the Careers page. Open the CV, add notes, and move each applicant along by status.',
    components: { beforeListTable: ['/payload/admin/ApplicationsToolbar#ApplicationsToolbar'] },
  },
  access: { create: isLoggedIn, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: {
    // Remove the CV file from Cloudinary with the application.
    afterDelete: [
      async ({ doc, req }) => {
        const publicId = doc?.resume?.publicId;
        if (!publicId) return;
        try {
          await getCloudinary().uploader.destroy(publicId, { resource_type: 'raw', type: 'private', invalidate: true });
        } catch (err) {
          req.payload.logger.warn({ err }, 'Could not delete CV file');
        }
      },
    ],
  },
  endpoints: [apply, downloadResume, exportCsv],
  fields: [
    {
      name: 'job',
      label: 'Role',
      type: 'relationship',
      relationTo: 'jobs',
      admin: { description: 'Empty for a general application.' },
    },
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
        { name: 'phone', type: 'text', admin: { width: '34%' } },
        { name: 'city', type: 'text', admin: { width: '33%' } },
        { name: 'experience', type: 'select', options: [...EXPERIENCE_LEVELS], admin: { width: '33%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'portfolio', label: 'Portfolio / showreel', type: 'text', admin: { width: '50%' } },
        { name: 'linkedin', label: 'LinkedIn', type: 'text', admin: { width: '50%' } },
      ],
    },
    { name: 'noticePeriod', label: 'Can start', type: 'text' },
    { name: 'message', label: 'Note from the applicant', type: 'textarea' },
    {
      name: 'resume',
      label: 'CV',
      type: 'group',
      admin: { components: { Cell: '/payload/admin/ResumeLink#ResumeCell' } },
      fields: [
        { name: 'open', type: 'ui', admin: { components: { Field: '/payload/admin/ResumeLink#ResumeField' } } },
        { name: 'publicId', type: 'text', admin: { hidden: true } },
        { name: 'fileName', type: 'text', admin: { hidden: true } },
        { name: 'bytes', type: 'number', admin: { hidden: true } },
        { name: 'format', type: 'text', admin: { hidden: true } },
      ],
    },
    {
      name: 'notes',
      label: 'Internal notes',
      type: 'textarea',
      admin: { description: 'Only visible here — interview notes, test task, next steps.' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [...APPLICATION_STATUSES],
      admin: { position: 'sidebar', components: { Cell: '/payload/admin/StatusCell#ApplicationStatusCell' } },
    },
    {
      name: 'source',
      label: 'Sent from',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
};
