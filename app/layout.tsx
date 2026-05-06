import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { draftMode } from 'next/headers'

import { Footer } from 'components/shared/layouts/footer/footer'
import { Header } from 'components/shared/layouts/header/header'
import { getSiteSettingsAndMenu } from '@/sanity/lib/queries'
import SettingsProvider from 'contexts/SettingsProvider'
import { ReactNode } from 'react'
import { Credit } from '../components/shared/credit/credit'
import { SanityLive } from '../sanity/lib/live'
import { VisualEditing } from 'next-sanity/visual-editing'
import { Toaster } from 'sonner'
import { handleError } from '../utils/error'
import { DraftModeToast } from '../components/shared/draft-mode-toast/draft-mode-toast'

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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header
          logo={settings.logo}
          items={menu?.items || []}
          donate={settings?.links?.donation}
        />
        <main>
          <SettingsProvider settings={settings}>{children}</SettingsProvider>
        </main>
        {isDraftMode && (
          <>
            <SanityLive onError={handleError} />
            <DraftModeToast />
            <VisualEditing />
          </>
        )}
        <Footer
          gpg={settings?.gpg}
          email={settings.email}
          disclaimer={settings.disclaimer}
        />
        <Credit />
        <Toaster position="bottom-right" richColors />
        <SpeedInsights />
      </body>
    </html>
  )
}
