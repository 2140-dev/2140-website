import { ErrorOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { link } from "../components/link";

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
  title: "404 Page",
  name: "not-found",
  icon: ErrorOutlineIcon,
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
      name: "content",
      type: "basic-text-editor",
    }),
    defineField({
      name: "items",
      title: "Links",
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
      return { title: "404 Page" };
    },
  },
});
