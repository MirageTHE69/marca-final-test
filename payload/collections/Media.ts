import type { CollectionConfig, PayloadRequest } from 'payload';
import { Forbidden } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';
import { getCloudinary, isCloudinaryDemo, mediaDataFromAsset, type CloudinaryAsset } from '../cloudinary';
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate';

const requireUser = (req: PayloadRequest) => {
  if (!req.user) throw new Forbidden(req.t);
};

/**
 * The media library. Files live in Cloudinary: the browser uploads straight
 * to Cloudinary (so large videos never pass through the website's server),
 * and this collection keeps each file's link, type and size for picking.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media library' },
  defaultSort: '-createdAt',
  admin: {
    useAsTitle: 'title',
    group: 'Library',
    defaultColumns: ['title', 'resourceType', 'folder', 'updatedAt'],
    listSearchableFields: ['title', 'alt', 'folder', 'publicId'],
    description: 'Every image and video on the website. Files are stored in your Cloudinary account.',
    components: { beforeListTable: ['/payload/admin/MediaSyncButton#MediaSyncButton'] },
  },
  access: { create: isLoggedIn, read: isLoggedIn, update: isLoggedIn, delete: isLoggedIn },
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  fields: [
    {
      name: 'uploader',
      type: 'ui',
      admin: { components: { Field: '/payload/admin/CloudinaryUploader#CloudinaryUploader' } },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: { width: '50%', components: { Cell: '/payload/admin/MediaCell#MediaCell' } },
        },
        {
          name: 'alt',
          label: 'Alt text',
          type: 'text',
          admin: { width: '50%', description: 'Describes the image for screen readers and Google.' },
        },
      ],
    },
    {
      name: 'focus',
      label: 'Crop focus',
      type: 'select',
      defaultValue: 'auto',
      options: [
        { label: 'Automatic (finds the subject)', value: 'auto' },
        { label: 'Top (keeps faces in frame)', value: 'north' },
        { label: 'Centre', value: 'center' },
        { label: 'Bottom', value: 'south' },
      ],
      admin: { description: 'Which part stays visible when a frame crops the image.' },
    },
    {
      type: 'collapsible',
      label: 'File details',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'url',
          label: 'File URL',
          type: 'text',
          required: true,
          admin: { readOnly: true },
          validate: (value: unknown) => (typeof value === 'string' && value ? true : 'Upload a file first.'),
        },
        {
          type: 'row',
          fields: [
            {
              name: 'resourceType',
              label: 'Type',
              type: 'select',
              options: [
                { label: 'Image', value: 'image' },
                { label: 'Video', value: 'video' },
              ],
              admin: { readOnly: true, width: '33%' },
            },
            { name: 'format', type: 'text', admin: { readOnly: true, width: '33%' } },
            { name: 'folder', label: 'Cloudinary folder', type: 'text', admin: { readOnly: true, width: '33%' } },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'width', type: 'number', admin: { readOnly: true, width: '25%' } },
            { name: 'height', type: 'number', admin: { readOnly: true, width: '25%' } },
            { name: 'bytes', label: 'Size (bytes)', type: 'number', admin: { readOnly: true, width: '25%' } },
            { name: 'duration', label: 'Length (s)', type: 'number', admin: { readOnly: true, width: '25%' } },
          ],
        },
        { name: 'publicId', label: 'Cloudinary ID', type: 'text', index: true, admin: { readOnly: true } },
        {
          name: 'provider',
          type: 'select',
          defaultValue: 'cloudinary',
          options: [
            { label: 'Cloudinary', value: 'cloudinary' },
            { label: 'External link', value: 'external' },
          ],
          admin: { readOnly: true },
        },
      ],
    },
  ],
  endpoints: [
    {
      // Signs a browser upload so the file can go straight to Cloudinary.
      path: '/sign',
      method: 'post',
      handler: async (req) => {
        requireUser(req);
        const body = (req.json ? await req.json() : {}) as { folder?: string };
        const folder = String(body.folder || 'uploads').trim().slice(0, 100) || 'uploads';
        const cloudinary = getCloudinary();
        const params = { asset_folder: folder, timestamp: Math.round(Date.now() / 1000), unique_filename: true, use_filename: true };
        const signature = cloudinary.utils.api_sign_request(params, process.env.CLOUDINARY_API_SECRET as string);
        return Response.json({
          ...params,
          signature,
          apiKey: process.env.CLOUDINARY_API_KEY,
          cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        });
      },
    },
    {
      // Adds every Cloudinary file that isn't in the library yet.
      path: '/sync',
      method: 'post',
      handler: async (req) => {
        requireUser(req);
        const result = await syncCloudinary(req);
        return Response.json(result);
      },
    },
  ],
};

/** Lists every file in Cloudinary and creates library entries for new ones. */
export async function syncCloudinary(req: PayloadRequest) {
  const cloudinary = getCloudinary();
  const assets: CloudinaryAsset[] = [];
  for (const resource_type of ['image', 'video'] as const) {
    let next_cursor: string | undefined;
    do {
      const page = await cloudinary.api.resources({ resource_type, type: 'upload', max_results: 500, next_cursor });
      assets.push(...(page.resources as CloudinaryAsset[]));
      next_cursor = page.next_cursor;
    } while (next_cursor);
  }
  const existing = await req.payload.find({
    collection: 'media',
    where: { publicId: { exists: true } },
    pagination: false,
    depth: 0,
    req,
  });
  const known = new Set(existing.docs.map((d) => d.publicId));
  let added = 0;
  for (const asset of assets) {
    if (known.has(asset.public_id) || isCloudinaryDemo(asset)) continue;
    await req.payload.create({ collection: 'media', data: mediaDataFromAsset(asset), req });
    known.add(asset.public_id);
    added += 1;
  }
  return { added, total: assets.length };
}
