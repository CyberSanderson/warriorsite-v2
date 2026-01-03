import Link from 'next/link'
import type { Metadata } from 'next'
import ProductGallery from '../../components/ProductGallery'

export const metadata: Metadata = {
  title: 'Jehovah Nissi Crewneck | Victory Standard Heavyweight',
  description: 'Exodus 17:15. Premium heavyweight Christian crewneck sweatshirt. The Lord is my Banner.',
}

export default function NissiCrewneckPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: DYNAMIC IMAGE GALLERY */}
        <ProductGallery 
          images={[
            // Adjust these filenames to match what you actually have in /public/images/
            { src: '/images/nissi-crew-front.webp', alt: 'Jehovah Nissi Crewneck Front' },
            { src: '/images/nissi-crew-back.webp', alt: 'Jehovah Nissi Crewneck Back Detail' }
          ]} 
        />

        {/* RIGHT: PRODUCT INFO */}
        <div className="product-info-col">
            <span className="badge">Warfare Collection</span>
            
            <h1 className="product-title">Jehovah Nissi Crewneck</h1>
            <p className="product-subtitle">Victory Standard Heavyweight</p>
            
            <div className="product-price-lg">$65.00</div>

            {/* BUY BUTTON LINKED TO FOURTHWALL */}
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
                    <strong>Wear your victory.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    This isn't just a sweatshirt; it's a standard raised against the enemy. The <strong>Jehovah Nissi Victory Crewneck</strong> is built for the colder seasons of life, reminding you that the battle belongs to the Lord.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Constructed from ultra-heavyweight fleece, this piece features the "Victory Standard" seal—a symbol that you fight from a place of triumph, not defeat.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Relaxed / Oversized Comfort Fit</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fabric:</strong> Heavyweight Cotton/Poly Fleece</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Detail:</strong> High-density embroidery/print</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Verse:</strong> Exodus 17:15</li>
                </ul>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
                Secure Checkout • Worldwide Shipping • Printed in the USA
            </p>
        </div>

    </main>
  )
}