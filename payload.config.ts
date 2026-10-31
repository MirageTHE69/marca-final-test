import path from 'path';
import { fileURLToPath } from 'url';

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { CaseStudies } from './payload/collections/CaseStudies';
import { Leads } from './payload/collections/Leads';
import { Media } from './payload/collections/Media';
import { PortfolioItems } from './payload/collections/PortfolioItems';
import { Posts } from './payload/collections/Posts';
import { Users } from './payload/collections/Users';
import { BlogPage } from './payload/globals/BlogPage';
import { CaseStudiesPage } from './payload/globals/CaseStudiesPage';
import { Home } from './payload/globals/Home';
import { PortfolioPage } from './payload/globals/PortfolioPage';
import { Settings } from './payload/globals/Settings';
import { richTextEditor } from './payload/richText';

const dirname = path.dirname(fileURLToPath(import.meta.url));

if (!process.env.PAYLOAD_SECRET) throw new Error('PAYLOAD_SECRET is not set');
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: 'light',
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: ' · Marca Admin',
      icons: [{ rel: 'icon', type: 'image/png', url: '/icon.png' }],
    },
    components: {
      graphics: {
        Logo: '/payload/admin/Brand#Logo',
        Icon: '/payload/admin/Brand#Icon',
      },
      beforeDashboard: ['/payload/admin/Dashboard#Dashboard'],
    },
  },
  // Sidebar order: inbox first, then content, pages, library, settings.
  collections: [Leads, CaseStudies, PortfolioItems, Posts, Media, Users],
  globals: [Home, PortfolioPage, CaseStudiesPage, BlogPage, Settings],
  editor: richTextEditor,
  secret: process.env.PAYLOAD_SECRET,
  typescript: { outputFile: path.resolve(dirname, 'payload/payload-types.ts') },
  db: mongooseAdapter({ url: process.env.DATABASE_URL }),
  sharp,
});
