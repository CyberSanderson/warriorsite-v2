import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '30-Day Guided Prayer Journal | Successful Faith',
  description: 'Stop praying in circles. A digital, fillable 30-day system to document your breakthroughs and hear God clearly.',
}

export default function JournalPage() {
  return (
    <main>
        {/* HERO SECTION */}
        <section style={{ 
            background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/images/journal-bg.webp")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '6rem 2rem', 
            textAlign: 'center',
            borderBottom: '4px solid var(--accent-gold)'
        }}>
            <span className="badge" style={{ 
                background: 'var(--accent-gold)', 
                color: '#000', 
                padding: '5px 15px', 
                fontWeight: 'bold', 
                borderRadius: '4px',
                marginBottom: '1rem',
                display: 'inline-block'
            }}>
                DIGITAL & FILLABLE PDF
            </span>
            
            <h1 style={{ 
                fontFamily: 'var(--font-cinzel)', 
                fontSize: '3.5rem', 
                color: '#fff', 
                marginBottom: '1rem',
                marginTop: '1rem'
            }}>
                Stop Praying in Circles. <br />
                Start Building a History.
            </h1>
            
            <p style={{ color: '#e5e5e5', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                A 30-day guided system to help you focus your prayers, document your breakthroughs, and hear God clearly.
            </p>

            {/* UPDATED GUMROAD LINK */}
            <a 
                href="https://successfulfaith.gumroad.com/l/jwdfn" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{ fontSize: '1.2rem', padding: '15px 40px' }}
            >
                Download the Journal — $15
            </a>
            
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#ccc' }}>
                Compatible with iPad, Tablet, or Print.
            </p>
        </section>

        {/* PRODUCT SHOWCASE */}
        <section className="container" style={{ padding: '4rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left: Image */}
            <div style={{ flex: '1 1 400px' }}>
                <img 
                    src="/images/journal-cover.webp" 
                    alt="30-Day Prayer Journal Cover" 
                    style={{ width: '100%', borderRadius: '8px', border: '1px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
                />
            </div>

            {/* Right: Features */}
            <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
                    A Sanctuary for Your Thoughts
                </h2>
                <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Designed for the modern believer. This isn't just blank paper. It's a structured system to ensure you aren't just talking <em>at</em> God, but listening <em>to</em> Him.
                </p>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '2rem' }}>
                        <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>✓ The Scripture</strong>
                        <span style={{ color: '#888' }}>Every day starts with a specific verse to anchor your mind before you start typing.</span>
                    </li>
                    <li style={{ marginBottom: '2rem' }}>
                        <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>✓ The Prompt</strong>
                        <span style={{ color: '#888' }}>No more staring at a blank page. Guided questions help you unlock what's really on your heart.</span>
                    </li>
                    <li style={{ marginBottom: '2rem' }}>
                        <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>✓ The Declaration</strong>
                        <span style={{ color: '#888' }}>End every entry by speaking life. A pre-written declaration to seal your prayer.</span>
                    </li>
                </ul>

                {/* UPDATED GUMROAD LINK */}
                <a 
                    href="https://successfulfaith.gumroad.com/l/jwdfn" 
                    className="secondary-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get Instant Access
                </a>
            </div>
        </section>

        {/* TECH SPECS */}
        <section style={{ background: '#111', padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid #333' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: '#fff', fontSize: '2rem', marginBottom: '3rem' }}>
                    Digital Friendly & Print Ready
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '4px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Typeable PDF</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Type directly into the fields on your computer. No extra apps needed.</p>
                    </div>

                    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '4px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Tablet Ready</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Perfect for GoodNotes, Notability, or any PDF reader on iPad.</p>
                    </div>

                    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '4px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖨️</div>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Printable</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Prefer pen and paper? Print the pages as many times as you need.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>
  )
}