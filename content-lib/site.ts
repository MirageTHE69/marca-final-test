/** Single source of truth for studio contact details and social links. */

export const site = {
  email: 'studio@marcacreatives.co',

  phone: {
    /** As displayed on the site. */
    display: '092745 12086',
    /** E.164 for tel: links. */
    href: 'tel:+919274512086',
  },

  address: {
    /** Street/building portion. */
    line1: 'A, 303, Jasmine Mobile Store, Kunj Plaza',
    /** Area, city, state, PIN. */
    line2: 'Shiyabaug, Kevdabaug, Vadodara, Gujarat 390011',
    get full() {
      return `${this.line1}, ${this.line2}`;
    },
  },

  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/marca.creatives/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@MarcaCreativesyt' },
    { label: 'LinkedIn', href: 'https://in.linkedin.com/company/marca-creatives-art' },
  ],
} as const;
