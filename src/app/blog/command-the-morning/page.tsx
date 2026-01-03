import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  // We added "Prayer Points" and "Spiritual Warfare" to catch those searchers
  title: 'Command the Morning | Spiritual Warfare Prayer Points', 
  description: 'Use Job 38:12 to take authority over your day. A guide to morning prayer, daily declarations, and spiritual warfare scriptures to dismantle the enemy.',
  openGraph: {
    title: 'Command the Morning: A Warrior\'s Guide',
    description: 'Have you commanded the morning since your days began? Learn how to take authority over your day.',
    type: 'article',
  }
}

export default function CommandMorningPage() {
  return (
    <main className="journal-article-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      
      {/* HEADER */}
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <span className="badge" style={{ color: '#d4af37', border: '1px solid #d4af37', padding: '0.2rem 0.8rem', fontSize: '0.8rem', letterSpacing: '1px' }}>
          WARFARE STRATEGY
        </span>
        <h1 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.5rem', marginTop: '1rem', lineHeight: '1.2' }}>
          Command The Morning
        </h1>
        <p style={{ color: '#888', fontStyle: 'italic', marginTop: '1rem' }}>
          "Have you commanded the morning since your days began, and caused the dawn to know its place?" — Job 38:12
        </p>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
        
        <p>
          Most Christians wake up and immediately go on the defense. The alarm rings, the emails flood in, and the anxiety of the day begins to dictate their mood. They are reacting to the world instead of establishing authority over it.
        </p>
        <p>
          But a Saint equipped for battle does not ask the day for permission to thrive. <strong>We command it.</strong>
        </p>

        <h2 style={{ color: '#fff', fontFamily: 'var(--font-cinzel)', marginTop: '2.5rem' }}>The Biblical Basis for Authority</h2>
        <p>
          In <strong>Job 38:12</strong>, God asks Job a profound question: <em>"Have you commanded the morning since your days began?"</em>
        </p>
        <p>
          This wasn't just poetry; it was a revelation of dominion. The dawn is a gateway. In the spiritual realm, the transition from night to day is a critical window where territories are assigned. If you remain silent, the enemy—who "prowls around like a roaring lion" (1 Peter 5:8)—will fill that silence with his agenda.
        </p>
        <p>
          To command the morning is to stand in your legislative authority as a believer and decree that <strong>God’s will</strong> be done in your life before the world even wakes up.
        </p>

        {/* --- NEW SECTION: THE STRATEGY --- */}
        <h2 style={{ color: '#fff', fontFamily: 'var(--font-cinzel)', marginTop: '2.5rem' }}>3 Keys to Effective Morning Prayer</h2>
        <p>
          Reciting words without faith is just noise. To truly shift the atmosphere of your day, you must align your heart with your mouth. Here are three strategic keys to making this command effective:
        </p>
        
        <h3 style={{ color: '#d4af37', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Consistency is a Weapon</h3>
        <p>
          The enemy doesn't take a day off, and neither should your watch. Job 38:12 asks if you have done this <em>"since your days began."</em> This implies a lifestyle, not a one-time event. Make this prayer the very first thing that leaves your mouth before you check your phone.
        </p>

        <h3 style={{ color: '#d4af37', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Speak into the Atmosphere</h3>
        <p>
          Thoughts are for meditation; words are for legislation. You must speak this <strong>out loud</strong>. When Jesus calmed the storm, He didn't think about peace; He spoke, <em>"Peace, be still."</em> Your voice vibrates the air and establishes order in the chaos.
        </p>

        <h3 style={{ color: '#d4af37', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Expect Resistance</h3>
        <p>
          When you start taking territory, the enemy often pushes back. You might feel more tired than usual or face sudden distractions. This is a sign that your prayers are hitting the target. Stand firm. As outlined in our <em>Protection Guide</em>, the armor of God is designed specifically for this moment of counter-attack.
        </p>
        {/* --- END NEW SECTION --- */}

        {/* AFFILIATE BLOCK: THE TOOLS */}
        <div style={{ background: '#1a1a1a', padding: '2rem', borderLeft: '4px solid #d4af37', margin: '3rem 0', borderRadius: '4px' }}>
            <h3 style={{ marginTop: 0, fontFamily: 'var(--font-cinzel)' }}>⚔️ Tools for the Watchman</h3>
            <p style={{ fontSize: '0.95rem', color: '#ccc' }}>
                You cannot fight a modern war with outdated intel. Here are the resources we use to stay sharp in the spirit:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}>
                    <strong>📖 The Heavy Artillery:</strong> <a href="https://amzn.to/4jrOV8g" target="_blank" style={{ color: '#d4af37', textDecoration: 'underline' }}>The NKJV Spirit-Filled Life Bible</a>. 
                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#888' }}>Essential for understanding the Greek and Hebrew roots of "authority."</span>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    <strong>🕯️ The Atmosphere:</strong> <a href="https://amzn.to/3Ney5O5" target="_blank" style={{ color: '#d4af37', textDecoration: 'underline' }}>Frankincense Anointing Oil</a>.
                    <span style={{ display: 'block', fontSize: '0.85rem', color: '#888' }}>Used to consecrate your home and your head before prayer.</span>
                </li>
            </ul>
            <p style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic' }}>
                *As an Amazon Associate, we earn from qualifying purchases to support this ministry.
            </p>
        </div>

        <h2 style={{ color: '#fff', fontFamily: 'var(--font-cinzel)' }}>The Prayer of Command</h2>
        <p>
            Speak this out loud. Faith comes by hearing (Romans 10:17), and the spiritual realm responds to the spoken Word.
        </p>

        <blockquote style={{ borderLeft: '2px solid #555', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: '#fff' }}>
            "Father, in the name of Jesus, I stand under the covering of the Blood. I take authority over this day.
            <br /><br />
            As it is written in <strong>Psalm 118:24</strong>, this is the day You have made; I will rejoice and be glad in it. I command the morning to open its ears to the Word of God. I decree that every plot, plan, and scheme of the enemy assigned to my path is dismantled right now.
            <br /><br />
            I declare <strong>Jehovah Nissi</strong> is my banner. Victory goes before me. Confusion is sent into the camp of the enemy. I command my finances, my mind, and my family to align with the order of Heaven. The sun shall not smite me by day, nor the moon by night (Psalm 121:6).
            <br /><br />
            I possess the gates of this day. I walk in favor, wisdom, and power. Amen."
        </blockquote>

        <h2 style={{ color: '#fff', fontFamily: 'var(--font-cinzel)' }}>Dress for the Battle</h2>
        <p>
            Prayer is the inner work; your lifestyle is the outer manifestation. Don't leave your prayer closet and forget who you are.
        </p>
        <p>
           When you step out the door, carry the reminder of who protects you. Our <strong>Protection Guide</strong> helps you maintain this posture of prayer throughout the day, and our apparel serves as a physical banner to the world.
        </p>

        {/* INTERNAL CTA CARD */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: '#111', padding: '1.5rem', marginTop: '2rem', borderRadius: '8px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{ marginTop: 0, color: '#fff' }}>Equip Yourself</h3>
                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
                    Get the "Iron Sharpens Iron" Tee or the full "Protection Guide" to keep your spirit sharp.
                </p>
                <Link href="/store" style={{ display: 'inline-block', background: '#fff', color: '#000', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', marginTop: '10px' }}>
                    Visit The Armory
                </Link>
            </div>
            {/* Visual placeholder for internal ad */}
            <div style={{ width: '100px', height: '100px', background: '#222', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem' }}>🛡️</span>
            </div>
        </div>

      </article>

    </main>
  )
}