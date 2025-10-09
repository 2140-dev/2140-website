import '../styles/normalize.css'
import '../scss/index.scss'

import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { Footer } from 'app/shared/containers/footer/footer'
import { Header } from 'app/shared/containers/header/header'
import { SanityVisualEditing } from 'app/shared/components/sanity-visual-editing/sanity-visual-editing'
import { client } from '@/sanity/lib/client'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'
import { getSiteSettings, getSiteSettingsAndMenu } from '@/sanity/lib/queries'
import { PortableTextBlock } from 'sanity'

export const generateMetadata = async (): Promise<Metadata> => {
  const settings = await getSiteSettings(client)
  if (settings) {
    const title = settings.title
    const ogImage = resolveOpenGraphImage(settings.ogImage)
    return {
      title: {
        template: `%s | ${title}`,
        default: title
      },
      description: settings?.description,
      openGraph: {
        images: ogImage ? [ogImage] : []
      }
    }
  }

  // fallback for empty dataset
  return {
    title: 'Missing title',
    description: 'Missing site description.',
    openGraph: {
      images: []
    }
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { settings, menu } = await getSiteSettingsAndMenu(client)
  const { isEnabled: isDraftMode } = await draftMode()

  if (!settings) {
    throw new Error('Settings cannot be empty.')
  }

  if (!menu) {
    throw new Error('Menu cannot be empty.')
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header logo={settings.logo} items={menu?.items || []} />
        {children}
        {isDraftMode && <SanityVisualEditing />}
        <Footer
          gpg={settings?.gpg}
          email={settings.email}
          disclaimer={settings.disclaimer}
        />
        <SpeedInsights />
      </body>
    </html>
  )
}
