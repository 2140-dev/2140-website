import { HeartIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'donate',
  title: 'Donate button',
  type: 'object',
  icon: HeartIcon,
  fields: [
    {
      name: 'settings',
      description: 'Embed of link to donation page.',
      type: 'url',
      // hidden: true,
      readOnly: true,
       
      initialValue: async (_: unknown, context: any) => {
        const client = context.getClient({ apiVersion: '2023-10-01' })

        const settings = await client.fetch(`
          *[_type == "settings"][0]{
            ...,
          }
        `)

        return settings?.links?.donation || ''
      }
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Donation Button',
        media: HeartIcon
      }
    }
  }
})
