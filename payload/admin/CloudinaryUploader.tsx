'use client';

import { toast, useConfig, useField } from '@payloadcms/ui';
import { useRef, useState, type DragEvent } from 'react';

import { imageUrl, type MediaDoc } from '@/lib/media';

const FOLDERS = ['uploads', 'INSTAGRAM REELS', 'YOUTUBE LONG VIDEOS', 'PORTFOLIO', 'casestudy', 'profiles_images', 'Thumbnails', 'blog'];

type SignResponse = {
  asset_folder: string;
  timestamp: number;
  unique_filename: boolean;
  use_filename: boolean;
  signature: string;
  apiKey: string;
  cloudName: string;
};

type CloudinaryResult = {
  public_id: string;
  secure_url: string;
  resource_type: string;
  format?: string;
  width?: number;
  height?: number;
  bytes?: number;
  duration?: number;
  asset_folder?: string;
  original_filename?: string;
  display_name?: string;
};

const formatBytes = (n?: number | null) =>
  !n ? '' : n > 1e6 ? `${(n / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1e3))} KB`;

/** Upload box at the top of a media entry: drop a file, it goes straight to Cloudinary. */
export function CloudinaryUploader() {
  const { config } = useConfig();
  const api = `${config.serverURL ?? ''}${config.routes.api}`;

  const url = useField<string>({ path: 'url' });
  const title = useField<string>({ path: 'title' });
  const resourceType = useField<'image' | 'video'>({ path: 'resourceType' });
  const format = useField<string>({ path: 'format' });
  const width = useField<number>({ path: 'width' });
  const height = useField<number>({ path: 'height' });
  const bytes = useField<number>({ path: 'bytes' });
  const duration = useField<number>({ path: 'duration' });
  const folder = useField<string>({ path: 'folder' });
  const publicId = useField<string>({ path: 'publicId' });
  const provider = useField<string>({ path: 'provider' });

  const [targetFolder, setTargetFolder] = useState(folder.value || 'uploads');
  const [progress, setProgress] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const doc: MediaDoc | null = url.value ? { url: url.value, resourceType: resourceType.value } : null;

  async function upload(file: File) {
    if (progress !== null) return;
    setProgress(0);
    try {
      const signRes = await fetch(`${api}/media/sign`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder: targetFolder }),
      });
      if (!signRes.ok) throw new Error('Could not start the upload. Are you still logged in?');
      const sign = (await signRes.json()) as SignResponse;

      const form = new FormData();
      form.append('file', file);
      form.append('api_key', sign.apiKey);
      form.append('timestamp', String(sign.timestamp));
      form.append('signature', sign.signature);
      form.append('asset_folder', sign.asset_folder);
      form.append('use_filename', String(sign.use_filename));
      form.append('unique_filename', String(sign.unique_filename));

      const result = await new Promise<CloudinaryResult>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${sign.cloudName}/auto/upload`);
        xhr.upload.onprogress = (e) => e.lengthComputable && setProgress(Math.round((e.loaded / e.total) * 100));
        xhr.onload = () => {
          const body = JSON.parse(xhr.responseText || '{}');
          if (xhr.status >= 200 && xhr.status < 300) resolve(body);
          else reject(new Error(body?.error?.message || `Upload failed (${xhr.status})`));
        };
        xhr.onerror = () => reject(new Error('Network error during upload.'));
        xhr.send(form);
      });

      url.setValue(result.secure_url);
      publicId.setValue(result.public_id);
      resourceType.setValue(result.resource_type === 'video' ? 'video' : 'image');
      format.setValue(result.format ?? '');
      width.setValue(result.width ?? null);
      height.setValue(result.height ?? null);
      bytes.setValue(result.bytes ?? null);
      duration.setValue(result.duration ? Math.round(result.duration * 10) / 10 : null);
      folder.setValue(result.asset_folder ?? targetFolder);
      provider.setValue('cloudinary');
      if (!title.value) {
        const name = result.display_name || result.original_filename || file.name.replace(/\.[^.]+$/, '');
        title.setValue(name.replace(/[_-]+/g, ' ').trim());
      }
      toast.success('Uploaded to Cloudinary. Press Save to add it to the library.');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setProgress(null);
    }
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void upload(file);
  };

  return (
    <div className="mc-uploader">
      {doc && (
        <div className="mc-uploader__preview">
          {doc.resourceType === 'video' ? (
            <video src={doc.url} controls muted playsInline preload="metadata" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl(doc, { width: 1200 })} alt="" />
          )}
          <div className="mc-uploader__meta">
            <span className="mc-pill">{doc.resourceType === 'video' ? 'Video' : 'Image'}</span>
            {width.value && height.value ? <span>{width.value} × {height.value}</span> : null}
            {format.value ? <span>{format.value.toUpperCase()}</span> : null}
            {bytes.value ? <span>{formatBytes(bytes.value)}</span> : null}
            {duration.value ? <span>{duration.value}s</span> : null}
            <a href={doc.url} target="_blank" rel="noreferrer">Open original ↗</a>
          </div>
        </div>
      )}

      <div
        className={`mc-drop${dragging ? ' is-dragging' : ''}${progress !== null ? ' is-busy' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => progress === null && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void upload(file);
            e.target.value = '';
          }}
        />
        {progress !== null ? (
          <>
            <strong>Uploading… {progress}%</strong>
            <span className="mc-progress">
              <span style={{ width: `${progress}%` }} />
            </span>
          </>
        ) : (
          <>
            <span className="mc-drop__icon" aria-hidden="true">↑</span>
            <strong>{doc ? 'Replace file' : 'Drop an image or video here'}</strong>
            <span>or click to choose · images up to 10 MB, videos up to 100 MB</span>
          </>
        )}
      </div>

      <label className="mc-folder" onClick={(e) => e.stopPropagation()}>
        <span>Save into Cloudinary folder</span>
        <input list="mc-folders" value={targetFolder} onChange={(e) => setTargetFolder(e.target.value)} />
        <datalist id="mc-folders">
          {FOLDERS.map((f) => (
            <option key={f} value={f} />
          ))}
        </datalist>
      </label>
    </div>
  );
}
