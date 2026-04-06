import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Ignore TS error for undocumented turbopack option
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
