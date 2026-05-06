import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000';

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
