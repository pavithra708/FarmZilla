import { Users, Bookmark, MapPin, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    value: '50,000+',
    label: 'farmers_helped',
  },
  {
    icon: <Bookmark className="h-8 w-8 text-secondary-500" />,
    value: '120+',
    label: 'crops_supported',
  },
  {
    icon: <MapPin className="h-8 w-8 text-accent-500" />,
    value: '28',
    label: 'states_covered',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-earth-500" />,
    value: '98%',
    label: 'accuracy_rate',
  },
];

const Stats = () => {
  const { t } = useTranslation('stats'); // ✅ Specify 'stats' namespace

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-50 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-500">{t(stat.label)}</div> {/* ✅ Uses the correct namespace */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
