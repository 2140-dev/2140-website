import imageUrlBuilder from '@sanity/image-url'
import { HomepageTemplate } from 'app/templates/homepage/homepage-template'
import { client } from '@/sanity/lib/client'

import { notFound } from 'next/navigation'
import { getHomepageProps, getSiteSettings } from '@/sanity/lib/queries'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const props = await getHomepageProps()
  const settings = await getSiteSettings()

  if (!props) {
    return {}
  }

  const images = settings?.ogImage
    ? [
        {
          url: imageUrlBuilder(client).image(settings?.ogImage).url(),
          width: 1200,
          height: 630
        }
      ]
    : []
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
