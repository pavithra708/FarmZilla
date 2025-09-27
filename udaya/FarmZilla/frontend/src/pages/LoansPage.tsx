import React from 'react';
import { useTranslation } from 'react-i18next';
import LoanSchemes from '../components/loans/LoanSchemes';

const LoansPage = () => {
  const { t, i18n } = useTranslation(['loans', 'languages']); // Load both namespaces

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = ['en', 'hi', 'kn', 'ta', 'te', 'ml'];

  return (
    <div className="container-custom mx-auto py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{t('title', { ns: 'loans' })}</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">{t('description', { ns: 'loans' })}</p>
      </div>

      <div className="text-center mb-6">
        
      </div>

      <LoanSchemes />
    </div>
  );
};

export default LoansPage;
