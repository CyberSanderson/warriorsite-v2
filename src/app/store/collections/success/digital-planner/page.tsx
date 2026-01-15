import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '30-Day Kingdom Planner & Prayer Journal | Successful Faith',
  description: 'Align your schedule with your spirit. A digital, fillable 30-day system for the Christian entrepreneur to organize business and prayer.',
}

export default function PlannerPage() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
        
        {/* HERO SECTION */}
        <section style={{ 
            background: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("/images/journal-cover.webp")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '6rem 2rem', 
            textAlign: 'center',
            borderBottom: '4px solid #d4af37'
        }}>
            <span className="badge" style={{ 
                background: '#d4af37', 
                color: '#000', 
                padding: '5px 15px', 
                fontWeight: 'bold', 
                borderRadius: '4px',
                marginBottom: '1rem',
                display: 'inline-block',
                fontSize: '0.9rem'
            }}>
                DIGITAL PLANNER + JOURNAL
            </span>
            
            <h1 style={{ 
                fontFamily: 'var(--font-cinzel), serif', 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                color: '#fff', 
                marginBottom: '1rem',
                marginTop: '1rem',
                lineHeight: '1.2'
            }}>
                Align Your Hustle <br />
                With His Will.
            </h1>
            
            <p style={{ color: '#e5e5e5', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                The 30-Day Kingdom Planner. A unified system to organize your business tasks, track your prayers, and silence the overwhelm.
            </p>

            {/* GUMROAD LINK */}
            <a 
                href="https://successfulfaith.gumroad.com/l/jwdfn" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                    display: 'inline-block',
                    backgroundColor: '#d4af37',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '1.2rem', 
                    padding: '15px 40px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'transform 0.2s'
                }}
            >
                Download System — $15
            </a>
            
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
                Instant Download • GoodNotes Ready • Printable
            </p>
        </section>

        {/* PRODUCT SHOWCASE */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Left: Image */}
            <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
                <img 
                    src="/images/journal-cover.webp" 
                    alt="30-Day Kingdom Planner Cover" 
                    style={{ width: '100%', borderRadius: '8px', border: '1px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
                />
            </div>

            {/* Right: Features */}
            <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '2.5rem', color: '#d4af37', marginBottom: '1.5rem' }}>
                    Clarity in the Chaos
                </h2>
                <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    You don't need another to-do list. You need a way to integrate your faith into your daily grind. This system helps you filter the noise and focus on the assignment.
                </p>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '2rem' }}>
                        <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>✓ Morning Alignment</strong>
                        <span style={{ color: '#888' }}>Start with Scripture and gratitude before you check your emails.</span>
                    </li>
                    <li style={{ marginBottom: '2rem' }}>
                        <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>✓ Priority Blocking</strong>
                        <span style={{ color: '#888' }}>Identify your "Kingdom Move" for the day—the one task that actually moves the needle.</span>
                    </li>
                    <li style={{ marginBottom: '2rem' }}>
                        <strong style={{ color: '#fff', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>✓ Evening Reflection</strong>
                        <span style={{ color: '#888' }}>A guided journaling section to document answered prayers and clear your mind for rest.</span>
                    </li>
                </ul>

                {/* SECOND CTA BUTTON */}
                <a 
                    href="https://successfulfaith.gumroad.com/l/jwdfn" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                        display: 'inline-block',
                        border: '1px solid #d4af37',
                        color: '#d4af37',
                        fontWeight: 'bold',
                        padding: '12px 30px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        marginTop: '1rem'
                    }}
                >
                    Get Instant Access
                </a>
            </div>
        </section>

        {/* TECH SPECS */}
        <section style={{ background: '#111', padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid #333' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h3 style={{ fontFamily: 'var(--font-cinzel), serif', color: '#fff', fontSize: '2rem', marginBottom: '3rem' }}>
                    Works on Your Device
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '4px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontWeight: 'bold' }}>Typeable PDF</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Fill it out on your laptop or desktop.</p>
                    </div>

                    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '4px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontWeight: 'bold' }}>iPad & Tablet</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Use with Apple Pencil in GoodNotes or Notability.</p>
                    </div>

                    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '4px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖨️</div>
                        <h4 style={{ color: '#d4af37', marginBottom: '0.5rem', fontWeight: 'bold' }}>Printable</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Print the whole month or just one day at a time.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>
  )
}