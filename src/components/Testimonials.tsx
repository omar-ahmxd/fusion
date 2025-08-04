import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      quote: 'Fusion Print & Design exceeded our expectations! They handled our complete rebrand from logo design to business cards and marketing materials. The quality is outstanding and the turnaround was incredibly fast.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Green Earth Solutions',
      quote: 'Working with one company for both design and printing saved us so much time and hassle. Their team is professional, creative, and always delivers on time. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Boutique Fashion House',
      quote: 'The attention to detail in our product catalogues and promotional materials is exceptional. The gold foiling on our business cards gives them such a premium feel. Worth every penny!',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Local Restaurant Group',
      quote: 'From our website to our printed menus and promotional videos, Fusion handles it all. It\'s like having an entire marketing department at our fingertips. Great service and competitive prices.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-width-container section-padding">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Don't just take our word for it - hear from businesses who trust us with their print and design needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-3 sm:mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-3 sm:pt-4">
                <p className="font-semibold text-sm sm:text-base text-neutral">{testimonial.name}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Join 500+ Satisfied Clients
          </h3>
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0">
            Experience the difference of working with a partner who understands your vision and delivers results
          </p>
          <a href="#contact" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-block text-sm sm:text-base">
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;