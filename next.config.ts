import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/solutions/**",
      },
      {
        pathname: "/images/hero-architecture.jpg",
        search: "",
      },
    ],
  },
};

export default nextConfig;
