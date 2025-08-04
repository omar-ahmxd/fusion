import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeInUp, staggerContainer } from '../animations/variants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDetails: string;
  personalNote: string;
  timeline: string;
  services: string[];
}


const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: '',
    personalNote: '',
    timeline: '',
    services: []
  });

  const serviceCategories = {
    printing: {
      label: 'Printing Services',
      options: [
        'Digital & Offset Printing',
        'UV Printing & Coating',
        'Thermal lamination',
        'Folding tri bi folds',
        'Scoring',
        'Holes and corner cut',
        'Perforation',
        'Custom cup printing',
        'Rubber stamp manufacturing',
        'Banner printing',
        'Id card with tag',
        'Gold foiling'
      ]
    },
    design: {
      label: 'Graphic Design Services',
      options: [
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
        'Banner design',
        'Id card design',
        'Certificates',
        'Customized Cup printing design',
        'Printed t-shirt design'
      ]
    },
    web: {
      label: 'Web Development',
      options: [
        'Custom Website Design',
        'E-commerce Solutions',
        'Web Application Development',
        'Content Management Systems',
        'Mobile-First Design',
        'SEO Optimization',
        'Performance Enhancement',
        'Maintenance & Support'
      ]
    }
  };


  const timelineOptions = [
    'ASAP (Rush)',
    '1 Week',
    '2-3 Weeks',
    '1 Month',
    '2+ Months',
    'Flexible'
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
  };

  const handleNewSubmission = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      projectDetails: '',
      personalNote: '',
      timeline: '',
      services: []
    });
    setStep(1);
    setShowSuccess(false);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        {/* Success Card Overlay */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 max-w-md w-full text-center animate-scale-up">
              {/* Success Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-2 -left-4 w-3 h-3 bg-accent-cyan/30 rounded-full"></div>
                <div className="absolute -bottom-1 -right-6 w-4 h-4 bg-accent-gold/30 rounded-full"></div>
                <div className="absolute top-8 -right-8 w-2 h-2 bg-primary/30 rounded-full"></div>
              </div>
              
              {/* Thank You Message */}
              <h2 className="text-3xl font-bold text-text-primary mb-3">Thank You!</h2>
              <p className="text-text-secondary mb-8">
                Your quote request has been received. We will get back to you shortly.
              </p>
              
              {/* Send Another Request Button */}
              <button
                onClick={handleNewSubmission}
                className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/30 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105"
              >
                Send Another Request
              </button>
              
              {/* Close button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-width-container section-padding"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Let's Work</span>{' '}
              <span className="text-text-primary">Together</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Share your project details and requirements with us. 
              We'll get back to you within 24 hours to discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeInUp}
                className="glass-card p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`flex items-center ${i < 3 ? 'flex-1' : ''}`}
                    >
                      <motion.div
                        animate={{
                          backgroundColor: step >= i ? '#0066ff' : '#404040',
                          scale: step === i ? 1.1 : 1
                        }}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      >
                        {i}
                      </motion.div>
                      {i < 3 && (
                        <div
                          className={`flex-1 h-px mx-4 transition-colors duration-300 ${
                            step > i ? 'bg-primary' : 'bg-dark-border'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-text-primary mb-6">
                        Contact Information
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setStep(2);
                          document.querySelector('.glass-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="btn-primary"
                      >
                        <span>Next: Project Details</span>
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-text-primary mb-6">
                        Project Details
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-4">
                          Select Services *
                        </label>
                        {Object.entries(serviceCategories).map(([key, category]) => (
                          <div key={key} className="mb-6">
                            <h3 className="text-lg font-semibold text-primary mb-3">
                              {category.label}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                              {category.options.map((service) => (
                                <motion.label
                                  key={service}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                                    formData.services.includes(service)
                                      ? 'bg-primary/20 border border-primary'
                                      : 'bg-dark-base border border-dark-border hover:border-primary/50'
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={formData.services.includes(service)}
                                    onChange={() => handleServiceToggle(service)}
                                    className="sr-only"
                                  />
                                  <span className="text-text-secondary">{service}</span>
                                </motion.label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Project Description
                        </label>
                        <textarea
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                          placeholder="Tell us more about your project..."
                        />
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            setStep(1);
                            document.querySelector('.glass-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className="btn-secondary"
                        >
                          <span>Back</span>
                        </button>
                        <button
                          onClick={() => {
                            setStep(3);
                            document.querySelector('.glass-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className="btn-primary"
                        >
                          <span>Next: Additional Information</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-text-primary mb-6">
                        Additional Information
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            Personal Note
                          </label>
                          <textarea
                            name="personalNote"
                            value={formData.personalNote}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder="Any additional information, special requirements, or questions you'd like to share..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            setStep(2);
                            document.querySelector('.glass-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className="btn-secondary"
                        >
                          <span>Back</span>
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="btn-primary"
                        >
                          <span>Submit Quote Request</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-text-secondary text-sm">Phone</div>
                    <div className="text-text-primary">(123) 456-7890</div>
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm">Email</div>
                    <div className="text-text-primary">info@fusionprintdesign.com</div>
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm">Address</div>
                    <div className="text-text-primary">
                      123 Business Park, Suite 100<br />
                      Your City, State 12345
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 bg-gradient-to-br from-primary/10 to-accent-cyan/10"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-2">✓</span>
                    <span className="text-text-secondary text-sm">One-stop solution for all your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-2">✓</span>
                    <span className="text-text-secondary text-sm">10+ years of industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-2">✓</span>
                    <span className="text-text-secondary text-sm">500+ satisfied clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-2">✓</span>
                    <span className="text-text-secondary text-sm">24-hour response guarantee</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Contact;