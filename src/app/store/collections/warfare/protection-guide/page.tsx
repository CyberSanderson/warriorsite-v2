import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Peace & Protection | A Psalm 91 Prayer Guide for Women',
  description: 'A guided spiritual companion for women feeling fear, overwhelm, or anxiety. Find safety in the shadow of the Almighty.',
}

export default function ProtectionGuidePage() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
        
        {/* 1. EMOTIONAL HERO SECTION */}
        <section style={{ 
            position: 'relative', 
            padding: '8rem 2rem 6rem', 
            textAlign: 'center', 
            borderBottom: '1px solid #333',
            overflow: 'hidden'
        }}>
            {/* Background Image - Softened */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.3 }}>
                 <Image 
                    src="/images/devine.webp" /* Using your 'devine.webp' file */
                    alt="Peaceful Atmosphere" 
                    fill 
                    style={{ objectFit: 'cover' }}
                 />
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, #0a0a0a, transparent 50%, #0a0a0a)' }}></div>
            </div>

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
                <span className="badge" style={{ 
                    background: '#fff', 
                    color: '#000', 
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
                    color: '#fff', 
                    marginBottom: '1.5rem',
                    lineHeight: '1.2'
                }}>
                    Daily Peace & Protection
                </h1>
                
                <p style={{ 
                    fontFamily: 'var(--font-lato)', 
                    fontSize: '1.3rem', 
                    color: '#e5e5e5', 
                    marginBottom: '2.5rem', 
                    lineHeight: '1.6',
                    fontWeight: '300'
                }}>
                    A Psalm 91 Prayer Guide for women feeling fear, overwhelm, or spiritual anxiety.
                </p>

                {/* EMOTIONAL CTA BUTTON */}
                <a 
                    href="https://successfulfaith.gumroad.com/l/efiwxb" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                        display: 'inline-block',
                        backgroundColor: '#d4af37',
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '1.1rem', 
                        padding: '18px 40px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                        transition: 'transform 0.2s'
                    }}
                >
                    Get Spiritual Peace Now
                </a>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
                    Instant Digital Download
                </p>
            </div>
        </section>

        {/* 2. THE EMOTIONAL HOOK ("How will this make me feel?") */}
        <section style={{ padding: '5rem 2rem', background: '#111' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.5rem', marginBottom: '2rem', color: '#d4af37' }}>
                    Feel Safe. Feel Peace. <br/>Feel God With You.
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '3rem' }}>
                    Even when fear creeps in. This simple, heart-centered guide takes the powerful promise of Psalm 91 and turns it into a daily companion for your peace of mind.
                </p>

                {/* THE "WHO IS THIS FOR" CHECKLIST */}
                <div style={{ 
                    background: '#1a1a1a', 
                    padding: '3rem', 
                    borderRadius: '8px', 
                    border: '1px solid #333', 
                    textAlign: 'left' 
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>For You — If You’ve Ever Felt:</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#ddd' }}>
                            <span style={{ color: '#d4af37' }}>➔</span> Fearful in the quiet moments of the night.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#ddd' }}>
                            <span style={{ color: '#d4af37' }}>➔</span> Overwhelmed by life’s constant challenges.
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#ddd' }}>
                            <span style={{ color: '#d4af37' }}>➔</span> Worried about the spiritual safety of your family.
                        </li>
                        <li style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#ddd' }}>
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
                        style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
                     />
                </div>

                {/* Benefits List */}
                <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                    <h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>
                        Inside Your Guide
                    </h3>
                    
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>✔ Daily "Hedge of Protection" Prayer</h4>
                        <p style={{ color: '#aaa' }}>A prayer that brings peace before panic sets in.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>✔ Scripture for Your Mind & Home</h4>
                        <p style={{ color: '#aaa' }}>Specific verses to combat night terrors and anxiety.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>✔ Anointing Your Home</h4>
                        <p style={{ color: '#aaa' }}>Practical steps to invite God’s presence into your everyday living space.</p>
                    </div>

                    {/* SOCIAL PROOF / QUOTE */}
                    <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '4px', borderLeft: '3px solid #d4af37', marginTop: '2rem' }}>
                        <p style={{ fontStyle: 'italic', color: '#ccc', marginBottom: '0.5rem' }}>
                            "Psalm 91 has been my go-to Scripture when fear tries to steal my joy. This prayer guide made it personal and powerful in my everyday life."
                        </p>
                        <p style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: 'bold' }}>— Rachel, Believer</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. FINAL CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', background: '#0a0a0a', borderTop: '1px solid #222' }}>
            <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2rem', marginBottom: '2rem' }}>
                Bring Peace Into Your Day
            </h2>
            <a 
                href="https://successfulfaith.gumroad.com/l/efiwxb" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{ fontSize: '1.2rem', padding: '15px 50px' }}
            >
                Get Spiritual Peace Now
            </a>
        </section>

    </main>
  )
}