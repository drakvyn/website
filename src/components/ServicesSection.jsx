import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './directlinks-overlay.css';
import './services.css';

const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description: "Creation of custom websites and applications with unique animations and interactive experiences."
  },
  {
    id: 2,
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: "Internal tools, dashboards, process automation, and more."
  },
  {
    id: 3,
    title: "MOBILE APPS",
    description: "Development of mobile applications for iOS and Android that stand out for their performance and design."
  },
  {
    id: 4,
    title: "E-COMMERCE",
    description: "Creation of online stores optimized for conversions and with smooth shopping experiences."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Component for animated particles
function ParticlesBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    // Adjust canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      // Reduce particle count on mobile devices
      const isMobile = window.innerWidth < 768;
      const particleCount = Math.floor(canvas.width / (isMobile ? 25 : 15));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (isMobile ? 1.5 : 2) + 0.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
          speedX: Math.random() * (isMobile ? 0.3 : 0.5) - 0.25,
          speedY: Math.random() * (isMobile ? 0.3 : 0.5) - 0.25
        });
      }
    };
    
    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce on edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Connect nearby particles
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Connect nearby particles with lines
    const connectParticles = () => {
      const maxDistance = 100;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${(maxDistance - distance) / maxDistance * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Initialize
    resizeCanvas();
    animate();
    
    // Handle resizing
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none opacity-30 sm:opacity-40 z-0"
    />
  );
}

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="py-12 sm:py-16 md:py-24 w-full bg-[#0e0e16] relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-squada text-white relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide">
            <motion.span 
              className="text-overlay inline-block"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              SERVICES
            </motion.span>
          </h2>
          <motion.p
            className="text-base sm:text-lg text-zinc-400 mt-3 sm:mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Creative and technical solutions to bring your digital vision to life with a focus on animations and interactive experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative service-card"
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div 
                className={`p-6 sm:p-8 md:p-12 rounded-xl transition-all duration-500 h-[280px] flex flex-col ${
                  hoveredService === service.id 
                    ? 'bg-[#181924] transform scale-[1.02]' 
                    : 'bg-transparent'
                }`}
              >
                <h3 className="font-squada text-white text-4xl sm:text-5xl md:text-6xl tracking-wide mb-6 sm:mb-8 relative">
                    <span className="text-overlay">
                      {service.title}
                    </span>
                </h3>
                <p className={`text-base sm:text-lg transition-colors duration-300 flex-grow ${
                  hoveredService === service.id ? 'text-zinc-300' : 'text-zinc-400'
                }`}>
                  {service.description}
                </p>
                
                {/* Animated line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-0.5">
                  <motion.div 
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: hoveredService === service.id ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 