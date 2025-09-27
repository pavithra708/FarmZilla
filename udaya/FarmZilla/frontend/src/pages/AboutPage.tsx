import React from 'react';
import { Grid, Users, Globe, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  const approachItems = [
    {
      icon: <Grid className="h-8 w-8 text-primary-600" />,
      title: t('approach.data.title'),
      description: t('approach.data.desc'),
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: t('approach.farmer.title'),
      description: t('approach.farmer.desc'),
    },
    {
      icon: <Globe className="h-8 w-8 text-accent-600" />,
      title: t('approach.sustainable.title'),
      description: t('approach.sustainable.desc'),
    },
    {
      icon: <Zap className="h-8 w-8 text-earth-600" />,
      title: t('approach.innovative.title'),
      description: t('approach.innovative.desc'),
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: t('team.founder.role'),
      bio: t('team.founder.bio'),
    },
    {
      name: 'Priya Sharma',
      role: t('team.cto.role'),
      bio: t('team.cto.bio'),
    },
    {
      name: 'Anand Singh',
      role: t('team.research.role'),
      bio: t('team.research.bio'),
    },
  ];

  const partners = [
    t('partners.0'),
    t('partners.1'),
    t('partners.2'),
    t('partners.3'),
  ];

  const awards = [
    t('awards.0'),
    t('awards.1'),
    t('awards.2'),
    t('awards.3'),
  ];

  return (
    <div className="container-custom mx-auto py-12">
      <div className="text-center mb-16">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
          {t('title')}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('subtitle')}
        </motion.p>
      </div>

      {/* Vision and Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div className="bg-primary-50 border border-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-800">{t('vision.title')}</h2>
          <p className="text-gray-700">{t('vision.desc')}</p>
        </motion.div>

        <motion.div className="bg-secondary-50 border border-secondary-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-800">{t('mission.title')}</h2>
          <p className="text-gray-700">{t('mission.desc')}</p>
        </motion.div>
      </div>

      {/* Our Approach */}
      <motion.div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">{t('approach.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-50 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Team */}
      <motion.div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">{t('team.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Partners & Recognition */}
      <motion.div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">{t('partners.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">{partner}</div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">{t('awards.title')}</h3>
          <ul className="space-y-2">
            {awards.map((award, index) => (
              <li key={index} className="flex items-center">
                <Shield className="h-5 w-5 text-accent-500 mr-2" />
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
