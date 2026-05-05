'use client'

import { useDraftModeEnvironment } from 'next-sanity/hooks'
import { useRouter } from 'next/navigation'
import { useEffect, useTransition } from 'react'
import { toast } from 'sonner'
import { disableDraftMode } from '../../../lib/draft'

export function DraftModeToast() {
  const env = useDraftModeEnvironment()
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  useEffect(() => {
    if (['presentation-window', 'live'].includes(env)) {
      /**
       * We delay the toast in case we're inside Presentation Tool
       */
      const toastId = toast('Visual Editing Mode', {
        id: 'visual-editing-mode',
        description: `Content is currently displayed inside the Visual Editing window.`,
        duration: Infinity,
        dismissible: false,
        action: {
          label: 'Exit Mode',
          onClick: () =>
            startTransition(async () => {
              await disableDraftMode()
              startTransition(() => router.refresh())
            })
        }
      })

      return () => {
        toast.dismiss(toastId)
      }
    }
  }, [env, router])

  useEffect(() => {
    if (pending) {
      const toastId = toast.loading('Exiting Visual Editing...')
      return () => {
        toast.dismiss(toastId)
      }
    }
  }, [pending])

  return null
}
