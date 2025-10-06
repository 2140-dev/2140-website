import '../styles/normalize.css'
import '../scss/index.scss'

import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { Footer } from 'app/shared/containers/footer/footer'
import { Header } from 'app/shared/containers/header/header'
import { SanityVisualEditing } from 'app/shared/components/sanity-visual-editing/sanity-visual-editing'
import { client } from 'sanity/lib/client'
import * as demo from 'sanity/lib/demo'
import { fetchSettings, fetchSettingsAndMenu } from 'sanity/lib/queries'
import { resolveOpenGraphImage } from 'sanity/lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSettings(client)
  const title = settings?.title || demo.title
  const ogImage = resolveOpenGraphImage(settings?.ogImage)

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

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { settings, menu } = await fetchSettingsAndMenu(client)
  const { isEnabled: isDraftMode } = await draftMode()

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
        <Header logo={settings.logo} items={menu.items} />
        {children}
        {isDraftMode && <SanityVisualEditing />}
        <Footer email={settings.email} disclaimer={settings.disclaimer} />
        <SpeedInsights />
      </body>
    </html>
  )
}
