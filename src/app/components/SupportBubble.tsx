'use client'
import { Mail, X } from 'lucide-react'
import { useState } from 'react'

export default function SupportBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="z-50 flex flex-col items-end gap-2"
      style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        zIndex: 9999 
      }}
    >
      
      {/* The Popup Menu */}
      {isOpen && (
        <div 
          className="animate-in slide-in-from-bottom-2 fade-in duration-300"
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)', // Stronger shadow for contrast
            border: '1px solid #e5e5e5',
            width: '300px',
            maxWidth: '90vw', // Ensures it fits on mobile screens
            marginBottom: '10px',
            position: 'relative' // Needed for the absolute close button
          }}
        >
          {/* --- NEW: TOP RIGHT CLOSE BUTTON --- */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#999',
                padding: '4px'
            }}
            aria-label="Close Chat"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <div style={{ 
              height: '40px', 
              width: '40px', 
              backgroundColor: 'black', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#d4af37',
              fontWeight: 'bold',
              fontSize: '12px'
            }}>
                SF
            </div>
            <div style={{ paddingRight: '20px' }}> {/* Padding prevents text hitting the X */}
                <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>The War Room</p>
                <p style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', margin: 0 }}>Customer Support</p>
            </div>
          </div>
          
          <p style={{ fontSize: '13px', color: '#444', marginBottom: '20px', lineHeight: '1.5' }}>
            Have a question about sizing or a prayer request? We read every message.
          </p>

          {/* THE BOLD ACTION BUTTON */}
          <a 
            href="mailto:support@successfulfaith.com"
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '14px 0',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none',
              transition: '0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Send Email
          </a>
        </div>
      )}

      {/* The Main Floating Icon (Toggles Open/Close) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
            height: '60px',
            width: '60px',
            backgroundColor: '#d4af37',
            color: 'black',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            border: '2px solid white',
            cursor: 'pointer',
            transition: 'transform 0.2s'
        }}
        aria-label="Toggle Support Chat"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
      >
        {isOpen ? <X size={24} /> : <Mail size={24} />}
      </button>
    </div>
  )
}