import { type SchemaTypeDefinition } from 'sanity'

import callToAction from './call-to-action'
import centeredText from './centered-text'
import donors from './donors'
import faqs from './faqs'
import team from './team-members'
import textBlockWithImage from './text-block-with-image'
import subscribe from './subscribe'
import text from './text'

// All unique slices for schema registration
export const slices: SchemaTypeDefinition[] = [
  callToAction,
  centeredText,
  donors,
  faqs,
  team,
  textBlockWithImage,
  subscribe,
  text
]

// Slices available for homepage
export const HOMEPAGE_SLICES: SchemaTypeDefinition[] = [
  callToAction,
  centeredText,
  team,
  textBlockWithImage,
  subscribe
]

// Slices available for pages
export const PAGE_SLICES: SchemaTypeDefinition[] = [
  callToAction,
  centeredText,
  donors,
  faqs,
  team,
  textBlockWithImage,
  subscribe,
  text
]
