import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Policy | Successful Faith',
  description: 'Shipping times and worldwide delivery information.',
}

export default function ShippingPage() {
  return (
    <main className="container" style={{ maxWidth: '800px', padding: '6rem 1.5rem', color: '#ccc' }}>
        <h1 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', marginBottom: '2rem', fontSize: '2.5rem' }}>Shipping Information</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Processing Time</h3>
            <p style={{ marginBottom: '1.5rem' }}>
                Every item is printed specifically for you. Please allow <strong>3-5 business days</strong> for production before your item ships. We do not mass produce; we build on demand.
            </p>

            <h3 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Estimated Delivery</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>🇺🇸 USA:</strong> 5-8 business days after fulfillment.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>🇨🇦 Canada:</strong> 10-20 business days.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>🌍 International:</strong> 10-30 business days.</li>
            </ul>

            <h3 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Tracking</h3>
            <p>
                You will receive a tracking link via email as soon as your order ships.
            </p>
        </div>
    </main>
  )
}