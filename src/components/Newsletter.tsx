import React from 'react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Newsletter() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-16 w-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('newsletter.description')}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('newsletter.button')}
            </button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            {t('newsletter.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}