import { type SchemaTypeDefinition } from "sanity";

import faqs from "@/sanity/schemas/slices/faqs";
import callToAction from "./call-to-action";
import centeredText from "./centered-text";
import donors from "./donors";
import team from "./team-members";
import textBlockWithImage from "./text-block-with-image";

export const slices: SchemaTypeDefinition[] = [
  callToAction,
  centeredText,
  donors,
  faqs,
  team,
  textBlockWithImage,
];
