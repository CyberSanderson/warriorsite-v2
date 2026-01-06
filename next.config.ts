import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. PERFORMANCE SETTINGS
  experimental: {
    optimizeCss: true, // <--- This inlines the CSS to fix the "Network Dependency" warning
  },

  // 2. REDIRECTS
  async redirects() {
    return [
      // Redirect the old /protection link to your NEW internal page
      {
        source: '/protection',
        destination: '/store/protection-guide',
        permanent: true,
      },
      // Redirect any old .html links to the new path
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;