import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        port: '',
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: '',
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: '',
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: '',
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        port: '',
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
