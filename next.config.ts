import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com','avatars.githubusercontent.com','cdn-images-1.medium.com'],
  },
};

export default nextConfig;
