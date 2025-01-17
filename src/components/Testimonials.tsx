import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    key: 'sarah',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 5,
  },
  {
    key: 'michael',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    rating: 5,
  },
  {
    key: 'emily',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.key}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={t(`testimonials.reviews.${testimonial.key}.name`)}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">
                    {t(`testimonials.reviews.${testimonial.key}.name`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`testimonials.reviews.${testimonial.key}.location`)}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-100 mb-4" />
              <p className="text-gray-600">
                {t(`testimonials.reviews.${testimonial.key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}