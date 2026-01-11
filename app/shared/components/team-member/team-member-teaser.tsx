import { SanityImage } from 'app/shared/components/sanity-image/sanity-image'
import Link from 'next/link'
import { TeamMemberProps } from '@/app/types/team'
import Image from 'next/image'
import { OutlineCircle } from '../outline-circle/outline-circle'

export const TeamMemberTeaser = ({
  team
}: Omit<TeamMemberProps, 'variant'>) => {
  return (
    <div className="flex items-center bg-yellow-200 rounded-[8rem] gap-12 px-8 py-6">
      <div className="flex items-center justify-center rounded-full relative md:h-20 md:max-w-20">
        <div className="absolute text-white">
          <OutlineCircle size="md" />
        </div>
        <div className="rounded-full h-20 w-20 overflow-hidden">
          <SanityImage image={team.picture} />
        </div>
      </div>
      <div className="text-left">
        <p className="font-semibold m-0">{team.name}</p>
        <span className="text-custom-s m-0">{team.role}</span>
        {(team.github || team.x) && (
          <ul className="flex gap-4 list-none p-0 mt-4 mb-0">
            {team.github && (
              <li className="p-0 w-5">
                <Link target="_blank" href={team.github}>
                  <Image
                    height="20"
                    width="20"
                    src="images/icons/github.svg"
                    alt="Github icon"
                  />
                </Link>
              </li>
            )}
            {team.x && (
              <li className="p-0 w-5">
                <Link target="_blank" href={team.x}>
                  <Image
                    height="20"
                    width="20"
                    src="images/icons/twitter.svg"
                    alt="X icon"
                  />
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
