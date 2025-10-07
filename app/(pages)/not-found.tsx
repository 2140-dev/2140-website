import { NotFoundTemplate } from 'app/templates/not-found/not-found-template'
import { client } from '@/sanity/lib/client'
import { getPageNotFoundProps } from '@/sanity/lib/queries'

export default async function NotFound() {
  const props = await getPageNotFoundProps(client)

  return <NotFoundTemplate {...props} />
}
