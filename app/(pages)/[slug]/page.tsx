import type { Metadata } from 'next'

import { getPageProps } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/fetch'
import { PageTemplate } from '@/app/templates/page/page-template'
import { client } from '@/sanity/lib/client'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return await sanityFetch({
    query: `*[_type == "page" && defined(slug.current)]{"slug": slug.current}`,
    perspective: 'published',
    stega: false
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const props = await getPageProps(client, params)

  if (!props) {
    notFound()
  }

  return {
    title: props.title,
    description: props?.excerpt || '',
    openGraph: {
      images: []
    }
  } satisfies Metadata
}

export default async function Page({ params }: Props) {
  const props = await getPageProps(client, params)

  if (!props) {
    console.error('Missing page props.')
    notFound()
  }

  return <PageTemplate {...props} />
}
