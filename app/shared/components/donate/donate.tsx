'use client'
import Link from 'next/link'
import { Donate } from '../../../../sanity.types'

interface DonateProps {
  value: Donate
}

const DonateEmbed = ({ value }: DonateProps) => {
  return value?.settings ? (
    <div className="text-center my-10 max-w-100 mx-auto">
      <Link
        href={value.settings}
        target="blank"
        className="text-black font-semibold text-custom-l bg-yellow-200 rounded-full border border-yellow-200 inline-block p-6 no-underline transition hover:bg-white w-full"
      >
        Make a donation
      </Link>
      <p className="mt-4 text-gray-200 text-custom-s">
        Onchain and fiat methods
      </p>
    </div>
  ) : null
}

export default DonateEmbed
