import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, studioUrl } from './api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NEXT_PUBLIC_SANITY_DATASET === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'published',
  stega: {
    studioUrl,
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }

      return props.filterDefault(props)
    }
  }
})
