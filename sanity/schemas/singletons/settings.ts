import { WrenchIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: WrenchIcon,

  // ✅ Define the tabs (groups)
  groups: [
    { name: 'general', title: 'General' },
    { name: 'metadata', title: 'Metadata' },
    { name: 'footer', title: 'Footer' }
  ],

  fields: [
    // 🟢 General
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      group: 'general',
      description: 'This is the title of your website.',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      group: 'general',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) =>
            rule.custom((alt, context) => {
              if ((context.document?.logo as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      title: 'Donation link',
      name: 'donation',
      type: 'url',
      group: 'general',
      validation: (rule) =>
        rule.required().uri({ scheme: ['http', 'https', 'tel', 'mailto'] })
    }),

    // 🟣 Metadata
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'metadata',
      description: 'Used for the <meta> description tag for SEO.',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      group: 'metadata',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true
        // aiAssist: {
        //   imageDescriptionField: "alt",
        // },
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Important for accessibility and SEO.',
          validation: (rule) =>
            rule.custom((alt, context) => {
              if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
        })
      ],
      validation: (rule) => rule.required()
    }),
    // 🔵 Footer
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'footer',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'gpg',
      title: 'GPG Key',
      type: 'string',
      group: 'footer'
    }),
    defineField({
      name: 'disclaimer',
      type: 'array',
      group: 'footer',
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url'
                  }
                ]
              }
            ]
          }
        })
      ]
    })
  ],

  preview: {
    prepare() {
      return {
        title: 'Settings'
      }
    }
  }
})
