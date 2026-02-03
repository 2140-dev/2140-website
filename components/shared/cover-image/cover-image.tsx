import { Image } from 'next-sanity/image'

import { urlForImage } from '@/sanity/lib/utils'
import { SanityImage } from 'types/image'

interface CoverImageProps {
  image: SanityImage | null
  priority?: boolean
}

export const CoverImage = (props: CoverImageProps) => {
  const { image: source, priority } = props
  const src = urlForImage(source)?.url()

  if (src) {
    return (
      <div className="rounded-3xl mt-8 overflow-hidden">
        <Image
          width={0}
          height={0}
          alt={source?.alt || ''}
          src={urlForImage(source)?.url() as string}
          style={{
            width: '100%',
            maxWidth: '100%',
            height: '40%',
            objectFit: 'cover'
          }}
          priority={priority}
        />
      </div>
    )
  }

  return null
}
