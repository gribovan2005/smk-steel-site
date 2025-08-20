import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
