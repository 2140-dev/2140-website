import React from 'react'
import classNames from 'classnames'

const WIDTH: Record<'lg' | 'md' | 'sm' | 'xs', string> = {
  lg: 'max-w-lg',
  md: 'max-w-md',
  sm: 'max-w-sm',
  xs: 'max-w-xs'
}

interface Props {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  children: React.ReactNode
  className?: string
}
export const Container = ({ size = 'md', className = '', children }: Props) => (
  <div className={classNames('mx-auto px-5 lg:px-10', WIDTH[size], className)}>
    {children}
  </div>
)
