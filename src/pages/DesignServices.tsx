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
        'Invitation card',
        'Greeting card',
        'Brochure',
        'Invoice',
        'Label and tags',
        'Catalogue',
        'Pamphlet',
        'Pagination',
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
      image: '/web-development.png',
      color: 'from-accent-cyan/20 to-blue-600/20'
    },
    uiux: {
      id: 'uiux',
      title: 'UI/UX Design',
      subtitle: 'User-Centered Digital Experiences',
      description: 'Create intuitive and engaging interfaces that delight users and drive business results.',
      services: [
        'User Research & Analysis',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Interaction Design',
        'Usability Testing',
        'Design Systems',
        'Mobile App Design',
        'Web App Design',
        'Dashboard & Analytics Design',
        'Responsive Design',
        'Accessibility Compliance'
      ],
      process: [
        { step: 'Research', description: 'Understanding users and their needs' },
        { step: 'Ideation', description: 'Generating creative solutions' },
        { step: 'Prototyping', description: 'Building interactive mockups' },
        { step: 'Testing', description: 'Validating with real users' }
      ],
      stats: [
        { value: 150, label: 'Apps Designed', suffix: '+' },
        { value: 95, label: 'User Satisfaction', suffix: '%' },
        { value: 40, label: 'Conversion Increase', suffix: '%' }
      ],
      image: '/5757453.jpg',
      color: 'from-purple-600/20 to-pink-600/20'
    },
    video: {
      id: 'video',
      title: 'Video Production',
      subtitle: 'Compelling Visual Stories',
      description: 'Professional video production services that captivate audiences and convey your message powerfully.',
      services: [
        'Corporate Videos',
        'Product Demos',
        'Explainer Videos',
        'Social Media Content',
        'Motion Graphics',
        '2D/3D Animation',
        'Video Editing',
        'Color Grading',
        'Sound Design',
        'Promotional Videos',
        'Event Coverage',
        'Documentary Production'
      ],
      process: [
        { step: 'Planning', description: 'Concept development and scripting' },
        { step: 'Production', description: 'Professional filming and recording' },
        { step: 'Post-Production', description: 'Editing and enhancement' },
        { step: 'Delivery', description: 'Final output in required formats' }
      ],
      stats: [
        { value: 500, label: 'Videos Produced', suffix: '+' },
        { value: 10, label: 'Million Views', suffix: 'M+' },
        { value: 4, label: 'K Video Quality', suffix: 'K' }
      ],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
      color: 'from-red-600/20 to-orange-600/20'
    }
  };

  const currentService = services[activeService];

  return (
    <PageTransition>
      <section className="pt-24 sm:pt-28 lg:pt-32">
        <motion.div
          ref={heroRef}
          animate={heroControls}
          initial="hidden"
          className="relative py-20 flex items-center"
        >
          <div className="max-width-container section-padding">
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
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 max-w-5xl mx-auto"
            >
              {Object.values(services).map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => setActiveService(service.id)}
                  className={`px-3 md:px-6 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
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
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center mb-12 md:mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4 md:space-y-6"
                >
                  <h2 className="text-2xl md:text-4xl font-bold text-text-primary">
                    {currentService.title}
                  </h2>
                  <p className="text-lg md:text-2xl text-gradient font-semibold">
                    {currentService.subtitle}
                  </p>
                  <p className="text-base md:text-lg text-text-secondary">
                    {currentService.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                    {currentService.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-accent-cyan">✦</span>
                        <span className="text-text-secondary text-xs md:text-sm">{service}</span>
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
                    className="relative rounded-2xl shadow-2xl w-full max-h-64 md:max-h-96 lg:max-h-none object-cover"
                  />
                </motion.div>
              </div>

              <div ref={statsRef} className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                {currentService.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="glass-card p-6 md:p-8 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                      {statsInView && (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix || ''}
                        />
                      )}
                    </div>
                    <div className="text-text-secondary text-sm md:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-dark-section rounded-2xl md:rounded-3xl p-6 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 md:mb-8 text-center">
                  Our Process
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
                      <h4 className="text-base md:text-lg font-semibold text-primary mb-2">{step.step}</h4>
                      <p className="text-text-secondary text-xs md:text-sm">{step.description}</p>
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