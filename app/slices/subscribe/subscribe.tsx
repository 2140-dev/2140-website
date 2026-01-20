'use client'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import { Eyebrow } from '../../shared/components/eyebrow/eyebrow'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import SettingsContext from '../../contexts/SettingsContext'

interface SubscribeProps {
  title: string
  description?: string
}

const Subscribe = ({ title, description }: SubscribeProps) => {
  const settings = useContext(SettingsContext)
  return (
    <Section>
      <Container size="sm" className="text-center">
        <Eyebrow text="Follow us" color="blue" />
        <h2>{title}</h2>
        <Container size="sm">
          {description && <p>{description}</p>}

          <div className="flex justify-center gap-20 mt-20">
            {settings?.links?.substack && (
              <Link
                href={settings.links.substack}
                target="_blank"
                className="no-underline"
              >
                <i className="h-20 w-20 bg-yellow-200 inline-flex items-center justify-center rounded-full">
                  <Image
                    src="images/icons/substack.svg"
                    alt="Substack icon"
                    height={20}
                    width={20}
                  />
                </i>
                <p className="text-custom-s mt-2 flex items-center justify-center gap-2">
                  Subscribe to our blog{' '}
                  <Image
                    height={16}
                    width={16}
                    src="images/icons/external-link.svg"
                    alt=""
                  />
                </p>
              </Link>
            )}
            {settings?.links?.twitter && (
              <Link
                href={settings.links.twitter}
                target="_blank"
                className="no-underline"
              >
                <i className="h-20 w-20 bg-yellow-200 inline-flex items-center justify-center rounded-full">
                  <Image
                    src="images/icons/twitter.svg"
                    alt="X icon"
                    height={20}
                    width={20}
                  />
                </i>
                <p className="text-custom-s mt-2 flex items-center justify-center gap-2">
                  Follow us on Twitter{' '}
                  <Image
                    height={16}
                    width={16}
                    src="images/icons/external-link.svg"
                    alt=""
                  />
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
