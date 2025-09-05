// singletons
import homepage from "./singletons/homepage";
import menu from "./singletons/menu";
import settings from "./singletons/settings";
// content types
import { components } from "sanity/schemas/components";
import notFound from "sanity/schemas/singletons/not-found";
import { slices } from "sanity/schemas/slices";
import page from "./documents/page";
import team from "./documents/team";

export const schemaTypes = [
  ...components,
  ...slices,
  settings,
  menu,
  homepage,
  notFound,
  page,
  team,
];
