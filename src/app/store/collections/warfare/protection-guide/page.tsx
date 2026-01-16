import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Peace & Protection | A Psalm 91 Prayer Guide for Women',
  description: 'A guided spiritual companion for women feeling fear, overwhelm, or anxiety. Find safety in the shadow of the Almighty.',
}

export default function ProtectionGuidePage() {
  return (
    // LIGHT MODE BACKGROUND (For the 'Peace' vibe)
    <main style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
        
        {/* 1. EMOTIONAL HERO SECTION */}
        <section style={{ 
            position: 'relative', 
            padding: '8rem 2rem 6rem', 
            textAlign: 'center', 
            borderBottom: '1px solid #eee',
            overflow: 'hidden'
        }}>
            {/* Background Image - Softened for Light Mode */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.15 }}>
                 <Image 
                    src="/images/devine.webp" 
                    alt="Peaceful Atmosphere" 
                    fill 
                    style={{ objectFit: 'cover' }}
                 />
                 {/* White Gradient Fade */}
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, #fff, transparent 50%, #fff)' }}></div>
            </div>

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
                <span className="badge" style={{ 
                    background: '#f4f4f4', 
                    color: '#555', 
                    padding: '6px 16px', 
                    fontWeight: 'bold', 
                    borderRadius: '20px',
                    marginBottom: '2rem',
                    display: 'inline-block',
                    fontSize: '0.8rem',
                    letterSpacing: '1px'
                }}>
                    DIGITAL DEVOTIONAL
                </span>
                
                <h1 style={{ 
                    fontFamily: 'var(--font-cinzel), serif', 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                    color: '#000', 
                    marginBottom: '1.5rem',
                    lineHeight: '1.2'
                }}>
                    Daily Peace & Protection
                </h1>
                
                <p style={{ 
                    fontFamily: 'var(--font-lato)', 
                    fontSize: '1.3rem', 
                    color: '#444', 
                    marginBottom: '2.5rem', 
                    lineHeight: '1.6',
                    fontWeight: '300'
                }}>
                    A Psalm 91 Prayer Guide for women feeling fear, overwhelm, or spiritual anxiety.
                </p>

                <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
                    Open this guide when your mind won’t slow down, fear feels louder than faith,
                    or you want to pray but don’t know what to say.
                </p>

                {/* EMOTIONAL CTA BUTTON */}
                <a 
                    href="https://successfulfaith.gumroad.com/l/efiwxb" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                        display: 'inline-block',
                        backgroundColor: '#000',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.1rem', 
                        padding: '18px 40px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s'
                    }}
                >
                    Get Spiritual Peace Now — $7.00
                </a>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
                    Instant Digital Download
                </p>
                <p style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: '#999' }}>
                    No subscription · Yours forever
                </p>
            </div>
        </section>

        {/* 2. THE EMOTIONAL HOOK ("How will this make me feel?") */}
        <section style={{ padding: '5rem 2rem', background: '#f9f9f9' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.5rem', marginBottom: '2rem', color: '#000' }}>
                    Feel Safe. Feel Peace. <br/>Feel God With You.
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem' }}>
                    Even when fear creeps in. This simple, heart-centered guide takes the powerful promise of Psalm 91 and turns it into a daily companion for your peace of mind.
                </p>

                {/* THE "WHO IS THIS FOR" CHECKLIST - Light Theme */}
                <div style={{ 
                    background: '#fff', 
                    padding: '3rem', 
                    borderRadius: '8px', 
                    border: '1px solid #eee', 
                    textAlign: 'left',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#000' }}>For You — If You’ve Ever Felt:</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#444' }}>
                            <span style={{ color: '#d4af37' }}>➔</span> Fearful in the quiet moments of the night.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#444' }}>
                            <span style={{ color: '#d4af37' }}>➔</span> Overwhelmed by life’s constant challenges.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#444' }}>
                            <span style={{ color: '#d4af37' }}>➔</span> Worried about the spiritual safety of your family.
                        </li>
                        <li style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#444' }}>
                            <span style={{ color: '#d4af37' }}>➔</span> A need to reclaim your home as a sanctuary.
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 3. WHAT'S INSIDE (Features translated to Benefits) */}
        <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', justifyContent: 'center' }}>
                
                {/* Image of the Guide */}
                <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
                     <Image 
                        src="/images/devine.webp" 
                        alt="Divine Protection Guide Cover" 
                        width={600}
                        height={800}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                     />
                </div>

                {/* Benefits List */}
                <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                    <h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2rem', marginBottom: '1.5rem', color: '#000' }}>
                        Inside Your Guide
                    </h3>
                    
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>✔ Daily "Hedge of Protection" Prayer</h4>
                        <p style={{ color: '#555' }}>A prayer that brings peace before panic sets in.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>✔ Scripture for Your Mind & Home</h4>
                        <p style={{ color: '#555' }}>Specific verses to calm anxious thoughts and bring rest to your mind.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>✔ Anointing Your Home</h4>
                        <p style={{ color: '#555' }}>Practical steps to invite God’s presence into your everyday living space.</p>
                    </div>

                    {/* SOCIAL PROOF / QUOTE */}
                    <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '4px', borderLeft: '3px solid #d4af37', marginTop: '2rem' }}>
                        <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '0.5rem' }}>
                            "Psalm 91 has been my go-to Scripture when fear tries to steal my joy. This prayer guide made it personal and powerful in my everyday life."
                        </p>
                        <p style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: 'bold' }}>— Rachel, Believer</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. FINAL CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f4f4f4', borderTop: '1px solid #eee' }}>
            <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2rem', marginBottom: '2rem', color: '#000' }}>
                Bring Peace Into Your Day
            </h2>
            <a 
                href="https://successfulfaith.gumroad.com/l/efiwxb" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                    display: 'inline-block',
                    backgroundColor: '#000',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.1rem', 
                    padding: '18px 40px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s'
                }}
            >
                Get Spiritual Peace Now
            </a>
        </section>

    </main>
  )
}