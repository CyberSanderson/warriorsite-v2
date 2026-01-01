import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Successful Faith',
  description: 'Equipping the Saints. The story behind the Christian Streetwear brand designed for spiritual battle.',
}

export default function AboutPage() {
  return (
    <main>
        {/* HERO HEADER */}
        <section style={{ 
            background: '#111', 
            padding: '6rem 2rem', 
            textAlign: 'center',
            borderBottom: '1px solid #333'
        }}>
            <h1 style={{ 
                fontFamily: 'var(--font-cinzel)', 
                fontSize: '3.5rem', 
                color: 'var(--accent-gold)', 
                marginBottom: '1rem' 
            }}>
                Equipping The Saints
            </h1>
            <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                We are not just a clothing brand. We are an armory.
            </p>
        </section>

        {/* MAIN CONTENT */}
        <section className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>
            
            <div className="about-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                <p style={{ marginBottom: '2rem' }}>
                    <strong>Successful Faith</strong> was born out of a frustration with the modern representation of Christianity. 
                    Too often, faith is portrayed as passive, weak, or purely decorative.
                </p>
                
                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: '#fff', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1rem' }}>
                    The Mission
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    We believe that life is a spiritual battle. As believers, we are called to be dangerous to the kingdom of darkness. 
                    We are called to excellence, discipline, and strength.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Our apparel is designed to be a daily reminder of that calling. When you put on the <strong>"Iron Sharpens Iron"</strong> tee or the <strong>"Armor of God"</strong> hoodie, you are physically equipping yourself with a reminder of your spiritual reality.
                </p>

                <h3 style={{ fontFamily: 'var(--font-cinzel)', color: '#fff', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1rem' }}>
                    Quality Over Hype
                </h3>
                <p style={{ marginBottom: '2rem' }}>
                    We refuse to print the Word of God on cheap, scratchy fabrics that shrink after one wash. 
                    Our "Heavyweight" line uses <strong>6.5oz to 10oz premium cottons</strong> because we believe that everything done for the Kingdom should be done with excellence.
                </p>

                <div style={{ 
                    borderLeft: '4px solid var(--accent-gold)', 
                    paddingLeft: '2rem', 
                    margin: '3rem 0',
                    fontStyle: 'italic',
                    color: '#fff'
                }}>
                    "Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil."
                    <br />
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', display: 'block', marginTop: '10px' }}>— Ephesians 6:10-11</span>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <Link href="/store" className="cta-btn">
                    Visit The Armory
                </Link>
            </div>

        </section>
    </main>
  )
}