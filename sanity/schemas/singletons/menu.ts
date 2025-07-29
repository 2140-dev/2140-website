import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { link } from "../components/link";

export default defineType({
  name: "menu",
  title: "Menu",
  description: `This is where you can define the website's navigation; it will display on all pages .`,
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "items",
      title: "Menu items",
      type: "array",
      validation: (rule) => rule.min(1),
      of: [
        defineField({
          ...link,
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Menu",
      };
    },
  },
});
