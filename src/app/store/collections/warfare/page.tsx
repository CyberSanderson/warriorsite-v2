import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spiritual Warfare Collection | Successful Faith',
  description: 'Heavyweight apparel for the spiritual battlefield. Iron Sharpens Iron, Jehovah Nissi, and Armor of God gear.',
}

export default function WarfareCollectionPage() {
  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '4rem 1.5rem' }}>
      
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '3rem', marginBottom: '1rem' }}>
          WARFARE COLLECTION
        </h1>
        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
          "For our struggle is not against flesh and blood."<br/>
          Gear designed for the war room, the gym, and the prayer closet.
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

        {/* 1. IRON SHARPENS IRON */}
        <ProductCard 
          href="/store/collections/warfare/iron-sharpens-iron-t-shirt"
          title="Iron Sharpens Iron"
          price="$38.00"
          tag="Best Seller"
          image="/images/iron-back.webp" 
        />

        {/* 2. JEHOVAH NISSI T-SHIRT */}
        <ProductCard 
          href="/store/collections/warfare/jehovah-nissi-t-shirt"
          title="Jehovah Nissi Tee"
          price="$38.00"
          tag="New Arrival"
          image="/images/jehovah-nissi-back.webp" 
        />

        {/* 3. JEHOVAH NISSI CREWNECK */}
        <ProductCard 
          href="/store/collections/warfare/jehovah-nissi-crewneck"
          title="Jehovah Nissi Crewneck"
          price="$65.00"
          tag="Premium Fleece"
          image="/images/nissi-crew-front.webp" 
        />

        {/* 4. ARMOR OF GOD HOODIE (Joshua 1:9) */}
        <ProductCard 
          href="/store/collections/warfare/armor-of-god-hoodie"
          title="Armor of God Hoodie"
          price="$55.00"
          tag="Heavyweight"
          image="/images/Angel-hoodie.webp" 
        />
        
        {/* 5. PROTECTION GUIDE */}
        <ProductCard 
          href="/store/collections/warfare/protection-guide"
          title="Divine Protection Guide"
          price="$7.00"
          tag="Digital Download"
          image="/images/cover.webp" 
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
        
        {/* IMAGE AREA - NOW RENDERS THE ACTUAL IMAGE */}
        <div style={{ height: '350px', backgroundColor: '#222', position: 'relative' }}>
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
          <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '4px 8px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
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