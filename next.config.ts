import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Ignore TS error for undocumented turbopack option
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
