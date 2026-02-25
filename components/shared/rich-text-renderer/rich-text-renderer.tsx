import type { PortableTextBlock } from 'sanity'
import Link from 'next/link'

import React from 'react'
import { Eyebrow } from '../eyebrow/eyebrow'
import { PortableText, PortableTextReactComponents } from 'next-sanity'
import classNames from 'classnames'
import DonateEmbed from '../donate/donate'

const components: Partial<PortableTextReactComponents> = {
  types: {
    donate: ({ value }) => <DonateEmbed value={value} />
  },
  block: {
    eyebrow: ({ children }) => <Eyebrow color="blue" text={children} />,
    h2: ({ children }) => (
      <h2 className="strikethrough-black underline-yellow">{children}</h2>
    ),
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    normal: ({ children }) => <p>{children}</p>
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-outside ml-6 my-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-outside ml-6 my-4">{children}</ol>
    )
  },
  marks: {
    strong: ({ children }) => <b>{children}</b>,
    em: ({ children }) => <i>{children}</i>,
    link: ({
      children,
      value
    }: {
      children: React.ReactNode
      value?: {
        href: string
      }
    }) => {
      if (value?.href) {
        return (
          <Link href={value.href} target="_blank">
            {children}
          </Link>
        )
      }

      // const type = value?.type;
      // if (type) {
      //   const link = value[type];
      //   const url = link?._type === "external" ? link?.url : ""; // getInternalLink(link?.document, link?.slug);

      //   if (url) {
      //     return <Link href={url}>{children}</Link>;
      //   }
      // }

      return children
    }
  }
}

interface Props {
  content: PortableTextBlock[]
  className?: string
}
export const RichTextRenderer = ({ content, className = '' }: Props) => {
  return (
    <div className={classNames('portable-text', className)}>
      <PortableText value={content} components={components} />
    </div>
  )
}
