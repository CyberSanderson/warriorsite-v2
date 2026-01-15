import Link from 'next/link'
import type { Metadata } from 'next'
// No gallery needed for a single PDF, just a static image is fine
// But we can use the Gallery component if you want consistency

export const metadata: Metadata = {
  title: 'Divine Protection Guide | Psalm 91 Prayer Strategy',
  description: 'A practical guide to praying Psalm 91 over your family and home. Digital download spiritual warfare resource.',
  keywords: ['Psalm 91 Prayer', 'Divine Protection', 'Spiritual Warfare Prayers', 'Christian PDF Resource'],
}

export default function ProtectionGuidePage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: STATIC IMAGE */}
        <div className="product-gallery">
             <img 
                src="/images/cover.webp" 
                alt="Divine Protection Guide Cover" 
                style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }}
            />
        </div>

        {/* RIGHT: INFO */}
        <div className="product-info-col">
            <span className="badge" style={{ background: '#d4af37', color: '#000' }}>Instant Download</span>
            
            <h1 className="product-title">Divine Protection Guide</h1>
            <p className="product-subtitle">Operating in the Authority of Psalm 91</p>
            
            <div className="product-price-lg">$5.00</div>

            {/* BUY BUTTON */}
            <a 
                href="https://successfulfaith.gumroad.com/l/efiwxb" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Download Now
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Don't just read Psalm 91. Activate it.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    Fear is the enemy's primary weapon. This guide provides you with the scriptural ammunition to secure your home, your mind, and your family against spiritual attacks.
                </p>
                <h3 style={{ fontSize: '1rem', color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Includes:</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>✓ <strong>The Daily "Hedge of Protection" Prayer</strong></li>
                    <li style={{ marginBottom: '0.5rem' }}>✓ <strong>Scriptures to Combat Night Terrors</strong></li>
                    <li style={{ marginBottom: '0.5rem' }}>✓ <strong>Anointing Your Home: A Step-by-Step Guide</strong></li>
                </ul>
            </div>
            
             <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginTop: '2rem' }}>
                *Digital PDF Product sent immediately via email.*
            </p>
        </div>
    </main>
  )
}