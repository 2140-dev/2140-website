import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io']
  },
  sassOptions: {
    prependData: `
				@import 'app/scss/global.scss';
			`
  }
}

export default nextConfig
