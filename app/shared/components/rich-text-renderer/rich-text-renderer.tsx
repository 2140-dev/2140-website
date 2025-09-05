import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { getStylishMarkdown } from "@/app/utils/markdown";
import { Typography } from "@mui/material";
import {
  PortableText,
  PortableTextBlock,
  PortableTextReactComponents,
} from "@portabletext/react";
import Link from "next/link";
import React from "react";

const components: Partial<PortableTextReactComponents> = {
  block: {
    eyebrow: ({ children }) => <Eyebrow color="blue" text={children} />,
    h2: ({ children }) => (
      <Typography variant="h2" sx={getStylishMarkdown("black")}>
        {children}
      </Typography>
    ),
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
    h5: ({ children }) => <Typography variant="h6">{children}</Typography>,
    normal: ({ children }) => (
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        {children}
      </Typography>
    ),
  },
  list: {},
  marks: {
    strong: ({ children }) => <b>{children}</b>,
    em: ({ children }) => <i>{children}</i>,
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: {
        href: string;
      };
    }) => {
      if (value?.href) {
        return (
          <Link href={value.href} target="_blank">
            {children}
          </Link>
        );
      }

      // const type = value?.type;
      // if (type) {
      //   const link = value[type];
      //   const url = link?._type === "external" ? link?.url : ""; // getInternalLink(link?.document, link?.slug);

      //   if (url) {
      //     return <Link href={url}>{children}</Link>;
      //   }
      // }

      return children;
    },
  },
};

interface Props {
  content: PortableTextBlock;
}
export const RichTextRenderer = ({ content }: Props) => {
  return <PortableText value={content} components={components} />;
};
