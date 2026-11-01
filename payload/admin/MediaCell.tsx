'use client';

import { DefaultCell, useListDrawerContext } from '@payloadcms/ui';
import type { CollectionSlug, DefaultCellComponentProps } from 'payload';
import { useState } from 'react';

import { thumbUrl, type MediaDoc } from '@/lib/media';

/**
 * Title column of the media list: a thumbnail next to the name.
 *
 * Inside a picker drawer the row must select the file rather than open it.
 * Payload only wires that up for its own default cell, so this does the same.
 */
export function MediaCell(props: DefaultCellComponentProps) {
  const row = props.rowData as unknown as MediaDoc & { id: string };
  const thumb = thumbUrl(row, 112, 76);
  const [broken, setBroken] = useState(false);
  const isVideo = row.resourceType === 'video';
  const { drawerSlug, onSelect } = useListDrawerContext();
  const inDrawer = Boolean(drawerSlug) && typeof onSelect === 'function';

  const cellProps = inDrawer
    ? {
        ...props,
        link: false,
        onClick: ({ collectionSlug, rowData }: { collectionSlug: string; rowData: Record<string, unknown> }) =>
          onSelect?.({ collectionSlug: collectionSlug as CollectionSlug, doc: rowData, docID: String(rowData.id) }),
      }
    : props;

  return (
    <div className="mc-cell">
      <span
        className={`mc-cell__thumb${isVideo && !broken ? ' is-video' : ''}${broken ? ' is-broken' : ''}`}
        title={broken ? 'Preview unavailable — this file may no longer exist at its link.' : undefined}
      >
        {thumb && !broken ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt="" loading="lazy" onError={() => setBroken(true)} />
        ) : (
          <span>{broken ? 'N/A' : isVideo ? '▶' : '—'}</span>
        )}
      </span>
      <DefaultCell {...(cellProps as DefaultCellComponentProps)} />
    </div>
  );
}
