import { isSuperAdmin } from '@/lib/access'
import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  access: {
    create: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: 'slug',
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
      label: 'Store Name',
      admin: {
        description: 'Dette er navnet på butikken (feks. Jarles butikk)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      required: true,
      unique: true,
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      admin: {
        description: 'Dette er subdomenet for butikken (feks. [slug].funroad.com',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'stripeAccountId',
      type: 'text',
      required: true,
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      admin: {
        description: 'Stripe Account ID associated with your shop',
      },
    },
    {
      name: 'stripeDetailsSubmitted',
      type: 'checkbox',
      admin: {
        // readOnly: true,
        description: 'Du kan ikke opprette produkter før du har lagt inn Stripe detaljene',
      },
    },
  ],
}
