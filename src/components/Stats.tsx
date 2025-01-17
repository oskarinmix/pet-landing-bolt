import React from 'react';
import { Users, Heart, Search, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const stats = [
  {
    icon: Users,
    translationKey: 'happyOwners',
  },
  {
    icon: Heart,
    translationKey: 'petsProtected',
  },
  {
    icon: Search,
    translationKey: 'reunions',
  },
  {
    icon: Shield,
    translationKey: 'uptime',
  },
];

export default function Stats() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-500">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {t(`stats.${stat.translationKey}.value`)}
              </div>
              <div className="text-blue-100">
                {t(`stats.${stat.translationKey}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}