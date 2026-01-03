import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. Redirect the old /protection link to your NEW internal page
      {
        source: '/protection',
        destination: '/store/protection-guide', // <--- CHANGED THIS
        permanent: true,
      },
      // 2. Redirect any old .html links to the new path
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;