import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Static HTML export for cPanel shared hosting
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
 
export default nextConfig;