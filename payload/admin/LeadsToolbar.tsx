'use client';

import { Button, useConfig } from '@payloadcms/ui';

/** Download every lead as a spreadsheet. */
export function LeadsToolbar() {
  const { config } = useConfig();
  return (
    <div className="mc-toolbar">
      <p>Change a lead&apos;s status as you work it: New → Contacted → Qualified → Won or Lost.</p>
      <Button el="anchor" url={`${config.serverURL ?? ''}${config.routes.api}/leads/export`} buttonStyle="secondary" size="small">
        Download as spreadsheet (CSV)
      </Button>
    </div>
  );
}
