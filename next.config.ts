import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. PERFORMANCE SETTINGS
  experimental: {
    optimizeCss: true, // Keeps your "Network Dependency" fix
  },

  // 2. REDIRECTS
  async redirects() {
    return [
      // --- EXISTING REDIRECTS (Updated paths) ---
      {
        source: '/protection',
        // I updated this to point directly to the new warfare folder to avoid a "double redirect"
        destination: '/store/collections/warfare/protection-guide', 
        permanent: true,
      },
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },

      // --- NEW STRUCTURE REDIRECTS (The "Split" Strategy) ---

      // 1. Journal -> Planner Pivot
      {
        source: '/prayer-journal',
        destination: '/store/collections/success/digital-planner',
        permanent: true,
      },

      // 2. WARFARE COLLECTION (Redirecting old /store/ links)
      {
        source: '/store/iron-sharpens-iron-t-shirt',
        destination: '/store/collections/warfare/iron-sharpens-iron-t-shirt',
        permanent: true,
      },
      {
        source: '/store/armor-of-god-hoodie',
        destination: '/store/collections/warfare/armor-of-god-hoodie',
        permanent: true,
      },
      {
        source: '/store/jehovah-nissi-t-shirt',
        destination: '/store/collections/warfare/jehovah-nissi-t-shirt',
        permanent: true,
      },
      {
        source: '/store/jehovah-nissi-crewneck',
        destination: '/store/collections/warfare/jehovah-nissi-crewneck',
        permanent: true,
      },
      {
        source: '/store/protection-guide',
        destination: '/store/collections/warfare/protection-guide',
        permanent: true,
      },

      // 3. SUCCESS COLLECTION
      {
        source: '/store/god-is-my-ceo-t-shirt',
        destination: '/store/collections/success/god-is-my-ceo-t-shirt',
        permanent: true,
      },

      // 4. CATCH-ALL (If someone clicks "Store" in an old email, send them to Home to choose their path)
      {
        source: '/store',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;