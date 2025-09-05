import { type SchemaTypeDefinition } from "sanity";

import textEditor from "sanity/schemas/components/text-editor";
import basicTextEditor from "./basic-text-editor";
import { external, internal, link } from "./link";

export const components: SchemaTypeDefinition[] = [
  internal,
  external,
  link,
  basicTextEditor,
  textEditor,
];
