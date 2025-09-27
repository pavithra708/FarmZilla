import { Camera, Bot, Award, LineChart, Sprout, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation('features');

  const features = [
    {
      icon: <Bot className="h-10 w-10 text-secondary-500" />,
      titleKey: 'aiChatbot.title',
      descriptionKey: 'aiChatbot.description',
      link: '/chatbot',
      color: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
    },
    {
      icon: <Camera className="h-10 w-10 text-accent-500" />,
      titleKey: 'diseaseIdentification.title',
      descriptionKey: 'diseaseIdentification.description',
      link: '/disease',
      color: 'bg-accent-50',
      borderColor: 'border-accent-200',
    },
    {
      icon: <Sprout className="h-10 w-10 text-primary-500" />,
      titleKey: 'fertilizerAdvisor.title',
      descriptionKey: 'fertilizerAdvisor.description',
      link: '/fertilizer',
      color: 'bg-primary-50',
      borderColor: 'border-primary-200',
    },
    {
      icon: <FileText className="h-10 w-10 text-earth-500" />,
      titleKey: 'loanInformation.title',
      descriptionKey: 'loanInformation.description',
      link: '/loans',
      color: 'bg-earth-50',
      borderColor: 'border-earth-200',
    },
    {
      icon: <LineChart className="h-10 w-10 text-secondary-500" />,
      titleKey: 'marketPriceTracker.title',
      descriptionKey: 'marketPriceTracker.description',
      link: '/market-prices',
      color: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
    },
    {
      icon: <Award className="h-10 w-10 text-accent-500" />,
      titleKey: 'bestPractices.title',
      descriptionKey: 'bestPractices.description',
      link: '/about',
      color: 'bg-accent-50',
      borderColor: 'border-accent-200',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`${feature.color} border ${feature.borderColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 mb-4">
                {t(feature.descriptionKey)}
              </p>
              <Link
                to={feature.link}
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                {t('explore')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
