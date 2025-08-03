import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMouseMove3D } from '../hooks/useMouseAnimation';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'print' | 'design' | null>(null);
  const { ref: printRef, rotateX: printRotateX, rotateY: printRotateY } = useMouseMove3D();
  const { ref: designRef, rotateX: designRotateX, rotateY: designRotateY } = useMouseMove3D();

  useEffect(() => {
    const typed = new Typed('#typed-text', {
      strings: ['Technology', 'Creativity', 'Innovation', 'Excellence'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, []);

  const sideVariants = {
    default: {
      scale: 1,
      opacity: 0.8,
      filter: 'brightness(0.7)',
    },
    hover: {
      scale: 1.02,
      opacity: 1,
      filter: 'brightness(1)',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
      },
    }),
  };

  const printServices = [
    { icon: '🖨️', label: 'Digital Print' },
    { icon: '📄', label: 'Offset' },
    { icon: '✨', label: 'UV Coating' },
    { icon: '✂️', label: 'Finishing' },
  ];

  const designServices = [
    { icon: '🎨', label: 'Graphic Design' },
    { icon: '💻', label: 'Web Dev' },
    { icon: '🎬', label: 'Video' },
    { icon: '🚀', label: 'Branding' },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      <div className="relative h-full flex">
        <motion.div
          ref={printRef}
          className="relative flex-1 overflow-hidden cursor-pointer"
          variants={sideVariants}
          initial="default"
          animate={hoveredSide === 'print' ? 'hover' : 'default'}
          onMouseEnter={() => setHoveredSide('print')}
          onMouseLeave={() => setHoveredSide(null)}
          style={{
            transform: `perspective(1000px) rotateY(${printRotateY}deg) rotateX(${printRotateX}deg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/business-success-with-modern-technology-equipment-generated-by-ai.jpg)',
              filter: 'brightness(0.3)',
            }}
          ></div>

          <motion.div
            className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={contentVariants}
            >
              <span className="text-gradient">PRINTING</span>
              <br />
              <span className="text-text-primary">SERVICES</span>
            </motion.h2>

            <motion.p
              className="text-xl text-text-secondary mb-8 max-w-md"
              variants={contentVariants}
            >
              Professional printing solutions from concept to delivery
            </motion.p>

            <div className="flex gap-4 mb-8">
              {printServices.map((service, index) => (
                <motion.div
                  key={service.label}
                  custom={index}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  className="glass-card p-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-2xl mb-1">{service.icon}</div>
                  <div className="text-xs text-text-secondary">{service.label}</div>
                </motion.div>
              ))}
            </div>

            <Link to="/services/printing" className="btn-primary group">
              <span>Explore Printing</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-text-muted to-transparent transform -translate-x-1/2 z-20"></div>

        <motion.div
          ref={designRef}
          className="relative flex-1 overflow-hidden cursor-pointer"
          variants={sideVariants}
          initial="default"
          animate={hoveredSide === 'design' ? 'hover' : 'default'}
          onMouseEnter={() => setHoveredSide('design')}
          onMouseLeave={() => setHoveredSide(null)}
          style={{
            transform: `perspective(1000px) rotateY(${designRotateY}deg) rotateX(${designRotateX}deg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-accent-cyan/20 to-transparent"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600)',
              filter: 'brightness(0.3)',
            }}
          ></div>

          <motion.div
            className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={contentVariants}
            >
              <span className="text-gradient">DESIGN</span>
              <br />
              <span className="text-text-primary">SERVICES</span>
            </motion.h2>

            <motion.p
              className="text-xl text-text-secondary mb-8 max-w-md"
              variants={contentVariants}
            >
              Creative solutions that bring your vision to life
            </motion.p>

            <div className="flex gap-4 mb-8">
              {designServices.map((service, index) => (
                <motion.div
                  key={service.label}
                  custom={index}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  className="glass-card p-3"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="text-2xl mb-1">{service.icon}</div>
                  <div className="text-xs text-text-secondary">{service.label}</div>
                </motion.div>
              ))}
            </div>

            <Link to="/services/design" className="btn-primary group">
              <span>Explore Design</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-text-secondary text-lg mb-4">
          Where <span id="typed-text" className="text-gradient font-semibold"></span> Meets Creativity
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-text-muted"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;