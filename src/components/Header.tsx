import React, { useState, useEffect } from 'react';
import { Tag, Menu, X, Languages } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tag className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              {t('brand.name')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary-600' 
                    : 'text-white/90 hover:text-white'
                } transition-colors text-sm font-medium`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-primary-600' 
                  : 'text-white/90 hover:text-white'
              } transition-colors`}
            >
              <Languages className="h-5 w-5" />
              <span>{t(`language.${i18n.language === 'en' ? 'es' : 'en'}`)}</span>
            </button>
            <button className={`${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-600 hover:bg-white/90'
            } px-6 py-2 rounded-full text-sm font-semibold transition-colors`}>
              {t('nav.buyNow')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-2 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary-600' 
                    : 'text-white/90 hover:text-white'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className={`w-full text-left py-2 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-primary-600' 
                  : 'text-white/90 hover:text-white'
              } transition-colors flex items-center space-x-2`}
            >
              <Languages className="h-5 w-5" />
              <span>{t(`language.${i18n.language === 'en' ? 'es' : 'en'}`)}</span>
            </button>
            <button className={`w-full mt-4 ${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-600 hover:bg-white/90'
            } px-6 py-2 rounded-full text-sm font-semibold transition-colors`}>
              {t('nav.buyNow')}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}