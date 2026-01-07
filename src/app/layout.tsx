import type { Metadata } from 'next'
import { Cinzel, Lato } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SupportBubble from './components/SupportBubble' // <--- 1. IMPORT ADDED HERE

// 1. Optimize Fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

// 2. SEO & METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://www.successfulfaith.com'),
  
  title: {
    template: '%s | Successful Faith',
    default: 'Successful Faith | Christian Streetwear',
  },
  description: 'Equip yourself specifically for the battle. Premium Christian apparel and prayer tools.',
  
  alternates: {
    canonical: './',
  },
  
  icons: {
    icon: '/images/logo.webp', 
    apple: '/images/logo.webp', 
  },
  
  openGraph: {
    title: 'Successful Faith',
    description: 'Equipping the modern saint for spiritual warfare.',
    url: 'https://www.successfulfaith.com',
    siteName: 'Successful Faith',
    locale: 'en_US',
    type: 'website',
  },
}

// 3. JSON-LD BUSINESS DATA
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Successful Faith',
  url: 'https://www.successfulfaith.com',
  logo: 'https://www.successfulfaith.com/images/logo.webp',
  description: 'Equipping the modern saint for spiritual warfare and marketplace success.',
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@successfulfaith.com',
    contactType: 'customer support'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lato.variable}`}>
        
        {/* --- GOOGLE ANALYTICS START --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LBQMYKJHE0"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LBQMYKJHE0');
          `}
        </Script>
        {/* --- GOOGLE ANALYTICS END --- */}

        {/* JSON-LD Script for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* GLOBAL NAVBAR */}
        <nav className="main-nav">
            <div className="nav-container">
                <a href="/" className="nav-brand">
                    <img src="/images/logo.webp" alt="Successful Faith" className="nav-logo" />
                </a>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/store">The Armory</a>
                    <a href="/prayer-journal">Journal</a>
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

        {/* GLOBAL FOOTER */}
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', marginBottom: '2rem' }}>
                    
                    <div className="footer-branding" style={{ flex: 1, minWidth: '250px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Successful Faith</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Equipping the Saints for the work of ministry.<br />
                            Est. 2025
                        </p>
                        <div style={{ marginTop: '1.5rem', borderLeft: '2px solid var(--accent-gold, #d4af37)', paddingLeft: '1rem' }}>
                            <p style={{ color: '#bbb', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                                <strong>Location:</strong><br />New York, NY
                            </p>
                            <p style={{ color: '#bbb', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                <strong>Support:</strong> <a href="mailto:support@successfulfaith.com" style={{ color: '#fff', textDecoration: 'underline' }}>support@successfulfaith.com</a>
                            </p>
                        </div>
                    </div>

                    <div className="footer-links" style={{ minWidth: '200px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Customer Care</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <a href="/policies/refund-policy" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Refund Policy</a>
                            <a href="/policies/shipping-policy" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Shipping Info</a>
                            <a href="/policies/terms-policy" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
                            <a href="/about" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</a>
                        </div>
                    </div>
                </div>

                <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p className="footer-note" style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>
                        © {new Date().getFullYear()} Successful Faith™. All rights reserved.
                    </p>
                    <div style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '1px' }}>
                        SECURE CHECKOUT
                    </div>
                </div>
            </div>
        </footer>

        {/* --- 2. SUPPORT BUBBLE ADDED HERE --- */}
        <SupportBubble />

      </body>
    </html>
  )
}
