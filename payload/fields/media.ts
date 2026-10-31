import type { RelationshipField } from 'payload';

type MediaFieldOptions = {
  label?: string;
  required?: boolean;
  /** Restricts the picker to one kind of file. */
  accept?: 'image' | 'video';
  description?: string;
};

/** A single pick from the media library, with a visual picker instead of a dropdown. */
export const mediaField = (name: string, { label, required, accept, description }: MediaFieldOptions = {}): RelationshipField => ({
  name,
  label,
  type: 'relationship',
  relationTo: 'media',
  required,
  admin: {
    description,
    components: {
      Field: { path: '/payload/admin/MediaPicker#MediaPicker', clientProps: { accept } },
    },
  },
});
