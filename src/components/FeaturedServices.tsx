import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const FeaturedServices: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      title: 'Digital Printing',
      description: 'High-quality digital printing with vibrant colors and sharp details for all your needs.',
      icon: '🖨️',
      features: ['Fast Turnaround', 'Small to Large Runs', 'Variable Data'],
      color: 'from-primary to-primary-dark',
      link: '/services/printing'
    },
    {
      title: 'Brand Design',
      description: 'Complete brand identity solutions that make your business stand out from the crowd.',
      icon: '🎨',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials'],
      color: 'from-accent-cyan to-blue-600',
      link: '/services/design'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      icon: '💻',
      features: ['Responsive Design', 'E-commerce', 'SEO Optimized'],
      color: 'from-accent-gold to-orange-600',
      link: '/services/design'
    },
    {
      title: 'Packaging Solutions',
      description: 'Custom packaging that protects your products and elevates your brand.',
      icon: '📦',
      features: ['Custom Shapes', 'Eco-Friendly Options', 'Premium Finishes'],
      color: 'from-purple-500 to-pink-600',
      link: '/services/printing'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-dark-bg">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4">
            Services That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-2xl mx-auto px-4 sm:px-0">
            From concept to completion, we offer comprehensive solutions tailored to your unique needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={service.link} className="block h-full">
                <div className="relative h-full bg-gray-50 dark:bg-dark-card rounded-2xl p-4 sm:p-5 lg:p-6 overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <motion.div
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">{service.description}</p>

                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-text-secondary">
                        <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-primary font-semibold text-xs sm:text-sm group-hover:translate-x-2 transition-transform">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <Link to="/services" className="btn-primary inline-flex items-center text-sm sm:text-base">
            View All Services
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;