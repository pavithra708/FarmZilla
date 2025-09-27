import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation(['homepage']);

  return (
    <>
      <Helmet>
        <title>{t('homepage:title')}</title>
        <meta name="description" content={t('homepage:description')} />
      </Helmet>
      
      <div>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
};

export default HomePage;
