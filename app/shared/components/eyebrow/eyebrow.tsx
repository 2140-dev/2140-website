import { cn } from 'app/utils/classname'
import { ReactNode } from 'react'
import styles from './eyebrow.module.scss'
import classNames from 'classnames'
const mapColorsToValues: Record<'yellow' | 'white' | 'black' | 'blue', string> =
  {
    yellow: '#eeba0e',
    black: '#212121',
    white: '#fff',
    blue: '#62ccef'
  }
interface Props {
  color: 'yellow' | 'white' | 'black' | 'blue'
  text: string | ReactNode
  className?: string
}
export const Eyebrow = ({ color, text, className = '' }: Props) => {
  return (
    <span
      color={mapColorsToValues[color]}
      className={classNames('text-s', styles.eyebrow, className)}
      style={{ color: mapColorsToValues[color] }}
    >
      {text}
    </span>
  )
}
