'use client'

import { visionTool } from '@sanity/vision'
import { PluginOptions, defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {
  defineDocuments,
  defineLocations,
  presentationTool,
  type DocumentLocation
} from 'sanity/presentation'
import { dataset, projectId } from './sanity/lib/api'
import { singletonPlugin } from './sanity/plugins/settings'
import { schemaTypes } from './sanity/schemas'
import menu from './sanity/schemas/singletons/menu'
import settings from './sanity/schemas/singletons/settings'
import { structure } from './sanity/desk-structure'
import { structureTool } from 'sanity/structure'

const home = {
  title: 'Home',
  href: '/'
} satisfies DocumentLocation

export default defineConfig({
  projectId,
  dataset,
  name: '2140',
  schema: {
    types: schemaTypes
  },
  plugins: [
    structureTool({ structure }),
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          { route: '/', filter: `_type == "homepage"` },
          { route: '/404', filter: `_type == "notFoundPage"` },
          {
            route: '/:slug',
            filter: `_type == "page" && slug.current == $slug`
          }
        ]),
        locations: {
          siteSettings: defineLocations({
            locations: [home],
            message: 'This document is used on all pages',
            tone: 'caution'
          }),
          menu: defineLocations({
            locations: [home],
            message: 'This document is used on all pages',
            tone: 'caution'
          }),
          homepage: defineLocations({
            locations: [home],
            message: 'This is the website homepage',
            tone: 'positive'
          }),
          notFoundPage: defineLocations({
            locations: [{ title: 'Not Found', href: '/404' }],
            message: 'This is the 404 (Not Found) page',
            tone: 'caution'
          }),
          page: defineLocations({
            select: {
              title: 'title',
              slug: 'slug.current'
            },
            resolve: (page) => ({
              locations: [
                {
                  title: page?.title || 'Untitled',
                  href: `/${page?.slug}`
                }
              ]
            })
          })
        }
      },
      previewUrl: {
        origin: process.env.NEXT_PUBLIC_SITE_URL,
        draftMode: {
          enable: '/api/draft-mode/enable'
        }
      }
    }),
    singletonPlugin([settings.name, menu.name]),
    unsplashImageAsset(),
    visionTool()
  ].filter(Boolean) as PluginOptions[],
  typegen: {
    path: './sanity.types.ts',
    addOptionalDefaults: false
  }
})
