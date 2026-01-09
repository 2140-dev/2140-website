import imageUrlBuilder from '@sanity/image-url'
import { NotFoundTemplate } from 'app/templates/not-found/not-found-template'
import { client } from '@/sanity/lib/client'
import { getPageNotFoundProps, getSiteSettings } from '@/sanity/lib/queries'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()

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
    title: 'Page not found',
    description:
      'The page you were looking either does not exist or has been delete. We apologize for the confusion.',
    openGraph: {
      title: 'Page not found',
      description:
        'The page you were looking either does not exist or has been delete. We apologize for the confusion.',
      siteName: '2140',
      images
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Page not found',
      description:
        'The page you were looking either does not exist or has been delete. We apologize for the confusion.',
      images
    }
  } satisfies Metadata
}

export default async function NotFound() {
  const props = await getPageNotFoundProps()

  return <NotFoundTemplate {...props} />
}
