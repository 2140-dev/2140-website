import { defineQuery } from 'next-sanity'
import { sanityFetch } from './live'

const allPagesQuery = defineQuery(`
    *[_type == "page"] { "slug": slug.current }
  `)

export async function getAllPageSlugs() {
  const { data } = await sanityFetch({ query: allPagesQuery })
  return data
}

const settingsQuery = defineQuery(`*[_type == "settings"][0] {
  ...,
  disclaimer[] {
    ...
  }
}`)
export const getSiteSettings = async () => {
  const { data } = await sanityFetch({ query: settingsQuery })
  return data
}

export const menuQuery = defineQuery(`*[_type == "menu"][0] {
  items[] {
    ...,
    internal {
      "_type": _type,
      "label": label,
      "slug": reference->slug.current,
      "document": reference->_type
    },
    external {
      "_type": _type,
      "label": label,
      "url": url,
    }
  }
}`)
export const getSiteSettingsAndMenu = async () => {
  const [{ data: settings }, { data: menu }] = await Promise.all([
    sanityFetch({ query: settingsQuery }),
    sanityFetch({ query: menuQuery })
  ])
  return { settings, menu }
}

const pageNotFoundQuery = defineQuery(`
  *[_type == "not-found"][0] {
    ...,
    content[] {
      ...,
    },
  }
`)
export const getPageNotFoundProps = async () => {
  const { data } = await sanityFetch({ query: pageNotFoundQuery })
  return data
}

const homepageQuery = defineQuery(`
  *[_type == "homepage"][0] {
    ...,
    link {
      "_type": _type,
      "label": label,
      "slug": reference->slug.current,
      "document": reference->_type
    },
    slices[] {
      ...,
      content[] {
        ...,
      },
      link {
        internal {
          "_type": _type,
          "label": label,
          "slug": reference->slug.current,
          "document": reference->_type
        },
      },
      _type == 'text-block-with-image' => {
        ...,
      },
      _type == 'call-to-action' => {
        ...,
        link {
          _key,
          _id,
          type,
          internal {
            "_type": _type,
            "label": label,
            "slug": reference->slug.current,
            "document": reference->_type
          },
          external {
            "_type": _type,
            "label": label,
            "url": url,
          }
        }
      },
      _type == 'centered-text' => {
        ...,
        link {
          internal {
            "_type": _type,
            "label": label,
            "slug": reference->slug.current,
            "document": reference->_type
          },
        }
      },
      _type == 'team-members' => {
      ...,
      team[]->{
        name,
        role,
        github,
        content,
        x,
        bio,
        picture
      }
    },
    }
  }
`)
export const getHomepageProps = async () => {
  const { data } = await sanityFetch({ query: homepageQuery })
  return data
}

const pageQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    slices[] {
      ...,
      content[] {
        ...,
      },
      link {
        internal {
          "_type": _type,
          "label": label,
          "slug": reference->slug.current,
          "document": reference->_type
        },
      },
      _type == 'text-block-with-image' => {
        ...,
      },
      _type == 'call-to-action' => {
        ...,
        link {
          _id,
          type,
          internal {
            "_type": _type,
            "label": label,
            "slug": reference->slug.current,
            "document": reference->_type
          },
          external {
            "_type": _type,
            "label": label,
            "url": url,
          }
        }
      },
      _type == 'team-members' => {
        ...,
        team[]->{
          name,
          content,
          role,
          github,
          x,
          bio,
          picture
        }
      },
      _type == 'file-link' => {
        ...,
        items[]->{
          name,
          'file': file.asset->
        }
      },
    }
  }
`)
export const getPageProps = async (params: Promise<{ slug: string }>) => {
  const { slug } = await params
  const { data } = await sanityFetch({ query: pageQuery, params: { slug } })
  return data
}
