'use client'
import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { AccordionItems } from 'types/accordion'
import { useState } from 'react'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { CaretIcon } from '../icons/caret-icon'

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
            'shadow-none border border-black/[0.08] rounded-2xl my-3 p-6 transition-all duration-400 ease-in overflow-hidden bg-white hover:bg-yellow-50',
            expanded === item._key && 'bg-yellow-50'
          )}
        >
          <button
            id={item._key}
            aria-controls={`panel-${item._key}`}
            aria-expanded={expanded === item._key}
            onClick={handleToggle(item._key)}
            className="m-0 flex justify-between items-center w-full border-none bg-transparent cursor-pointer text-left"
          >
            <h5 className="m-0 pr-4">{item.title}</h5>
            <i
              className={classNames(
                'flex items-center justify-center transition-transform duration-300 ease',
                expanded === item._key && 'rotate-180'
              )}
            >
              <CaretIcon />
            </i>
          </button>
          <AnimatePresence mode="wait">
            {expanded === item._key && (
              <motion.div
                {...animationVariants}
                key={`panel-${item._key}`}
                className="bg-yellow-50 overflow-hidden [&>*:last-child]:mb-0"
              >
                <RichTextRenderer className="pt-5" content={item.content} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  )
}
