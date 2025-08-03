import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  // Placeholder client names - replace with actual logos
  const clients = [
    { name: 'TechCorp', id: 1 },
    { name: 'Global Industries', id: 2 },
    { name: 'Creative Studio', id: 3 },
    { name: 'Digital Agency', id: 4 },
    { name: 'StartUp Inc', id: 5 },
    { name: 'Business Solutions', id: 6 },
    { name: 'Media Group', id: 7 },
    { name: 'Innovation Labs', id: 8 },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-section overflow-hidden">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Trusted by <span className="text-gradient">Leading Brands</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're proud to work with companies that value quality and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-dark-section to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-dark-section to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex space-x-12">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: [0, -50 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-40 h-20 bg-white dark:bg-dark-card rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    <span className="text-text-secondary font-semibold">{client.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional row scrolling in opposite direction */}
        <div className="relative mt-8">
          <div className="flex space-x-12">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: [-50 * clients.length, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.reverse().map((client, index) => (
                <motion.div
                  key={`reverse-${client.id}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-40 h-20 bg-white dark:bg-dark-card rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    <span className="text-text-secondary font-semibold">{client.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;