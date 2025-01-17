import React from 'react';
import { Play, Tag, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroV2() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Tag className="h-5 w-5 mr-2 text-accent-400" />
              <span className="text-sm font-medium">{t('hero.trusted')}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="btn-primary bg-accent-500 hover:bg-accent-600 group">
                {t('hero.shopNow')}
                <Zap className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </button>
              <button className="btn-secondary border-white/20 backdrop-blur-sm group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('hero.watchVideo')}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-sm text-white/70">{t('hero.stats.happyPets')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-sm text-white/70">{t('hero.stats.uptime')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">5K+</div>
                <div className="text-sm text-white/70">{t('hero.stats.reunions')}</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-float" />
            <img
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
              alt="Happy dog with smart tag"
              className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl">
              <Shield className="h-8 w-8 text-primary-600 mb-2" />
              <div className="text-sm font-semibold text-gray-900">100% Safe & Secure</div>
              <div className="text-xs text-gray-600">Bank-level encryption</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}