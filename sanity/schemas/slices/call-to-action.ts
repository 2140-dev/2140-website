import { BoltIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { stripHTMLMarkup } from '@/sanity/utils/markdown'

export default defineType({
  title: 'Call to action',
  name: 'call-to-action',
  icon: BoltIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image on the left', value: 'left' },
          { title: 'Image on the right', value: 'right' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'left'
    }),
    defineField({
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'text'
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) =>
            rule.custom((alt, context) => {
              const hasImage = (context.parent as any)?.asset?._ref
              if (hasImage && !alt) {
                return 'Required'
              }
              return true
            })
        }
      ],
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: stripHTMLMarkup(title),
        subtitle: 'Call to action'
      }
    }
  }
})
