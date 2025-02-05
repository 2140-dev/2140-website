import { type SchemaTypeDefinition } from "sanity";

import { link, internal, external } from "./link";
import { blockContent } from "./blockContent";

export const components: SchemaTypeDefinition[] = [
  internal,
  external,
  link,
  blockContent,
];
