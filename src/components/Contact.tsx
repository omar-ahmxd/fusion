import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  timeline: string;
  budget: string;
  description: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    timeline: '',
    budget: '',
    description: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const serviceOptions = [
    'Digital Printing',
    'Offset Printing',
    'UV Printing',
    'Graphic Design',
    'Web Development',
    'Video Production',
    'Complete Package (Design + Print)',
    'Other'
  ];

  const timelineOptions = [
    'Rush (24-48 hours)',
    '1 week',
    '2 weeks',
    'Flexible'
  ];

  const budgetOptions = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    'Above $10,000'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        timeline: '',
        budget: '',
        description: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral mb-3 sm:mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Tell us about your project and we'll provide a detailed quote within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 relative">
              {/* Success Toast Message */}
              {showSuccess && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                  <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-down">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Successfully Registered! We'll contact you within 24 hours.</span>
                  </div>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements, specifications, and any special requests..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600">
                <p>📎 Need to share files? You can email them to us after submitting this form.</p>
              </div>

              <button
                type="submit"
                className="mt-6 sm:mt-8 w-full btn-primary text-sm sm:text-base"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <span className="text-primary mr-3">📍</span>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Address</p>
                    <p className="text-gray-600 text-sm sm:text-base">123 Business Park, Suite 100<br />Your City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3">📞</span>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-gray-600 text-sm sm:text-base">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3">✉️</span>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-sm sm:text-base">info@fusionprintdesign.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-90">
                * Rush orders available 24/7 with prior arrangement
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-3 sm:mb-4">Quick Response</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
              <a
                href="tel:+1234567890"
                className="btn-secondary w-full text-center text-sm sm:text-base"
              >
                Call Now for Instant Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;