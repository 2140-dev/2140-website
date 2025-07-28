import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Team members",
  name: "team-members",
  icon: UserIcon,
  type: "object",
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
      title: "Summary",
      name: "summary",
      type: "text",
    }),
    defineField({
      title: "Variant",
      name: "variant",
      type: "string",
      description: `Specify the team's card variant; if you choose "Full content", biographies will be included for each team member.`,
      options: {
        list: [
          { title: "Teaser", value: "teaser" },
          { title: "Full content", value: "full" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "teaser",
    }),
    defineField({
      name: "team",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "team" }],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      title: "Additional content",
      name: "additional",
      type: "textEditor",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return { title, subtitle: "Team" };
    },
  },
});
