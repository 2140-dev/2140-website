// types/results.ts

import { PortableTextBlock } from "next-sanity";
import { Image } from "sanity";

export type InternalResultType = {
  _key: string;
  _type: string;
  label: string;
  slug: string;
  document: string;
};

export type ImageResultType = Image & {
  alt: string;
};

export type MenuQueryResultType = {
  _id: string;
  _type: "menu";
  items: InternalResultType[];
};

export type SettingsQueryResultType = {
  _id: string;
  _type: "settings";
  title: string;
  logo: ImageResultType;
  excerpt?: string;
  donation: string;
  gpg?: string;
  description: string;
  email: string;
  ogImage: ImageResultType;
  disclaimer: PortableTextBlock;
};

export type HomepageQueryResultType = {
  _id: string;
  _type: "homepage";
  title: string;
  excerpt?: string;
  link?: InternalResultType;
  image: ImageResultType;
  slices?: { _key: string; _type: string } & any[];
};

export type PageQueryResultType = {
  _id: string;
  _type: "page";
  title: string;
  slug: string;
  excerpt?: string;
  link?: InternalResultType;
  slices?: { _key: string; _type: string } & any[];
};
