import React from 'react';
import { Building2, Award, Shield, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const partners = [
  {
    name: 'PetSmart',
    type: 'retailer',
    location: 'North America',
    coverage: '2,000+ stores',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1',
  },
  {
    name: 'VetCare Plus',
    type: 'veterinary',
    location: 'Europe',
    coverage: '500+ clinics',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
  },
  {
    name: 'Global Pet Express',
    type: 'distributor',
    location: 'Asia Pacific',
    coverage: '15 countries',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f',
  },
  {
    name: 'PetCare Alliance',
    type: 'association',
    location: 'Worldwide',
    coverage: '1M+ members',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
  },
];

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-lg mb-2 block">
            {t('partners.subtitle')}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('partners.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <partner.icon className="h-8 w-8 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {partner.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{partner.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span>{partner.coverage}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-gray-50 text-primary-600 font-semibold py-2 rounded-lg hover:bg-primary-50 transition-colors">
                  {t('partners.learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            {t('partners.becomePartner')}
          </button>
        </div>
      </div>
    </section>
  );
}