import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mcp/taste",
        destination: "/mcp/taste.html",
      },
    ];
  },
};

export default nextConfig;
