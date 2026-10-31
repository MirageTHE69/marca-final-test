'use client';

import { FieldDescription, FieldError, FieldLabel, useConfig, useDocumentDrawer, useField, useListDrawer } from '@payloadcms/ui';
import type { RelationshipFieldClientProps } from 'payload';
import { useEffect, useState } from 'react';

import { thumbUrl, type MediaDoc } from '@/lib/media';

type Props = RelationshipFieldClientProps & { accept?: 'image' | 'video' };

type Value = string | { id: string } | null | undefined;
const idOf = (v: Value) => (v && typeof v === 'object' ? v.id : v) || null;

/** Picks one file from the media library, showing what is picked. */
export function MediaPicker({ path, field, accept, readOnly }: Props) {
  const { config } = useConfig();
  const api = `${config.serverURL ?? ''}${config.routes.api}`;
  const { value, setValue, showError, errorMessage } = useField<Value>({ path });
  const id = idOf(value);
  const [doc, setDoc] = useState<(MediaDoc & { id: string }) | null>(null);

  useEffect(() => {
    if (!id) return;
    let live = true;
    fetch(`${api}/media/${id}?depth=0`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => live && setDoc(d))
      .catch(() => live && setDoc(null));
    return () => {
      live = false;
    };
  }, [api, id]);

  const shown = id && doc?.id === id ? doc : null;

  const [ListDrawer, , list] = useListDrawer({
    collectionSlugs: ['media'],
    filterOptions: accept ? { media: { resourceType: { equals: accept } } } : undefined,
  });
  const [CreateDrawer, , create] = useDocumentDrawer({ collectionSlug: 'media' });

  const label = typeof field?.label === 'string' ? field.label : field?.name;
  const thumb = thumbUrl(shown, 320, 200);
  const noun = accept === 'video' ? 'video' : accept === 'image' ? 'image' : 'file';

  return (
    <div className={`field-type mc-picker${showError ? ' error' : ''}`}>
      <FieldLabel label={label} path={path} required={field?.required} />
      <div className="mc-picker__box">
        {id ? (
          <div className="mc-picker__chosen">
            <span className={`mc-picker__thumb${shown?.resourceType === 'video' ? ' is-video' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {thumb ? <img src={thumb} alt="" /> : <span>{shown ? '▶' : '…'}</span>}
            </span>
            <span className="mc-picker__info">
              <strong>{shown?.title ?? 'Loading…'}</strong>
              {shown && (
                <span>
                  {shown.resourceType === 'video' ? 'Video' : 'Image'}
                  {shown.width && shown.height ? ` · ${shown.width} × ${shown.height}` : ''}
                </span>
              )}
            </span>
            {!readOnly && (
              <span className="mc-picker__actions">
                <button type="button" className="mc-btn" onClick={list.openDrawer}>Change</button>
                <button type="button" className="mc-btn mc-btn--ghost" onClick={() => setValue(null)}>Remove</button>
              </span>
            )}
          </div>
        ) : (
          <div className="mc-picker__empty">
            <span>No {noun} chosen</span>
            {!readOnly && (
              <span className="mc-picker__actions">
                <button type="button" className="mc-btn" onClick={list.openDrawer}>Choose from library</button>
                <button type="button" className="mc-btn mc-btn--ghost" onClick={create.openDrawer}>Upload new</button>
              </span>
            )}
          </div>
        )}
      </div>
      {showError && <FieldError message={errorMessage} path={path} showError />}
      {field?.admin?.description ? <FieldDescription description={field.admin.description} path={path} /> : null}

      <ListDrawer
        onSelect={({ doc: picked }) => {
          setValue(String(picked.id));
          list.closeDrawer();
        }}
      />
      <CreateDrawer
        onSave={({ doc: saved }) => {
          setValue(String(saved.id));
          create.closeDrawer();
        }}
      />
    </div>
  );
}
