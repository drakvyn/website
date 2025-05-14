import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectDetail from './ProjectDetail';

const projects = [
  {
    id: 1,
    title: "PORTFOLIO SITE",
    description: "Personal website with focus on animations and user interaction",
    image: "/projects/project1.svg",
    tags: ["React", "Framer Motion", "TailwindCSS"],
    link: "#"
  },
  {
    id: 2,
    title: "E-COMMERCE APP",
    description: "Modern online store with clean interface and smooth animations",
    image: "/projects/project2.svg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "#"
  },
  {
    id: 3,
    title: "ADMIN DASHBOARD",
    description: "Comprehensive analytics interface with data visualization",
    image: "/projects/project3.svg",
    tags: ["React", "D3.js", "Firebase"],
    link: "#"
  }
];

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

// Animation variants for each project
const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };

  const closeProjectDetail = () => {
    setDetailOpen(false);
  };

  return (
    <section className="py-20 w-full">
      <div className="mb-16">
        <motion.h2 
          className="text-8xl font-squada tracking-wide text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          WORK
        </motion.h2>
        <motion.p
          className="text-lg text-zinc-400 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Selected projects showcasing my expertise in web development with a focus on animations and user experience.
        </motion.p>
      </div>

      <motion.div 
        className="grid gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative"
            variants={projectVariants}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div 
              className="block group cursor-pointer"
              onClick={() => openProjectDetail(project)}
            >
              <div className="flex flex-col md:flex-row justify-between items-start border-t border-zinc-800 pt-8 pb-8">
                <div className="flex-1">
                  <h3 className="text-5xl font-squada text-white tracking-wide group-hover:text-[#6e7bff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mt-4 max-w-md">
                    {project.description}
                  </p>
                  <div className="mt-6 flex gap-3 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-sm rounded-full bg-[#181924] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  className="md:w-[300px] h-[200px] mt-6 md:mt-0 overflow-hidden bg-[#181924] rounded-lg"
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-full h-full bg-center bg-cover"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      opacity: hoveredProject === project.id ? 1 : 0.7,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
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
          href="#contact" 
          className="inline-block px-8 py-4 bg-[#181924] text-white text-xl font-semibold rounded-lg hover:bg-[#6e7bff] transition-colors duration-300"
        >
          SEE ALL PROJECTS
        </a>
      </motion.div>

      <ProjectDetail 
        project={selectedProject}
        isOpen={detailOpen}
        onClose={closeProjectDetail}
      />
    </section>
  );
} 