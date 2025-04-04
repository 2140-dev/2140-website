import {
  PortableText,
  PortableTextBlock,
  PortableTextReactComponents,
} from "@portabletext/react";
import Link from "next/link";
import React from "react";

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    normal: ({ children }) => <p>{children}</p>,
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
      value?: // | InternalOrExternalLink
      {
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
