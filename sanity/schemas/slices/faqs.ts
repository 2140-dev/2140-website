import { InfoFilledIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  title: "FAQs",
  name: "faqs",
  icon: InfoFilledIcon,
  type: "object",
  fields: [
    defineField({
      title: "Eyebrow",
      name: "eyebrow",
      type: "string",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "basic-text-editor",
    }),
    defineField({
      name: "items",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "object" as const,
          fields: [
            defineField({
              title: "Question",
              name: "title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: "Content",
              name: "content",
              type: "text-editor",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(3),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return { title, subtitle: "FAQs" };
    },
  },
});
