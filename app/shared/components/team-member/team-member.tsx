import { Team } from 'sanity.types'
import { TeamMemberFull } from './team-member-full'
import { TeamMemberTeaser } from './team-member-teaser'

interface Props {
  variant?: 'teaser' | 'full'
  team: Team
}
export const TeamMember = ({ variant = 'teaser', team }: Props) => {
  return (
    <>
      {variant === 'teaser' ? (
        <TeamMemberTeaser team={team} />
      ) : (
        <TeamMemberFull team={team} />
      )}
    </>
  )
}
