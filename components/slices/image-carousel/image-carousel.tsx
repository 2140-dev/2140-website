'use client'

import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { ImageCarousel as ImageCarouselType } from 'sanity.types'
import { InternalLink } from 'types/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageCarouselButton } from './image-carousel-button'

type ImageCarouselProps = ImageCarouselType & {
  link: InternalLink
}

const ImageCarousel = ({
  eyebrow,
  title,
  text,
  images
}: ImageCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <Section>
      <Container size="sm" className="flex flex-col text-center gap-20">
        <div>
          {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
          <h2 className="strikethrough-black underline-yellow">
            <MarkdownRender>{title}</MarkdownRender>
          </h2>
          {text && <RichTextRenderer content={text} />}
        </div>
      </Container>
      <Container
        size="md"
        className="mt-20 text-center relative 2xl:flex items-center"
      >
        {images && images.length > 0 && (
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="mb-10 2xl:mb-0 rounded-2xl"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="px-2">
                <Image
                  src={urlForImage(image)?.width(1000).height(667)?.url() || ''}
                  alt={image?.alt || ''}
                  width={1000}
                  height={667}
                  className="mx-auto rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="flex justify-center gap-2">
          <ImageCarouselButton
            icon={<ChevronLeft size={16} />}
            label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="left-0"
          />

          <ImageCarouselButton
            icon={<ChevronRight size={16} />}
            label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="right-0"
          />
        </div>
      </Container>
    </Section>
  )
}

export default ImageCarousel
