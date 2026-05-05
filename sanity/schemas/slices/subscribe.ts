import { EnvelopeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Subscribe',
  name: 'subscribe',
  icon: EnvelopeIcon,
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
      initialValue: 'white'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    })
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return { title, subtitle: 'Subscribe' }
    }
  }
})
