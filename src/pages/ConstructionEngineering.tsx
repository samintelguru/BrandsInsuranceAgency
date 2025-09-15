import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Shield, CheckCircle } from 'lucide-react';

const ConstructionEngineering = () => {
  const policyTypes = [
    {
      title: 'Contractors All Risks Insurance',
      description: 'Covers physical damage and third-party liabilities for construction projects, from inception to completion, tailored for global clients.',
      icon: Shield,
      features: ['Physical damage coverage', 'Third-party liability', 'Project delay protection', 'Global project support']
    },
    {
      title: 'Professional Indemnity for Engineers',
      description: 'Protects engineers against claims arising from professional errors or omissions in design or supervision, with global coverage.',
      icon: HardHat,
      features: ['Error and omission coverage', 'Legal defense costs', 'Flexible policy limits', 'Professional liability protection']
    }
  ];

  const benefits = [
    'Comprehensive coverage for construction projects',
    'Protection against third-party liability claims',
    'Global coverage for international projects',
    'Tailored policies via binding authorities',
    'Expert claims handling for construction risks',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('ConstructionEngineering policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HardHat className="h-16 w-16 mx-auto mb-6 text-yellow-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Construction & Engineering Insurance</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Protect your construction projects with bespoke insurance solutions, designed for global contractors and engineers.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Construction & Engineering Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Construction & Engineering Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right insurance policy to safeguard your construction projects and engineering services against risks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {/* Removed: <div className="bg-white p-8 rounded-lg shadow-lg">Test Card</div> */}
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-yellow-600 mr-4" />
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
                src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg"
                alt="Construction protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Construction Projects
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Construction & Engineering Insurance provides robust protection for projects and professionals, ensuring peace of mind for global clients.
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

export default ConstructionEngineering;