import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  icon: TextIcon,
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
    }),
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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "blockContent" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return { title };
    },
  },
});
