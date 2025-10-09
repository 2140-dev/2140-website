import { HomepageTemplate } from 'app/templates/homepage/homepage-template'
import { client } from '@/sanity/lib/client'

import { notFound } from 'next/navigation'
import { getHomepageProps } from '@/sanity/lib/queries'

export default async function Homepage() {
  const props = await getHomepageProps(client)

  if (!props) {
    notFound()
  }

  return <HomepageTemplate {...props} />
}
