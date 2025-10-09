'use client'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { AccordionItems } from 'app/types/accordion'
import React, { useState } from 'react'
import styles from './accordion.module.scss'
import classNames from 'classnames'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { CaretIcon } from '@/app/icons/caret'

const animationVariants = {
  initial: { height: 0 },
  animate: { height: 'auto' },
  exit: { height: 0 }
}

interface Props {
  items: AccordionItems
}
export const Accordion = ({ items }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleToggle = (panel: string) => () => {
    setExpanded(expanded === panel ? false : panel)
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item._key}
          className={classNames(
            styles.accordion,
            expanded === item._key ? styles.expanded : ''
          )}
        >
          <button
            id={item._key}
            aria-controls={`panel-${item._key}`}
            aria-expanded={expanded === item._key}
            onClick={handleToggle(item._key)}
            className={styles.summary}
          >
            <h5 className={styles.title}>{item.title}</h5>
            <span className={styles.icon}>
              <CaretIcon />
            </span>
          </button>
          <AnimatePresence mode="wait">
            {expanded === item._key && (
              <motion.div
                {...animationVariants}
                key={`panel-${item._key}`}
                className={styles.details}
              >
                <RichTextRenderer content={item.content} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  )
}
