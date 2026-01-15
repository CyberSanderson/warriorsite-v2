import Link from 'next/link'
import type { Metadata } from 'next'
import ProductGallery from '../../../../components/ProductGallery' 

export const metadata: Metadata = {
  title: 'Jehovah Nissi Premium Crewneck | Christian Streetwear Fleece',
  description: 'Luxury heavyweight fleece featuring "The Lord is My Banner." Minimalist design, maximum comfort. The ultimate Christian crewneck.',
  keywords: ['Christian Crewneck', 'Religious Sweatshirt', 'Jehovah Nissi', 'Luxury Christian Apparel', 'Streetwear Fleece'],
}

export default function NissiCrewPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGES */}
        <ProductGallery 
          images={[
            { src: '/images/nissi-crew-front.webp', alt: 'Jehovah Nissi Crewneck Front' },
            { src: '/images/nissi-crew-folded.webp', alt: 'Premium Fleece Detail' }
          ]} 
        />

        {/* RIGHT: INFO */}
        <div className="product-info-col">
            <span className="badge" style={{ background: '#333', color: '#fff' }}>Warfare Collection</span>
            
            <h1 className="product-title">Jehovah Nissi Crewneck</h1>
            <p className="product-subtitle">Premium Heavyweight Fleece | Minimalist Edition</p>
            
            <div className="product-price-lg">$65.00</div>

            {/* BUY BUTTON */}
            <a 
                href="https://successful-faith-shop.fourthwall.com/products/jehovah-nissi-victory-standard-heavyweight-crewneck" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Purchase Now
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Warmth for the Watchman.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    This isn't your average bookstore sweatshirt. This is a premium, heavyweight fleece designed for the cold mornings when you're the first one up to pray.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Embroidered with <em>Jehovah Nissi</em> ("The Lord is My Banner"), it combines high-end streetwear aesthetics with deep biblical truth.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Feel:</strong> Ultra-Soft Interior, Rugged Exterior</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Weight:</strong> 10oz Premium Fleece</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Relaxed / True to Size</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Detail:</strong> Ribbed Cuffs and Hem</li>
                </ul>
            </div>
            
             <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginTop: '2rem' }}>
                Secure Checkout • Worldwide Shipping • Printed in the USA
            </p>
        </div>
    </main>
  )
}