import {
  InternalLink,
  InternalOrExternalLink,
  ResolvedInternalOrExternalLink
} from 'types/link'

export const getInternalLinkUrl = (link: InternalLink): string => {
  switch (link.document) {
    case 'page':
    default:
      return `/${link.slug}`
  }
}

export const resolveInternalOrExternalLink = (
  link: InternalOrExternalLink
): ResolvedInternalOrExternalLink => {
  let result = {
    _key: link._key
  }

  if (link?.internal) {
    return {
      ...result,
      _type: link.internal._type,
      label: link.internal?.label || '',
      href: getInternalLinkUrl(link.internal)
    }
  }

  if (link?.external) {
    return {
      ...result,
      _type: link.external._type,
      label: link.external?.label || '',
      href: link.external.url
    }
  }

  return {
    _key: '',
    _type: '',
    label: '',
    href: ''
  }
}
