import type { Metadata } from 'next';
import RiotLanding from '@/components/v2/RiotLanding';

export const metadata: Metadata = {
  title: 'MARCA Creatives — v2',
  description: 'The Marca Creatives landing page in its Riot theme — now also the live homepage.',
};

/** Kept so existing /v2 links still resolve; same page as `/`. */
export default function V2Page() {
  return <RiotLanding />;
}
