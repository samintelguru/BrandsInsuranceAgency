import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Shield, CheckCircle } from 'lucide-react';

const CyberInsurance = () => {
  const policyTypes = [
    {
      title: 'Data Breach Coverage',
      description: 'Protects against costs associated with data breaches, including notification expenses, credit monitoring, and regulatory fines.',
      icon: Shield,
      features: ['Data breach response', 'Notification costs', 'Credit monitoring services', 'Regulatory fine coverage']
    },
    {
      title: 'Cyber Liability Coverage',
      description: 'Covers third-party claims arising from cyber incidents, including privacy violations and network security failures.',
      icon: ShieldAlert,
      features: ['Third-party liability', 'Privacy violation claims', 'Network security failures', 'Business interruption coverage']
    }
  ];

  const benefits = [
    'Comprehensive protection against cyber threats',
    'Coverage for data breach response and notification',
    'Global support for digital operations',
    'Tailored policies via binding authorities',
    'Expert claims handling for cyber incidents',
    'Backed by A+-rated carriers for reliability'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShieldAlert className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cyber Insurance</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Protect your business from digital threats with comprehensive cyber insurance solutions, designed for global digital operations.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Cyber Insurance Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cyber Insurance Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right cyber insurance policy to safeguard your business against digital threats and data breaches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
                alt="Cyber protection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Secure Your Digital Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Cyber Insurance provides robust protection against digital threats, ensuring resilience against data breaches and cyber attacks worldwide.
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

export default CyberInsurance;