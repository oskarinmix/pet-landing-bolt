import React from 'react';
import { Scan, UserPlus, Link2, Bell, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    icon: UserPlus,
    translationKey: 'createProfile',
  },
  {
    icon: Link2,
    translationKey: 'attachTag',
  },
  {
    icon: Scan,
    translationKey: 'scanning',
  },
  {
    icon: Bell,
    translationKey: 'alerts',
  },
  {
    icon: MapPin,
    translationKey: 'location',
  },
];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.description')}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100 text-blue-600 relative z-10 mx-auto">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`howItWorks.steps.${step.translationKey}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`howItWorks.steps.${step.translationKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}