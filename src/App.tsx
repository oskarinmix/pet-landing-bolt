import { useState } from 'react';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroV2 from './components/HeroV2';
import HeroV3 from './components/HeroV3';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import Partners from './components/Partners';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

function App() {
  const [currentHero, setCurrentHero] = useState<number>(1);

  const HeroSwitcher = () => (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-1.5 sm:p-2 flex space-x-1.5 sm:space-x-2">
      <button
        onClick={() => setCurrentHero(1)}
        className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-sm rounded-md ${
          currentHero === 1 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        Hero 1
      </button>
      <button
        onClick={() => setCurrentHero(2)}
        className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-sm rounded-md ${
          currentHero === 2 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        Hero 2
      </button>
      <button
        onClick={() => setCurrentHero(3)}
        className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-sm rounded-md ${
          currentHero === 3 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        Hero 3
      </button>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      {currentHero === 1 && <Hero />}
      {currentHero === 2 && <HeroV2 />}
      {currentHero === 3 && <HeroV3 />}
      <Features />
      <HowItWorks />
      <Stats />
      <Partners />
      <Testimonials />
      <Blog />
      <FAQ />
      <Newsletter />
      <Footer />
      <HeroSwitcher />
    </div>
  );
}

export default App;