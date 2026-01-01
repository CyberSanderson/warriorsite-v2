import type { Metadata } from 'next'
import { Cinzel, Lato } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Successful Faith | Christian Streetwear',
  description: 'Equip yourself specifically for the battle. Premium Christian apparel and prayer tools.',
  icons: {
    icon: '/images/logo.webp', // <--- THIS SETS THE FAVICON
    apple: '/images/logo.webp', // <--- THIS SETS THE ICON FOR IPHONES
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lato.variable}`}>
        
        {/* GLOBAL NAVBAR */}
        <nav className="main-nav">
            <div className="nav-container">
                <a href="/" className="nav-brand">
                    {/* Next.js treats /public as the root for images */}
                    <img src="/images/logo.webp" alt="Successful Faith" className="nav-logo" />
                </a>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/store">The Armory</a>
                    <a href="/prayer-journal">Journal</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>

        {/* PAGE CONTENT INJECTED HERE */}
        {children}

        {/* GLOBAL FOOTER */}
        <footer className="site-footer">
            <div className="container footer-inner">
                
                <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', marginBottom: '2rem' }}>
                    
                    {/* Column 1: Brand */}
                    <div className="footer-branding" style={{ flex: 1, minWidth: '250px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Successful Faith</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Equipping the Saints for the work of ministry.<br />
                            Est. 2025
                        </p>
                        
                        <div style={{ marginTop: '1.5rem', borderLeft: '2px solid var(--accent-gold, #d4af37)', paddingLeft: '1rem' }}>
                            <p style={{ color: '#bbb', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                                <strong>Location:</strong><br />
                                New York, NY
                            </p>
                            <p style={{ color: '#bbb', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                <strong>Support:</strong> <a href="mailto:support@successfulfaith.com" style={{ color: '#fff', textDecoration: 'underline' }}>support@successfulfaith.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Links */}
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

      </body>
    </html>
  )
}
