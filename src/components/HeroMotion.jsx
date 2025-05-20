import { motion } from 'framer-motion';
import './directlinks-overlay.css';

export default function HeroMotion() {
  return (
    <section className="flex flex-col justify-center px-4 md:px-0 min-h-[40vh] md:min-h-[60vh]">
      <motion.p
        className="text-base md:text-lg lg:text-xl text-white font-manrope mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My name is <span className="font-bold">Jean Roa, The Software Wizard</span> and I'm a
      </motion.p>
      <motion.h1
        className="font-squada text-white relative tracking-tight md:tracking-normal"
        style={{ 
          fontSize: 'clamp(3rem, 15vw, 12rem)', 
          lineHeight: '0.9',
          wordBreak: 'break-word'
        }}
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.5,
          type: 'spring',
          stiffness: 40,
          damping: 20,
          mass: 1
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
        <br className="md:block hidden" />
        <div className="md:hidden h-2"></div>
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