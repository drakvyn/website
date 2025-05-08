import { motion } from 'framer-motion';
import './directlinks-overlay.css';

export default function HeroMotion() {
  return (
    <section className="flex flex-col justify-center min-h-[60vh]">
      <motion.p
        className="text-lg md:text-xl text-white font-manrope mb-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My name is <span className="font-bold">Jean Roa, The Software Wizard</span> and I'm a
      </motion.p>
      <motion.h1
        className="font-squada text-white relative"
        style={{ fontSize: '12rem', lineHeight: 0.7 }}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1.2,
          type: 'spring',
          stiffness: 50,
          damping: 15
        }}
      >
        <motion.span 
          className="text-overlay inline-block"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SOFTWARE DEVELOPER
        </motion.span>
        <br />
        <motion.span 
          className="text-overlay inline-block"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          & FREELANCER
        </motion.span>
      </motion.h1>
    </section>
  );
} 