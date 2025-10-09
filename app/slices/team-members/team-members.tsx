import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { TeamMember } from 'app/shared/components/team-member/team-member'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
import styles from './team-members.module.scss'
import classNames from 'classnames'
import { TeamMembersProps } from '@/app/types/team'

const TeamMembers = ({
  eyebrow,
  variant = 'full',
  title,
  summary,
  team,
  additional
}: TeamMembersProps) => {
  return (
    <Section className={styles['team-members']}>
      <Container size="sm" className={styles.header}>
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        {title && (
          <h2 className="strike-black under-black">
            <MarkdownRender>{title}</MarkdownRender>
          </h2>
        )}
        {summary && <p>{summary}</p>}
      </Container>
      <Container size="md" className={classNames(styles.grid, styles[variant])}>
        {team.map((member, index) => (
          <TeamMember
            key={`${member._id}-${index}`}
            team={member}
            variant={variant}
          />
        ))}
      </Container>
      {additional && (
        <Container size="sm" className={styles.additional}>
          <RichTextRenderer content={additional} />
        </Container>
      )}
    </Section>
  )
}

export default TeamMembers
