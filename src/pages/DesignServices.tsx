import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface DesignService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  process: { step: string; description: string }[];
  stats: { value: number; label: string; suffix?: string }[];
  image: string;
  color: string;
}

const DesignServices: React.FC = () => {
  const [activeService, setActiveService] = useState('graphic');
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

  const services: Record<string, DesignService> = {
    graphic: {
      id: 'graphic',
      title: 'Graphic Design',
      subtitle: 'Visual Communication Excellence',
      description: 'Transform your ideas into stunning visual narratives that captivate and inspire.',
      services: [
        'Logo',
        'Letter head',
        'Visiting card',
        'Invitation/greeting card',
        'Brochure',
        'Invoice',
        'Label and tags',
        'Catalogue',
        'Pamphlet',
        'Packaging',
        'Business card',
        'Banner',
        'Id card',
        'Certificates',
        'Customized Cup printing',
        'Printed t-shirt'
      ],
      process: [
        { step: 'Discovery', description: 'Understanding your vision and requirements' },
        { step: 'Conceptualization', description: 'Creating initial design concepts' },
        { step: 'Refinement', description: 'Perfecting the chosen direction' },
        { step: 'Delivery', description: 'Final files in all required formats' }
      ],
      stats: [],
      image: '/still-life-fashion-designer-s-office.jpg',
      color: 'from-primary/20 to-purple-600/20'
    },
    web: {
      id: 'web',
      title: 'Web Development',
      subtitle: 'Digital Experiences That Convert',
      description: 'Build powerful online presence with modern, responsive, and user-centric websites.',
      services: [
        'Custom Website Design',
        'E-commerce Solutions',
        'Web Application Development',
        'Content Management Systems',
        'Mobile-First Design',
        'SEO Optimization',
        'Performance Enhancement',
        'Maintenance & Support'
      ],
      process: [
        { step: 'Strategy', description: 'Defining goals and user experience' },
        { step: 'Design', description: 'Creating beautiful, functional interfaces' },
        { step: 'Development', description: 'Building with cutting-edge technology' },
        { step: 'Launch', description: 'Going live with ongoing support' }
      ],
      stats: [
        { value: 200, label: 'Websites Launched', suffix: '+' },
        { value: 99, label: 'Uptime Guarantee', suffix: '%' },
        { value: 3, label: 'Second Load Time', suffix: 's' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      color: 'from-accent-cyan/20 to-blue-600/20'
    }
  };

  const currentService = services[activeService];

  return (
    <PageTransition>
      <section className="pt-20">
        <motion.div
          ref={heroRef}
          animate={heroControls}
          initial="hidden"
          className="relative min-h-[70vh] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1600)',
                backgroundSize: 'cover',
                filter: 'brightness(0.3)',
              }}
            />
          </div>

          <div className="relative z-10 max-width-container section-padding py-20">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Design</span>{' '}
              <span className="text-text-primary">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl"
            >
              Creativity Without Limits. Transform your vision into reality with our comprehensive design solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-12"
            >
              {Object.values(services).map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-gradient-primary text-white shadow-lg shadow-primary/30'
                      : 'glass-card text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {service.title}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20"
          >
            <div className="max-width-container section-padding">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold text-text-primary">
                    {currentService.title}
                  </h2>
                  <p className="text-2xl text-gradient font-semibold">
                    {currentService.subtitle}
                  </p>
                  <p className="text-lg text-text-secondary">
                    {currentService.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {currentService.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-accent-cyan">✦</span>
                        <span className="text-text-secondary text-sm">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} blur-3xl`}></div>
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="relative rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>
              </div>

              <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mb-20">
                {currentService.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="glass-card p-8 text-center"
                  >
                    <div className="text-4xl font-bold text-gradient mb-2">
                      {statsInView && (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix || ''}
                        />
                      )}
                    </div>
                    <div className="text-text-secondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-dark-section rounded-3xl p-12">
                <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">
                  Our Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {currentService.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">{step.step}</h4>
                      <p className="text-text-secondary text-sm">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent-cyan/10">
          <div className="max-width-container section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Get in touch for a free consultation.
              </p>
              <a href="/contact" className="btn-primary">
                <span>Start Your Project</span>
              </a>
            </motion.div>
          </div>
        </section>
      </section>
    </PageTransition>
  );
};

export default DesignServices;