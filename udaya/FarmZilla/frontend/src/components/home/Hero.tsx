import { Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const features = t('hero.features', { returnObjects: true });

  if (!Array.isArray(features)) {
    console.error("Expected an array for hero.features, but got:", features);
  }

  return (
    <section className="relative bg-gradient-to-br from-orange-900 to-orange-700 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg"
          alt="Farmer in field"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="container-custom mx-auto py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t('hero.title1')} <span className="text-accent-300">{t('hero.title2')}</span>
            </h1>

            {/* 👋 Greeting with note */}
            <div className="text-white/90 mt-2">
              <p className="text-3xl">👋 {t('hero.greeting')}</p>
              <p className="text-lg mt-1 text-white/80">{t('hero.helpNote')}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/chatbot"
                className="btn p-4 rounded-full bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                aria-label="Start voice assistant"
              >
                <Mic className="h-6 w-6" />
              </Link>
              <Link
                to="/about"
                className="btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
              >
                {t('hero.learnMore')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-2xl">
              <div className="absolute -top-4 -left-4 bg-accent-500 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">
                {t('hero.toolsTitle')}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(features) &&
                  features.map((feature: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary-300 mr-2"></span>
                      {feature}
                    </motion.li>
                  ))}
              </ul>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary-500/30 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 -right-3 h-16 w-16 bg-accent-500/40 rounded-full blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
