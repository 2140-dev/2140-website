import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  SC_DISABLE_SPEEDY: "false",
};

export default nextConfig;
