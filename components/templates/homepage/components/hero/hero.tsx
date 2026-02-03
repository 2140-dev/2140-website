import { Button } from 'components/shared/button/button'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { getInternalLinkUrl } from 'utils/link'
import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import { SanityImage } from 'types/image'
import { InternalLink } from 'types/link'
import classNames from 'classnames'

interface HeroProps {
  title: string
  excerpt?: string
  image: SanityImage
  link: InternalLink
}
export const Hero = ({ title, excerpt, image, link }: HeroProps) => {
  const src = urlForImage(image)?.url()
  return (
    <div className="overflow-hidden mb-20 lg:mb-0 min-h-screen 2xl:overflow-visible">
      <Container
        size="lg"
        className="items-center gap-16 min-h-screen justify-between relative lg:flex"
      >
        <div className="flex-1 pt-48 lg:pl-10 2xl:pl-20 2xl:pt-0">
          <h1 className="lg:text-[5rem] underline-yellow strikethrough-yellow text-custom-5xl">
            <MarkdownRender>{title}</MarkdownRender>
          </h1>
          {excerpt && <p className="text-custom-l">{excerpt}</p>}
          {link?.slug && link?.label && (
            <Button
              variant="primary"
              className="mt-10"
              href={getInternalLinkUrl(link)}
            >
              {link.label}
            </Button>
          )}
        </div>
        <div className="flex-1 z-10 max-w-[50rem] mx-auto">
          <div
            className={classNames(
              "left-[10%] md:left-auto md:right-[-8%] absolute top-0 -z-10 after:content-['']",
              'after:hidden lg:after:block after:bg-yellow-200 after:h-full after:left-[99%] after:absolute after:top-0 after:w-screen'
            )}
          >
            <img src="images/background.svg" alt="" />
          </div>
          {src && (
            <Image
              width={0}
              height={0}
              alt={image?.alt || ''}
              src={src}
              priority
              style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto'
              }}
            />
          )}
        </div>
      </Container>
    </div>
  )
}
