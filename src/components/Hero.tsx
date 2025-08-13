import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    { icon: '🖨️', label: 'Digital Print', link: '/services/printing' },
    { icon: '📄', label: 'Offset', link: '/services/printing' },
    { icon: '✨', label: 'UV Coating', link: '/services/printing' },
    { icon: '✂️', label: 'Finishing', link: '/services/printing' },
  ];

  const designServices = [
    { icon: '🎨', label: 'Graphic Design', link: '/services/design' },
    { icon: '💻', label: 'Web Dev', link: '/services/design' },
    { icon: '🎬', label: 'Video', link: '/services/design' },
    { icon: '🚀', label: 'Branding', link: '/services/design' },
  ];

  return (
    <section className="relative min-h-screen lg:h-screen overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      <div className="relative h-full flex flex-col lg:flex-row">
        <motion.div
          ref={printRef}
          className="relative flex-1 min-h-[50vh] lg:min-h-full overflow-hidden cursor-pointer"
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
            className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pb-20 sm:pb-16 lg:pb-0 pt-8 sm:pt-12 lg:pt-0"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6"
              variants={contentVariants}
            >
              <span className="text-gradient">PRINTING</span>
              <br />
              <span className="text-text-primary">SERVICES</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 lg:mb-8 max-w-md"
              variants={contentVariants}
            >
              Professional printing solutions from concept to delivery
            </motion.p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 lg:mb-8">
              {printServices.map((service, index) => (
                <Link key={service.label} to={service.link}>
                  <motion.div
                    custom={index}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="glass-card p-2 sm:p-3 cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-xl sm:text-2xl mb-1">{service.icon}</div>
                    <div className="text-[10px] sm:text-xs text-text-secondary">{service.label}</div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-text-muted to-transparent transform -translate-x-1/2 z-20"></div>
        <div className="lg:hidden absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-text-muted to-transparent transform -translate-y-1/2 z-20"></div>

        <motion.div
          ref={designRef}
          className="relative flex-1 min-h-[50vh] lg:min-h-full overflow-hidden cursor-pointer"
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
            className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pb-20 sm:pb-16 lg:pb-0 pt-8 sm:pt-12 lg:pt-0"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6"
              variants={contentVariants}
            >
              <span className="text-gradient">DESIGN</span>
              <br />
              <span className="text-text-primary">SERVICES</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 lg:mb-8 max-w-md"
              variants={contentVariants}
            >
              Creative solutions that bring your vision to life
            </motion.p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 lg:mb-8">
              {designServices.map((service, index) => (
                <Link key={service.label} to={service.link}>
                  <motion.div
                    custom={index}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="glass-card p-2 sm:p-3 cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <div className="text-xl sm:text-2xl mb-1">{service.icon}</div>
                    <div className="text-[10px] sm:text-xs text-text-secondary">{service.label}</div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center pb-4 sm:pb-6 lg:pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-text-secondary text-xs sm:text-sm lg:text-lg mb-2 lg:mb-4 px-4">
          Where <span id="typed-text" className="text-gradient font-semibold"></span> Meets Creativity
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-text-muted"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;