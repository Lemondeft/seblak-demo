import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export — the site is fully prerendered, so it deploys
     as plain assets to Cloudflare Pages. */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
