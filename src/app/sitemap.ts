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
      url: `${baseUrl}/store`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/prayer-journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // --- PRODUCTS ---
    {
      url: `${baseUrl}/store/iron-sharpens-iron-t-shirt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/god-is-my-ceo-t-shirt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/armor-of-god-hoodie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/jehovah-nissi-t-shirt`, // <--- NEW ADDITION
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/jehovah-nissi-crewneck`, // <--- NEW ADDITION
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store/protection-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
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
      url: `${baseUrl}/policies/terms-policy`, // Check: In your footer this is 'terms-policy', but commonly 'terms-of-service'
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}