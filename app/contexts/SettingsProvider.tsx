'use client'

import { ReactNode } from 'react'
import SettingsContext from './SettingsContext'
import { SettingsQueryResult } from '../../sanity.types'

interface SettingsProviderProps {
  settings: SettingsQueryResult
  children: ReactNode
}

export default function SettingsProvider({
  settings,
  children
}: SettingsProviderProps) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}
