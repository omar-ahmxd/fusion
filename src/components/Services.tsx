import React, { useState } from 'react';

interface ServiceCategory {
  title: string;
  icon: string;
  services: {
    name: string;
    items: string[];
  }[];
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Printing Services',
      icon: '🖨️',
      services: [
        {
          name: 'Digital & Offset Printing',
          items: [
            'Normal Print - Multi-color and black & white printing',
            'Offset Printing - High-volume, cost-effective printing',
            'UV Printing & Coating - Premium finish with enhanced durability'
          ]
        },
        {
          name: 'Materials We Print On',
          items: [
            'Sticker paper (vinyl, paper-based, waterproof)',
            'Board materials (cardboard, mounting board)',
            'Synthetic paper (waterproof, tear-resistant)'
          ]
        },
        {
          name: 'Finishing Services',
          items: [
            'Cutting - Precision cutting for board and all paper types',
            'Die Cutting & Punching - Custom shapes and functional cuts',
            'Lamination - Thermal lamination for protection and premium feel',
            'Folding - Professional document folding',
            'Scoring - Fold lines for stickers',
            'Creasing - Board fold lines for thick materials',
            'Perfect Binding - Professional book binding',
            'Stitching - Saddle and side stitching services',
            'Gold Foiling - Luxury metallic finishes',
            'Perforation - Dotted tear lines for easy separation',
            'Corner Cutting - Professional rounded corners',
            'Holes - Standard and custom hole punching'
          ]
        },
        {
          name: 'Specialty Printing',
          items: [
            'Cup Printing - Custom branded cups and promotional items',
            'Rubber Stamp Printing - Custom stamps for business use'
          ]
        }
      ]
    },
    {
      title: 'Design Services',
      icon: '🎨',
      services: [
        {
          name: 'Graphic Design (GD)',
          items: [
            'Logo Design - Professional brand identity creation',
            'Letterhead - Corporate stationery design',
            'Visiting Cards - Professional business card design',
            'Brochures - Tri-fold, bi-fold, and multi-page designs',
            'Pamphlets - Informational and promotional materials',
            'Invitations - Corporate and personal event invitations',
            'Catalogues - Product and service showcases',
            'Invoice Templates - Professional billing designs',
            'Labels & Tags - Product labels, hang tags, promotional stickers'
          ]
        },
        {
          name: 'Web Development (WD)',
          items: [
            'Website Design - Responsive, mobile-optimized websites',
            'E-commerce Solutions - Online stores with payment integration',
            'Web Applications - Custom web-based tools and platforms',
            'Digital Optimization - SEO and performance enhancement'
          ]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral mb-3 sm:mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            From concept to completion, we offer every service you need for your print and design projects
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-8 space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4">
          {serviceCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8">
          {serviceCategories[activeTab].services.map((serviceGroup, index) => (
            <div key={index} className="mb-6 sm:mb-8 last:mb-0">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">{serviceGroup.name}</h3>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {serviceGroup.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a href="#contact" className="btn-primary">
            Get Quote for Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;