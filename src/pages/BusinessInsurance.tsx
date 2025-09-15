import React from 'react';
import { Building, Shield, Users, Briefcase, CheckCircle } from 'lucide-react';

const BusinessInsurance = () => {
  const coverageTypes = [
    {
      title: 'General Liability',
      description: 'Protects against claims of bodily injury, property damage, and personal injury.',
      icon: Shield
    },
    {
      title: 'Property Insurance',
      description: 'Covers your business property, equipment, and inventory against damage or loss.',
      icon: Building
    },
    {
      title: 'Workers Compensation',
      description: 'Provides medical coverage and wage replacement for work-related injuries.',
      icon: Users
    },
    {
      title: 'Professional Liability',
      description: 'Protects against claims of professional negligence or errors and omissions.',
      icon: Briefcase
    }
  ];

  const benefits = [
    'Customized coverage for your industry',
    'Competitive rates from top-rated carriers',
    'Risk management consulting',
    'Claims support and assistance',
    'Bundle discounts available',
    '24/7 customer service'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Business Insurance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive commercial insurance solutions to protect your business from unexpected risks and liabilities.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              Get Business Quote
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
              Choose from a variety of business insurance products to create a comprehensive protection plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-blue-600 mr-4" />
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
                Why Choose Our Business Insurance?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand that every business is unique. That's why we work with you to create 
                a customized insurance package that fits your specific needs and budget.
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
                Contact Our Experts
              </button>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Business consultation"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessInsurance;