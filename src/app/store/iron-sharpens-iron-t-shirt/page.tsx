import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iron Sharpens Iron | Heavyweight Christian Tee',
  description: 'Proverbs 27:17 Streetwear. Heavyweight 6.5oz cotton pump cover for spiritual warfare.',
}

export default function IronProductPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGE GALLERY */}
        <div className="product-gallery">
            <div className="main-image-wrapper">
                {/* UPDATED IMAGE */}
                <img src="/images/iron-back.webp" alt="Iron Sharpens Iron Back View" />
            </div>
            
            <div className="thumbnail-grid">
                {/* UPDATED THUMBNAILS */}
                <img src="/images/iron-front.webp" alt="Front View" className="thumbnail" />
                <img src="/images/iron-back.webp" alt="Back View" className="thumbnail" style={{ borderColor: 'var(--accent-gold)' }} />
            </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="product-info-col">
            <span className="badge">Brotherhood Collection</span>
            
            <h1 className="product-title">Iron Sharpens Iron</h1>
            <p className="product-subtitle">Heavyweight Streetwear Tee</p>
            
            <div className="product-price-lg">$38.00</div>

            {/* BUY BUTTON */}
            <a 
                href="https://successful-faith-shop.fourthwall.com/products/iron-sharpens-iron-proverbs-27-17-heavyweight-tee" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Purchase Now
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Sharpen your circle.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    You don’t build a legacy alone. Designed for the modern believer, this <strong>Heavyweight Christian Streetwear</strong> tee features a "Ghosted" Medieval Sword Crest on the back, symbolizing the battle for spiritual growth.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Built from 6.5oz sturdy cotton, this is the perfect <strong>Gym Pump Cover</strong> or lifestyle piece. The scripture <em>"Iron Sharpens Iron"</em> (Proverbs 27:17) curves along the blade—a reminder that true strength is forged in the fire.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Boxy Streetwear Fit (Structured & Relaxed)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fabric:</strong> Premium 6.5oz Heavyweight Cotton (No shrink)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Detail:</strong> Vintage Gold "Ghosted" Print on Black</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Verse:</strong> Proverbs 27:17 (The Brotherhood Verse)</li>
                </ul>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
                Secure Checkout • Worldwide Shipping • Printed in the USA
            </p>
        </div>

    </main>
  )
}