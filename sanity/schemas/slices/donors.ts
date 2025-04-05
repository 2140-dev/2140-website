import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Donors & sponsors",
  name: "donors",
  icon: UserIcon,
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
      name: "logos",
      type: "array",
      of: [
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
          validation: (rule) => rule.required(),
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
      return { title, subtitle: "Donors & sponsors" };
    },
  },
});
