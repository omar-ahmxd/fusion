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
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tell us about your project and we'll provide a detailed quote within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
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

              <div className="mt-6 text-sm text-gray-600">
                <p>📎 Need to share files? You can email them to us after submitting this form.</p>
              </div>

              <button
                type="submit"
                className="mt-8 w-full btn-primary"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-neutral mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary mr-3">📍</span>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Business Park, Suite 100<br />Your City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3">📞</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3">✉️</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@fusionprintdesign.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
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
              <p className="mt-4 text-sm opacity-90">
                * Rush orders available 24/7 with prior arrangement
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-neutral mb-4">Quick Response</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
              <a
                href="tel:+1234567890"
                className="btn-secondary w-full text-center"
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