import React from 'react';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Protect What Matters Most with 
              <span className="text-blue-200"> Trusted Insurance</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
             In strategic partnership with leading international brands, we deliver comprehensive insurance solutions tailored for optimal protection. Our policies offer international coverage with local accessibility, underwritten by Lloyd’s of London through Lilly Plummer Risks Ltd—a market-leading Lloyd’s broker headquartered in London. Operating across multiple classes of business and industry sectors, LPR leverages deep expertise in both London and international markets to manage risks of all sizes and craft tailor-made policies for each client. We also collaborate with other reputable Kenyan underwriters to ensure robust, localized support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-blue-200 mb-2" />
                <p className="text-2xl font-bold">25+</p>
                <p className="text-blue-200">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-blue-200 mb-2" />
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-blue-200">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-8 w-8 text-blue-200 mb-2" />
                <p className="text-2xl font-bold">A+</p>
                <p className="text-blue-200">Rated Company</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
              alt="Insurance protection"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;