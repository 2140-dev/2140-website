import {
  InternalLink,
  InternalOrExternalLink,
  ResolvedInternalOrExternalLink
} from 'types/link'
import { Link } from '../sanity.types'

export const getInternalLinkUrl = (link: InternalLink): string => {
  switch (link.document) {
    case 'page':
    default:
      return `/${link.slug}`
  }
}

export const resolveInternalOrExternalLink = (
  link: Link | any
): ResolvedInternalOrExternalLink => {
  if (link?.internal) {
    // Check if the internal link has slug and document fields (from query resolution)
    const internal = link.internal as any
    const label = internal?.label || ''

    // Handle resolved internal link (from queries with reference->)
    if (internal?.slug) {
      return {
        _key: link._key,
        _type: internal._type,
        label,
        href: `/${internal.slug}`
      }
    }

    // Fallback for non-resolved internal links
    return {
      _key: link._key,
      _type: internal._type,
      label,
      href: ''
    }
  }

  if (link?.external) {
    return {
      _key: link._key,
      _type: link.external._type,
      label: link.external?.label || '',
      href: link.external.url || ''
    }
  }

  return {
    _key: link._key,
    _type: '',
    label: '',
    href: ''
  }
}
