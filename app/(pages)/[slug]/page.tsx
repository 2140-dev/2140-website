import type { Metadata } from 'next'

import { getPageProps, getSiteSettings } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { PageTemplate } from '@/app/templates/page/page-template'
import { resolveOpenGraphImage } from '../../../sanity/lib/utils'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const props = await getPageProps(params)
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

export default async function Page({ params }: Props) {
  const props = await getPageProps(params)

  if (!props) {
    notFound()
  }

  return <PageTemplate {...props} />
}
