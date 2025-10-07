import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import { TeamResultType } from '@/sanity/lib/results'
import Link from 'next/link'
import styles from './team-member-teaser.module.scss'
import classNames from 'classnames'

interface Props {
  team: Omit<TeamResultType, 'bio'>
}
export const TeamMemberTeaser = ({ team }: Props) => {
  return (
    <div className={styles.teaser}>
      <div className={styles['image-wrapper']}>
        <div className={styles.outline}>
          <OutlineCircle />
        </div>
        <div className={styles.image}>
          <SanityImage image={team.picture} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{team.name}</p>
        <span className={classNames('text-s', styles.role)}>{team.role}</span>
        {(team.github || team.x) && (
          <ul className={styles.social}>
            {team.github && (
              <li>
                <Link target="_blank" href={team.github}>
                  <img src="images/icons/github.svg" alt="Github icon" />
                </Link>
              </li>
            )}
            {team.x && (
              <li>
                <Link target="_blank" href={team.x}>
                  <img src="images/icons/twitter.svg" alt="X icon" />
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

const OutlineCircle = () => {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle
        cx="55"
        cy="55"
        r="54.5"
        style={{
          stroke: '#fff',
          strokeWidth: 1,
          strokeDasharray: 280
        }}
      />
    </svg>
  )
}
