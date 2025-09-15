import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, CheckCircle } from 'lucide-react';

const EnergyInsurance = () => {
  const policyTypes = [
    {
      title: 'Onshore Energy Coverage',
      description: 'Protects onshore energy facilities, such as power plants and refineries, against physical damage and business interruption risks.',
      icon: Shield,
      features: ['Physical damage protection', 'Business interruption coverage', 'Equipment breakdown', 'Global onshore operations']
    },
    {
      title: 'Offshore Energy Coverage',
      description: 'Covers offshore energy assets, including oil rigs and wind farms, against environmental and operational risks.',
      icon: Zap,
      features: ['Offshore asset protection', 'Environmental liability', 'Operational risk coverage', 'Worldwide offshore support']
    }
  ];

  const benefits = [
    'Comprehensive coverage for energy assets',
    'Protection against environmental liabilities',
    'Global support for onshore and offshore operations',
    'Tailored policies via binding authorities',
    'Expert claims handling for energy risks',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('EnergyInsurance policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Zap className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Energy Insurance</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Safeguard your energy operations with tailored insurance solutions, designed for global onshore and offshore energy facilities.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Energy Insurance Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Energy Insurance Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right insurance policy to protect your energy facilities against operational and environmental risks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-orange-600 mr-4" />
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
                src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
                alt="Energy protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Energy Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Energy Insurance provides robust protection for onshore and offshore facilities, ensuring resilience against operational and environmental risks.
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

export default EnergyInsurance;