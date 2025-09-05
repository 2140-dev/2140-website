import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "github",
      title: "Github",
      type: "url",
    }),
    defineField({
      name: "x",
      title: "X (a.k.a. Twitter)",
      type: "url",
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "basic-text-editor",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      options: {
        hotspot: true,
        // aiAssist: {
        //   imageDescriptionField: "alt",
        // },
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
