import { type SchemaTypeDefinition } from "sanity";

import callToAction from "./call-to-action";
import centeredText from "./centered-text";
import donors from "./donors";
import faqs from "./faqs";
import team from "./team-members";
import textBlockWithImage from "./text-block-with-image";
import subscribe from "./subscribe";

export const slices: SchemaTypeDefinition[] = [
  callToAction,
  centeredText,
  donors,
  faqs,
  team,
  textBlockWithImage,
  subscribe,
];
