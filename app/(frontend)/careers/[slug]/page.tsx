import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import RiotJobView from '@/components/v2/careers/RiotJobView';
import { getJob, getOpenJobs, getSettings } from '@/lib/cms';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const jobs = await getOpenJobs();
  return jobs.filter((j) => j.slug).map((j) => ({ slug: j.slug as string }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const job = await getJob((await params).slug);
  if (!job) return {};
  const title = `${job.title} — Careers at Marca Creatives`;
  const description = job.summary || `${job.title} at MARCA Creatives, ${job.location}.`;
  return { title, description, openGraph: { title, description } };
}

/** One role on /careers/[slug]. */
export default async function JobPage({ params }: Params) {
  const { slug } = await params;
  const [job, site] = await Promise.all([getJob(slug), getSettings()]);
  if (!job) notFound();
  return <RiotJobView job={job} email={site.email} />;
}
