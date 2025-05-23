import { motion } from 'framer-motion';
import './directlinks-overlay.css';

export default function DirectLinksMotion() {
  return (
    <div className="relative mt-8 flex justify-end w-full" style={{ minHeight: 240 }}>
      <motion.div
        className="absolute top-0 right-0 w-full md:w-[600px] h-[240px] bg-purple-700 rounded-xl opacity-80 hidden md:block z-10"
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0, type: 'spring', stiffness: 60 }}
      ></motion.div>
      <motion.div
        className="absolute top-[10px] right-0 md:right-[10px] bg-white text-[#1F1B24] rounded-xl p-6 md:p-8 flex flex-col shadow-lg w-full md:w-[600px] h-[240px] md:mr-0 z-20 directlinks-overlay"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7, type: 'spring', stiffness: 60 }}
      >
        <h2 className="font-squada mb-2 tracking-wide text-4xl md:text-5xl">
          <span className="text-overlay">DIRECT LINKS</span>
        </h2>
        <div className="flex-1"></div>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-fit">
            <motion.a 
              href="https://drive.google.com/file/d/1SRwfkgz6p3WmoQTvQIzicybx5HAUZEPI/view?usp=sharing"
              target="_blank"
              className="border-2 border-[#1F1B24] text-[#1F1B24] px-[15px] py-[10px] rounded-[5px] text-sm md:text-base font-manrope font-semibold text-center w-full md:w-fit hover:bg-[#1F1B24] hover:text-white transition-all duration-200" 
              style={{ background: 'none' }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#1F1B24',
                color: '#FFFFFF',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-overlay">CV (EN)</span>
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1nu6CAP8dK-oUmLDe93Qdue46u-7bWT0r/view?usp=sharing"
              target="_blank"
              className="border-2 border-[#1F1B24] text-[#1F1B24] px-[15px] py-[10px] rounded-[5px] text-sm md:text-base font-manrope font-semibold text-center w-full md:w-fit hover:bg-[#1F1B24] hover:text-white transition-all duration-200" 
              style={{ background: 'none' }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#1F1B24',
                color: '#FFFFFF',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-overlay">CV (ES)</span>
            </motion.a>
          </div>
          <div className="flex gap-4">
            <motion.a 
              href="https://github.com/TheSoftwareWizard" 
              target="_blank" 
              aria-label="GitHub" 
              className="flex items-center justify-center"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/images/BUTTON-GH.svg" alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/jeanmra/" 
              target="_blank" 
              aria-label="LinkedIn" 
              className="flex items-center justify-center"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/images/BUTTON-LK.svg" alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
            <motion.a 
              href="https://discord.com/users/thesoftwarewizard" 
              target="_blank" 
              aria-label="Discord" 
              className="flex items-center justify-center"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/images/BUTTON-DS.svg" alt="Discord" className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
            <motion.a 
              href="https://t.me/thesoftwarewizard" 
              target="_blank" 
              aria-label="Telegram" 
              className="flex items-center justify-center"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/images/BUTTON-TL.svg" alt="Telegram" className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 