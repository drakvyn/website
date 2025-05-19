import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuOverlay from './MenuOverlay.jsx';

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center transition-all duration-300"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-6 h-6">
          <motion.span
            className="absolute block w-6 h-0.5 bg-white rounded-full origin-center"
            animate={{
              rotate: open ? 45 : 0,
              y: open ? 0 : -8,
              backgroundColor: open ? '#A855F7' : '#FFFFFF'
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute block w-6 h-0.5 bg-white rounded-full"
            animate={{
              opacity: open ? 0 : 1,
              backgroundColor: open ? '#A855F7' : '#FFFFFF'
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute block w-6 h-0.5 bg-white rounded-full origin-center"
            animate={{
              rotate: open ? -45 : 0,
              y: open ? 0 : 8,
              backgroundColor: open ? '#A855F7' : '#FFFFFF'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
} 