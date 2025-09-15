import React from 'react';
import { Link } from 'react-router-dom';
import { UserX, Shield, CheckCircle } from 'lucide-react';

const CrewPersonalAccident = () => {
  const policyTypes = [
    {
      title: 'Crew Injury Coverage',
      description: 'Provides financial protection for crew members injured during operations, covering medical expenses and lost wages.',
      icon: Shield,
      features: ['Medical expense coverage', 'Lost wages compensation', 'Flexible policy terms', 'Global support for crew']
    },
    {
      title: 'Crew Disability Coverage',
      description: 'Offers compensation for crew members facing temporary or permanent disability due to accidents during work.',
      icon: UserX,
      features: ['Disability benefits', 'Rehabilitation support', 'Customizable coverage limits', 'Worldwide protection']
    }
  ];

  const benefits = [
    'Comprehensive protection for crew members',
    'Coverage for medical and disability expenses',
    'Global support for international operations',
    'Tailored policies for maritime and aviation crew',
    'Fast claims processing with expert support',
    'Backed by A+-rated carriers for reliability'
  ];

  console.log('CrewPersonalAccident policyTypes:', policyTypes); // Debug log to verify array

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <UserX className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Crew Personal Accident Insurance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Protect your crew with tailored accident insurance, ensuring safety and financial security for maritime and aviation operations worldwide.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Crew Personal Accident Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Crew Personal Accident Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right insurance policy to safeguard your crew against accidents during operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 test-visible">
            {policyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <type.icon className="h-10 w-10 text-blue-600 mr-4" />
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
                src="https://images.pexels.com/photos/6196678/pexels-photo-6196678.jpeg"
                alt="Crew protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Crew’s Safety
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Crew Personal Accident Insurance provides robust protection for crew members, ensuring peace of mind for maritime and aviation operations.
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

export default CrewPersonalAccident;