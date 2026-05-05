'use client'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import { Eyebrow } from '../../shared/eyebrow/eyebrow'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import SettingsContext from 'contexts/SettingsContext'
import classNames from 'classnames'
import { ExternalLink } from 'lucide-react'
import { Subscribe as SubscribeProps } from '../../../sanity.types'
import { SubstackIcon } from '../../shared/icons/substack-icon'
import { TwitterIcon } from '../../shared/icons/twitter-icon'
import { stegaClean } from 'next-sanity'

const cssClasses = {
  link: 'subscribe-link no-underline group',
  icon: 'h-20 w-20 transition-colors inline-flex items-center justify-center rounded-full'
}

const Subscribe = ({
  background = 'white',
  title,
  description
}: SubscribeProps) => {
  const settings = useContext(SettingsContext)

  const cleanBackground = stegaClean(background)
  const classes = {
    background: cleanBackground === 'yellow' ? 'bg-yellow-200' : 'bg-white',
    link:
      cleanBackground === 'yellow'
        ? 'bg-white text-yellow-200 group-hover:bg-black group-hover:text-white'
        : 'bg-yellow-200 text-white group-hover:bg-yellow-400'
  }
  return (
    <Section className={classes.background}>
      <Container size="sm" className="text-center">
        <Eyebrow
          text="Follow us"
          color={cleanBackground === 'yellow' ? 'white' : 'blue'}
        />
        <h2>{title}</h2>
        <Container size="sm">
          {description && <p>{description}</p>}

          <div className="flex justify-center gap-20 mt-20">
            {settings?.links?.substack && (
              <Link
                href={settings.links.substack}
                target="_blank"
                className={cssClasses.link}
              >
                <i className={classNames(classes.link, cssClasses.icon)}>
                  <SubstackIcon />
                </i>
                <p className="text-custom-s mt-2 flex items-center justify-center gap-1">
                  <span
                    className={classNames(
                      'subscribe-label',
                      'md:group-hover:after:w-[50%] md:group-hover:before:w-[50%]'
                    )}
                  >
                    Subscribe to our blog
                  </span>
                  <ExternalLink size={16} />
                </p>
              </Link>
            )}
            {settings?.links?.twitter && (
              <Link
                href={settings.links.twitter}
                target="_blank"
                className={cssClasses.link}
              >
                <i className={classNames(classes.link, cssClasses.icon)}>
                  <TwitterIcon />
                </i>
                <p className="text-custom-s mt-2 flex items-center justify-center gap-1">
                  <span
                    className={classNames(
                      'subscribe-label',
                      'md:group-hover:after:w-[50%] md:group-hover:before:w-[50%]'
                    )}
                  >
                    Follow us on Twitter
                  </span>
                  <ExternalLink size={16} />
                </p>
              </Link>
            )}
          </div>
        </Container>
      </Container>
    </Section>
  )
}

export default Subscribe
