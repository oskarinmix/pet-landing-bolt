import React from 'react';
import { Shield, Droplets, Battery, Bell, Globe, Smartphone, Heart, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: Shield,
    translationKey: 'durableDesign',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Battery,
    translationKey: 'noBatteries',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: Smartphone,
    translationKey: 'instantAccess',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: Bell,
    translationKey: 'notifications',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Globe,
    translationKey: 'multilingual',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: Droplets,
    translationKey: 'easyUpdates',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: Heart,
    translationKey: 'healthRecords',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Lock,
    translationKey: 'privacy',
    color: 'bg-secondary-100 text-secondary-600',
  },
];

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-lg mb-2 block">{t('features.title')}</span>
          <h2 className="section-title text-gray-900">
            {t('features.titleHighlight')} <span className="text-primary-600">{t('features.subtitle')}</span>
          </h2>
          <p className="section-subtitle">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t(`features.items.${feature.translationKey}.title`)}
              </h3>
              <p className="text-gray-600">{t(`features.items.${feature.translationKey}.description`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            {t('features.exploreAll')}
          </button>
        </div>
      </div>
    </section>
  );
}