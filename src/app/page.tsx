import Link from 'next/link'
import Image from 'next/image' // <--- Added this import
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Successful Faith | Christian Streetwear',
  description: 'Equipping the modern saint for spiritual warfare and marketplace success.',
}

export default function Home() {
  return (
    <main>
        
        {/* HERO SECTION: THE WARRIOR CALL (OPTIMIZED) */}
        <section className="hero" style={{ 
            position: 'relative', // Required for fill images
            height: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 1rem',
            overflow: 'hidden' // Keeps the image from spilling out
        }}>
            
            {/* 1. THE OPTIMIZED BACKGROUND IMAGE */}
            <Image 
                src="/images/hero-bg.webp"
                alt="Christian Streetwear Background"
                fill
                priority={true} // <--- This fixes the LCP Error
                quality={85}
                style={{ 
                    objectFit: 'cover',
                    zIndex: -2 // Puts it behind everything
                }}
            />

            {/* 2. THE DARK GRADIENT OVERLAY */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8))',
                zIndex: -1 // Sits on top of image, behind text
            }} />

            {/* 3. THE CONTENT */}
            <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
                <h1 className="hero-title" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '4.5rem', marginBottom: '1rem', color: '#fff', letterSpacing: '2px', lineHeight: '1.1' }}>
                    Equip Yourself <br />
                    <span style={{ color: 'var(--accent-gold)' }}>For The Battle</span>
                </h1>
                <p className="hero-subtitle" style={{ fontSize: '1.4rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
                    Premium Heavyweight Armor for the Modern Saint.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="/about" className="secondary-btn" style={{ background: 'transparent', border: '1px solid #fff' }}>
                        Our Mission
                    </Link>
                    <Link href="/store" className="cta-btn">
                        Shop The Armory
                    </Link>
                </div>
            </div>
        </section>

        {/* SECTION 2: THE MANIFESTO */}
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

        {/* SECTION 3: THE ARSENAL (4-Item Grid) */}
        <section className="container" style={{ padding: '5rem 1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Drops</h2>
                <Link href="/store" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>View Full Store &rarr;</Link>
            </div>
            
            <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                
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
                        <p className="price">$36.99</p>
                    </div>
                </div>

                {/* 3. Armor of God Hoodie (Restored) */}
                <div className="product-card">
                    <Link href="/store/armor-of-god-hoodie">
                        <div className="image-wrapper">
                            <img src="/images/Angel-hoodie.webp" alt="Armor of God Hoodie" className="product-img" />
                            <div className="hover-overlay"><span>View Gear</span></div>
                        </div>
                    </Link>
                    <div className="product-details">
                        <h3>Full Armor Hoodie</h3>
                        <p className="price">$55.00</p>
                    </div>
                </div>

                {/* 4. Protection Guide ($5 Entry Point) */}
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

        {/* SECTION 4: SHARPEN YOUR SPIRIT (Pushes the Journal) */}
        <section style={{ background: '#0a0a0a', padding: '6rem 2rem', borderTop: '1px solid #222' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                        Enter The War Room
                    </h2>
                    <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Stop praying in circles. Start building a history with God. 
                        Our 30-Day Guided Prayer Journal is designed to help you focus your prayers, document your breakthroughs, and hear God clearly.
                    </p>
                    <Link href="/prayer-journal" className="secondary-btn">
                        Get The Journal ($15)
                    </Link>
                </div>
                <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                     <img 
                        src="/images/cover.webp" 
                        alt="30-Day Prayer Journal" 
                        style={{ maxWidth: '300px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid #333' }}
                     />
                </div>
            </div>
        </section>

    </main>
  )
}