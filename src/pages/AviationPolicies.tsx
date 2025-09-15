import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Shield, CheckCircle } from 'lucide-react';

const AviationPolicies = () => {
  const policyTypes = [
    {
      title: 'Aircraft Hull Insurance',
      description: 'Coverage for physical damage to aircraft, both on the ground and in flight, tailored for global aviation clients.',
      icon: Shield,
      features: ['All-risk coverage', 'Ground and in-flight protection', 'Flexible deductibles', 'Global repair network']
    },
    {
      title: 'Aviation Liability Insurance',
      description: 'Protection against third-party claims for bodily injury or property damage caused by aviation operations, with global reach.',
      icon: Plane,
      features: ['Bodily injury coverage', 'Property damage protection', 'Legal defense costs', 'Customizable limits']
    }
  ];

  const benefits = [
    'Comprehensive coverage for aircraft and equipment',
    'Protection against liability claims',
    'Global coverage for international operations',
    'Tailored policies via binding authorities',
    'Expert claims handling for aviation risks',
    'Backed by A+-rated carriers for reliability'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Plane className="h-16 w-16 mx-auto mb-6 text-sky-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Aviation Policies</h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto mb-8">
              Protect your aviation operations with comprehensive insurance solutions, crafted for global aircraft owners and operators.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Aviation Policy Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Aviation Policy Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right aviation policy to safeguard your aircraft and operations against unexpected risks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-sky-600 mr-4" />
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
                src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg"
                alt="Aviation protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Aviation Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Aviation Policies provide robust protection for aircraft, operators, and associated risks, ensuring peace of mind for global aviation clients.
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

export default AviationPolicies;