import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.tildacdn.com" },
      { protocol: "https", hostname: "thb.tildacdn.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  output: "standalone",
};

export default nextConfig;
