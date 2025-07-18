import { TextIcon } from "@sanity/icons";
import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Text block",
  name: "textBlock",
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
