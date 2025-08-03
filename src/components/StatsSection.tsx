import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    {
      value: 10,
      suffix: '+',
      label: 'Years of Excellence',
      icon: '📅',
      color: 'from-primary to-primary-dark'
    },
    {
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      icon: '😊',
      color: 'from-accent-cyan to-blue-600'
    },
    {
      value: 1000,
      suffix: '+',
      label: 'Projects Completed',
      icon: '🎯',
      color: 'from-accent-gold to-orange-600'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: '⭐',
      color: 'from-purple-500 to-pink-600'
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

  const itemVariants = {
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-section">
      <div className="max-width-container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Journey in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A decade of dedication to quality and innovation has earned us the trust of hundreds of satisfied clients
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <motion.div
                  className="text-4xl mb-4"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>

                <div className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                <p className="text-text-secondary text-sm">{stat.label}</p>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;