import React from 'react';
import { Activity, Heart, Users, Shield, CheckCircle } from 'lucide-react';

const HealthInsurance = () => {
  const planTypes = [
    {
      title: 'Individual Health Plans',
      description: 'Comprehensive health coverage for individuals and families with flexible options.',
      icon: Heart
    },
    {
      title: 'Group Health Insurance',
      description: 'Employee benefits packages for businesses of all sizes with competitive rates.',
      icon: Users
    },
    {
      title: 'Medicare Supplement',
      description: 'Additional coverage to fill gaps in Medicare benefits and reduce out-of-pocket costs.',
      icon: Shield
    },
    {
      title: 'Short-Term Medical',
      description: 'Temporary health coverage for gaps between permanent insurance plans.',
      icon: Activity
    }
  ];

  const benefits = [
    'Access to extensive provider networks',
    'Prescription drug coverage',
    'Preventive care services',
    'Emergency and urgent care',
    'Mental health and wellness programs',
    'Competitive premiums and deductibles'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Activity className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Health Insurance</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Comprehensive health insurance plans to keep you and your family healthy and protected.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              Get Health Insurance Quote
            </button>
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Insurance Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the right health insurance plan for your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-orange-600 mr-4" />
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
                Your Health is Our Priority
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Quality healthcare shouldn't break the bank. Our health insurance plans provide 
                comprehensive coverage with access to top medical providers and facilities.
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
                Explore Plans
              </button>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
                alt="Healthcare consultation"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthInsurance;