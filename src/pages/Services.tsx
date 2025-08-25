import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Services: React.FC = () => {
  const services = [
    {
      category: 'Printing Services',
      path: '/services/printing',
      description: 'State-of-the-art printing solutions with premium finishing options',
      image: 'https://images.unsplash.com/photo-1614107151491-6876eecbff89?w=800',
      features: ['Multicolour Offset', 'UV Printing', 'Large Format', 'Finishing Services'],
      color: 'from-primary/20 to-purple-600/20'
    },
    {
      category: 'Design Services',
      path: '/services/design',
      description: 'Creative design solutions that bring your vision to life',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
      features: ['Graphic Design', 'Web Development', 'Video Production', 'UI/UX Design'],
      color: 'from-accent-cyan/20 to-blue-600/20'
    }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-width-container section-padding"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Our</span>{' '}
              <span className="text-text-primary">Services</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Complete print and design solutions under one roof. Choose your path and discover 
              how we can transform your ideas into reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Link to={service.path} className="block">
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} z-10`}></div>
                    <img
                      src={service.image}
                      alt={service.category}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/50 to-transparent z-20"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30">
                      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 md:mb-3">
                        {service.category}
                      </h2>
                      <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 md:px-3 py-1 glass-card text-text-secondary text-xs md:text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        className="inline-flex items-center text-primary font-semibold text-sm md:text-base"
                        whileHover={{ x: 10 }}
                      >
                        Explore Services
                        <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center glass-card p-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Our experts are here to help you choose the right solution for your project. 
              Get a free consultation and discover the possibilities.
            </p>
            <Link to="/contact" className="btn-primary">
              <span>Get Free Consultation</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Services;