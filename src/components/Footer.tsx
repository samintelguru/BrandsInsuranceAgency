import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Brands Insurance Agency</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in comprehensive insurance solutions. We provide personalized coverage 
              to protect what matters most to you and your business.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <XIcon className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">+254 (7) 12-345-678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">info@brandsinsurance.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">Muthangari Drive<br />
                  14th Floor The Address<br /> Waiyaki Way, Westlands Nairobi</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <div className="space-y-1 text-gray-300">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="mt-2 text-sm text-blue-400">24/7 Claims Support Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          {/* Updated PNG with larger, stretched size */}
          <img
            src="/assets/footer-logo.png" // Replace with your actual PNG path
            alt="Brands Insurance Agency Footer Logo"
            className="mx-auto mb-4 w-64 h-64 object-cover" // Increased to 256px x 256px, stretched with object-cover
          />
          {/* Existing copyright */}
          <p className="text-gray-400">&copy; 2025 Brands Insurance Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;