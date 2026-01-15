import Link from 'next/link'
import type { Metadata } from 'next'
import ProductGallery from '../../../../components/ProductGallery' // Adjust path (../../..) depending on folder depth

export const metadata: Metadata = {
  title: 'Iron Sharpens Iron Heavyweight Tee | Proverbs 27:17 Gym Apparel',
  description: 'As iron sharpens iron, so one person sharpens another. Heavyweight Christian streetwear designed for the gym and the brotherhood.',
  keywords: ['Iron Sharpens Iron shirt', 'Proverbs 27:17', 'Christian Gym Wear', 'Mens Ministry', 'Spiritual Warfare'],
}

export default function IronProductPage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGES */}
        <ProductGallery 
          images={[
            { src: '/images/iron-back.webp', alt: 'Iron Sharpens Iron Back Print - Proverbs 27:17' },
            { src: '/images/iron-front.webp', alt: 'Successful Faith Chest Logo' }
          ]} 
        />

        {/* RIGHT: INFO */}
        <div className="product-info-col">
            <span className="badge" style={{ background: '#333', color: '#fff' }}>Warfare Collection</span>
            
            <h1 className="product-title">Iron Sharpens Iron</h1>
            <p className="product-subtitle">Proverbs 27:17 | The Brotherhood Tee</p>
            
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
                    <strong>Friction is necessary.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    You cannot sharpen a blade with a soft cloth. It requires hard metal, heat, and friction. The same is true for your spirit.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    This heavyweight tee is a reminder that you were not made to fight alone. Wear it to the gym or the war room as a signal that you are ready to be sharpened.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Scripture:</strong> "As iron sharpens iron..." (Prov 27:17)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Boxy / Oversized (Gym Ready)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fabric:</strong> 7.5oz Max Weight Cotton</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Purpose:</strong> Accountability & Strength</li>
                </ul>
            </div>
            
            {/* HIDDEN GEM KEYWORDS */}
            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
                <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>
                    Ideal for:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Gym Partners</span>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Men's Retreats</span>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Accountability Groups</span>
                </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginTop: '2rem' }}>
                Secure Checkout • Worldwide Shipping • Printed in the USA
            </p>
        </div>
    </main>
  )
}