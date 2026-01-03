import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. Redirect /protection to Gumroad (Priority)
      {
        source: '/protection',
        destination: 'https://successfulfaith.gumroad.com/l/efiwxb',
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