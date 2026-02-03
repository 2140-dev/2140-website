import type { MenuQueryResult } from 'sanity.types'

// Step 1: unwrap the outer | null
type MenuQueryNonNull = NonNullable<MenuQueryResult>

// Step 2: derive nested types safely
export type InternalOrExternalLink = NonNullable<
  MenuQueryNonNull['items']
>[number]
export type InternalLink = NonNullable<InternalOrExternalLink['internal']>
export type ExternalLink = NonNullable<InternalOrExternalLink['external']>

export interface ResolvedInternalOrExternalLink {
  _key: string
  _type: string
  label: string
  href: string
}
