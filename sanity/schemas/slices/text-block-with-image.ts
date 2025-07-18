import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Text block with image",
  name: "textBlockWithImage",
  icon: BlockContentIcon,
  type: "object", // ✅ must be object
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
      name: "content",
      title: "Content",
      type: "textEditor",
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
    prepare() {
      return { title: "Text block with image" };
    },
  },
});
