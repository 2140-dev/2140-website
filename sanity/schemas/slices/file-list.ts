import { defineArrayMember, defineField, defineType } from 'sanity'
import { stripHTMLMarkup } from '@/sanity/utils/markdown'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
  title: 'File list',
  name: 'file-list',
  icon: DocumentIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'background',
      type: 'string',
      options: {
        list: [
          { title: 'Yellow', value: 'yellow' },
          { title: 'White', value: 'white' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'yellow'
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
      name: 'description',
      type: 'text'
    }),
    defineField({
      name: 'items',
      title: 'Files',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            defineField({
              title: 'File name',
              name: 'name',
              type: 'string',
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'file',
              type: 'file',
              validation: (rule) => rule.required()
            })
          ]
        })
      ],
      validation: (rule) => rule.min(1)
    })
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items'
    },
    prepare({ title, items }) {
      const subtitle = items?.length ? `${items.length} items` : 'No items'
      return {
        title: stripHTMLMarkup(title),
        subtitle
      }
    }
  }
})
