import React from 'react';
import { useTranslation } from 'react-i18next';

const LoanSchemes = () => {
  const { t } = useTranslation('loans');
  const schemes = t('schemes', { returnObjects: true });

  const handleApplyNow = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {schemes.map((scheme, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{scheme.name}</h2>
          <p className="text-gray-700 mb-4">{scheme.description}</p>
          <button 
            onClick={() => handleApplyNow(scheme.link)} 
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {t('apply_now')}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LoanSchemes;
