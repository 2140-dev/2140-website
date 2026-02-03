import { SchemaTypeDefinition } from 'sanity'

export const sliceTypeFromNames = (slices: SchemaTypeDefinition[]) =>
  slices?.map(({ name, title }) => ({ type: name, title, name }))
