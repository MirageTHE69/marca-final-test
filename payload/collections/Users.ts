import type { CollectionConfig } from 'payload';

import { isLoggedIn } from '../access/isLoggedIn';

/** Admin panel accounts. There is one admin; new accounts can only be added from inside the panel. */
export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Admin user', plural: 'Admin users' },
  admin: {
    useAsTitle: 'email',
    group: 'Settings',
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7,
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
  },
  access: {
    create: isLoggedIn,
    read: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  fields: [{ name: 'name', type: 'text' }],
};
