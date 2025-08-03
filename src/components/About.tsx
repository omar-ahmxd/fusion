import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-width-container section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral">
              Your Trusted Partner in Print & Design
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fusion Print & Design brings together the expertise of two industry veterans with over 
              a decade of experience each. We understand the challenges businesses face when coordinating 
              between multiple vendors for their print and design needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That's why we created a one-stop solution where creativity meets production. Our integrated 
              approach ensures seamless project execution, from initial concept to final delivery, saving 
              you time, money, and the hassle of managing multiple suppliers.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-2xl font-bold text-primary mb-1">10+</h3>
                <p className="text-gray-600">Years of Combined Experience</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-2xl font-bold text-secondary mb-1">500+</h3>
                <p className="text-gray-600">Happy Clients Served</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-neutral mb-4">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">1.</span>
                  <div>
                    <strong>Consultation:</strong> We understand your vision and requirements
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">2.</span>
                  <div>
                    <strong>Design:</strong> Our creative team brings your ideas to life
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">3.</span>
                  <div>
                    <strong>Production:</strong> State-of-the-art printing with quality control
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">4.</span>
                  <div>
                    <strong>Delivery:</strong> On-time delivery with satisfaction guarantee
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Why Local Matters</h3>
              <p className="opacity-90">
                As a local business, we understand the unique needs of our community. We offer 
                personalized service, quick turnarounds, and the flexibility that big corporations 
                can't match. When you work with us, you're supporting local expertise and getting 
                a partner who truly cares about your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;