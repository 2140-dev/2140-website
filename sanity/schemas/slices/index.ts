import { type SchemaTypeDefinition } from "sanity";

import callToAction from "./call-to-action";
import centeredText from "./centered-text";
import donors from "./donors";
import team from "./team-members";
import textBlockWithImage from "./text-block-with-image";

export const slices: SchemaTypeDefinition[] = [
  callToAction,
  centeredText,
  donors,
  textBlockWithImage,
  team,
];
