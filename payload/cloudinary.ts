import { v2 as cloudinary } from 'cloudinary';

let configured = false;

/** Server-only Cloudinary client, configured from the environment. */
export function getCloudinary() {
  if (!configured) {
    const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      throw new Error('Cloudinary is not configured: set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET');
    }
    cloudinary.config({ cloud_name: CLOUDINARY_CLOUD_NAME, api_key: CLOUDINARY_API_KEY, api_secret: CLOUDINARY_API_SECRET, secure: true });
    configured = true;
  }
  return cloudinary;
}

export type CloudinaryAsset = {
  public_id: string;
  resource_type: 'image' | 'video' | string;
  format?: string;
  version: number;
  width?: number;
  height?: number;
  bytes?: number;
  duration?: number;
  asset_folder?: string;
  display_name?: string;
  original_filename?: string;
  secure_url: string;
};

/** Demo files every Cloudinary account starts with; never part of the site. */
export const isCloudinaryDemo = (a: Pick<CloudinaryAsset, 'public_id'>) =>
  /^(sample|main-sample|cld-sample(-\d+)?)$|^samples\//.test(a.public_id);

/** A clean delivery URL (no transformations) for an asset. */
export const cleanUrl = (a: Pick<CloudinaryAsset, 'secure_url'>) => a.secure_url;

/** Media document fields for a Cloudinary asset. */
export function mediaDataFromAsset(a: CloudinaryAsset) {
  const name = a.display_name || a.original_filename || a.public_id.split('/').pop() || a.public_id;
  return {
    title: name.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim(),
    provider: 'cloudinary' as const,
    url: cleanUrl(a),
    publicId: a.public_id,
    resourceType: (a.resource_type === 'video' ? 'video' : 'image') as 'image' | 'video',
    format: a.format,
    width: a.width,
    height: a.height,
    bytes: a.bytes,
    duration: a.duration ? Math.round(a.duration * 10) / 10 : undefined,
    folder: a.asset_folder || '',
  };
}
