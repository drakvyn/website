import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../lib/sanity/client';
import ProjectDetail from './ProjectDetail';
import './directlinks-overlay.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="project-card overflow-hidden rounded-xl relative cursor-pointer"
      variants={itemVariants}
      whileHover={{ y: -10 }}
      onClick={onClick}
    >
      <div 
        className="h-80 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${project.mainImage?.asset?.url || '/placeholder-project.jpg'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] to-transparent opacity-90 hover:opacity-70 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-3xl font-squada text-white mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags && project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-[#181924]/70 text-zinc-300 rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags && project.tags.length > 3 && (
              <span className="text-xs text-zinc-400">+{project.tags.length - 3} more</span>
            )}
          </div>
          
          <p className="text-zinc-300 line-clamp-2">{project.description}</p>
        </div>
      </div>
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
      title: 'E-commerce Website',
      slug: { current: 'ecommerce-website' },
      description: 'A modern e-commerce platform with advanced filtering and smooth animations.',
      mainImage: { asset: { url: '/placeholder-project-1.jpg' } },
      tags: ['React', 'Node.js', 'MongoDB'],
      challenges: ['Complex product filtering', 'Shopping cart implementation', 'Payment processing'],
      solutions: ['Custom filter algorithm', 'Context API for state management', 'Stripe integration'],
      link: 'https://example.com/ecommerce'
    },
    {
      _id: '2',
      title: 'Mobile Banking App',
      slug: { current: 'mobile-banking-app' },
      description: 'A secure and user-friendly mobile banking application with real-time transaction updates.',
      mainImage: { asset: { url: '/placeholder-project-2.jpg' } },
      tags: ['React Native', 'Firebase', 'Redux'],
      challenges: ['Secure authentication', 'Real-time updates', 'Complex financial calculations'],
      solutions: ['Two-factor authentication', 'Firestore real-time database', 'Custom calculation engine'],
      link: 'https://example.com/banking-app'
    },
    {
      _id: '3',
      title: 'Portfolio Website',
      slug: { current: 'portfolio-website' },
      description: 'A creative and interactive portfolio website with unique animations and immersive experience.',
      mainImage: { asset: { url: '/placeholder-project-3.jpg' } },
      tags: ['Next.js', 'Framer Motion', 'Three.js'],
      challenges: ['Performance optimization', 'Complex animations', 'Responsive design'],
      solutions: ['Code splitting', 'Framer Motion sequences', 'Mobile-first approach'],
      link: 'https://example.com/portfolio'
    }
  ];

  // Use placeholders if loading or there's an error
  const displayProjects = loading || error || projects.length === 0 ? placeholderProjects : projects;

  return (
    <section className="py-24 w-full bg-[#0e0e16] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-squada text-white relative text-6xl md:text-8xl tracking-wide">
            <motion.span 
              className="text-overlay inline-block"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              PROJECTS
            </motion.span>
          </h2>
          <motion.p
            className="text-lg text-zinc-400 mt-4 max-w-2xl mx-auto"
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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayProjects.map(project => (
            <ProjectCard 
              key={project._id} 
              project={project}
              onClick={() => handleOpenDetail(project)}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a 
            href="/projects" 
            className="inline-block px-8 py-4 bg-[#181924] text-white text-xl font-semibold rounded-lg hover:bg-[#6e7bff] transition-colors duration-300"
          >
            VIEW ALL PROJECTS
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