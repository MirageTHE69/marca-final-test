import path from 'path';
import { fileURLToPath } from 'url';

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Leads } from './payload/collections/Leads';
import { Users } from './payload/collections/Users';

const dirname = path.dirname(fileURLToPath(import.meta.url));

if (!process.env.PAYLOAD_SECRET) throw new Error('PAYLOAD_SECRET is not set');
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: ' — Marca Admin' },
  },
  collections: [Leads, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET,
  typescript: { outputFile: path.resolve(dirname, 'payload/payload-types.ts') },
  db: mongooseAdapter({ url: process.env.DATABASE_URL }),
  sharp,
});
