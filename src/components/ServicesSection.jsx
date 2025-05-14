import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './directlinks-overlay.css';
import './services.css';

const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description: "Creation of custom websites and applications with unique animations and interactive experiences.",
    icon: "🌐"
  },
  {
    id: 2,
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: "Internal tools, dashboards, process automation, and more.",
    icon: "✨"
  },
  {
    id: 3,
    title: "MOBILE APPS",
    description: "Development of mobile applications for iOS and Android that stand out for their performance and design.",
    icon: "📱"
  },
  {
    id: 4,
    title: "E-COMMERCE",
    description: "Creation of online stores optimized for conversions and with smooth shopping experiences.",
    icon: "🛒"
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
      const particleCount = Math.floor(canvas.width / 15); // Adjust according to desired density
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: `rgba(126, 34, 206, ${Math.random() * 0.4 + 0.1})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
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
            ctx.strokeStyle = `rgba(126, 34, 206, ${(maxDistance - distance) / maxDistance * 0.3})`;
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
      className="absolute inset-0 pointer-events-none opacity-40 z-0"
    />
  );
}

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="py-24 w-full bg-[#0e0e16] relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-squada text-white relative text-8xl md:text-9xl tracking-wide">
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
            className="text-lg text-zinc-400 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Creative and technical solutions to bring your digital vision to life with a focus on animations and interactive experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
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
                className={`p-8 md:p-12 rounded-xl transition-all duration-500 ${
                  hoveredService === service.id 
                    ? 'bg-[#181924] transform scale-[1.02]' 
                    : 'bg-transparent'
                }`}
              >
                <div className="service-icon mb-8">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="font-squada text-white text-5xl md:text-6xl tracking-wide mb-8 relative">
                  <motion.span 
                    className="text-overlay inline-block animated-underline"
                    initial={{ clipPath: 'inset(100% 0 0 0)' }}
                    whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.span>
                </h3>
                <p className={`text-lg transition-colors duration-300 ${
                  hoveredService === service.id ? 'text-zinc-300' : 'text-zinc-400'
                }`}>
                  {service.description}
                </p>
                <div className={`mt-8 overflow-hidden transition-all duration-300 ${
                  hoveredService === service.id ? 'h-12 opacity-100' : 'h-0 opacity-0'
                }`}>
                  <motion.button
                    className="px-8 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-colors relative overflow-hidden button-hover-effect"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">LEARN MORE</span>
                  </motion.button>
                </div>
                
                {/* Animated line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-0.5">
                  <motion.div 
                    className="h-full bg-purple-700"
                    initial={{ width: 0 }}
                    whileInView={{ width: hoveredService === service.id ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a 
            href="/services" 
            className="inline-block px-10 py-5 bg-purple-700 text-white text-2xl font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 relative overflow-hidden button-hover-effect purple-glow"
          >
            <span className="relative z-10">VIEW ALL SERVICES</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 