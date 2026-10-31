import type { Access } from 'payload';

/** Anyone signed in to the admin panel. The public site never gets direct access. */
export const isLoggedIn: Access = ({ req: { user } }) => Boolean(user);
