'use client';

import { Button, toast, useConfig } from '@payloadcms/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/** Pulls in files that were uploaded in Cloudinary directly. */
export function MediaSyncButton() {
  const { config } = useConfig();
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function sync() {
    setBusy(true);
    try {
      const res = await fetch(`${config.serverURL ?? ''}${config.routes.api}/media/sync`, { method: 'POST', credentials: 'include' });
      if (!res.ok) throw new Error('Sync failed.');
      const { added, total } = (await res.json()) as { added: number; total: number };
      toast.success(added ? `Added ${added} new file${added === 1 ? '' : 's'} from Cloudinary.` : `Up to date: all ${total} Cloudinary files are in the library.`);
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Sync failed.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mc-toolbar">
      <p>
        Uploaded something in Cloudinary directly? Bring it into the library so you can use it on the site.
      </p>
      <Button buttonStyle="secondary" size="small" disabled={busy} onClick={sync}>
        {busy ? 'Syncing…' : 'Sync from Cloudinary'}
      </Button>
    </div>
  );
}
