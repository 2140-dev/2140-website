import { type SchemaTypeDefinition } from 'sanity'

import donate from './donate'
import textEditor from './text-editor'
import basicTextEditor from './basic-text-editor'
import { external, internal, link } from './link'

export const components: SchemaTypeDefinition[] = [
  internal,
  external,
  link,
  donate,
  basicTextEditor,
  textEditor
]
