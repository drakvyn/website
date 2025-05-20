import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetail from './ProjectDetail';
import './directlinks-overlay.css';
import './projects.css';

// Importación dinámica del cliente de Sanity
const sanityClient = await import('../lib/sanity/client.js');

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
      className="w-full relative project-card cursor-pointer"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="flex flex-col w-full cursor-pointer relative">
        {/* Image Container */}
        <div className="w-full relative overflow-hidden rounded-lg project-image-container">
          <motion.div 
            className="h-[350px] w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})`,
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-[#0e0e16]/80 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
              <motion.h3 
                className="text-overlay font-squada text-white text-2xl md:text-3xl tracking-tight leading-none"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {project.title.toUpperCase()}
              </motion.h3>
              
              <motion.p
                className="text-zinc-300 text-sm line-clamp-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {project.description}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-1.5"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.tags && project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-white text-black hover:bg-zinc-100 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AllProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const fetchedProjects = await sanityClient.getAllProjects();
        setProjects(fetchedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenDetail = async (project) => {
    try {
      setDetailLoading(true);
      // Cargamos el proyecto completo incluyendo detailedDescription, challenges y solutions
      if (project.slug && project.slug.current) {
        const fullProject = await sanityClient.getProjectBySlug(project.slug.current);
        setSelectedProject(fullProject);
      } else {
        // Si no tiene slug, usamos el proyecto tal como está
        setSelectedProject(project);
        console.warn('Project missing slug, using limited data');
      }
      setDetailOpen(true);
    } catch (error) {
      console.error('Error loading project details:', error);
      // En caso de error, usamos los datos limitados que ya tenemos
      setSelectedProject(project);
      setDetailOpen(true);
    } finally {
      setDetailLoading(false);
    }
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-t-2 border-white rounded-full mb-4"></div>
          <p className="text-zinc-400">Loading projects...</p>
        </div>
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
    <>
      {projects.map((project, index) => (
        <ProjectCard 
          key={project._id} 
          project={project}
          index={index}
          onClick={handleOpenDetail}
        />
      ))}

      <ProjectDetail 
        project={selectedProject}
        isOpen={detailOpen} 
        onClose={handleCloseDetail}
        loading={detailLoading}
      />
    </>
  );
} 