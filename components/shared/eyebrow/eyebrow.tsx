import classNames from 'classnames'
import { ReactNode } from 'react'

const colorClasses: Record<'yellow' | 'white' | 'black' | 'blue', string> = {
  yellow: 'text-yellow-300',
  black: 'text-black',
  white: 'text-white',
  blue: 'text-blue-100'
}

interface Props {
  color: 'yellow' | 'white' | 'black' | 'blue'
  text: string | ReactNode
  className?: string
}

export const Eyebrow = ({ color, text, className = '' }: Props) => {
  return (
    <span
      className={classNames(
        'inline-block uppercase tracking-wider mb-2 font-semibold text-custom-s',
        colorClasses[color],
        className
      )}
    >
      {text}
    </span>
  )
}
