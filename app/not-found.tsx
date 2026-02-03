import { NotFoundTemplate } from 'components/templates/not-found/not-found-template'
import { getPageNotFoundProps, getSiteSettings } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { getPageMetadata } from 'utils/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()

  if (!settings) {
    return {}
  }

  const description =
    'The page you were looking for either does not exist or has been delete. We apologize for the confusion.'

  return getPageMetadata({
    title: 'Page not found',
    description,
    settings
  })
}

export default async function NotFound() {
  const props = await getPageNotFoundProps()

  return <NotFoundTemplate {...props} />
}
