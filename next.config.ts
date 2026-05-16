import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Some versions of Next.js expect this as a top-level key
  allowedDevOrigins: ['192.168.1.60', 'localhost:3000'],
};

export default nextConfig;
