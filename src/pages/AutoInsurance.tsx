import React from 'react';
import { Car, Shield, Wrench, Users, CheckCircle } from 'lucide-react';

const AutoInsurance = () => {
  const coverageTypes = [
    {
      title: 'Liability Coverage',
      description: 'Required coverage that pays for damages you cause to others in an accident.',
      icon: Shield
    },
    {
      title: 'Collision Coverage',
      description: 'Covers damage to your vehicle from collisions with other vehicles or objects.',
      icon: Car
    },
    {
      title: 'Comprehensive Coverage',
      description: 'Protects against theft, vandalism, weather damage, and other non-collision incidents.',
      icon: Wrench
    },
    {
      title: 'Personal Injury Protection',
      description: 'Covers medical expenses and lost wages for you and your passengers.',
      icon: Users
    }
  ];

  const benefits = [
    'Competitive rates and discounts',
    'Excellent customer service',
    '24/7 claims reporting',
    'Roadside assistance available',
    'Multi-vehicle discounts',
    'Safe driver rewards'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Car className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Auto Insurance</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Get comprehensive auto insurance coverage with competitive rates and excellent service.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              Get Auto Insurance Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coverage Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of auto insurance coverages to protect you on the road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-purple-600 mr-4" />
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
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"
                alt="Car on road"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Drive with Confidence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our auto insurance policies provide the coverage you need at rates you can afford. 
                From liability to comprehensive coverage, we've got you covered on the road.
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
                Compare Rates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoInsurance;