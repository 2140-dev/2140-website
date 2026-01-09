import { HomepageTemplate } from 'app/templates/homepage/homepage-template'

import { notFound } from 'next/navigation'
import { getHomepageProps, getSiteSettings } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { resolveOpenGraphImage } from '../../sanity/lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  const props = await getHomepageProps()
  const settings = await getSiteSettings()

  if (!props) {
    return {}
  }

  const images = resolveOpenGraphImage(settings?.ogImage)
  return {
    title: props.title,
    description: props?.excerpt || '',
    openGraph: {
      title: props.title,
      description: props?.excerpt || settings?.description,
      siteName: '2140',
      images
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title,
      description: props?.excerpt || settings?.description,
      images
    }
  } satisfies Metadata
}

export default async function Homepage() {
  const props = await getHomepageProps()

  if (!props) {
    notFound()
  }

  return <HomepageTemplate {...props} />
}
