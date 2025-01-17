import React from 'react';
import { Play, Heart, Shield, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroV3() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-2 mb-6">
                <Tag className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">{t('hero.trusted')}</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}{' '}
                <span className="relative">
                  <span className="relative z-10 text-primary-600">
                    {t('hero.titleHighlight')}
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-primary-100 -z-10" />
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="group inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors">
                  {t('hero.shopNow')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group inline-flex items-center bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-100">
                  <Play className="mr-2 h-5 w-5" />
                  {t('hero.watchVideo')}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-lg">
                <div>
                  <Heart className="h-8 w-8 text-primary-600 mb-2" />
                  <div className="font-bold text-2xl text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.happyPets')}</div>
                </div>
                <div>
                  <Shield className="h-8 w-8 text-primary-600 mb-2" />
                  <div className="font-bold text-2xl text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.uptime')}</div>
                </div>
                <div>
                  <Tag className="h-8 w-8 text-primary-600 mb-2" />
                  <div className="font-bold text-2xl text-gray-900">5K+</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.reunions')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-12">
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-100 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-100 rounded-full blur-3xl" />
              
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1583511655826-05700442b31b"
                  alt="Dog with smart tag"
                  className="w-full h-64 object-cover rounded-3xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
                  alt="Cat with smart tag"
                  className="w-full h-64 object-cover rounded-3xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                  alt="Dogs playing"
                  className="w-full h-64 object-cover rounded-3xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d"
                  alt="Dog with owner"
                  className="w-full h-64 object-cover rounded-3xl"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-xl">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Bank-Level Security</h3>
                    <p className="text-sm text-gray-600">Your pet's data is protected with the highest security standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}