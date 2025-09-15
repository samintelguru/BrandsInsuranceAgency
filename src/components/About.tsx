import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Personalized insurance solutions',
    'Competitive rates and comprehensive coverage',
    '24/7 claims support and customer service',
    'Local expertise with national backing',
    'Risk assessment and management consulting',
    'Quick and easy online quotes'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Brands Insurance Agency?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 25 years of experience in the insurance industry, Brands Insurance Agency 
              has been a trusted partner for individuals and businesses throughout the region. 
              We combine local expertise with the backing of top-rated insurance carriers to 
              provide you with the best coverage at competitive rates.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Started Today
            </button>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
              alt="Insurance consultation"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;