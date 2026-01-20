import type { Metadata } from 'next'

import { getPageProps, getSiteSettings } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { PageTemplate } from '@/app/templates/page/page-template'
import { stripHTMLMarkup } from '../../utils/markdown'
import { getPageMetadata } from '../../utils/metadata'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const props = await getPageProps(params)
  const settings = await getSiteSettings()

  if (!props || !settings) {
    return {}
  }

  return getPageMetadata({
    title: stripHTMLMarkup(props.title),
    description: props?.excerpt || '',
    settings
  })
}

export default async function Page({ params }: Props) {
  const props = await getPageProps(params)

  if (!props) {
    notFound()
  }

  return <PageTemplate {...props} />
}
