import React from 'react';

interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

const ValueProps: React.FC = () => {
  const valueProps: ValueProp[] = [
    {
      icon: '🏢',
      title: 'Complete Solutions Under One Roof',
      description: 'From initial design concepts to finished printed products, we handle every step without multiple vendors'
    },
    {
      icon: '⭐',
      title: 'Premium Quality Standards',
      description: 'State-of-the-art equipment and experienced professionals ensure consistent, high-quality results'
    },
    {
      icon: '⚡',
      title: 'Quick Project Completion',
      description: 'Our integrated workflow means faster project completion and reliable on-time delivery'
    },
    {
      icon: '💰',
      title: 'Cost-Effective Solutions',
      description: 'Direct printing capabilities and streamlined processes offer competitive rates without compromising quality'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral mb-3 sm:mb-4">
            Why Choose Fusion Print & Design?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            We combine cutting-edge technology with expert craftsmanship to deliver exceptional results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{prop.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral mb-2 sm:mb-3">{prop.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16 bg-primary rounded-xl p-6 sm:p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-4 sm:mb-6">
                Get a free consultation and quote for your printing and design needs. 
                Our expert team is ready to bring your vision to life.
              </p>
              <a href="#contact" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-block text-sm sm:text-base">
                Get Started Today
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">98%</div>
                <div className="text-xs sm:text-sm opacity-90">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">24hr</div>
                <div className="text-xs sm:text-sm opacity-90">Rush Service</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">100%</div>
                <div className="text-xs sm:text-sm opacity-90">Quality Guarantee</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">50+</div>
                <div className="text-xs sm:text-sm opacity-90">Service Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;