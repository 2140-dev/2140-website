"use client";
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

export const MarkdownRender = ({ children, components }: Props) => {
  if (!children) {
    return null;
  }

  const str = Array.isArray(children) ? children.join("") : children;
  return (
    <div className="markdown-content">
      <Markdown
        options={{
          createElement: executableSafeCreateElement,
          overrides: { ...components, script: () => null },
          namedCodesToUnicode,
        }}
      >
        {str}
      </Markdown>
    </div>
  );
};
