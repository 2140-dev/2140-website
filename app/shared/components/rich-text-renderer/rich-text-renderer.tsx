import { Eyebrow } from "@/app/shared/components/eyebrow/eyebrow";
import { getStylishMarkdown } from "@/app/utils/markdown";
import Link from "@/node_modules/next/link";
import {
  PortableText,
  PortableTextBlock,
} from "@/node_modules/@portabletext/react";

import React from "react";

const components: Partial<PortableTextReactComponents> = {
  block: {
    eyebrow: ({ children }) => <Eyebrow color="blue" text={children} />,
    h2: ({ children }) => (
      <h2 style={getStylishMarkdown("black")}>
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    normal: ({ children }) => <p>{children}</p>
    ,
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
