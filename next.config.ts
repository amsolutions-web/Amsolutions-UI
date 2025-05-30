import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com','avatars.githubusercontent.com','brandfetch.com'],
  },
};

export default nextConfig;
