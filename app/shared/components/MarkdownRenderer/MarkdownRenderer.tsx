"use client";
import { styled } from "@mui/material";
import pickBy from "lodash/pickBy";
import Markdown from "markdown-to-jsx";
import React, { ComponentType, createElement } from "react";

interface ComponentsOverrides {
  [name: string]: ComponentType<any>;
}

/**
 * `markdown-to-jsx` by default only allow a limited set of unicode chars
 * https://www.npmjs.com/package/markdown-to-jsx#optionsnamedcodestounicode
 */
const namedCodesToUnicode = {
  rsquo: "\u2019",
  ldquo: "\u201c",
  rdquo: "\u201d",
};

const executableSafeCreateElement = function <
  P extends Record<string, unknown>,
>(
  type: React.FC<P> | React.ComponentClass<P> | string,
  props?: (React.Attributes & P) | null,
  ...children: React.ReactNode[]
) {
  return createElement<P>(
    type,
    pickBy(props, (_, key) => !key.startsWith("on")) as P, // omit props starting with `on` (events)
    ...children
  );
};

interface Props {
  components?: { [name: string]: ComponentType<any> };
  children?: string | string[];
}

const StyledMarkdown = styled(Markdown)({
  paddingLeft: "0",
  counterReset: "item",

  "& li": {
    position: "relative",
    flexDirection: "row",
  },
  "& li p": {
    display: "inline",
  },
});

export const MarkdownRender = ({ children, components }: Props) => {
  if (!children) {
    return null;
  }

  const str = Array.isArray(children) ? children.join("") : children;
  return (
    <StyledMarkdown
      options={{
        createElement: executableSafeCreateElement,
        overrides: { ...components, script: () => null },
        namedCodesToUnicode,
      }}
    >
      {str}
    </StyledMarkdown>
  );
};
