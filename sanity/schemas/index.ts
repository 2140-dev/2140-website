// singletons
import homepage from './singletons/homepage'
import menu from './singletons/menu'
import notFound from './singletons/not-found'
import settings from './singletons/settings'
import { components } from './components'
import { slices } from './slices'
// content types
import page from './documents/page'
import team from './documents/team'

export const schemaTypes = [
  ...components,
  ...slices,
  settings,
  menu,
  homepage,
  notFound,
  page,
  team
]
