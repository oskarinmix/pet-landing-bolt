import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const posts = [
  {
    translationKey: 'travelTips',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9',
  },
  {
    translationKey: 'gameChanger',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
  },
  {
    translationKey: 'comparison',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
  },
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('blog.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={t(`blog.posts.${post.translationKey}.title`)}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-semibold">
                    {t(`blog.posts.${post.translationKey}.category`)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {t(`blog.posts.${post.translationKey}.readTime`)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`blog.posts.${post.translationKey}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`blog.posts.${post.translationKey}.excerpt`)}
                </p>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  {t('blog.readMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}