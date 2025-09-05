import { TextIcon } from "@sanity/icons";
import { defineArrayMember, defineType } from "sanity";

export default defineType({
  title: "Basic text editor",
  name: "basic-text-editor",
  description:
    "This is a stripped-down version of the text editor; it contains limited text formatting options such as blockquotes, lists and links.",
  type: "array",
  icon: TextIcon,
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url", // <-- changed from "link" to "url"
              },
            ],
          },
        ],
      },
    }),
  ],
});
