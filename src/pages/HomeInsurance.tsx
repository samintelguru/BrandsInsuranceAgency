import React from 'react';
import { Home, Shield, Zap, Wrench, CheckCircle } from 'lucide-react';

const HomeInsurance = () => {
  const coverageTypes = [
    {
      title: 'Dwelling Coverage',
      description: 'Protects the structure of your home against covered perils like fire, wind, and vandalism.',
      icon: Home
    },
    {
      title: 'Personal Property',
      description: 'Covers your belongings including furniture, electronics, and clothing.',
      icon: Shield
    },
    {
      title: 'Liability Protection',
      description: 'Provides coverage if someone is injured on your property or you accidentally damage others property.',
      icon: Zap
    },
    {
      title: 'Additional Living Expenses',
      description: 'Covers temporary housing costs if your home becomes uninhabitable due to a covered loss.',
      icon: Wrench
    }
  ];

  const benefits = [
    'Comprehensive coverage options',
    'Competitive rates and discounts',
    'Fast and fair claims processing',
    'Replacement cost coverage available',
    'Bundle savings with auto insurance',
    'Local claims adjusters'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Home className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Home Insurance</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Protect your most valuable investment with comprehensive homeowners insurance coverage.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              Get Home Insurance Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Covered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our homeowners insurance policies provide comprehensive protection for your home and belongings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-green-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600">{type.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Home, Protected
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your home is likely your largest investment. Our comprehensive homeowners insurance 
                policies protect both your property and your family's financial security.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Start Your Quote
              </button>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                alt="Beautiful home"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeInsurance;