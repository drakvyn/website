import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Magaly Ayelef",
    position: "Real Estate Agent for businesses",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGd1B6EzGdETg/profile-displayphoto-shrink_200_200/B4EZYrD2stHUAY-/0/1744479153726?e=1753315200&v=beta&t=CxjiVB0jTWgL0FDVdpGAJ6FKmNUCCOHquGSt13Fp-nY",
    text: "Jean, thank you so much for helping me with the website design. I'm really happy with the result, the process was very dynamic, and I appreciate your patience and the time you dedicated! 100% recommended for your projects.",
    linkedinUrl: "https://www.linkedin.com/in/magalyayelef/"
  },
  {
    id: 2,
    name: "Nancy Miranda Álvarez",
    position: "Audiovisual Content Creator",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGAK5vA0H1_Gw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516960661980?e=1753315200&v=beta&t=BzlK6y9Q7dd8kYE8DGvnZ8sz3RA2F6bGmEqZ2Mg0naI",
    text: "Jean is a highly committed professional. He faced a challenge on my website and handled it brilliantly. His dedication and attention to detail were exceptional. Thanks to his help, I was able to overcome a major difficulty. I fully recommend him.",
    linkedinUrl: "https://www.linkedin.com/in/nancymiranda/"
  },
  {
    id: 3,
    name: "Marcela Ávila Vivero",
    position: "Founder & CEO at Findie",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGZoLzcteio9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1603500759336?e=1753315200&v=beta&t=avC_hfGRzTDKCLaJMcmUD1Ssm5umneMwJq8pVEN1210",
    text: "Jean is our go-to for any CSS animations we want to implement on our site. He is highly skilled and works independently. A pleasure to work with.Recommended for any animation project.",
    linkedinUrl: "https://www.linkedin.com/in/mavilavivero/"
  },
  {
    id: 4,
    name: "Jose Eduardo Leiva Saint Jean",
    position: "Clinical Hypnologist",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQE5mEiptzHLMw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517488335068?e=1753315200&v=beta&t=rCu62-jUiuTEeRssLWz6-3poSnXwLnWoXeh5-lg3Bz0",
    text: "I am pleased to highly recommend Jean Roa's services in creating my website. His skill and professionalism in the design and development were exceptional.(...)",
    linkedinUrl: "https://www.linkedin.com/in/jose-eduardo-leiva-saint-jean-546328153/"
  },
  {
    id: 5,
    name: "Antonio Freyre Ascencio",
    position: "Creative Director",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEFMVYjSRXoJA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1539967732122?e=1753315200&v=beta&t=dXX8YfZOEyioyvPQsITJuUUYoxZo6nv3b3LtLD6hLi8",
    text: "Excellent freelance work! Very kind and hardworking.",
    linkedinUrl: "https://www.linkedin.com/in/antonio-freyre-ascencio-487a7b62/"
  },
  {
    id: 6,
    name: "Rosmar Sánchez Mendoza",
    position: "Web Designer & Data Analyst",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFBYtYde07epw/profile-displayphoto-shrink_200_200/B4EZOsRMZMGQAk-/0/1733762009182?e=1753315200&v=beta&t=6jDLnLJtwCt-yzm7U6dQetbExDMxYdOK4Tf7AZboNh0",
    text: "Jean is always looking to improve his skills, updating his portfolio, and optimizing his design capabilities.",
    linkedinUrl: "https://www.linkedin.com/in/rosmar-sanchez/"
  },
  {
    id: 7,
    name: "Santiago Correa",
    position: "Frontend Developer at Statista",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFnzWS8LGe8Hw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700920256705?e=1753315200&v=beta&t=3vAlbKYNXQRSI6VEE14m7SKroy0C33u-kriJ5iIBHvU",
    text: "I had the pleasure of working with Jean and it was a great experience. He's always eager to learn, improve, and give his best. Sometimes we had to meet late, and he was always willing to do so. I really appreciated his effort.",
    linkedinUrl: "https://www.linkedin.com/in/wegrix/"
  },
  {
    id: 8,
    name: "Pablo Montt Amenábar",
    position: "Product Designer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFmNf5P2Yd2qA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727093182073?e=1753315200&v=beta&t=ncE8epCpreonBSCjCFa92LcZKUCh2MHFyB2amoMSGRk",
    text: "I highly recommend Jean Roa's work. Very clear and efficient — he collaborated with the eXimius agency. Excellent results in both quality and delivery time. Very thankful for his professionalism.",
    linkedinUrl: "https://www.linkedin.com/in/pablo-montt-amen%C3%A1bar-05997835/"
  }
];

const SLIDE_DURATION = 7500; // Duración total en ms
const PROGRESS_INTERVAL = 10; // Intervalo de actualización en ms
const PROGRESS_INCREMENT = (PROGRESS_INTERVAL / SLIDE_DURATION) * 100; // Calculamos el incremento exacto

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    let progressInterval;
    let slideTimeout;

    if (!isHovered) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev + PROGRESS_INCREMENT;
          return nextProgress;
        });
      }, PROGRESS_INTERVAL);

      slideTimeout = setTimeout(() => {
        nextTestimonial();
      }, SLIDE_DURATION);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [isHovered, currentIndex, nextTestimonial]);

  // Efecto separado para manejar el cambio de slide cuando el progreso llega a 100
  useEffect(() => {
    if (progress >= 100) {
      nextTestimonial();
    }
  }, [progress, nextTestimonial]);

  return (
    <section className="py-12 md:py-24 w-full bg-[#0E0B16] relative overflow-hidden">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-squada text-white relative text-5xl sm:text-6xl md:text-8xl tracking-wide uppercase">
            <motion.span 
              className="text-overlay inline-block"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What People Say
            </motion.span>
          </h2>
          <motion.p
            className="text-base md:text-lg text-zinc-400 mt-3 md:mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover what my clients say about my work and commitment to excellence
          </motion.p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#181924] rounded-xl p-8 shadow-2xl border border-white/10 backdrop-blur-lg cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-xl ring-2 ring-white/30 ring-offset-2 ring-offset-[#181924]"></div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-squada text-white mb-2">
                    <span className="text-overlay">{testimonials[currentIndex].name}</span>
                  </h3>
                  <p className="text-white/80">{testimonials[currentIndex].position}</p>
                </div>
              </div>
              <blockquote className="text-zinc-300 text-lg md:text-xl italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <a
                    href={testimonials[currentIndex].linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                  >
                    <span>See on LinkedIn</span>
                    <svg 
                      className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Testimonial indicators */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`h-0.5 transition-all duration-700 ${
                          index === currentIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/20 w-2'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 