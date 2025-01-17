import React from 'react';
import { Play, Heart, Shield, Users, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
        >
          <source
            src="https://example.com/pet-video.mp4"
            type="video/mp4"
          />
          {/* Fallback background image */}
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
            alt="Happy dog with owner"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-600/90" />
      </div>

      {/* Language Switcher */}
      {/* <button
        onClick={toggleLanguage}
        className="absolute top-24 right-4 z-20 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
      >
        <Languages className="h-5 w-5" />
        <span>{t(`language.${i18n.language === 'en' ? 'es' : 'en'}`)}</span>
      </button> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {t('hero.trusted')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')} <span className="text-accent-400">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="btn-primary bg-accent-500 hover:bg-accent-600">
              {t('hero.shopNow')}
            </button>
            <button className="btn-secondary">
              <Play className="h-5 w-5 inline-block mr-2" />
              {t('hero.watchVideo')}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="text-white/90">
              <Heart className="h-8 w-8 mb-2 text-accent-400" />
              <div className="font-bold text-2xl">50K+</div>
              <div className="text-sm">{t('hero.stats.happyPets')}</div>
            </div>
            <div className="text-white/90">
              <Shield className="h-8 w-8 mb-2 text-accent-400" />
              <div className="font-bold text-2xl">99.9%</div>
              <div className="text-sm">{t('hero.stats.uptime')}</div>
            </div>
            <div className="text-white/90">
              <Users className="h-8 w-8 mb-2 text-accent-400" />
              <div className="font-bold text-2xl">5K+</div>
              <div className="text-sm">{t('hero.stats.reunions')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute left-1/4 bottom-1/4 w-48 h-48 bg-primary-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
}