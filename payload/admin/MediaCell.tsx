'use client';

import { DefaultCell } from '@payloadcms/ui';
import type { DefaultCellComponentProps } from 'payload';
import { useState } from 'react';

import { thumbUrl, type MediaDoc } from '@/lib/media';

/** Title column of the media list: a thumbnail next to the name. */
export function MediaCell(props: DefaultCellComponentProps) {
  const row = props.rowData as unknown as MediaDoc;
  const thumb = thumbUrl(row, 112, 76);
  const [broken, setBroken] = useState(false);
  const isVideo = row.resourceType === 'video';

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
      <DefaultCell {...props} />
    </div>
  );
}
