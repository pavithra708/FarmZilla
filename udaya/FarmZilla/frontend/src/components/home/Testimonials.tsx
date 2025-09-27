import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    quoteKey: '0.quote',
    name: 'Rajesh Kumar',
    roleKey: '0.role',
    image: 'https://images.pexels.com/photos/8101698/pexels-photo-8101698.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    quoteKey: '1.quote',
    name: 'Anita Sharma',
    roleKey: '1.role',
    image: 'https://images.pexels.com/photos/3797403/pexels-photo-3797403.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    quoteKey: '2.quote',
    name: 'Venkatesh Reddy',
    roleKey: '2.role',
    image: 'https://images.pexels.com/photos/8101634/pexels-photo-8101634.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const Testimonials = () => {
  const { t } = useTranslation('testimonials');

  return (
    <section className="py-16 bg-gradient-to-br from-earth-50 to-primary-50">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="mb-6">
                <svg className="h-10 w-10 text-primary-300 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8h.5c-.3-2.5-1.5-3-1.5-4.5 0-2.8 2.2-5 5-5V8H10zm13 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h.5c-.3-2.5-1.5-3-1.5-4.5 0-2.8 2.2-5 5-5V8H23z"/>
                </svg>
                <p className="text-gray-600 italic relative z-10">{t(testimonial.quoteKey)}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{t(testimonial.roleKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
