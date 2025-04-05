import { stripHTMLMarkup } from "@/app/utils/markdown";
import { BoltIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Donate call to action",
  name: "callToAction",
  icon: BoltIcon,
  type: "object",
  fields: [
    defineField({
      name: "layout",
      type: "string",
      options: {
        list: [
          { title: "Text on the left", value: "left" },
          { title: "Text on the right", value: "right" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "left",
    }),
    defineField({
      title: "Eyebrow",
      name: "eyebrow",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "internal",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "textBlock",
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
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: stripHTMLMarkup(title),
        subtitle: "Donate call to action",
      };
    },
  },
});
