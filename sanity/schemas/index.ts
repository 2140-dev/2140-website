// singletons
import homepage from "./singletons/homepage";
import settings from "./singletons/settings";
import menu from "./singletons/menu";
// content types
import page from "./documents/page";
import post from "./documents/post";
import team from "./documents/team";
import { components } from "@/sanity/schemas/components";
import { slices } from "@/sanity/schemas/slices";

export const schemaTypes = [
  ...components,
  ...slices,
  settings,
  menu,
  homepage,
  page,
  post,
  team,
];
