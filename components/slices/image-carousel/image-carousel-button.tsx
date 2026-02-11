import classNames from 'classnames'
import { ReactElement } from 'react'

interface ImageCarouselButtonProps {
  onClick?: () => void
  icon: ReactElement
  label: string
  className?: string
}
export const ImageCarouselButton = ({
  onClick,
  icon,
  label,
  className
}: ImageCarouselButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'flex items-center justify-center',
        '2xl:absolute w-10 h-10 rounded-full cursor-pointer',
        'bg-black text-white transition-colors lg:hover:bg-yellow-400',
        className
      )}
      aria-label={label}
    >
      {icon}
    </button>
  )
}
