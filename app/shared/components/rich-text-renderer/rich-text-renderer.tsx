import type { PortableTextBlock } from 'sanity'
import Link from 'next/link'

import React from 'react'
import { Eyebrow } from '../eyebrow/eyebrow'
import styles from './rich-text-renderer.module.scss'
import classNames from 'classnames'
import {
  PortableText,
  // PortableTextBlock,
  PortableTextReactComponents
} from 'next-sanity'
const components: Partial<PortableTextReactComponents> = {
  block: {
    eyebrow: ({ children }) => <Eyebrow color="blue" text={children} />,
    h2: ({ children }) => (
      <h2 className="strike-black under-black">{children}</h2>
    ),
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    normal: ({ children }) => <p>{children}</p>
  },
  list: {
    bullet: ({ children }) => {
      return <ul>{children}</ul>
    },
    number: ({ children }) => {
      return <ol>{children}</ol>
    }
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
    <div className={classNames(styles['rich-text-renderer'], className)}>
      <PortableText value={content} components={components} />
    </div>
  )
}
