import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Centered text",
  name: "centered-text",
  icon: TextIcon,
  type: "object", // ✅ must be object
  fields: [
    defineField({
      title: "Eyebrow",
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
      name: "content",
      title: "Content",
      type: "textBlock",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "internal",
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              const hasImage = (context.parent as any)?.asset?._ref;
              if (hasImage && !alt) {
                return "Required";
              }
              return true;
            }),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return { title, subtitle: "Centered text" };
    },
  },
});
