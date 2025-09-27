import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation('cta'); // Correct namespace

  const steps = [
    t('steps.0'),
    t('steps.1'),
    t('steps.2'),
    t('steps.3'),
  ];

  return (
    <section className="py-16 bg-secondary-800 text-white">
      <div className="container-custom mx-auto">
        <div className="bg-gradient-to-br from-secondary-700 to-secondary-900 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-32 w-32 bg-primary-500 rounded-full opacity-20 blur-xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {t('title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-200 mb-6"
              >
                {t('subtitle')}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/chatbot"
                  className="btn bg-white text-secondary-800 hover:bg-gray-100 shadow-lg"
                >
                  {t('tryAssistant')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/disease"
                  className="btn bg-secondary-600 text-white hover:bg-secondary-700 border border-secondary-500"
                >
                  {t('identifyDisease')}
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">📱</span> {t('quickStart')}
                </h3>
                <ol className="space-y-3">
                  {steps.map((step, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary-500 text-white text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
