import Link from 'next/link'
import type { Metadata } from 'next'
import ProductGallery from '../../../../components/ProductGallery' 

export const metadata: Metadata = {
  title: 'Jehovah Nissi T-Shirt | The Lord is My Banner | Christian Streetwear',
  description: 'Jehovah Nissi means "The Lord is My Banner." Wear your victory. Heavyweight Christian apparel featuring the Hebrew name of God from Exodus 17.',
  keywords: ['Jehovah Nissi shirt', 'The Lord is My Banner', 'Exodus 17:15', 'Hebrew Names of God', 'Christian Streetwear'],
}

export default function NissiTeePage() {
  return (
    <main className="product-page-container">
        
        {/* LEFT: IMAGES */}
        <ProductGallery 
          images={[
            { src: '/images/jehovah-nissi-back.webp', alt: 'Jehovah Nissi Front Print - The Lord is My Banner' },
            { src: '/images/jehovah-nissi-front.webp', alt: 'Heavyweight Fabric Detail' }
          ]} 
        />

        {/* RIGHT: INFO */}
        <div className="product-info-col">
            <span className="badge" style={{ background: '#333', color: '#fff' }}>Warfare Collection</span>
            
            <h1 className="product-title">Jehovah Nissi</h1>
            <p className="product-subtitle">"The Lord is My Banner" | Exodus 17:15</p>
            
            <div className="product-price-lg">$38.00</div>

            {/* BUY BUTTON */}
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
                    <strong>Victory has a name.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    When Moses defeated the Amalekites, he didn't build an altar to his own strength. He built it to <em>Jehovah Nissi</em>—The Lord Is My Banner.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    In ancient warfare, the banner was the rallying point. If the banner was standing, the army was winning. Wear this tee as a declaration that your victory is secured not by your hustle, but by His presence.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Design:</strong> Minimalist Hebrew/English Typography</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fit:</strong> Relaxed Streetwear Fit</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Fabric:</strong> 6.0oz Heavy Cotton</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Meaning:</strong> God is our Rallying Point</li>
                </ul>
            </div>
            
            {/* HIDDEN GEM KEYWORDS */}
            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
                <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>
                    Search tags:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Worship Leader Gift</span>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Spiritual Warfare</span>
                    <span style={{ fontSize: '0.75rem', color: '#888', background: '#111', padding: '4px 8px', borderRadius: '4px' }}>Victory Gear</span>
                </div>
            </div>
        </div>
    </main>
  )
}