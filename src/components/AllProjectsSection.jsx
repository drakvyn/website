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
  
  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  // Split the title into individual characters for animation
  const titleChars = project.title.toUpperCase().split('');

  return (
    <motion.div
      className="w-full mb-16 relative project-container"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="flex flex-col md:flex-row w-full cursor-pointer relative min-h-[250px]">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0 z-10 relative">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-squada text-white mb-4 tracking-tight leading-none project-text-animate"
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
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {project.tags && project.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-[#12131c] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          <motion.p
            className="text-zinc-400 mb-4 line-clamp-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>
        </div>
        
        {/* Right side - Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
          <motion.div 
            className="h-48 md:h-60 w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})`,
            }}
            variants={imageVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
          />
        </div>
      </div>
      
      {/* Divider */}
      <motion.div 
        className="w-full h-px bg-zinc-800 mt-6"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

export default function AllProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        // Fetch more projects for the "all projects" page (20 instead of 6)
        const fetchedProjects = await getProjects(20);
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

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin h-8 w-8 border-t-2 border-purple-500 rounded-full mb-4"></div>
        <p className="text-zinc-400">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mb-8">
        {error}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center text-zinc-400 mb-8">
        No projects available at this time.
      </div>
    );
  }

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project._id} 
            project={project}
            index={index}
            onClick={handleOpenDetail}
          />
        ))}
      </div>

      {/* Project detail modal */}
      <ProjectDetail 
        project={selectedProject}
        isOpen={detailOpen} 
        onClose={handleCloseDetail}
      />
    </div>
  );
} 