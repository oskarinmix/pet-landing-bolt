import React from 'react';
import { Play, Heart, Shield, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroV3() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 pt-20 lg:pt-32 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-3 py-1.5 lg:px-4 lg:py-2 mb-4 lg:mb-6">
                <Tag className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                <span className="text-xs lg:text-sm font-medium">{t('hero.trusted')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                {t('hero.title')}{' '}
                <span className="relative">
                  <span className="relative z-10 text-primary-600">
                    {t('hero.titleHighlight')}
                  </span>
                  <span className="absolute bottom-1 lg:bottom-2 left-0 w-full h-3 lg:h-4 bg-primary-100 -z-10" />
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-xl">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
                <button className="group inline-flex items-center justify-center bg-primary-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors">
                  {t('hero.shopNow')}
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group inline-flex items-center justify-center bg-white text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-100">
                  <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  {t('hero.watchVideo')}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-lg">
                <div>
                  <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-primary-600 mb-2" />
                  <div className="font-bold text-xl lg:text-2xl text-gray-900">50K+</div>
                  <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.happyPets')}</div>
                </div>
                <div>
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-primary-600 mb-2" />
                  <div className="font-bold text-xl lg:text-2xl text-gray-900">99.9%</div>
                  <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.uptime')}</div>
                </div>
                <div>
                  <Tag className="h-6 w-6 lg:h-8 lg:w-8 text-primary-600 mb-2" />
                  <div className="font-bold text-xl lg:text-2xl text-gray-900">5K+</div>
                  <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.reunions')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 lg:ml-12">
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-48 lg:w-64 h-48 lg:h-64 bg-accent-100 rounded-full blur-3xl opacity-75" />
              <div className="absolute -bottom-12 -left-12 w-48 lg:w-64 h-48 lg:h-64 bg-primary-100 rounded-full blur-3xl opacity-75" />
              
              <div className="relative grid grid-cols-2 gap-2 sm:gap-4">
                <img
                  src="https://images.unsplash.com/photo-1529466924508-a1761f426c75?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dog with smart tag"
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-2xl lg:rounded-3xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
                  alt="Cat with smart tag"
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-2xl lg:rounded-3xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                  alt="Dogs playing"
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-2xl lg:rounded-3xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d"
                  alt="Dog with owner"
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-2xl lg:rounded-3xl"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl max-w-[280px] lg:max-w-sm w-full">
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