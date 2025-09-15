import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Shield, CheckCircle } from 'lucide-react';

const ProfessionalIndemnity = () => {
  const policyTypes = [
    {
      title: 'Directors and Officers Liability',
      description: 'Protects directors and officers from personal liability claims arising from decisions made in their roles, covering legal defense and settlements.',
      icon: Shield,
      features: ['Personal liability protection', 'Legal defense costs', 'Regulatory investigation coverage', 'Global support for executives']
    },
    {
      title: 'Professional Liability',
      description: 'Covers professionals against claims of negligence or errors in services provided, including financial losses to clients due to advice or work.',
      icon: Briefcase,
      features: ['Errors and omissions coverage', 'Client claim protection', 'Flexible policy limits', 'Worldwide professional support']
    }
  ];

  const benefits = [
    'Protection against negligence and error claims',
    'Coverage for legal fees and settlements',
    'Global support for professional services',
    'Tailored policies via binding authorities',
    'Expert claims handling for liability risks',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('ProfessionalIndemnity policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Indemnity Insurance</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Safeguard your professional services with tailored indemnity insurance, designed to protect against claims of negligence or errors worldwide.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Professional Indemnity Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Indemnity Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right indemnity policy to protect your professional services against claims of errors, omissions, or negligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-purple-600 mr-4" />
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
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg"
                alt="Professional protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Professional Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional Indemnity Insurance provides robust protection against claims of negligence or errors, ensuring peace of mind for professionals worldwide.
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

export default ProfessionalIndemnity;