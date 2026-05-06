import { RichTextRenderer } from 'components/shared/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'components/shared/sanity-image/sanity-image'
import Link from 'next/link'
import { TeamMemberProps } from 'types/team'
import { OutlineCircle } from '../outline-circle/outline-circle'
import { GithubIcon } from '../icons/github-icon'
import { TwitterIcon } from '../icons/twitter-icon'

export const TeamMemberFull = ({ team }: Omit<TeamMemberProps, 'variant'>) => {
  return (
    <div className="max-w-[350px] mx-auto">
      <div className="flex items-center justify-center relative mb-5 pt-3">
        <div className="absolute text-yellow-200">
          <OutlineCircle size="lg" />
        </div>
        <div className="w-25 h-25 overflow-hidden rounded-full">
          <SanityImage image={team.picture} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <h4 className="text-custom-l my-2">{team.name}</h4>
        {(team.github || team.x) && (
          <div className="flex gap-2">
            {team.github && (
              <Link
                target="_blank"
                href={team.github}
                title="Github"
                className="text-black md:hover:text-yellow-400"
              >
                <GithubIcon />
              </Link>
            )}
            {team.x && (
              <Link
                target="_blank"
                href={team.x}
                title="X"
                className="h-4 text-black md:hover:text-yellow-400"
              >
                <TwitterIcon />
              </Link>
            )}
          </div>
        )}
      </div>
      <p className="text-center text-gray-200 text-custom-s mb-5">
        {team.role}
      </p>
      <RichTextRenderer content={team.bio} />
    </div>
  )
}
