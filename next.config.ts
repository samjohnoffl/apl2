import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'grainy-gradients.vercel.app'],
  },
  experimental: {
    // any experimental features can go here
  },
};

export default nextConfig;
