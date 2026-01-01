import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full Armor of God Hoodie | Heavyweight Fleece',
  description: 'Ephesians 6:11. Premium 10oz heavyweight hoodie for spiritual defense.',
}

export default function HoodieProductPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGE GALLERY */}
        <div className="product-gallery">
            <div className="main-image-wrapper">
                <img src="/images/hoodie-front.webp" alt="Armor of God Hoodie" />
            </div>
            
            <div className="thumbnail-grid">
                <img src="/images/angel-hoodie.webp" alt="Front View" className="thumbnail" style={{ borderColor: 'var(--accent-gold)' }} />
                {/* Add back view image if you have it */}
            </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="product-info-col">
            <span className="badge">Winter Warfare</span>
            
            <h1 className="product-title">Full Armor Hoodie</h1>
            <p className="product-subtitle">Premium Heavyweight Fleece</p>
            
            <div className="product-price-lg">$65.00</div>

            {/* BUY BUTTON */}
            <a 
                href="https://successful-faith-shop.fourthwall.com/products/armor-of-god-hoodie" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Purchase Now
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Stand firm against the schemes.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    When the temperature drops, the battle doesn't stop. This isn't a cheap, thin promotional hoodie. This is a <strong>10oz Heavyweight Fleece</strong> designed to keep you warm in the physical and reminded of your defense in the spiritual.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Features the full "Armor of God" list on the back in our signature Gothic Typography.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Oversized / Relaxed</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Weight:</strong> 10oz Premium Fleece (Super Warm)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Detail:</strong> Ephesians 6:11 Back Print</li>
                </ul>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
                Secure Checkout • Worldwide Shipping • Printed in the USA
            </p>
        </div>

    </main>
  )
}