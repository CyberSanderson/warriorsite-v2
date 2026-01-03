import Link from 'next/link'
import type { Metadata } from 'next'
import ProductGallery from '../../components/ProductGallery'

export const metadata: Metadata = {
  title: 'Jehovah Nissi Heavyweight T-Shirt | Christian Streetwear',
  description: 'Exodus 17:15. Premium Christian graphic tee featuring Jehovah Nissi - The Lord is My Banner.',
}

export default function NissiProductPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: DYNAMIC IMAGE GALLERY */}
        <ProductGallery 
          images={[
            // I assumed the Back has the main design. If the Front does, swap these.
            { src: '/images/jehovah-nissi-back.webp', alt: 'Jehovah Nissi Back View - The Lord is My Banner' },
            { src: '/images/jehovah-nissi-front.webp', alt: 'Jehovah Nissi Front View' }
          ]} 
        />

        {/* RIGHT: PRODUCT INFO */}
        <div className="product-info-col">
            <span className="badge">Warfare Collection</span>
            
            <h1 className="product-title">Jehovah Nissi</h1>
            <p className="product-subtitle">The Lord Is My Banner</p>
            
            <div className="product-price-lg">$38.00</div>

            {/* BUY BUTTON - IMPORTANT: PASTE YOUR SPECIFIC LINK HERE */}
            <a 
                href="https://successful-faith-shop.fourthwall.com/products/jehovah-nissi-victory-standard-heavyweight-tee-tactical-christian-streetwear" 
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn-lg"
            >
                Purchase Now
            </a>

            {/* DESCRIPTION */}
            <div className="description-text" style={{ color: '#ddd', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Victory is already yours.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    When Moses raised his hands, Israel prevailed. When you wear this, you carry the banner of the One who has never lost a battle. 
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    This <strong>Heavyweight Streetwear Tee</strong> features the bold declaration <em>Jehovah Nissi</em> ("The Lord is My Banner")—a sign to the enemy that you fight under the protection of the Most High.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Boxy Streetwear Fit (Structured)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fabric:</strong> 6.5oz Heavyweight Cotton</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Design:</strong> Bold Typography & Sword Emblem</li>
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