'use client'
import { Mail, X } from 'lucide-react' // Use the Mail icon instead
import { useState } from 'react'

export default function SupportBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      
      {/* The Popup Menu */}
      {isOpen && (
        <div className="bg-white text-black p-5 rounded-lg shadow-2xl border border-gray-200 w-72 mb-2 animate-in slide-in-from-bottom-2">
          <div className="flex items-center gap-3 mb-3">
            {/* Optional: Put a small image of you or the logo here if you want */}
            <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center text-gold font-bold text-xs">
                SF
            </div>
            <div>
                <p className="font-bold text-sm font-cinzel">The War Room</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Customer Support</p>
            </div>
          </div>
          
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            Have a question about sizing or a prayer request? We are a small team, but we read every message.
          </p>

          <a 
            href="mailto:support@successfulfaith.com"
            className="block w-full text-center bg-black text-white py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-all"
          >
            Send Email
          </a>
        </div>
      )}

      {/* The Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-[#d4af37] text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-white"
        aria-label="Contact Support"
      >
        {isOpen ? <X size={24} /> : <Mail size={24} />}
      </button>
    </div>
  )
}