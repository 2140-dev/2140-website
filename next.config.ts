import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  sassOptions: {
    prependData: `
				@import 'app/scss/global.scss';
			`
  },
  SC_DISABLE_SPEEDY: "false",
};

export default nextConfig;
