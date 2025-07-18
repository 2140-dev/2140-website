import { type SchemaTypeDefinition } from "sanity";

import { link, internal, external } from "./link";
import textBlock from "./textBlock";
import textEditor from "@/sanity/schemas/components/textEditor";

export const components: SchemaTypeDefinition[] = [
  internal,
  external,
  link,
  textBlock,
  textEditor,
];
