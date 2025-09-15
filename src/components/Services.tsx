import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HeartPulse,
  Plane,
  Truck,
  HardHat,
  LifeBuoy,
  ShieldAlert,
  Zap,
  Landmark,
  Building2,
  Ship,
  Briefcase,
  Users
} from 'lucide-react';

export const services = [
  {
    icon: HeartPulse,
    title: 'Accident & Health',
    description: 'Accident & Health Team designs and places a wide range of Binding Authorities and Direct Facultative risks on behalf of clients all around the world.',
    link: '/accident-health',
    color: 'text-red-600' // Red for health/medical
  },
  {
    icon: Plane,
    title: 'Aviation Policies',
    description: 'Our Aviation team crafts and places comprehensive policies, covering aircraft, operators, and associated risks, ensuring global protection for clients in the aviation industry.',
    link: '/aviation-policies',
    color: 'text-sky-600' // Sky blue for aviation
  },
  {
    icon: Truck,
    title: 'Cargo Insurance',
    description: 'The Cargo Insurance team designs tailored solutions to protect goods in transit, offering binding authorities and direct coverage for clients worldwide.',
    link: '/cargo-insurance',
    color: 'text-green-600' // Green for logistics (unchanged)
  },
  {
    icon: HardHat,
    title: 'Construction & Engineering',
    description: 'Our Construction & Engineering specialists provide bespoke insurance solutions for projects, covering risks from inception to completion for global clients.',
    link: '/ConstructionEngineering',
    color: 'text-yellow-600' // Yellow for construction
  },
  {
    icon: LifeBuoy,
    title: 'Crew Personal Accident Insurance',
    description: 'The Crew Personal Accident team secures robust coverage for maritime and aviation crews, offering binding authorities and direct policies to safeguard personnel worldwide.',
    link: '/crew-personal-accident',
    color: 'text-blue-600' // Blue for maritime safety (unchanged)
  },
  {
    icon: ShieldAlert,
    title: 'Cyber Insurance',
    description: 'Our Cyber Insurance experts develop and place policies to protect against digital threats, ensuring comprehensive coverage for businesses facing cyber risks globally.',
    link: '/cyberinsurance',
    color: 'text-purple-600' // Purple for cybersecurity
  },
  {
    icon: Zap,
    title: 'Energy',
    description: 'The Energy team designs and places specialized insurance for upstream, midstream, and downstream operations, covering risks for clients in the global energy sector.',
    link: '/energy',
    color: 'text-orange-600' // Orange for energy
  },
  {
    icon: Landmark,
    title: 'Financial Institutions',
    description: 'Our Financial Institutions team creates tailored insurance solutions, including binding authorities and direct coverage, to protect banks, asset managers, and financial entities worldwide.',
    link: '/financialinstitutions',
    color: 'text-gray-600' // Gray for professional finance
  },
  {
    icon: Building2,
    title: 'International Property',
    description: 'The International Property team offers customized insurance for commercial and residential properties, providing global coverage through binding authorities and facultative placements.',
    link: '/internationalproperty',
    color: 'text-teal-600' // Teal for property
  },
  {
    icon: Ship,
    title: 'Marine - Kidnap & Rescue Cover',
    description: 'Our Marine Kidnap & Rescue team arranges specialized coverage for maritime risks, ensuring protection against piracy and kidnapping for clients operating globally.',
    link: '/marinekidnapransom',
    color: 'text-blue-800' // Navy-like blue for maritime
  },
  {
    icon: Briefcase,
    title: 'Professional Indemnity',
    description: 'The Professional Indemnity team designs and places policies to protect professionals against liability claims, offering tailored solutions for clients worldwide.',
    link: '/professionalindemnity',
    color: 'text-indigo-600' // Indigo for professional services
  },
  {
    icon: Users,
    title: 'Public & Products Liability',
    description: 'Our Public & Products Liability team provides comprehensive coverage for businesses, managing risks from third-party injuries and product-related claims globally.',
    link: '/publicproductsliability',
    color: 'text-amber-600' // Amber for public liability
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Lines</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide bespoke insurance solutions to cover any eventuality under the following covers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gray-100 ${service.color} mb-6`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;