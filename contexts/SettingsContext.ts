'use client'
import { createContext } from 'react'
import { SettingsQueryResult } from 'sanity.types'

const SettingsContext = createContext<SettingsQueryResult | null>(null)
export default SettingsContext
