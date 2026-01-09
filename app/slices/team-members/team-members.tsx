import { Eyebrow } from 'app/shared/components/eyebrow/eyebrow'
import { MarkdownRender } from 'app/shared/components/markdown-renderer/markdown-renderer'
import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { TeamMember } from 'app/shared/components/team-member/team-member'
import { Container } from 'app/shared/layouts/container/container'
import { Section } from 'app/shared/layouts/section/section'
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
  const gridClasses = classNames(
    'grid grid-cols-1 gap-8 mt-10',
    variant === 'teaser'
      ? 'sm:grid-cols-1 lg:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3'
  )

  return (
    <Section>
      <Container size="sm" className="text-center mb-20">
        {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
        {title && (
          <h2 className="strikethrough-black underline-black">
            <MarkdownRender>{title}</MarkdownRender>
          </h2>
        )}
        {summary && <p>{summary}</p>}
      </Container>
      <Container size="md" className={gridClasses}>
        {team.map((member, index) => (
          <TeamMember
            key={`${member._id}-${index}`}
            team={member}
            variant={variant}
          />
        ))}
      </Container>
      {additional && (
        <Container size="sm" className="text-center mt-10">
          <RichTextRenderer content={additional} />
        </Container>
      )}
    </Section>
  )
}

export default TeamMembers
