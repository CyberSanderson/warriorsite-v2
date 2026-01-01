import Link from 'next/link'

export default function Home() {
  return (
    <main>
        
        {/* HERO SECTION */}
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Equip Yourself <br /> For The Battle</h1>
                <p className="hero-subtitle">Premium Heavyweight Christian Streetwear.</p>
                <Link href="/store" className="cta-btn">
                    Shop The Collection
                </Link>
            </div>
        </section>

        {/* FEATURED COLLECTION */}
        <section className="featured-products container">
            <h2 className="section-title">The Armory</h2>
            
            <div className="product-grid">
                
                {/* Product 1: Iron Sharpens Iron */}
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
                        <h3>Iron Sharpens Iron</h3>
                        <p className="price">$38.00</p>
                    </div>
                </div>

                {/* Product 2: God is my CEO */}
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
                        <h3>God is my CEO</h3>
                        <p className="price">$38.00</p>
                    </div>
                </div>

                {/* Product 3: Armor of God Hoodie (Placeholder until updated) */}
                <div className="product-card">
                    <Link href="/store/armor-of-god-hoodie">
                        <div className="image-wrapper">
                            <img src="/images/angel-hoodie.webp" alt="Armor of God Hoodie" className="product-img" />
                            <div className="hover-overlay">
                                <span>View Product</span>
                            </div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3>Full Armor Hoodie</h3>
                        <p className="price">$65.00</p>
                    </div>
                </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Link href="/store" className="secondary-btn">
                    View All Products
                </Link>
            </div>
        </section>

        {/* MISSION STATEMENT */}
        <section className="mission-section">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                    Not Just Clothing. <br /> It's Ammunition.
                </h2>
                <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    Successful Faith is designed for the believer who understands that life is a spiritual battle.
                    We don't print on cheap shirts. We build <strong>heavyweight armor</strong> for the modern saint.
                    Wear your faith with authority.
                </p>
            </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter-section">
            <div className="container">
                <h3>Join The Ranks</h3>
                <p>Get exclusive access to new drops and daily scripture.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>

    </main>
  )
}
