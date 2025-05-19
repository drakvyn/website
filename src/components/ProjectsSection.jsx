import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '../lib/sanity/client';
import ProjectDetail from './ProjectDetail';
import './directlinks-overlay.css';
import './projects.css';

function ProjectCard({ project, index, onClick }) {
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
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
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
      onClick={() => onClick(project)}
    >
      <div className="flex flex-col md:flex-row w-full cursor-pointer relative min-h-[300px] md:min-h-[500px]">
        {/* Left side - Text Content */}
        <div className="w-full md:w-7/12 pr-0 md:pr-12 mb-8 md:mb-0 z-10 relative flex flex-col justify-between h-[500px]">
          <div>
            <motion.h3 
              className="text-3xl sm:text-4xl md:text-7xl xl:text-8xl font-squada text-white mb-4 md:mb-8 tracking-tight leading-none project-text-animate"
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={titleVariants}
              viewport={{ once: true }}
            >
              <span className="flex flex-wrap text-overlay">
                {project.title.toUpperCase()}
              </span>
            </motion.h3>
            
            <motion.p 
              className="text-base md:text-xl text-zinc-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {project.description}
            </motion.p>
          </div>

          {/* Mobile image - shown below content */}
          {isMobile && (
            <motion.div 
              className="w-full h-[250px] overflow-hidden rounded-2xl project-image-container mb-8"
              variants={imageVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 project-image"
                style={{ 
                  backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})`,
                }}
              />
            </motion.div>
          )}

          <div>
            <div className="mb-2">
              <span className="text-md md:text-md text-zinc-400 font-manrope tracking-wider uppercase">Used Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 bg-white p-3 rounded-lg relative">
              <div className="absolute inset-0 bg-white rounded-lg text-overlay"></div>
              {project.tags && project.tags.map((tag, i) => (
                <motion.span 
                  key={i}
                  className="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm text-black font-manrope tracking-wide relative z-10"
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
          </div>
        </div>
        
        {/* Right side - Image container for desktop */}
        <div className="w-full md:w-5/12 h-0 min-h-0 md:min-h-[500px] md:h-[500px] absolute md:relative right-0 top-0">
          {/* This is an invisible placeholder to maintain the height on desktop */}
          <div className="image-placeholder w-full h-0 md:h-[500px] md:block hidden" />
          
          {/* Desktop image - visible on scroll */}
          {!isMobile && (
            <motion.div 
              className="w-full h-[500px] absolute top-0 right-0 overflow-hidden rounded-2xl project-image-container"
              variants={imageVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 project-image"
                style={{ 
                  backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})`,
                }}
              />
            </motion.div>
          )}
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

  // Use placeholders if loading or there's an error
  const displayProjects = loading ? (
    <div className="text-center py-12">
      <div className="inline-block animate-spin h-8 w-8 border-t-2 border-purple-500 rounded-full mb-4"></div>
      <p className="text-zinc-400">Loading...</p>
    </div>
  ) : error ? (
    <div className="text-center text-red-500 mb-8">
      {error}
    </div>
  ) : projects.length === 0 ? (
    <div className="text-center text-zinc-400 mb-8">
      No projects available at this time.
    </div>
  ) : (
    projects.map((project, index) => (
      <ProjectCard 
        key={project._id} 
        project={project}
        index={index}
        onClick={handleOpenDetail}
      />
    ))
  );

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

        <div className="flex flex-col w-full">
          {loading || error || projects.length === 0 ? (
            displayProjects
          ) : (
            projects.map((project, index) => (
              <ProjectCard 
                key={project._id} 
                project={project}
                index={index}
                onClick={handleOpenDetail}
              />
            ))
          )}
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
            className="inline-block px-6 py-3 md:px-10 md:py-5 bg-white text-black text-xl md:text-2xl font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 text-overlay">VIEW ALL PROJECTS</span>
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