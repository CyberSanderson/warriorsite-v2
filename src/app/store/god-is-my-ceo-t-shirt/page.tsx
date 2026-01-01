import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'God is my CEO | Vintage Gold Edition',
  description: 'Faith Over Hustle. Heavyweight Christian streetwear for the modern entrepreneur.',
}

export default function CEOProductPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGE GALLERY */}
        <div className="product-gallery">
            <div className="main-image-wrapper">
                <img src="/images/ceo-back.webp" alt="God is my CEO Back View" />
            </div>
            
            <div className="thumbnail-grid">
                <img src="/images/ceo-tee-front.webp" alt="Front View" className="thumbnail" />
                <img src="/images/ceo-tee-back.webp" alt="Back View" className="thumbnail" style={{ borderColor: 'var(--accent-gold)' }} />
            </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="product-info-col">
            <span className="badge">Success Collection</span>
            
            <h1 className="product-title">God is my CEO</h1>
            <p className="product-subtitle">Faith Over Hustle Edition</p>
            
            <div className="product-price-lg">$38.00</div>

            {/* BUY BUTTON - REPLACE HREF WITH YOUR ACTUAL FOURTHWALL LINK */}
            <a 
                href="https://successful-faith-shop.fourthwall.com/products/god-is-my-ceo-tee" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Purchase Now
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Your ambition needs an anchor.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    The world says "grind until you break." This tee says "I trust the One who builds."
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Printed in our signature <strong>Vintage Gold</strong> on a structured 6.5oz heavyweight tee, this isn't just clothing—it's a declaration of who really runs your life.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Boxy Streetwear Fit</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fabric:</strong> 6.5oz Heavyweight Cotton</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Detail:</strong> "Faith Over Hustle" Back Print</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Verse:</strong> Matthew 6:33 (Hem Tag Style)</li>
                </ul>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
                Secure Checkout • Worldwide Shipping • Printed in the USA
            </p>
        </div>

    </main>
  )
}