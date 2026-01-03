'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images: { src: string; alt: string }[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0) // Default to first image
  const [isZoomed, setIsZoomed] = useState(false)

  // Safety check
  if (!images || images.length === 0) return null

  return (
    <div className="product-gallery">
      
      {/* 1. MAIN LARGE IMAGE */}
      <div 
        className="main-image-container" 
        onClick={() => setIsZoomed(true)} // Click to open modal
        style={{ cursor: 'zoom-in', position: 'relative', marginBottom: '1rem' }}
      >
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          width={600}
          height={600}
          style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
          priority // Loads the main image instantly
        />
      </div>

      {/* 2. THUMBNAIL ROW */}
      <div className="thumbnails" style={{ display: 'flex', gap: '10px' }}>
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)} // Click to swap
            style={{
              cursor: 'pointer',
              border: selectedImage === index ? '2px solid #d4af37' : '2px solid transparent', // Gold border for active
              borderRadius: '6px',
              overflow: 'hidden',
              opacity: selectedImage === index ? 1 : 0.6,
              transition: 'all 0.2s'
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={80}
              height={80}
              style={{ objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* 3. FULLSCREEN MODAL (THE "LIGHTBOX") */}
      {isZoomed && (
        <div 
          className="lightbox-overlay"
          onClick={() => setIsZoomed(false)} // Click anywhere to close
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={1200}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '90vh' }}
            />
            <button 
              style={{
                position: 'absolute',
                top: -40,
                right: 0,
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}