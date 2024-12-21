import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
    ],
  },
};

export default nextConfig;
