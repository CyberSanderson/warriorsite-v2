import Link from 'next/link'
import type { Metadata } from 'next'
// 1. Import the reusable gallery component
import ProductGallery from '../../../../components/ProductGallery' 

export const metadata: Metadata = {
  title: 'God is my CEO | Vintage Gold Edition',
  description: 'Faith Over Hustle. Heavyweight Christian streetwear for the modern entrepreneur.',
}

export default function CEOProductPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: DYNAMIC IMAGE GALLERY */}
        <ProductGallery 
          images={[
            // 2. We put the Back image first so it shows as the main one
            { src: '/images/ceo-tee-back.webp', alt: 'God is my CEO Back View - Faith Over Hustle' },
            { src: '/images/ceo-tee-front.webp', alt: 'God is my CEO Front View' }
          ]} 
        />

        {/* RIGHT: PRODUCT INFO */}
        <div className="product-info-col">
            <span className="badge">Success Collection</span>
            
            <h1 className="product-title">God is my CEO</h1>
            <p className="product-subtitle">Faith Over Hustle Edition</p>
            
            <div className="product-price-lg">$36.99</div>

            {/* BUY BUTTON */}
            <a 
                href="https://successful-faith-shop.fourthwall.com/products/the-god-is-my-ceo-vintage-heavyweight-t-shirt-faith-over-hustle-edition" 
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