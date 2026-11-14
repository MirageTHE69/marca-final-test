'use client';

import { Button, useConfig } from '@payloadcms/ui';

/** How to work the list, and a spreadsheet download. */
export function ApplicationsToolbar() {
  const { config } = useConfig();
  return (
    <div className="mc-toolbar">
      <p>Open a CV from the list. Move people along: New → Reviewing → Shortlisted → Interview → Offer → Hired (or Not a fit).</p>
      <Button el="anchor" url={`${config.serverURL ?? ''}${config.routes.api}/applications/export`} buttonStyle="secondary" size="small">
        Download as spreadsheet (CSV)
      </Button>
    </div>
  );
}
