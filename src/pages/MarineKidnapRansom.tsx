import React from 'react';
import { Link } from 'react-router-dom';
import { LifeBuoy, Shield, CheckCircle } from 'lucide-react';

const MarineKidnapRansom = () => {
  const policyTypes = [
    {
      title: 'Kidnap and Ransom Coverage',
      description: 'Provides financial protection for ransom payments and related expenses in the event of a kidnapping during marine operations.',
      icon: Shield,
      features: ['Ransom payment coverage', 'Negotiation expenses', 'Legal liability protection', 'Global marine support']
    },
    {
      title: 'Crisis Response Coverage',
      description: 'Covers costs for crisis management, including response consultants and evacuation during kidnap or piracy incidents.',
      icon: LifeBuoy,
      features: ['Crisis consultant fees', 'Evacuation and repatriation', 'Security team support', 'Worldwide incident response']
    }
  ];

  const benefits = [
    'Comprehensive protection for marine kidnap risks',
    'Coverage for ransom and crisis response costs',
    'Global support for maritime operations',
    'Tailored policies via binding authorities',
    'Expert claims handling for kidnap incidents',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('MarineKidnapRansom policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <LifeBuoy className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Marine Kidnap and Ransom Insurance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Protect your maritime operations with tailored kidnap and ransom insurance, ensuring safety and financial security worldwide.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Marine Kidnap and Ransom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marine Kidnap and Ransom Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right insurance policy to safeguard your crew and assets against kidnap and piracy risks in maritime operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-blue-800 mr-4" />
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
                src="https://images.pexels.com/photos/14647425/pexels-photo-14647425.jpeg"
                alt="Marine protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Maritime Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Marine Kidnap and Ransom Insurance provides robust protection for crew and assets, ensuring resilience against piracy and kidnap risks worldwide.
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

export default MarineKidnapRansom;