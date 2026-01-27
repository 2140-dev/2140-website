import { defineQuery } from 'next-sanity'
import {
  HomepageQueryResult,
  MenuQueryResult,
  PageNotFoundQueryResult,
  PageQueryResult,
  SettingsQueryResult
} from 'sanity.types'
import { client } from './client'

const settingsQuery = defineQuery(`*[_type == "settings"][0] {
  ...,
  disclaimer[] {
    ...
  }
}`)
export const getSiteSettings = async () => {
  return await client.fetch<SettingsQueryResult>(
    settingsQuery,
    {},
    {
      next: { tags: ['settings'] }
    }
  )
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
  const result = await Promise.all([
    client.fetch<SettingsQueryResult>(
      settingsQuery,
      {},
      {
        next: { tags: ['settings'] }
      }
    ),
    client.fetch<MenuQueryResult>(
      menuQuery,
      {},
      {
        next: { tags: ['menu'] }
      }
    )
  ])
  return { settings: result[0], menu: result[1] }
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
  const result = await client.fetch<PageNotFoundQueryResult>(
    pageNotFoundQuery,
    {},
    {
      next: { tags: ['not-found'] }
    }
  )
  return result
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
  return await client.fetch<HomepageQueryResult>(
    homepageQuery,
    {},
    {
      next: { tags: ['homepage', 'team'] }
    }
  )
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
    }
  }
`)
export const getPageProps = async (params: Promise<{ slug: string }>) => {
  const { slug } = await params
  return await client.fetch<PageQueryResult>(
    pageQuery,
    { slug },
    {
      next: { tags: ['page', `page:${slug}`, 'team'] }
    }
  )
}
