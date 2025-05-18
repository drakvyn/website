import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '../lib/sanity/client';
import ProjectDetail from './ProjectDetail';
import './directlinks-overlay.css';
import './projects.css';

function ProjectCard({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Text animation variants
  const titleVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { y: -100, opacity: 0, transition: { duration: 0.4 } }
  };
  
  const tagVariants = {
    initial: { x: -20, opacity: 0 },
    animate: (i) => ({ 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.4, 
        delay: 0.1 * i,
        ease: "easeOut" 
      }
    })
  };
  
  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  // Split the title into individual characters for animation
  const titleChars = project.title.toUpperCase().split('');

  // Función para gestionar el toque en móvil (similar a hover en desktop)
  const handleTouch = () => {
    if (isMobile) {
      setHovered(!hovered);
    }
  };

  // Mobile image styles
  const mobileImageStyles = isMobile ? {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80vh',
    width: '90vw',
    maxHeight: '500px',
    zIndex: 50
  } : {};

  return (
    <motion.div
      className="w-full mb-16 md:mb-32 relative project-container"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="flex flex-col md:flex-row w-full cursor-pointer relative min-h-[300px] md:min-h-[500px]">
        {/* Left side - Text Content */}
        <div className="w-full md:w-7/12 pr-0 md:pr-12 mb-8 md:mb-0 z-10 relative">
          <motion.h3 
            className="text-3xl sm:text-4xl md:text-7xl xl:text-8xl font-squada text-white mb-4 md:mb-8 tracking-tight leading-none project-text-animate"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={titleVariants}
            viewport={{ once: true }}
          >
            <span className="flex flex-wrap text-overlay">
              {titleChars.map((char, i) => (
                <span 
                  key={i}
                  className="text-wave-animation inline-block"
                  style={{ '--char-index': i }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </motion.h3>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
            {project.tags && project.tags.map((tag, i) => (
              <motion.span 
                key={i}
                className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-lg bg-[#181924]/70 text-zinc-300 rounded-full"
                variants={tagVariants}
                initial="initial"
                whileInView="animate"
                custom={i}
                viewport={{ once: true }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <motion.p 
            className="text-base md:text-xl text-zinc-300 max-w-2xl mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>
          
          <div className="flex flex-wrap gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button 
                className="px-4 py-2 md:px-6 md:py-3 bg-purple-700 text-white text-base md:text-xl font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 relative overflow-hidden button-hover-effect purple-glow"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(project);
                }}
              >
                <span className="relative z-10">VIEW DETAILS</span>
              </button>
            </motion.div>
          
          </div>
        </div>
        
        {/* Right side - Image container with fixed height */}
        <div className="w-full md:w-5/12 h-0 min-h-0 md:min-h-[500px] md:h-[500px] absolute md:relative right-0 top-0">
          {/* This is an invisible placeholder to maintain the height on desktop */}
          <div className="image-placeholder w-full h-0 md:h-[500px] md:block hidden" />
          
          {/* Mobile image preview button (thumbnail) */}
          {isMobile && !hovered && (
            <div 
              className="absolute top-0 right-0 w-[80px] h-[80px] rounded-lg overflow-hidden opacity-80 shadow-lg hidden"
              onClick={(e) => {
                e.stopPropagation();
                setHovered(true);
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})`,
                }}
              />
            </div>
          )}
          
          {/* On mobile, show below content, on desktop show on right */}
          <AnimatePresence>
            {hovered && (
              <motion.div 
                className="w-full h-[300px] md:h-[500px] absolute md:top-0 md:right-0 overflow-hidden rounded-2xl project-image-container"
                style={mobileImageStyles}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 project-image"
                  style={{ 
                    backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})`,
                  }}
                />
                
                {/* Mobile close button */}
                {isMobile && (
                  <button 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center z-30"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHovered(false);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                
                {/* Image Highlight Effect */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0"
                  initial={{ opacity: 0, rotate: -45, scale: 1.5 }}
                  animate={{ opacity: [0, 1, 0], rotate: -45, scale: 1.5, x: ['100%', '-100%'] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 2
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Divider */}
      <motion.div 
        className="w-full h-px bg-zinc-800 mt-8 md:mt-16"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const fetchedProjects = await getProjects(6);
        setProjects(fetchedProjects);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
  };

  // Placeholder projects for when we're loading or there's an error
  const placeholderProjects = [
    {
      _id: '1',
      title: 'Website',
      slug: { current: 'ecommerce-website' },
      description: 'A modern e-commerce platform with advanced filtering and smooth animations.',
      mainImage: { asset: { url: 'https://media.licdn.com/dms/image/v2/D4E22AQF8IIc_heTIcg/feedshare-shrink_800/B4EZaRyJwyGYAg-/0/1746202566470?e=1750291200&v=beta&t=GhuAYakLolKmZSd2T6X5uf3xpMtZShPww-pb4t6FEz8' } },
      tags: ['React', 'Node.js', 'MongoDB'],
      challenges: ['Complex product filtering', 'Shopping cart implementation', 'Payment processing'],
      solutions: ['Custom filter algorithm', 'Context API for state management', 'Stripe integration'],
      link: 'https://example.com/ecommerce'
    },
    {
      _id: '2',
      title: 'Mobile App',
      slug: { current: 'fitness-app' },
      description: 'A comprehensive fitness tracking application with personalized workout plans.',
      mainImage: { asset: { url: 'https://plus.unsplash.com/premium_photo-1682109363141-e6e95ad2d6b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' } },
      tags: ['React Native', 'Firebase', 'Redux'],
      challenges: ['User authentication', 'Real-time data sync', 'Background processes'],
      solutions: ['JWT authentication', 'Firestore listeners', 'Background tasks'],
      link: 'https://example.com/fitness'
    },
  ];

  // Use placeholders if loading or there's an error
  const displayProjects = loading || error || projects.length === 0 ? placeholderProjects : projects;

  return (
    <section className="py-12 md:py-24 w-full bg-[#0e0e16] relative overflow-hidden">
      <div className="container mx-auto px-4 xl:px-12">
        <motion.div
          className="mb-16 md:mb-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-squada text-white relative text-5xl sm:text-6xl md:text-8xl xl:text-9xl tracking-wide">
            <motion.span 
              className="text-overlay inline-block"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              LATEST PROJECTS
            </motion.span>
          </h2>
          <motion.p
            className="text-base md:text-xl text-zinc-400 mt-4 md:mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore my latest work and creative projects featuring unique designs and interactive experiences.
          </motion.p>
        </motion.div>

        {error && (
          <div className="text-center text-red-500 mb-8">
            {error}
          </div>
        )}

        <div className="flex flex-col w-full">
          {displayProjects.map((project, index) => (
            <ProjectCard 
              key={project._id} 
              project={project}
              index={index}
              onClick={handleOpenDetail}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a 
            href="/projects" 
            className="inline-block px-6 py-3 md:px-10 md:py-5 bg-purple-700 text-white text-xl md:text-2xl font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 relative overflow-hidden button-hover-effect purple-glow"
          >
            <span className="relative z-10">VIEW ALL PROJECTS</span>
          </a>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <ProjectDetail 
        project={selectedProject}
        isOpen={detailOpen} 
        onClose={handleCloseDetail}
      />
    </section>
  );
} 