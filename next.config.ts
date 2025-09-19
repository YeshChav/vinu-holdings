import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingRoot: __dirname,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
