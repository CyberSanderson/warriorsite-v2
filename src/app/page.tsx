import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Successful Faith | Faith Over Fear',
  description: 'Equipping the modern saint for spiritual warfare and marketplace success.',
}

export default function Home() {
  return (
    <main>
        
        {/* HERO SECTION: IDENTITY FOCUS */}
        <section className="hero" style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("/images/hero-bg.webp")', // Ensure you have a hero-bg.webp or remove this line to use CSS fallback
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 1rem'
        }}>
            <div className="hero-content">
                <h1 className="hero-title" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '4.5rem', marginBottom: '1rem', color: '#fff', letterSpacing: '2px' }}>
                    Faith <span style={{ color: 'var(--accent-gold)' }}>X</span> Success
                </h1>
                <p className="hero-subtitle" style={{ fontSize: '1.4rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '700px', lineHeight: '1.6' }}>
                    We bridge the gap between spiritual warfare and marketplace excellence.
                    <br />
                    <strong>Pray Hard. Work Smart. Stand Firm.</strong>
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="/about" className="secondary-btn" style={{ background: 'transparent', border: '1px solid #fff' }}>
                        Our Mission
                    </Link>
                    <Link href="/store" className="cta-btn">
                        Equip Yourself
                    </Link>
                </div>
            </div>
        </section>

        {/* SECTION 2: THE MANIFESTO (MOVED UP) */}
        <section style={{ background: '#111', padding: '6rem 2rem', textAlign: 'center', borderBottom: '1px solid #222' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '2.2rem' }}>
                    Not Just Clothing. <br /> It's Ammunition.
                </h2>
                <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.15rem' }}>
                    Successful Faith is designed for the believer who understands that life is a spiritual battle.
                    Whether you are in the boardroom or the war room, you need to be equipped.
                    We build <strong>heavyweight armor</strong> and <strong>spiritual tools</strong> for the modern saint.
                </p>
            </div>
        </section>

          {/* SECTION 3: THE ARMORY */}
        <section className="container" style={{ padding: '5rem 1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                <h2 className="section-title" style={{ marginBottom: 0 }}>The Arsenal</h2>
                <Link href="/store" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>View Full Store &rarr;</Link>
            </div>
            
            {/* UPDATED TO 4-ITEM GRID */}
            <div className="product-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem' 
            }}>
                
                {/* 1. Iron Sharpens Iron */}
                <div className="product-card">
                    <Link href="/store/iron-sharpens-iron-t-shirt">
                        <div className="image-wrapper">
                            <img src="/images/iron-back.webp" alt="Iron Sharpens Iron Tee" className="product-img" />
                            <div className="hover-overlay"><span>View Gear</span></div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3>Iron Sharpens Iron</h3>
                        <p className="price">$38.00</p>
                    </div>
                </div>

                {/* 2. God is my CEO */}
                <div className="product-card">
                    <Link href="/store/god-is-my-ceo-t-shirt">
                        <div className="image-wrapper">
                            <img src="/images/ceo-tee-back.webp" alt="God is my CEO Tee" className="product-img" />
                            <div className="hover-overlay"><span>View Gear</span></div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3>God is my CEO</h3>
                        <p className="price">$38.00</p>
                    </div>
                </div>

                {/* 3. Armor of God Hoodie (RESTORED) */}
                <div className="product-card">
                    <Link href="/store/armor-of-god-hoodie">
                        <div className="image-wrapper">
                            <img src="/images/Angel-hoodie.webp" alt="Armor of God Hoodie" className="product-img" />
                            <div className="hover-overlay"><span>View Gear</span></div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3>Full Armor Hoodie</h3>
                        <p className="price">$65.00</p>
                    </div>
                </div>

                {/* 4. The Protection Guide ($5 ENTRY POINT) */}
                <div className="product-card">
                    <Link href="/store/protection-guide">
                        <div className="image-wrapper">
                            <img src="/images/cover.webp" alt="Protection Guide" className="product-img" />
                            <div className="hover-overlay"><span>Download Now</span></div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3 style={{ color: 'var(--accent-gold)' }}>Protection Guide</h3>
                        <p className="price">$5.00</p>
                    </div>
                </div>

            </div>
        </section>

        {/* SECTION 4: SPIRITUAL RESOURCES (New Section) */}
        <section style={{ background: '#0a0a0a', padding: '6rem 2rem', borderTop: '1px solid #222' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                        Sharpen Your Spirit
                    </h2>
                    <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '2rem' }}>
                        We don't just sell shirts; we teach strategy. Access our free guides, prayer journals, and warfare tactics to keep your mind sharp.
                    </p>
                    <Link href="/prayer-journal" className="secondary-btn">
                        Enter The War Room
                    </Link>
                </div>
                <div style={{ flex: '1 1 400px', background: '#111', padding: '2rem', border: '1px solid #333' }}>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>The Protection Guide</h3>
                    <p style={{ color: '#888', marginBottom: '1.5rem' }}>
                        A tactical manual for spiritual defense. 30 days of scripture loadouts.
                    </p>
                    <Link href="/store/protection-guide" style={{ color: '#fff', textDecoration: 'underline' }}>
                        Download Manual ($5) &rarr;
                    </Link>
                </div>
            </div>
        </section>

    </main>
  )
}
