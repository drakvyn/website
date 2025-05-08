import { motion, AnimatePresence } from 'framer-motion';

export default function MenuOverlay({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed right-0 left-auto top-0 z-50 w-[30vw] max-w-[500px] h-[500px] bg-[#181924] flex flex-col items-center justify-center shadow-2xl"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <button
            className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center rounded-full text-white text-3xl focus:outline-none"
            onClick={onClose}
            aria-label="Close menu"
            style={{ background: 'rgba(0,0,0,0.2)' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8 mt-12">
            <a href="#" className="text-5xl font-squada text-white tracking-widest hover:underline">HOME</a>
            <a href="#" className="text-5xl font-squada text-white tracking-widest hover:underline">ABOUT</a>
            <a href="#" className="text-5xl font-squada text-white tracking-widest hover:underline">WORK</a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 