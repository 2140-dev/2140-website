import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const external = defineType({
  name: "external",
  title: "External Link",
  type: "object" as const,
  fields: [
    defineField({
      type: "url",
      name: "url",
      title: "URL",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https", "tel", "mailto"],
        }),
    }),
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  options: {
    collapsible: false,
  },
  preview: {
    select: {
      title: "label",
    },
    prepare: (selection) => ({
      ...selection,
      subtitle: "External Link",
      media: LinkIcon,
    }),
  },
});

export const internal = defineType({
  name: "internal",
  title: "Internal Link",
  type: "object" as const,
  fields: [
    defineField({
      title: "Document",
      name: "reference",
      type: "reference" as const,
      to: [{ type: "page" }],
      options: {
        filter: `defined(slug) || _id == "home" && (!defined(date) || (defined(date) && dateTime(date + 'T00:00:00Z') < dateTime(now())))`,
      },
    }),
    defineField({
      title: "Label",
      name: "label",
      type: "string",
    }),
  ],
  options: {
    collapsible: false,
  },
});

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object" as const,
  fields: [
    defineField({
      type: "string",
      name: "type",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "internal",
    }),
    defineField({
      name: "external",
      type: "external",
      hidden: ({ parent }) => parent?.type !== "external",
    }),
    defineField({
      name: "internal",
      type: "internal",
      hidden: ({ parent }) => parent?.type !== "internal",
    }),
  ],
  preview: {
    select: {
      link: "link",
    },
    prepare: ({ link }) => {
      const isInternal = link.type === "internal";
      return {
        title: link[link.type].label,
        subtitle: `${isInternal ? "Internal" : "External"} link`,
        media: LinkIcon,
      };
    },
  },
});
