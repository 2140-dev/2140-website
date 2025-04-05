import { sanityFetch } from "@/sanity/lib/fetch";
import {
  HomepageQueryResultType,
  MenuQueryResultType,
  PageQueryResultType,
  SettingsQueryResultType,
} from "@/sanity/lib/results";
import { SanityClient, defineQuery } from "next-sanity";
import { QueryParams } from "sanity";

const internalLinkFields = /* groq */ `
  "_type": _type,
  "label": label,
  "slug": reference->slug.current,
  "document": reference->_type
`;

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

export const menuQuery = defineQuery(`*[_type == "menu"][0] {
  items[] {
    ...,
    ${internalLinkFields}
  }
}`);
const settingsQuery = defineQuery(`*[_type == "settings"][0]`);
export const fetchSettings = async (client: SanityClient) => {
  const result = await client.fetch<SettingsQueryResultType>(settingsQuery);

  return result;
};
export const fetchSettingsAndMenu = async (client: SanityClient) => {
  const result = await Promise.all([
    client.fetch<SettingsQueryResultType>(settingsQuery),
    client.fetch<MenuQueryResultType>(menuQuery),
  ]);

  return { settings: result[0], menu: result[1] };
};

export const homepageQuery = defineQuery(`
  *[_type == "homepage"][0] {
    ...,
    link {
      ${internalLinkFields}
    }
  }
`);
export const fetchHomepageProps = async (client: SanityClient) => {
  const result = await client.fetch<HomepageQueryResultType>(homepageQuery);
  return result;
};

export const fetchPageProps = async (
  client: SanityClient,
  params?: QueryParams | Promise<QueryParams>
) => {
  const query = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    slices[] {
      ...,
      link {
        ${internalLinkFields}
      },
      callToAction {
        ...,
        link {
          ${internalLinkFields}
        }
      }
    }
  }
`);
  const result: PageQueryResultType = await sanityFetch({ query, params });
  return result;
};
