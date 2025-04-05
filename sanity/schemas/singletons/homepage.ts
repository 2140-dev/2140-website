import callToAction from "@/sanity/schemas/slices/callToAction";
import centeredText from "@/sanity/schemas/slices/centeredText";
import { sliceTypeFromNames } from "@/sanity/util/slice";
import { HomeIcon } from "@sanity/icons";
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
const slices = [callToAction, centeredText];
export default defineType({
  name: "homepage",
  icon: HomeIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "link",
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
          description: "Important for SEO and accessiblity.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Slices",
      name: "slices",
      type: "array" as const,
      of: [
        ...sliceTypeFromNames(slices), //.sort((a, b) => a.title?.localeCompare(b.title)
      ],
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
