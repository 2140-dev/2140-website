import { PortableTextBlock } from "next-sanity";

export type AccordionItems = {
  _key: string;
  title: string;
  content: PortableTextBlock;
}[];
