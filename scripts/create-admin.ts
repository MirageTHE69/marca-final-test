/**
 * Creates (or resets the password of) an admin panel login.
 *
 *   ADMIN_EMAIL=you@example.com ADMIN_PASSWORD='…' npm run payload run scripts/create-admin.ts
 */
import { getPayload } from 'payload';

import config from '../payload.config';

const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;
if (!email || !password) throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD');

const payload = await getPayload({ config });
const existing = await payload.find({ collection: 'users', where: { email: { equals: email } }, limit: 1 });

if (existing.docs[0]) {
  await payload.update({ collection: 'users', id: existing.docs[0].id, data: { password } });
  console.log(`Password reset for ${email}`);
} else {
  await payload.create({ collection: 'users', data: { email, password, name: 'Admin' } });
  console.log(`Admin created: ${email}`);
}

process.exit(0);
