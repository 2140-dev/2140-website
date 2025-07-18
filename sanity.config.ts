"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { type DocumentLocation } from "sanity/presentation";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { singletonPlugin } from "@/sanity/plugins/settings";
import { assistWithPresets } from "@/sanity/plugins/assist";
import settings from "@/sanity/schemas/singletons/settings";
import menu from "@/sanity/schemas/singletons/menu";
import { schemaTypes } from "@/sanity/schemas";
import { structureTool } from "sanity/structure";
import { structure } from "@/sanity/structure";

const home = {
  title: "Home",
  href: "/",
} satisfies DocumentLocation;

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: structure,
    }),
    // presentationTool({
    //   resolve: {
    //     mainDocuments: defineDocuments([
    //       {
    //         route: "/posts/:slug",
    //         filter: `_type == "post" && slug.current == $slug`,
    //       },
    //     ]),
    //     locations: {
    //       settings: defineLocations({
    //         locations: [home],
    //         message: "This document is used on all pages",
    //         tone: "caution",
    //       }),
    //       menu: defineLocations({
    //         locations: [home],
    //         message: "This document is used on all pages",
    //         tone: "caution",
    //       }),
    //       homepage: defineLocations({
    //         locations: [home],
    //         message: "This is the website homepage",
    //         tone: "positive",
    //       }),
    //       post: defineLocations({
    //         select: {
    //           title: "title",
    //           slug: "slug.current",
    //         },
    //         resolve: (doc) => ({
    //           locations: [
    //             {
    //               title: doc?.title || "Untitled",
    //               href: resolveHref("post", doc?.slug)!,
    //             },
    //             home,
    //           ],
    //         }),
    //       }),
    //     },
    //   },
    //   previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
    // }),
    singletonPlugin([settings.name, menu.name]),
    unsplashImageAsset(),
    assistWithPresets(),
    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
