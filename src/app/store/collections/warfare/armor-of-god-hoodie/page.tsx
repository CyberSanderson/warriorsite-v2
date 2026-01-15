import Link from 'next/link'
import type { Metadata } from 'next'
import ProductGallery from '../../../../components/ProductGallery' 

export const metadata: Metadata = {
  title: 'Full Armor of God Hoodie | Joshua 1:9 Heavyweight',
  description: 'Be Strong and Courageous. A premium heavyweight hoodie for spiritual warfare. Featuring Joshua 1:9 and the Armor of God symbolism.',
  keywords: ['Armor of God Hoodie', 'Joshua 1:9', 'Christian Streetwear', 'Spiritual Warfare', 'Heavyweight Hoodie'],
}

export default function ArmorProductPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGES */}
        <ProductGallery 
          images={[
            { src: '/images/armor-hoodie-back.webp', alt: 'Armor of God Back Print' },
            { src: '/images/armor-hoodie-front.webp', alt: 'Be Strong and Courageous Front' }
          ]} 
        />

        {/* RIGHT: INFO */}
        <div className="product-info-col">
            <span className="badge" style={{ background: '#333', color: '#fff' }}>Warfare Collection</span>
            
            <h1 className="product-title">The Armor of God</h1>
            <p className="product-subtitle">Joshua 1:9 | Heavyweight Fortress Hoodie</p>
            
            <div className="product-price-lg">$65.00</div>

            {/* BUY BUTTON */}
            <a 
                href="YOUR_FOURTHWALL_LINK_HERE" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Purchase Now
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>We do not wrestle against flesh and blood.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    This isn't just a hoodie; it's a fortress. Built with ultra-heavyweight cotton, it serves as a physical reminder of a spiritual reality: You must put on the full armor daily.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Featuring the command from Joshua 1:9 to "Be Strong and Courageous," this piece is designed for the modern watchman.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Scripture:</strong> Joshua 1:9 / Ephesians 6</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Feel:</strong> Heavy, Protective, Premium</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fabric:</strong> 13.5oz Cross-Grain Fleece (Very Heavy)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> True to Size (Boxy)</li>
                </ul>
            </div>
            
            {/* HIDDEN GEM KEYWORDS */}
            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
                <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>
                    Search tags:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Spiritual Warfare</span>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Ephesians 6</span>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Prayer Closet Gear</span>
                </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginTop: '2rem' }}>
                Secure Checkout • Worldwide Shipping • Printed in the USA
            </p>
        </div>
    </main>
  )
}