import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Successful Faith | Battle Ready & Kingdom Minded',
  description: 'Equipping the modern saint for the War Room and the Boardroom. Premium spiritual warfare apparel and Kingdom entrepreneur tools.',
}

export default function Home() {
  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>

      {/* 1. HERO SECTION (THE TRAFFIC COP) */}
      <section style={{ 
        height: '90vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Background Texture Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, zIndex: 0 }}>
             <Image 
                src="/images/hero-bg.webp" 
                alt="Background Texture" 
                fill 
                style={{ objectFit: 'cover' }}
                priority
             />
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
            <h1 style={{ 
                fontFamily: 'var(--font-cinzel), serif', 
                fontSize: 'clamp(3rem, 8vw, 6rem)', 
                lineHeight: '1', 
                marginBottom: '1.5rem',
                letterSpacing: '-2px'
            }}>
                BATTLE READY. <br/>
                <span style={{ color: '#d4af37' }}>KINGDOM MINDED.</span>
            </h1>
            
            <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                Apparel and tools for the War Room and the Boardroom. <br/>
                Choose your path.
            </p>

            {/* THE SPLIT BUTTONS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            
                {/* BUTTON 1: WARFARE (Links to Warfare Collection) */}
                <Link href="/store/collections/warfare" style={{ textDecoration: 'none' }}>
                    <div style={{ 
                        padding: '2rem 3rem', 
                        border: '1px solid #333', 
                        borderRadius: '4px', 
                        background: '#111',
                        minWidth: '280px',
                        transition: 'transform 0.2s',
                        cursor: 'pointer'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff', fontFamily: 'var(--font-cinzel)' }}>WARFARE</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>Gym. Spiritual Combat. Grit.</p>
                        <span style={{ display: 'block', marginTop: '1rem', color: '#fff', textDecoration: 'underline' }}>Shop Collection →</span>
                    </div>
                </Link>

                {/* BUTTON 2: SUCCESS (Links to Success Collection) */}
                <Link href="/store/collections/success" style={{ textDecoration: 'none' }}>
                    <div style={{ 
                        padding: '2rem 3rem', 
                        border: '1px solid #d4af37', 
                        borderRadius: '4px', 
                        background: '#000',
                        minWidth: '280px',
                        transition: 'transform 0.2s',
                        cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#d4af37', fontFamily: 'var(--font-cinzel)' }}>SUCCESS</h3>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Business. Stewardship. Legacy.</p>
                        <span style={{ display: 'block', marginTop: '1rem', color: '#d4af37', textDecoration: 'underline' }}>Shop Collection →</span>
                    </div>
                </Link>

            </div>
        </div>
      </section>

      {/* 2. FEATURED BEST SELLERS (3 Pillars: Iron, CEO, Planner) */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-cinzel), serif', fontSize: '2.5rem', marginBottom: '4rem' }}>
          Current Best Sellers
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* ITEM 1: Iron Sharpens Iron (Warfare) */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/store/collections/warfare/iron-sharpens-iron-t-shirt">
                <div style={{ height: '400px', position: 'relative', background: '#111', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #333', overflow: 'hidden' }}>
                     <Image 
                        src="/images/iron-back.webp" 
                        alt="Iron Sharpens Iron Back Print" 
                        fill 
                        style={{ objectFit: 'cover' }}
                     />
                </div>
            </Link>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Iron Sharpens Iron</h3>
            <p style={{ color: '#888', marginBottom: '1rem' }}>Heavyweight Tee</p>
            <Link href="/store/collections/warfare/iron-sharpens-iron-t-shirt" style={{ color: '#fff', borderBottom: '1px solid #fff', textDecoration: 'none' }}>
              Shop Now
            </Link>
          </div>

          {/* ITEM 2: God is My CEO (Success) */}
          <div style={{ textAlign: 'center' }}>
             <Link href="/store/collections/success/god-is-my-ceo-t-shirt">
                <div style={{ height: '400px', position: 'relative', background: '#111', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #d4af37', overflow: 'hidden' }}>
                    <Image 
                        src="/images/ceo-tee-back.webp" 
                        alt="God is My CEO Back Print" 
                        fill 
                        style={{ objectFit: 'cover' }}
                     />
                </div>
            </Link>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>God is My CEO</h3>
            <p style={{ color: '#888', marginBottom: '1rem' }}>Vintage Gold Edition</p>
            <Link href="/store/collections/success/god-is-my-ceo-t-shirt" style={{ color: '#d4af37', borderBottom: '1px solid #d4af37', textDecoration: 'none' }}>
              Shop Now
            </Link>
          </div>
          
          {/* ITEM 3: Kingdom Planner (Digital Tool) */}
          <div style={{ textAlign: 'center' }}>
             <Link href="/store/collections/success/digital-planner">
                <div style={{ height: '400px', position: 'relative', background: '#111', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #fff', overflow: 'hidden' }}>
                    <Image 
                        src="/images/journal-cover.webp" 
                        alt="30-Day Kingdom Planner Cover" 
                        fill 
                        style={{ objectFit: 'cover' }}
                     />
                     {/* Badge */}
                     <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#fff', color: '#000', padding: '5px 10px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        DIGITAL SYSTEM
                     </div>
                </div>
            </Link>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>The Kingdom Planner</h3>
            <p style={{ color: '#888', marginBottom: '1rem' }}>Strategy System ($15.00)</p>
            <Link href="/store/collections/success/digital-planner" style={{ color: '#fff', borderBottom: '1px solid #fff', textDecoration: 'none' }}>
              Download Now
            </Link>
          </div>

        </div>
      </section>
      
      {/* 3. BOTTOM CTA: THE SYSTEM */}
      <section style={{ background: '#0a0a0a', padding: '6rem 2rem', borderTop: '1px solid #222', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#d4af37' }}>
                Stop Reacting. Start Commanding.
            </h2>
            <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                The 30-Day Kingdom Planner is not just a calendar. It is a system designed to align your business goals with your spiritual assignment.
            </p>
            <Link href="/store/collections/success/digital-planner" style={{ 
                display: 'inline-block',
                background: '#d4af37',
                color: '#000',
                padding: '15px 40px',
                fontWeight: 'bold',
                textDecoration: 'none',
                borderRadius: '4px'
            }}>
                View The System
            </Link>
        </div>
      </section>

    </main>
  )
}