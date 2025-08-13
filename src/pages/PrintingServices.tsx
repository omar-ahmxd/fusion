import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import { fadeInUp, staggerContainer, glassCard } from '../animations/variants';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
  specifications?: { label: string; value: string }[];
}

const PrintingServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0);
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation();

  const services: Service[] = [
    {
      title: 'Digital & Offset Printing',
      description: 'State-of-the-art printing technology for exceptional quality and precision.',
      features: [
        'Multi-color and black & white printing',
        'High-volume offset printing solutions',
        'Quick turnaround for urgent projects',
        'Cost-effective for large quantities'
      ],
      icon: '🖨️',
      image: '/modern-printing-press-creates-colorful-documents-indoors-generated-by-ai.jpg',
      specifications: [
        { label: 'Max Resolution', value: '2400 DPI' },
        { label: 'Print Speed', value: '15000 pages/hr' },
        { label: 'Max Size', value: 'Customer preference' },
        { label: 'Color Options', value: 'CMYK + RGB' }
      ]
    },
    {
      title: 'UV Printing & Coating',
      description: 'Premium finishing with enhanced durability and visual appeal.',
      features: [
        'Instant drying UV technology',
        'Enhanced color vibrancy',
        'Scratch-resistant coating',
        'Waterproof and weatherproof options'
      ],
      icon: '✨',
      image: '/modern-manufacturing-equipment-futuristic-factory-generated-by-ai.jpg',
      specifications: [
        { label: 'UV Types', value: 'Spot UV, Full UV' },
        { label: 'Thickness', value: '5-50 microns' },
        { label: 'Finish', value: 'Glossy, Matte' },
        { label: 'Durability', value: '5+ years outdoor' }
      ]
    },
    {
      title: 'Finishing Services',
      description: 'Professional finishing touches that make your prints stand out.',
      features: [
        'Precision cutting and die cutting',
        'Thermal lamination',
        'Perfect binding and stitching',
        'Folding tri bi folds',
        'Scoring',
        'Holes and corner cut',
        'Perforation'
      ],
      icon: '✂️',
      image: '/finishing-services.png',
      specifications: [
        { label: 'Cutting', value: 'All types of papers and boards' },
        { label: 'Lamination Types', value: 'Gloss, Matte, Thermal' },
        { label: 'Folding Options', value: 'Bi-fold, Tri-fold' },
        { label: 'Same-day', value: 'Available' }
      ]
    },
    {
      title: 'Specialty Printing',
      description: 'Unique printing solutions for special requirements.',
      features: [
        'Custom cup and promotional items',
        'Customized Rubber stamp manufacturing',
        'Any size banner printing',
        'Id card with tag',
        'Gold foiling'
      ],
      icon: '🎯',
      image: '/specialty-printing.png',
      specifications: [
        { label: 'Cup Types', value: 'Ceramic, Glass' },
        { label: 'Stamp Materials', value: 'Rubber' },
        { label: 'ID Card Size', value: '85.60 mm x 53.98 mm' },
        { label: 'Materials', value: '50+ options' }
      ]
    }
  ];

  const materials = [
    { name: 'Sticker Paper', types: ['Vinyl', 'Paper-based', 'Waterproof'] },
    { name: 'Board Materials', types: ['Cardboard', 'Mounting Board'] },
    { name: 'Synthetic Paper', types: ['Waterproof', 'Tear-resistant'] }
  ];

  return (
    <PageTransition>
      <section className="pt-24 sm:pt-28 lg:pt-32">
        <motion.div
          ref={heroRef}
          animate={heroControls}
          initial="hidden"
          variants={fadeInUp}
          className="relative py-20 flex items-center justify-center"
        >
          <div className="text-center max-width-container section-padding">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="text-gradient">Printing</span>{' '}
              <span className="text-text-primary">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Precision. Quality. Innovation. Experience the future of printing with our state-of-the-art technology and expert craftsmanship.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          ref={servicesRef}
          animate={servicesControls}
          initial="hidden"
          variants={staggerContainer}
          className="max-width-container section-padding py-20"
        >
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={glassCard}
                whileHover="hover"
                onClick={() => setSelectedService(index)}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                  selectedService === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-text-primary">
                {services[selectedService].title}
              </h2>
              <p className="text-lg text-text-secondary">
                {services[selectedService].description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Key Features</h3>
                {services[selectedService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-accent-cyan mt-1">✓</span>
                    <span className="text-text-secondary">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {services[selectedService].specifications && (
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {services[selectedService].specifications.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card p-4"
                    >
                      <div className="text-sm text-text-muted">{spec.label}</div>
                      <div className="text-lg font-semibold text-primary">{spec.value}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              key={`image-${selectedService}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl"></div>
              <img
                src={services[selectedService].image}
                alt={services[selectedService].title}
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        <section className="bg-dark-section py-20">
          <div className="max-width-container section-padding">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Materials We Work With
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                From standard paper to specialty materials, we handle it all with precision
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 hover:border-primary transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">{material.name}</h3>
                  <ul className="space-y-2">
                    {material.types.map((type, typeIndex) => (
                      <li key={typeIndex} className="text-text-secondary flex items-center">
                        <span className="text-accent-cyan mr-2">•</span>
                        {type}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-width-container section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 bg-gradient-to-r from-primary/10 to-accent-cyan/10"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Ready to Start Your Printing Project?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Get a free consultation and quote for your printing needs. Our experts are ready to help.
              </p>
              <a href="/contact" className="btn-primary">
                <span>Get Your Quote</span>
              </a>
            </motion.div>
          </div>
        </section>
      </section>
    </PageTransition>
  );
};

export default PrintingServices;