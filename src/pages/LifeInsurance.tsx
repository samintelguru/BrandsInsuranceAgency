import React from 'react';
import { Heart, Shield, Users, DollarSign, CheckCircle } from 'lucide-react';

const LifeInsurance = () => {
  const policyTypes = [
    {
      title: 'Term Life Insurance',
      description: 'Affordable coverage for a specific period, perfect for young families and mortgage protection.',
      icon: Shield,
      features: ['Lower premiums', 'Flexible terms', 'Convertible options', 'Level premiums']
    },
    {
      title: 'Whole Life Insurance',
      description: 'Permanent coverage with cash value accumulation and guaranteed premiums.',
      icon: DollarSign,
      features: ['Lifetime coverage', 'Cash value growth', 'Dividend potential', 'Tax advantages']
    }
  ];

  const benefits = [
    'Financial security for your loved ones',
    'Income replacement protection',
    'Debt and mortgage coverage',
    'Estate planning benefits',
    'Tax-free death benefits',
    'Peace of mind for your family'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Life Insurance</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Protect your family's financial future with comprehensive life insurance coverage tailored to your needs.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              Get Life Insurance Quote
            </button>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Life Insurance Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right life insurance policy to protect your family's financial security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-red-600 mr-4" />
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
                src="https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg"
                alt="Happy family"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Protect What Matters Most
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Life insurance provides financial protection for your loved ones when they need it most. 
                Ensure your family can maintain their lifestyle and achieve their dreams, even in your absence.
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
                Calculate Your Coverage
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeInsurance;