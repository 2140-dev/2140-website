import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Text block with image",
  name: "text-block-with-image",
  icon: BlockContentIcon,
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
      title: "Content",
      name: "content",
      type: "text-editor",
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
