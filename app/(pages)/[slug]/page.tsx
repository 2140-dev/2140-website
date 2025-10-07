import type { Metadata, ResolvingMetadata } from 'next'

import { fetchPageProps } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/fetch'
import { PageTemplate } from '@/app/templates/page/page-template'

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

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const page = await fetchPageProps(params)
  if (!page) {
    notFound()
  }

  return {
    title: `2140 | ${page?.title}`,
    description: page?.excerpt,
    openGraph: {
      images: []
    }
  } satisfies Metadata
}

export default async function Page({ params }: Props) {
  const pageProps = await fetchPageProps(params)

  return <PageTemplate {...pageProps} />
}
