import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import { TeamResultType } from '@/sanity/lib/results'
import Link from 'next/link'
import styles from './team-member-full.module.scss'
import classNames from 'classnames'

interface Props {
  team: TeamResultType
}
export const TeamMemberFull = ({ team }: Props) => {
  return (
    <div className={styles.full}>
      <div className={styles['image-wrapper']}>
        <div className={styles.outline}>
          <OutlineCircle />
        </div>
        <div className={styles.avatar}>
          <SanityImage image={team.picture} />
        </div>
      </div>
      <div className={styles.header}>
        <h4 className={styles.name}>{team.name}</h4>
        {(team.github || team.x) && (
          <div className={styles.social}>
            {team.github && (
              <Link target="_blank" href={team.github} className={styles.icon}>
                <img src="images/icons/github-black.svg" alt="Github icon" />
              </Link>
            )}
            {team.x && (
              <Link target="_blank" href={team.x} className={styles.icon}>
                <img src="images/icons/twitter-black.svg" alt="X icon" />
              </Link>
            )}
          </div>
        )}
      </div>
      <p className={classNames(styles.role, 'text-s')}>{team.role}</p>
      <RichTextRenderer content={team.bio} />
    </div>
  )
}

const OutlineCircle = () => {
  return (
    <svg width="150" height="150" viewBox="0 0 130 130" fill="none">
      <circle
        cx="65"
        cy="65"
        r="54.5"
        style={{
          stroke: '#FBCC31',
          strokeWidth: 1,
          strokeDasharray: 280
        }}
      />
    </svg>
  )
}
