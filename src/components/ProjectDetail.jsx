import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectDetail({ project, isOpen, onClose }) {
  if (!project) return null;

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Log the project data to check what we're receiving
  console.log('Project Detail:', project);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/80"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div
            className="bg-[#181924] w-full max-w-5xl max-h-[90vh] rounded-lg z-10 overflow-auto relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full text-white text-3xl focus:outline-none z-10"
              onClick={onClose}
              style={{ background: 'rgba(0,0,0,0.4)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="h-[40vh] w-full bg-cover bg-center relative" 
              style={{ backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#181924] to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-6xl font-squada text-white tracking-wide uppercase">
                  <span className="text-overlay">
                    {project.title}
                  </span>
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="mb-2">
                  <span className="text-md md:text-md text-zinc-400 font-manrope tracking-wider uppercase">Used Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3 bg-white p-3 rounded-lg relative w-full">
                  <div className="absolute inset-0 bg-white rounded-lg text-overlay"></div>
                  {project.tags && project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm text-black font-manrope tracking-wide relative z-10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                {project.detailedDescription && (
                  <div className="mt-6">
                    <h3 className="text-3xl font-squada text-white mb-4">
                      <span className="text-overlay">PROJECT DETAILS</span>
                    </h3>
                    <p className="text-zinc-300 text-lg mb-4">
                      {project.detailedDescription}
                    </p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-3xl font-squada text-white mb-4">
                    <span className="text-overlay">CHALLENGES</span>
                  </h3>
                  <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                    {project.challenges && project.challenges.length > 0 ? 
                      project.challenges.map((challenge, index) => (
                        <li key={index} className="text-zinc-300">{challenge}</li>
                      )) : 
                      <li className="text-zinc-300">No challenges listed for this project</li>
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="text-3xl font-squada text-white mb-4">
                    <span className="text-overlay">SOLUTIONS</span>
                  </h3>
                  <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                    {project.solutions && project.solutions.length > 0 ? 
                      project.solutions.map((solution, index) => (
                        <li key={index} className="text-zinc-300">{solution}</li>
                      )) : 
                      <li className="text-zinc-300">No solutions listed for this project</li>
                    }
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black text-xl font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10 text-overlay">VIEW WEBSITE</span>
                  </a>
                )}
                
                {project.repositoryLink && (
                  <a 
                    href={project.repositoryLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black text-xl font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10 text-overlay">VIEW REPOSITORY</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 