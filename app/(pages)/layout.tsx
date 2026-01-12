import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { Footer } from 'app/shared/containers/footer/footer'
import { Header } from 'app/shared/containers/header/header'
import { SanityVisualEditing } from 'app/shared/components/sanity-visual-editing/sanity-visual-editing'
import { getSiteSettingsAndMenu } from '@/sanity/lib/queries'
import SettingsProvider from '../contexts/SettingsProvider'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}
export default async function RootLayout({ children }: RootLayoutProps) {
  const { settings, menu } = await getSiteSettingsAndMenu()
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
        <Header
          logo={settings.logo}
          items={menu?.items || []}
          donate={settings?.links?.donation}
        />
        <SettingsProvider settings={settings}>{children}</SettingsProvider>
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
