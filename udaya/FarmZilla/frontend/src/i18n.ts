import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English
import en_about from './locales/en/about.json';
import en_chatbot from './locales/en/chatbot.json';
import en_disease from './locales/en/disease.json';
import en_fertilizerdata from "./data/fertilizer_data.json";

import en_fertilizer from './locales/en/fertilizer.json';
import en_loans from './locales/en/loans.json';
import en_market from './locales/en/market.json';
import en_features from './locales/en/features.json'; // ✅ renamed from en.json
import en_stats from './locales/en/stats.json';
import en_cta from './locales/en/cta.json';
import en_testimonials from './locales/en/testimonials.json';

// Hindi
import hi_about from './locales/hi/about.json';
import hi_chatbot from './locales/hi/chatbot.json';
import hi_disease from './locales/hi/disease.json';
import hi_fertilizer from './locales/hi/fertilizer.json';
import hi_loans from './locales/hi/loans.json';
import hi_market from './locales/hi/market.json';
import hi_features from './locales/hi/features.json'; // ✅ renamed from hi.json
import hi_stats from './locales/hi/stats.json';
import hi_cta from './locales/hi/cta.json';
import hi_testimonials from './locales/hi/testimonials.json';

// Kannada
import kn_about from './locales/kn/about.json';
import kn_chatbot from './locales/kn/chatbot.json';
import kn_disease from './locales/kn/disease.json';
import kn_fertilizer from './locales/kn/fertilizer.json';
import kn_loans from './locales/kn/loans.json';
import kn_market from './locales/kn/market.json';
import kn_features from './locales/kn/features.json'; // ✅ renamed from kn.json
import kn_stats from './locales/kn/stats.json';
import kn_cta from './locales/kn/cta.json';
import kn_testimonials from './locales/kn/testimonials.json';

// Tamil
import ta_about from './locales/ta/about.json';
import ta_chatbot from './locales/ta/chatbot.json';
import ta_disease from './locales/ta/disease.json';
import ta_fertilizer from './locales/ta/fertilizer.json';
import ta_loans from './locales/ta/loans.json';
import ta_market from './locales/ta/market.json';
import ta_features from './locales/ta/features.json'; // ✅ renamed from ta.json
import ta_stats from './locales/ta/stats.json';
import ta_cta from './locales/ta/cta.json';
import ta_testimonials from './locales/ta/testimonials.json';

// Telugu
import te_about from './locales/te/about.json';
import te_chatbot from './locales/te/chatbot.json';
import te_disease from './locales/te/disease.json';
import te_fertilizer from './locales/te/fertilizer.json';
import te_loans from './locales/te/loans.json';
import te_market from './locales/te/market.json';
import te_features from './locales/te/features.json'; // ✅ renamed from te.json
import te_stats from './locales/te/stats.json';
import te_cta from './locales/te/cta.json';
import te_testimonials from './locales/te/testimonials.json';

// Malayalam
import ml_about from './locales/ml/about.json';
import ml_chatbot from './locales/ml/chatbot.json';
import ml_disease from './locales/ml/disease.json';
import ml_fertilizer from './locales/ml/fertilizer.json';
import ml_loans from './locales/ml/loans.json';
import ml_market from './locales/ml/market.json';
import ml_features from './locales/ml/features.json'; // ✅ renamed from ml.json
import ml_stats from './locales/ml/stats.json';
import ml_cta from './locales/ml/cta.json';
import ml_testimonials from './locales/ml/testimonials.json';

const resources = {
  en: {
    about: en_about,
    chatbot: en_chatbot,
    disease: en_disease,
    fertilizer: en_fertilizer,
    fertilizerdata:en_fertilizerdata,
    loans: en_loans,
    market: en_market,
    features: en_features,
    stats: en_stats,
    cta: en_cta,
    testimonials: en_testimonials,
  },
  hi: {
    about: hi_about,
    chatbot: hi_chatbot,
    disease: hi_disease,
    fertilizer: hi_fertilizer,
    loans: hi_loans,
    market: hi_market,
    features: hi_features,
    stats: hi_stats,
    cta: hi_cta,
    testimonials: hi_testimonials,
  },
  kn: {
    about: kn_about,
    chatbot: kn_chatbot,
    disease: kn_disease,
    fertilizer: kn_fertilizer,
    loans: kn_loans,
    market: kn_market,
    features: kn_features,
    stats: kn_stats,
    cta: kn_cta,
    testimonials: kn_testimonials,
  },
  ta: {
    about: ta_about,
    chatbot: ta_chatbot,
    disease: ta_disease,
    fertilizer: ta_fertilizer,
    loans: ta_loans,
    market: ta_market,
    features: ta_features,
    stats: ta_stats,
    cta: ta_cta,
    testimonials: ta_testimonials,
  },
  te: {
    about: te_about,
    chatbot: te_chatbot,
    disease: te_disease,
    fertilizer: te_fertilizer,
    loans: te_loans,
    market: te_market,
    features: te_features,
    stats: te_stats,
    cta: te_cta,
    testimonials: te_testimonials,
  },
  ml: {
    about: ml_about,
    chatbot: ml_chatbot,
    disease: ml_disease,
    fertilizer: ml_fertilizer,
    loans: ml_loans,
    market: ml_market,
    features: ml_features,
    stats: ml_stats,
    cta: ml_cta,
    testimonials: ml_testimonials,
  },
};

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    ns: [
      'about',
      'chatbot',
      'disease',
      'fertilizer',
      'loans',
      'market',
      'features',
      'stats',
      'cta',
      'testimonials',
    ],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;