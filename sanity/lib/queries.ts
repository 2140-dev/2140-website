import { Homepage } from "@/sanity/sanity.types";
import { SanityClient, defineQuery } from "next-sanity";

const internalLinkFields = /* groq */ `
  "_type": _type,
  "label": label,
  "slug": reference->slug.current,
  "document": reference->_type
`;

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);
export const menuQuery = defineQuery(`*[_type == "menu"][0] {
  items[] {
    ...,
    ${internalLinkFields}
  }
}`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`);

export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`);

export const homepageQuery = defineQuery(`
  *[_type == "homepage"][0] {
    ...,
    link {
      ${internalLinkFields}
    }
  }
`);

export const fetchHomepage = async (client: SanityClient) => {
  const result = await client.fetch<Homepage>(homepageQuery);
  return result;
};
