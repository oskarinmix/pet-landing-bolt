import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const questions = [
  'updateInfo',
  'waterproof',
  'foundPet',
  'smartphone',
  'damaged',
  'security',
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {questions.map((questionKey, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {t(`faq.questions.${questionKey}.question`)}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t">
                  <p className="text-gray-600">
                    {t(`faq.questions.${questionKey}.answer`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}