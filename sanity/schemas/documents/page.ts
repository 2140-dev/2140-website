import { stripHTMLMarkup } from "@/app/utils/markdown";
import { slices } from "@/sanity/schemas/slices";
import { sliceTypeFromNames } from "@/sanity/util/slice";
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: "page",
  title: "Page",
  icon: DocumentTextIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "A slug is required for the post to show up in the preview.",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),
    defineField({
      title: "Slices",
      name: "slices",
      type: "array" as const,
      of: [
        ...sliceTypeFromNames(slices).sort((a, b) =>
          a.name?.localeCompare(b.name)
        ),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return { title: stripHTMLMarkup(title) };
    },
  },
});
