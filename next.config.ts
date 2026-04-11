import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // ✅ Optimize CSS chunks
  experimental: {
    optimizeCss: true,
  },

  // ✅ Compress all assets
  compress: true,

  // ✅ Optimize images
  images: {
    unoptimized: true,   // keep this if using output: export
    formats: ["image/webp"],
  },

  // ✅ Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;