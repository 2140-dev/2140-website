import { Metadata } from 'next'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'
import { SettingsQueryResult } from 'sanity.types'

interface GenerateMetadataParams {
  title: string
  description: string
  settings: SettingsQueryResult
}

export const getPageMetadata = ({
  title,
  description,
  settings
}: GenerateMetadataParams): Metadata => {
  const images = resolveOpenGraphImage(settings?.ogImage)
  const fullTitle = `2140 | ${title}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description: description || settings?.description,
      siteName: '2140',
      images
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || settings?.description,
      images
    }
  }
}
