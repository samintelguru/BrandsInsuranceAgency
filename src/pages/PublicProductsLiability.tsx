import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Package, CheckCircle } from 'lucide-react';

const PublicProductsLiability = () => {
  const policyTypes = [
    {
      title: 'Public Liability Coverage',
      description: 'Protects your business against claims for injury or property damage to third parties caused by your operations or services.',
      icon: Users,
      features: ['Third-party injury protection', 'Property damage coverage', 'Legal defense costs', 'Global operations support']
    },
    {
      title: 'Products Liability Coverage',
      description: 'Covers claims arising from harm or damage caused by faulty products you manufacture, sell, or supply to customers.',
      icon: Package,
      features: ['Product defect coverage', 'Customer injury protection', 'Recall expense reimbursement', 'Supply chain liability']
    }
  ];

  const benefits = [
    'Comprehensive protection for business operations and products',
    'Coverage for third-party injury and property damage claims',
    'Global support for international and domestic risks',
    'Tailored policies via binding authorities',
    'Expert claims handling for liability incidents',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('PublicProductsLiability policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Public & Products Liability Insurance</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Protect your business from claims related to third-party injuries, property damage, or faulty products, with tailored liability solutions worldwide.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Public & Products Liability Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Public & Products Liability Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right liability policy to safeguard your business operations and products against third-party claims.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-amber-600 mr-4" />
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
                src="https://images.pexels.com/photos/19227967/pexels-photo-19227967.jpeg"
                alt="Liability protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Business Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Public & Products Liability Insurance provides robust protection against third-party claims for injuries, property damage, or faulty products, ensuring peace of mind for your business worldwide.
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

export default PublicProductsLiability;