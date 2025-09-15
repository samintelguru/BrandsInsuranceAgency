import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Martinez Construction',
      rating: 5,
      text: 'Brands Insurance Agency helped us find the perfect commercial insurance package. Their expertise saved us both money and gave us peace of mind.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      name: 'Robert Wilson',
      company: 'Individual Client',
      rating: 5,
      text: 'After shopping around for months, I found Brands Insurance. They got me better coverage at a lower price than my previous insurer. Excellent service!',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
    },
    {
      name: 'Lisa Anderson',
      company: 'Anderson Family',
      rating: 5,
      text: 'The team at Brands Insurance made the entire process so easy. They explained everything clearly and found us great rates on both our auto and home insurance.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;