import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.successfulfaith.com'

  return [
    // --- MAIN PAGES ---
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // --- COLLECTIONS (The New Hubs) ---
    // These are High Priority because they direct traffic
    {
      url: `${baseUrl}/store/collections/warfare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/store/collections/success`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // --- WARFARE PRODUCTS (Updated Paths) ---
    {
      url: `${baseUrl}/store/collections/warfare/iron-sharpens-iron-t-shirt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/collections/warfare/armor-of-god-hoodie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/collections/warfare/jehovah-nissi-t-shirt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/collections/warfare/jehovah-nissi-crewneck`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/collections/warfare/protection-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // --- SUCCESS PRODUCTS (Updated Paths) ---
    {
      url: `${baseUrl}/store/collections/success/god-is-my-ceo-t-shirt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/collections/success/digital-planner`, // The New Planner Path
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // --- BLOG ---
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/command-the-morning`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // --- POLICIES ---
    {
      url: `${baseUrl}/policies/shipping-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/policies/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/policies/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/policies/terms-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}