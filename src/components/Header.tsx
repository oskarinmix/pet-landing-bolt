import React, { useState, useEffect } from 'react';
import { Tag, Menu, X, Languages, EarthIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#how-it-works', label: t('nav.howItWorks') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#blog', label: t('nav.blog') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Tag className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
            <span className="text-lg md:text-xl font-bold text-gray-800">
              {t('brand.name')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Languages className="h-5 w-5" />
              <span>{t(`language.${i18n.language === 'en' ? 'es' : 'en'}`)}</span>
            </button>
            <button className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 md:px-6 md:py-2 rounded-full text-sm font-semibold transition-colors">
              {t('nav.buyNow')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-50 lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Tag className="h-6 w-6 text-primary-600" />
                <span className="text-lg font-bold text-gray-900">{t('brand.name')}</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block w-full px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <Languages className="h-5 w-5 mr-3" />
                <span>{t(`language.${i18n.language === 'en' ? 'es' : 'en'}`)}</span>
              </button>
            </div>

            <div className="p-4 border-t border-gray-100">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary-600 text-white py-3 rounded-full text-base font-semibold hover:bg-primary-700 transition-colors"
              >
                {t('nav.buyNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}