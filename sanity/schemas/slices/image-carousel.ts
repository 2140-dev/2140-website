import { ImagesIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Image carousel',
  name: 'image-carousel',
  icon: ImagesIcon,
  type: 'object',
  fields: [
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
      title: 'Text',
      name: 'text',
      type: 'basic-text-editor'
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
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
          ]
        }
      ],
      validation: (rule) => rule.required().min(3).error('At least 3 images are required')
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0'
    },
    prepare({ title, media }) {
      return {
        title: title || 'Image carousel',
        subtitle: 'Image carousel',
        media
      }
    }
  }
})
