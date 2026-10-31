'use server';

import { headers } from 'next/headers';
import { getPayload } from 'payload';

import config from '@payload-config';
import { LEAD_SERVICES } from '@/payload/collections/Leads';

export type LeadResult = { ok: true } | { ok: false; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Forms submitted faster than this after opening are treated as bots. */
const MIN_FILL_MS = 2500;

const field = (data: FormData, key: string, max: number) => String(data.get(key) ?? '').trim().slice(0, max);

/** Saves a website enquiry to the admin panel's Leads list. */
export async function submitLead(data: FormData): Promise<LeadResult> {
  // Spam traps: a hidden field people never see, and a minimum fill time.
  // Bots get a normal-looking success so they don't learn to dodge them.
  const openedAt = Number(data.get('openedAt'));
  if (field(data, 'website', 200) || !openedAt || Date.now() - openedAt < MIN_FILL_MS) return { ok: true };

  const name = field(data, 'name', 120);
  const email = field(data, 'email', 200).toLowerCase();
  if (!name) return { ok: false, error: 'Please add your name.' };
  if (!EMAIL.test(email)) return { ok: false, error: 'Please add a valid email address.' };

  const service = field(data, 'service', 60);
  const knownService = LEAD_SERVICES.some((s) => s.value === service);

  const referer = (await headers()).get('referer');
  const page = referer ? new URL(referer).pathname : '';

  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: 'leads',
      overrideAccess: true,
      data: {
        name,
        email,
        phone: field(data, 'phone', 40) || undefined,
        brand: field(data, 'brand', 160) || undefined,
        service: knownService ? (service as (typeof LEAD_SERVICES)[number]['value']) : 'other',
        message: field(data, 'message', 4000) || undefined,
        source: [field(data, 'source', 80), page].filter(Boolean).join(' · '),
        status: 'new',
      },
    });
    return { ok: true };
  } catch (err) {
    console.error('Lead could not be saved', err);
    return { ok: false, error: 'Something went wrong sending your request. Please try again, or email us directly.' };
  }
}
