import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { SanityImage } from 'types/image'

interface Props {
  image: SanityImage
  onClick?: () => void
}
export const Logo = ({ image, onClick }: Props) => (
  <div className="max-w-[100px] z-5">
    <Link href="/" onClick={onClick}>
      <Image
        alt={image?.alt || ''}
        width={0}
        height={0}
        src={urlForImage(image)?.fit('fill').url() as string}
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </Link>
  </div>
)
