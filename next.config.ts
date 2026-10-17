import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  devIndicators: false,

  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

};

export default nextConfig;
