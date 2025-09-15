import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, CheckCircle } from 'lucide-react';

const InternationalProperty = () => {
  const policyTypes = [
    {
      title: 'Commercial Property Coverage',
      description: 'Protects commercial properties worldwide against physical damage, theft, and business interruption risks.',
      icon: Shield,
      features: ['Physical damage protection', 'Business interruption coverage', 'Theft and vandalism', 'Global property support']
    },
    {
      title: 'Residential Property Coverage',
      description: 'Covers residential properties internationally, safeguarding homes against natural disasters, theft, and liability risks.',
      icon: Building2,
      features: ['Home and contents protection', 'Natural disaster coverage', 'Liability protection', 'Worldwide residential support']
    }
  ];

  const benefits = [
    'Comprehensive coverage for global properties',
    'Protection against natural disasters and theft',
    'Support for commercial and residential assets',
    'Tailored policies via binding authorities',
    'Expert claims handling for property risks',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('InternationalProperty policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 text-teal-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">International Property Insurance</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Safeguard your global commercial and residential properties with tailored insurance solutions, designed for worldwide protection.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get International Property Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">International Property Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right insurance policy to protect your global properties against physical and liability risks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-teal-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/31651009/pexels-photo-31651009.jpeg"
                alt="Property protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Global Properties
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                International Property Insurance provides robust protection for commercial and residential properties worldwide, ensuring resilience against diverse risks.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
              >
                Calculate Your Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalProperty;