import { MetadataRoute } from 'next'
import { getAllPageSlugs } from '@/sanity/lib/queries'

const baseUrl = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPageSlugs()

  const pageEntries: MetadataRoute.Sitemap = (slugs ?? [])
    .filter((s) => s.slug)
    .map((s) => ({
      url: `${baseUrl}/${s.slug}`
    }))

  return [{ url: baseUrl }, ...pageEntries]
}
