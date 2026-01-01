import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Successful Faith',
  description: 'Terms and conditions for using our website.',
}

export default function TermsPage() {
  return (
    <main className="container" style={{ maxWidth: '800px', padding: '6rem 1.5rem', color: '#ccc' }}>
        <h1 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', marginBottom: '2rem', fontSize: '2.5rem' }}>Terms of Service</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
                By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
            </p>
            
            <h3 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Intellectual Property</h3>
            <p style={{ marginBottom: '1.5rem' }}>
                All content on this website, including designs, text, graphics, and logos, is the property of Successful Faith and is protected by copyright laws. You may not reproduce our designs without explicit permission.
            </p>

            <h3 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Governing Law</h3>
            <p>
                These terms are governed by the laws of the United States.
            </p>
        </div>
    </main>
  )
}