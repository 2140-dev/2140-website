import Link from 'next/link'

export const Credit = () => {
  return (
    <div className="relative z-2 bg-black px-5 md:px-10 2xl:px-20 py-2 text-center text-xs text-white/70 flex items-center justify-center gap-4">
      Designed & developed by{' '}
      <Link href="http://cherryale.dev/" target="_blank">
        <img src="images/credit.svg" alt="Logo of Cherry Ale" />
      </Link>
    </div>
  )
}
