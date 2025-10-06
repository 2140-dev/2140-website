import React from 'react'
import styles from './container.module.scss'
import { cn } from 'app/utils/classname'
import classNames from 'classnames'

const WIDTH: Record<'lg' | 'md' | 'sm' | 'xs', number> = {
  lg: 1568,
  md: 1248,
  sm: 848,
  xs: 596
}

interface Props {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  children: React.ReactNode
  className?: string
}
export const Container = ({ size = 'md', className = '', children }: Props) => (
  <div
    className={classNames(styles.container, className)}
    style={{ maxWidth: WIDTH[size] }}
  >
    {children}
  </div>
)
