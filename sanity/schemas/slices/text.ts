import { TextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Text',
  name: 'text-block',
  icon: TextIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text-editor'
    })
  ],
  preview: {
    prepare() {
      return { title: 'Text', subtitle: 'Text block' }
    }
  }
})
