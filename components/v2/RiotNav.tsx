import { getSettings } from '@/lib/cms';

import RiotNavMenu from './RiotNavMenu';

/** Site navigation, with contact details from Site settings. */
export default async function RiotNav() {
  const settings = await getSettings();
  return <RiotNavMenu email={settings.email} socials={(settings.socials ?? []).map((s) => ({ name: s.name, url: s.url }))} />;
}
