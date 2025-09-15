import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Shield, CheckCircle } from 'lucide-react';

const FinancialInstitutions = () => {
  const policyTypes = [
    {
      title: 'Directors and Officers Liability',
      description: 'Protects directors and officers from personal liability claims arising from decisions made in their roles.',
      icon: Shield,
      features: ['Personal liability protection', 'Legal defense costs', 'Regulatory investigation coverage', 'Global support']
    },
    {
      title: 'Professional Liability',
      description: 'Covers financial institutions against claims of negligence or errors in professional services provided to clients.',
      icon: Briefcase,
      features: ['Errors and omissions coverage', 'Client claim protection', 'Flexible policy limits', 'Worldwide coverage']
    }
  ];

  const benefits = [
    'Comprehensive protection for financial institutions',
    'Coverage for regulatory and client claims',
    'Global support for international operations',
    'Tailored policies via binding authorities',
    'Expert claims handling for financial risks',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('FinancialInstitutions policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Financial Institutions Insurance</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Protect your financial institution with tailored insurance solutions, designed for global banks, insurers, and investment firms.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Financial Institutions Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Institutions Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right insurance policy to safeguard your financial institution against liability and professional risks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-indigo-600 mr-4" />
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
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
                alt="Financial protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Financial Institution
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Financial Institutions Insurance provides robust protection for banks, insurers, and investment firms, ensuring resilience against liability and professional risks.
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

export default FinancialInstitutions;