'use client';

import { useConfig, useRowLabel } from '@payloadcms/ui';
import { useEffect, useState } from 'react';

import { thumbUrl, type MediaDoc } from '@/lib/media';

/** Row labels so collapsed list items read as their content, not "Item 03". */

const nth = (n?: number) => String((n ?? 0) + 1).padStart(2, '0');

export function StatRowLabel() {
  const { data, rowNumber } = useRowLabel<{ value?: string; label?: string }>();
  if (!data?.label) return <span>Number {nth(rowNumber)}</span>;
  return <span>{data.value ? `${data.value} · ${data.label}` : data.label}</span>;
}

export function QuoteRowLabel() {
  const { data, rowNumber } = useRowLabel<{ name?: string; role?: string }>();
  return <span>{data?.name ? `${data.name}${data.role ? ` · ${data.role}` : ''}` : `Testimonial ${nth(rowNumber)}`}</span>;
}

/** One request per file, shared by every row that shows it. */
const cache = new Map<string, Promise<MediaDoc | null>>();
const loadMedia = (api: string, id: string) => {
  if (!cache.has(id)) {
    cache.set(
      id,
      fetch(`${api}/media/${id}?depth=0`, { credentials: 'include' })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null),
    );
  }
  return cache.get(id)!;
};

type Row = {
  title?: string;
  name?: string;
  question?: string;
  text?: string;
  caption?: string;
  subtitle?: string;
  category?: string;
  video?: string | { id: string };
  image?: string | { id: string };
};

/**
 * Title of a list row, with a thumbnail when the row has a video or image —
 * so a collapsed list of reels or slides is recognisable at a glance.
 */
export function TitleRowLabel() {
  const { config } = useConfig();
  const api = `${config.serverURL ?? ''}${config.routes.api}`;
  const { data, rowNumber } = useRowLabel<Row>();
  const ref = data?.video ?? data?.image;
  const id = typeof ref === 'object' ? ref?.id : ref;
  const [media, setMedia] = useState<{ id: string; doc: MediaDoc | null } | null>(null);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    if (!id) return;
    let live = true;
    void loadMedia(api, id).then((doc) => live && setMedia({ id, doc }));
    return () => {
      live = false;
    };
  }, [api, id]);

  const text = data?.title || data?.name || data?.question || data?.text || data?.caption || (media?.id === id ? media?.doc?.title : '') || `Item ${nth(rowNumber)}`;
  const sub = data?.subtitle || data?.category;
  const doc = media?.id === id ? media?.doc : null;
  const thumb = thumbUrl(doc, 104, 68);

  return (
    <span className="mc-row">
      {id && (
        <span className="mc-row__thumb">
          {thumb && !broken ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt="" loading="lazy" onError={() => setBroken(true)} />
          ) : (
            <span>{doc?.resourceType === 'video' ? '▶' : '…'}</span>
          )}
        </span>
      )}
      <span className="mc-row__text">
        {text}
        {sub && <span className="mc-row__sub">{sub}</span>}
      </span>
    </span>
  );
}
