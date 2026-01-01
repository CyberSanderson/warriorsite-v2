import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Protection Guide | Spiritual Warfare Manual',
  description: 'A tactical guide to spiritual defense. 30 days of warfare prayers and scripture loadouts.',
}

export default function ProtectionGuidePage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGE GALLERY */}
        <div className="product-gallery">
            <div className="main-image-wrapper">
                <img src="/images/cover.webp" alt="The Protection Guide Cover" />
            </div>
            
            <div className="thumbnail-grid">
                <img src="/images/devine.webp" alt="Front Cover" className="thumbnail" style={{ borderColor: 'var(--accent-gold)' }} />
            </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="product-info-col">
            <span className="badge">Digital Arsenal</span>
            
            <h1 className="product-title">The Protection Guide</h1>
            <p className="product-subtitle">Tactical Spiritual Defense Manual</p>
            
            <div className="product-price-lg">$5.00</div>

            {/* UPDATED GUMROAD LINK */}
            <a 
                href="https://successfulfaith.gumroad.com/l/efiwxb" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Download Instant Access
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>The enemy doesn't rest. Neither should your defense.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    This isn't just a book to read; it's a manual to use. We have compiled the most potent scriptures and prayer strategies for spiritual warfare into one tactical guide.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Stop fighting blindly. Equip yourself with the specific Word of God for every situation.
                </p>

                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    What's Inside:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'var(--accent-gold)', marginRight: '10px' }}>⚔️</span> 
                        <strong>The Morning Protocol:</strong> How to armor up before you leave the house.
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'var(--accent-gold)', marginRight: '10px' }}>🛡️</span> 
                        <strong>30 Warfare Prayers:</strong> Specific prayers for anxiety, protection, and provision.
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'var(--accent-gold)', marginRight: '10px' }}>📜</span> 
                        <strong>Scripture Loadouts:</strong> Quick-reference Bible verses for moments of attack.
                    </li>
                </ul>

                <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', borderTop: '1px solid #333', paddingTop: '1rem' }}>
                    *This is a digital product (PDF). You will receive a secure download link immediately after purchase.
                </p>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginTop: '1rem' }}>
                Secure Checkout • Instant Delivery
            </p>
        </div>

    </main>
  )
}