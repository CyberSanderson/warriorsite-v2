import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | Successful Faith',
  description: 'Our commitment to quality and return guidelines.',
}

export default function RefundPage() {
  return (
    <main className="container" style={{ maxWidth: '800px', padding: '6rem 1.5rem', color: '#ccc' }}>
        <h1 style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent-gold)', marginBottom: '2rem', fontSize: '2.5rem' }}>Refund Policy</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
                <strong>All Sales Are Final.</strong>
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                Because our items are made-to-order via Fourthwall to ensure premium quality and prevent waste, we do not offer returns or exchanges for sizing issues. Please check the size chart carefully before ordering.
            </p>
            
            <h3 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Damaged or Defective Items</h3>
            <p style={{ marginBottom: '1.5rem' }}>
                If you receive a misprinted, damaged, or defective item, please submit a claim within <strong>30 days</strong> of the product being received. For packages lost in transit, all claims must be submitted no later than 30 days after the estimated delivery date.
            </p>
            <p>
                To file a claim, please contact us at <a href="mailto:support@successfulfaith.com" style={{ color: 'var(--accent-gold)' }}>support@successfulfaith.com</a> with photos of the defect.
            </p>
        </div>
    </main>
  )
}