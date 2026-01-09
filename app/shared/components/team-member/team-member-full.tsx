import { RichTextRenderer } from 'app/shared/components/rich-text-renderer/rich-text-renderer'
import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import Link from 'next/link'
import { TeamMemberProps } from '@/app/types/team'
import Image from 'next/image'

export const TeamMemberFull = ({ team }: Omit<TeamMemberProps, 'variant'>) => {
  return (
    <div className="max-w-[350px] mx-auto">
      <div className="flex items-center justify-center relative mb-5 pt-3">
        <div className="absolute">
          <OutlineCircle />
        </div>
        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
          <SanityImage image={team.picture} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <h4 className="mb-0.5">{team.name}</h4>
        {(team.github || team.x) && (
          <div className="flex gap-2">
            {team.github && (
              <Link target="_blank" href={team.github} className="w-5">
                <Image
                  height="20"
                  width="20"
                  src="images/icons/github-black.svg"
                  alt="Github icon"
                />
              </Link>
            )}
            {team.x && (
              <Link target="_blank" href={team.x} className="w-5">
                <Image
                  height="20"
                  width="20"
                  src="images/icons/twitter-black.svg"
                  alt="X icon"
                />
              </Link>
            )}
          </div>
        )}
      </div>
      <p className="mb-3 text-center text-gray-200 text-custom-s">{team.role}</p>
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
