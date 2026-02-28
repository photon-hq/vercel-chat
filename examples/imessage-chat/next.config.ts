import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["chat", "@chat-adapter/state-redis"],
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: "../..",
  },
};

export default nextConfig;
