// components/ProductPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Icon className={`h-16 w-16 mx-auto mb-6 ${color.replace('text-', 'text-')}-200`} />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">{description}</p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 text-center">
            Contact us for detailed coverage options for {title}.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;