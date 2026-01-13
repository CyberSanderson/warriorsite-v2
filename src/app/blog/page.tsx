import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warfare Strategies | The Successful Faith Blog',
  description: 'Articles, prayers, and strategies for the modern watchman. Equip your mind for the battle.',
}

export default function BlogIndexPage() {
  return (
    <main className="blog-index-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        
        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '3rem', marginBottom: '1rem' }}>Warfare Strategies</h1>
            <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
                Biblical authority. Spiritual insights. <br />
                Resources to keep your spirit sharp in a dull world.
            </p>
        </header>

        {/* ARTICLE GRID */}
        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* ARTICLE 1: COMMAND THE MORNING */}
            <article className="blog-card" style={{ background: '#111', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                <Link href="/blog/command-the-morning" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ height: '200px', background: 'linear-gradient(45deg, #1a1a1a, #000)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '3rem' }}>🌅</span>
                    </div>
                    
                    <div className="card-content" style={{ padding: '1.5rem' }}>
                        <span style={{ color: '#d4af37', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Warfare Strategy
                        </span>
                        <h2 style={{ fontSize: '1.4rem', margin: '0.5rem 0 1rem', fontFamily: 'var(--font-cinzel)', lineHeight: '1.3' }}>
                            Command The Morning
                        </h2>
                        <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            "Have you commanded the morning since your days began?" Learn how to take spiritual authority over your day.
                        </p>
                        <span style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.9rem' }}>Read Article →</span>
                    </div>
                </Link>
            </article>

            {/* ARTICLE 2: IRON SHARPENS IRON (NEW) */}
            <article className="blog-card" style={{ background: '#111', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                <Link href="/blog/iron-sharpens-iron-meaning" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ height: '200px', background: 'linear-gradient(45deg, #2c0b0e, #000)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Placeholder Icon: Swords for Iron/Warfare */}
                        <span style={{ fontSize: '3rem' }}>⚔️</span>
                    </div>
                    
                    <div className="card-content" style={{ padding: '1.5rem' }}>
                        <span style={{ color: '#d4af37', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Brotherhood & Discipline
                        </span>
                        <h2 style={{ fontSize: '1.4rem', margin: '0.5rem 0 1rem', fontFamily: 'var(--font-cinzel)', lineHeight: '1.3' }}>
                            Iron Sharpens Iron: The Meaning of Proverbs 27:17
                        </h2>
                        <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            True brotherhood isn't gentle—it involves friction and fire. Discover why you need spiritual conflict to stay sharp.
                        </p>
                        <span style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.9rem' }}>Read Article →</span>
                    </div>
                </Link>
            </article>

        </div>

    </main>
  )
}