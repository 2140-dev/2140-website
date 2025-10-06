import { type SchemaTypeDefinition } from 'sanity'

import textEditor from './text-editor'
import basicTextEditor from './basic-text-editor'
import { external, internal, link } from './link'

export const components: SchemaTypeDefinition[] = [
  internal,
  external,
  link,
  basicTextEditor,
  textEditor
]
