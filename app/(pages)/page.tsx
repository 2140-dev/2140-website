import { HomepageTemplate } from 'app/templates/homepage/homepage-template'

import { notFound } from 'next/navigation'
import { getHomepageProps, getSiteSettings } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { stripHTMLMarkup } from '../utils/markdown'
import { getPageMetadata } from '../utils/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const props = await getHomepageProps()
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

export default async function Homepage() {
  const props = await getHomepageProps()

  if (!props) {
    notFound()
  }

  return <HomepageTemplate {...props} />
}
