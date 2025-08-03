import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const parallaxRef = useParallax(30);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true });

  const stats = [
    { value: 10, label: 'Years Combined Experience', suffix: '+' },
    { value: 500, label: 'Happy Clients', suffix: '+' },
    { value: 1000, label: 'Projects Completed', suffix: '+' },
    { value: 98, label: 'Client Satisfaction', suffix: '%' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
      icon: '🚀'
    },
    {
      title: 'Quality',
      description: 'Uncompromising commitment to excellence in every project we undertake.',
      icon: '⭐'
    },
    {
      title: 'Partnership',
      description: 'Building lasting relationships through trust, transparency, and results.',
      icon: '🤝'
    },
    {
      title: 'Efficiency',
      description: 'Streamlined processes that save time and deliver value.',
      icon: '⚡'
    }
  ];

  const timeline = [
    { year: '2014', event: 'Founded with a vision to revolutionize print and design' },
    { year: '2016', event: 'Expanded services to include web development' },
    { year: '2018', event: 'Launched video production division' },
    { year: '2020', event: 'Upgraded to state-of-the-art printing technology' },
    { year: '2023', event: 'Opened new facility with expanded capabilities' },
    { year: '2024', event: 'Celebrating 10 years of excellence' }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="max-width-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About</span>{' '}
              <span className="text-text-primary">Fusion Print & Design</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Where technology meets creativity. We're not just a print and design company – 
              we're your creative partners in building brands that matter.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-text-primary">
                Our Story
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Fusion Print & Design was born from the vision of two industry veterans who saw 
                an opportunity to revolutionize how businesses approach their print and design needs.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We recognized the frustration of coordinating between multiple vendors, the 
                inconsistency in quality, and the communication gaps that often led to delays 
                and compromised results. Our solution? Create a one-stop destination where 
                creativity seamlessly meets production.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Today, we're proud to be the trusted partner for over 500 businesses, from 
                startups to Fortune 500 companies, delivering exceptional results that drive 
                real business impact.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a href="/contact" className="btn-primary">
                  <span>Let's Work Together</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              ref={parallaxRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
                alt="Our team at work"
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          <div ref={statsRef} className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-2">
                  {statsInView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-text-primary text-center mb-12"
            >
              Our Core Values
            </motion.h2>
            <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-6 text-center hover:border-primary transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-dark-section rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary to-accent-cyan"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="glass-card p-4 inline-block">
                      <div className="text-primary font-bold text-lg">{item.year}</div>
                      <div className="text-text-secondary text-sm">{item.event}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-base"></div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-primary/10 to-accent-cyan/10 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your vision, our expertise, unlimited possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/portfolio" className="btn-secondary">
                <span>View Our Work</span>
              </a>
              <a href="/contact" className="btn-primary">
                <span>Start Your Project</span>
              </a>
            </div>
          </motion.section>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;