import { DocumentIcon, LaunchIcon, LinkIcon } from "@sanity/icons";
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
      type: "string",
      name: "label",
      title: "Label",
      validation: (Rule) => Rule.required(),
    }),
  ],
  options: {
    collapsible: false,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
    prepare: (selection) => ({
      ...selection,
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
      to: [{ type: "post" }, { type: "page" }],
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
  preview: {
    select: {
      title: "label",
      referenceSlug: "reference.slug",
    },
    prepare: ({ title, referenceSlug }) => {
      return {
        title: title,
        subtitle: referenceSlug.current,
        media: DocumentIcon,
      };
    },
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
      type: "type",
      external: "external",
      internal: "internal",
      referenceSlug: "internal.reference.slug.current",
    },
    prepare: ({ type, external, internal }) => {
      if (type === "internal") {
        return {
          title: internal?.label || "Internal link",
          subtitle: internal?.slug || "",
          media: DocumentIcon,
        };
      }
      if (type === "external") {
        return {
          title: external?.label || "External link",
          subtitle: external?.url || "",
          media: LaunchIcon,
        };
      }

      return {
        title: "Link",
      };
    },
  },
});
