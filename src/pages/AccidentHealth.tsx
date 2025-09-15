import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Shield, CheckCircle } from 'lucide-react';

const AccidentHealth = () => {
  const policyTypes = [
    {
      title: 'Personal Accident Insurance',
      description: 'Coverage for accidental injuries, disability, or death, designed with flexible binding authorities for global clients.',
      icon: Shield,
      features: ['Accidental death benefits', 'Disability income protection', 'Medical expense coverage', 'Global coverage options']
    },
    {
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for individuals and groups, including hospitalization, outpatient care, and wellness programs.',
      icon: HeartPulse,
      features: ['Hospitalization coverage', 'Outpatient treatment', 'Preventive care benefits', 'Customizable plans']
    }
  ];

  const benefits = [
    'Medical expense coverage for accidents and illnesses',
    'Disability income protection for financial security',
    'Global coverage for international clients',
    'Flexible binding authorities for tailored solutions',
    'Fast claims processing with expert support',
    'Partnership with A+-rated carriers for reliability'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HeartPulse className="h-16 w-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Accident & Health Insurance</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Safeguard your health and financial stability with tailored Accident & Health insurance solutions, backed by global expertise.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Accident & Health Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Accident & Health Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right Accident & Health policy to protect against unexpected medical and disability risks.
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
                src="https://images.pexels.com/photos/7163944/pexels-photo-7163944.jpeg"
                alt="Healthcare protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Protection for Life’s Uncertainties
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Accident & Health insurance provides peace of mind by covering medical expenses and disability risks, 
                ensuring you and your loved ones are protected globally.
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

export default AccidentHealth;