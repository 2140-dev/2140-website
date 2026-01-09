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
  return (
    <Section>
      <div
        className={variant === 'full' ? 'mx-auto px-5 lg:px-10 max-w-md' : ''}
      >
        <div
          className={
            variant === 'full' ? 'flex gap-10 justify-between relative' : ''
          }
        >
          <div
            className={classNames(
              'mb-20',
              variant === 'teaser'
                ? 'text-center mx-auto px-5 lg:px-10 max-w-sm'
                : 'basis-md px-0 lg:px-0 sticky top-20'
            )}
          >
            {eyebrow && <Eyebrow color="yellow" text={eyebrow} />}
            {title && (
              <h2 className="strikethrough-black underline-black">
                <MarkdownRender>{title}</MarkdownRender>
              </h2>
            )}
            {summary && <p>{summary}</p>}
          </div>
          <div
            className={classNames(
              'grid gap-8 mt-10 grid-cols-1',
              variant === 'teaser'
                ? 'max-w-md mx-auto px-5 lg:px-10 max-w-md sm:grid-cols-2'
                : 'md:grid-cols-2'
            )}
          >
            {team.map((member, index) => (
              <TeamMember
                key={`${member._id}-${index}`}
                team={member}
                variant={variant}
              />
            ))}
          </div>
        </div>
      </div>
      {additional && (
        <Container
          size="sm"
          className={classNames(
            'text-center',
            variant === 'full' ? 'mt-20' : 'mt-10'
          )}
        >
          <RichTextRenderer content={additional} />
        </Container>
      )}
    </Section>
  )
}

export default TeamMembers
