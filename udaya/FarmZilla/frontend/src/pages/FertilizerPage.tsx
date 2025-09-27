import React from 'react';
import { useTranslation } from 'react-i18next';
import FertilizerRecommender from '../components/fertilizer/FertilizerRecommender';

const FertilizerPage = () => {
  const { t } = useTranslation('fertilizer');
  const apiBaseUrl = "http://localhost:5002"; // or use process.env.REACT_APP_API_BASE_URL here if available

  return (
    <div className="min-h-screen bg-green-100 py-12 px-4">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg max-w-4xl mx-auto p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
          <p className="text-gray-700">{t('description')}</p>
        </div>
        <FertilizerRecommender apiBaseUrl={apiBaseUrl} />
      </div>
    </div>
  );
};

export default FertilizerPage;