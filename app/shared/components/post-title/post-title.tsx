import { Image } from 'app/types/image'
import { CoverImage } from 'app/shared/components/cover-image/cover-image'
import styles from './post-title.module.scss'
import classNames from 'classnames'

interface Props {
  title: string
  excerpt?: string | null
  image?: Image | null
  date?: string | null
}
export const PostTitle = ({ title, excerpt, image, date }: Props) => {
  return (
    <div
      className={classNames(
        'container-l text-center page-title',
        styles['post-title']
      )}
    >
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {excerpt && <p className="excerpt">{excerpt}</p>}
        {date && (
          <p className="date mt-2">
            {/* {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} */}
          </p>
        )}
      </div>
      {image && <CoverImage image={image} />}
    </div>
  )
}
