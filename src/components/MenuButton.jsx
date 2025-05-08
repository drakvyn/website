import { useState } from 'react';
import MenuOverlay from './MenuOverlay.jsx';

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-opacity-10 rounded-full flex items-center justify-center shadow-lg border border-zinc-700 bg-[#181924]"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <line x1="18" y1="6" x2="6" y2="18" strokeWidth={2} strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" strokeWidth={2} strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <line x1="6" y1="8" x2="18" y2="8" strokeWidth={2} strokeLinecap="round"/>
            <line x1="6" y1="12" x2="18" y2="12" strokeWidth={2} strokeLinecap="round"/>
            <line x1="6" y1="16" x2="18" y2="16" strokeWidth={2} strokeLinecap="round"/>
          </svg>
        )}
      </button>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
} 