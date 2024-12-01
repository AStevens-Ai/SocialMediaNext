import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // You may want to add custom rewrites, redirects, or other configurations here
  async rewrites() {
    return [
      {
        source: "/profile/:userID",
        destination: "/profile/[userID]", // Dynamic routes handling
      },
    ];
  },
};

export default nextConfig;
