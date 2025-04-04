// "use client";
// /**
//  * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
//  */
// import { visionTool } from "@sanity/vision";
// import { PluginOptions, defineConfig } from "sanity";
// import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
// import {
//   presentationTool,
//   defineDocuments,
//   defineLocations,
//   type DocumentLocation,
// } from "sanity/presentation";
// import { structureTool } from "sanity/structure";

// import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
// import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
// import { assistWithPresets } from "@/sanity/plugins/assist";
// import team from "@/sanity/schemas/documents/team";
// import post from "@/sanity/schemas/documents/post";
// import settings from "@/sanity/schemas/singletons/settings";
// import { resolveHref } from "@/sanity/lib/utils";
// import menu from "@/sanity/schemas/singletons/menu";
// import { components } from "@/sanity/schemas/components";
// import page from "@/sanity/schemas/documents/page";
// import homepage from "@/sanity/schemas/singletons/homepage";
// import { schemaTypes } from "@/sanity/schemas";
// import { structure } from "@/sanity/structure";
// import { deskTool } from "sanity/desk";

// const homepage = {
//   title: "Home",
//   href: "/",
// } satisfies DocumentLocation;

// export default defineConfig({
//   basePath: studioUrl,
//   projectId,
//   dataset,
//   schema: {
//     types: schemaTypes,
//   },
//   plugins: [
//     presentationTool({
//       resolve: {
//         mainDocuments: defineDocuments([
//           {
//             route: "/posts/:slug",
//             filter: `_type == "post" && slug.current == $slug`,
//           },
//         ]),
//         locations: {
//           settings: defineLocations({
//             locations: [home],
//             message: "This document is used on all pages",
//             tone: "caution",
//           }),
//           post: defineLocations({
//             select: {
//               title: "title",
//               slug: "slug.current",
//             },
//             resolve: (doc) => ({
//               locations: [
//                 {
//                   title: doc?.title || "Untitled",
//                   href: resolveHref("post", doc?.slug)!,
//                 },
//                 homepage,
//               ],
//             }),
//           }),
//         },
//       },
//       previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
//     }),
//     structureTool({ structure: pageStructure([settings, menu]) }),
//     // Configures the global "new document" button, and document actions, to suit the Settings document singleton
//     singletonPlugin([settings.name]),
//     // Add an image asset source for Unsplash
//     unsplashImageAsset(),
//     // Sets up AI Assist with preset prompts
//     // https://www.sanity.io/docs/ai-assist
//     assistWithPresets(),
//     // Vision lets you query your content with GROQ in the studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     process.env.NODE_ENV === "development" &&
//       visionTool({ defaultApiVersion: apiVersion }),
//   ].filter(Boolean) as PluginOptions[],
// });
"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from "sanity/presentation";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import { assistWithPresets } from "@/sanity/plugins/assist";
import team from "@/sanity/schemas/documents/team";
import post from "@/sanity/schemas/documents/post";
import settings from "@/sanity/schemas/singletons/settings";
import { resolveHref } from "@/sanity/lib/utils";
import menu from "@/sanity/schemas/singletons/menu";
import { schemaTypes } from "@/sanity/schemas";
// import { pageStructure as structure } from "@/sanity/structure"; // or use your correct structure file
import { deskTool } from "sanity/desk"; // ✅ correct plugin for structure override
import homepage from "@/sanity/schemas/singletons/homepage";
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
