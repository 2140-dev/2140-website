import { type SchemaTypeDefinition } from "sanity";

import textBlockWithImage from "./textBlockWithImage";
import callToAction from "./callToAction";

export const slices: SchemaTypeDefinition[] = [
  callToAction,
  textBlockWithImage,
];
