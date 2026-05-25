import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'zenn.dev',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: '*zenn*',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/**',
    },
    ],
  },
};

export default nextConfig;
