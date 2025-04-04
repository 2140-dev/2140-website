// /sanity/structure.ts

import type { StructureResolver } from "sanity/structure";
import { HomeIcon, CogIcon, MenuIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // 🛠️ Singleton: Settings
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(
          S.editor()
            .id("settings")
            .schemaType("settings")
            .documentId("settings")
        ),

      // 🧭 Singleton: Menu
      S.listItem()
        .title("Menu")
        .icon(MenuIcon)
        .child(S.editor().id("menu").schemaType("menu").documentId("menu")),

      // Divider 1
      S.divider(),

      // 🏠 Singleton: Homepage
      S.listItem()
        .title("Homepage")
        .icon(HomeIcon)
        .child(
          S.editor()
            .id("homepage")
            .schemaType("homepage")
            .documentId("homepage")
        ),

      // Divider 2
      S.divider(),

      // 🗂️ The rest of your document types
      ...S.documentTypeListItems().filter(
        (item) => !["settings", "menu", "homepage"].includes(item.getId() ?? "")
      ),
    ]);
