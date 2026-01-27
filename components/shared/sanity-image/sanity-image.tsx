import { SanityImage as SanityImageType } from 'types/image'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'

interface Props {
  image: SanityImageType
  className?: string
}
export const SanityImage = ({ image, className = '' }: Props) => {
  const src = urlForImage(image)?.url()
  return src ? (
    <Image
      className={className}
      src={src}
      width={100}
      height={100}
      style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
      alt={image?.alt || ''}
    />
  ) : null
}
