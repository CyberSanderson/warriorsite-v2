'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="main-nav">
      <div className="nav-container">
        
        {/* LOGO */}
        <Link href="/" className="nav-brand" onClick={() => setIsOpen(false)}>
          {/* Ensure width/height match your actual logo aspect ratio */}
          <Image 
            src="/images/logo.webp" 
            alt="Successful Faith" 
            width={120} 
            height={40} 
            className="nav-logo" 
            priority
          />
        </Link>

        {/* HAMBURGER BUTTON (Mobile Only) */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Simple Hamburger Icon */}
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* LINKS */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/store/collections/warfare" onClick={() => setIsOpen(false)}>Warfare</Link>
          <Link href="/store/collections/success" onClick={() => setIsOpen(false)} style={{ color: '#d4af37' }}>Success</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        </div>

      </div>
    </nav>
  )
}