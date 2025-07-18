/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import { Typography } from "@mui/material";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";

export const TextEditorRenderer = ({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) => {
  const components: PortableTextComponents = {
    block: {
      p: ({ children }) => <Typography variant="body2">{children}</Typography>,
      h5: ({ children }) => <h5>{children}</h5>,
      h6: ({ children }) => <h6>{children}</h6>,
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={[className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
};
