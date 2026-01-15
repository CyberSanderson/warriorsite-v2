import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kingdom Success Collection | Successful Faith',
  description: 'Premium apparel and tools for the Christian Entrepreneur. God is My CEO, Stewardship, and Legacy building gear.',
}

export default function SuccessCollectionPage() {
  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '4rem 1.5rem' }}>
      
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '3rem', marginBottom: '1rem', color: '#d4af37' }}>
          SUCCESS COLLECTION
        </h1>
        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
          "Commit to the Lord whatever you do, and he will establish your plans."<br/>
          Tools for the Boardroom, the Office, and the Kingdom Builder.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* 1. GOD IS MY CEO */}
        <ProductCard 
          href="/store/collections/success/god-is-my-ceo-t-shirt"
          title="God is My CEO"
          price="$36.99"
          tag="Best Seller"
          image="/images/ceo-tee-front.webp"
        />

        {/* 2. DIGITAL PLANNER */}
        <ProductCard 
          href="/store/collections/success/digital-planner" 
          title="30-Day Kingdom Planner"
          price="$15.00"
          tag="Instant Download"
          image="/images/journal-cover.webp"
        />

      </div>
    </main>
  )
}

// Simple Reusable Card Component
function ProductCard({ href, title, price, tag, image }: any) {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.2s', backgroundColor: '#111' }}>
        
        {/* IMAGE AREA - UPDATED TO RENDER ACTUAL IMAGE */}
        <div style={{ height: '350px', backgroundColor: '#1a1a1a', position: 'relative' }}>
          <img 
            src={image} 
            alt={title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              display: 'block' 
            }} 
          />
          
          {/* Tag Overlay */}
          <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#d4af37', color: '#000', fontWeight: 'bold', padding: '4px 8px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            {tag}
          </span>
        </div>
        
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'sans-serif' }}>{title}</h3>
          <p style={{ color: '#d4af37', fontWeight: 'bold' }}>{price}</p>
        </div>
      </div>
    </Link>
  )
}