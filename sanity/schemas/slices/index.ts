import { type SchemaTypeDefinition } from "sanity";

import textBlockWithImage from "./textBlockWithImage";
import callToAction from "./callToAction";
import donors from "./donors";
import centeredText from "./centeredText";

export const slices: SchemaTypeDefinition[] = [
  callToAction,
  centeredText,
  donors,
  textBlockWithImage,
];
