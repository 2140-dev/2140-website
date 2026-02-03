import { Team, TeamMembers } from 'sanity.types'

export type TeamMembersProps = Omit<NonNullable<TeamMembers>, 'team'> & {
  team: Team[]
}

export type TeamMemberProps = {
  variant?: 'teaser' | 'full'
  team: Team
}
