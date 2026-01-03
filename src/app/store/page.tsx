import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Armory | Successful Faith',
  description: 'Heavyweight Christian Streetwear designed for spiritual warfare.',
}

export default function StorePage() {
  return (
    <main className="store-page">
        
        {/* HEADER */}
        <div className="store-header">
            <h1 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '3rem', marginBottom: '1rem' }}>The Armory</h1>
            <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
                Apparel designed for the battlefield. High-quality, heavyweight garments that speak the truth without saying a word.
            </p>
        </div>

        {/* PRODUCT GRID */}
        <section className="container" style={{ padding: '4rem 1rem' }}>
            <div className="product-grid">

                {/* PRODUCT 1: IRON SHARPENS IRON */}
                <div className="product-card">
                    <Link href="/store/iron-sharpens-iron-t-shirt">
                        <div className="image-wrapper">
                            <img src="/images/iron-back.webp" alt="Iron Sharpens Iron Tee" className="product-img" />
                            <div className="hover-overlay">
                                <span>View Product</span>
                            </div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3 className="product-title">Iron Sharpens Iron</h3>
                        <p className="product-price">$38.00</p>
                    </div>
                </div>

                {/* PRODUCT 2: GOD IS MY CEO */}
                <div className="product-card">
                    <Link href="/store/god-is-my-ceo-t-shirt">
                        <div className="image-wrapper">
                            <img src="/images/ceo-tee-back.webp" alt="God is my CEO Tee" className="product-img" />
                            <div className="hover-overlay">
                                <span>View Product</span>
                            </div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3 className="product-title">God is my CEO</h3>
                        <p className="product-price">$36.99</p>
                    </div>
                </div>

                {/* PRODUCT 3: JEHOVAH NISSI (NEW ADDITION) */}
                <div className="product-card">
                    {/* Make sure this href matches the folder name you created */}
                    <Link href="/store/jehovah-nissi-t-shirt"> 
                        <div className="image-wrapper">
                            <img src="/images/jehovah-nissi-back.webp" alt="Jehovah Nissi T-shirt" className="product-img" />
                            <div className="hover-overlay">
                                <span>View Product</span>
                            </div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3 className="product-title">Jehovah Nissi</h3>
                        <p className="product-price">$38.00</p>
                    </div>
                </div>

                {/* PRODUCT 4: ARMOR OF GOD HOODIE */}
                <div className="product-card">
                    <Link href="/store/armor-of-god-hoodie">
                        <div className="image-wrapper">
                            <img src="/images/Angel-hoodie.webp" alt="Armor of God Hoodie" className="product-img" />
                            <div className="hover-overlay">
                                <span>View Product</span>
                            </div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3 className="product-title">Full Armor Hoodie</h3>
                        <p className="product-price">$55.00</p>
                    </div>
                </div>

                {/* PRODUCT 5: PROTECTION GUIDE */}
                <div className="product-card">
                    <Link href="/store/protection-guide">
                        <div className="image-wrapper">
                            <img src="/images/cover.webp" alt="The Protection Guide" className="product-img" />
                            <div className="hover-overlay">
                                <span>View Product</span>
                            </div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3 className="product-title">The Protection Guide</h3>
                        <p className="product-price">$5.00</p>
                    </div>
                </div>

            </div>
        </section>

    </main>
  )
}