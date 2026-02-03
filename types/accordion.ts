import { PortableTextBlock } from 'sanity'

export type AccordionItems = {
  _key: string
  title: string
  content: PortableTextBlock[]
}[]
