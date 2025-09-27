import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FertilizerRecommenderProps {
  apiBaseUrl: string;
}

const FertilizerRecommender = ({ apiBaseUrl }: FertilizerRecommenderProps) => {
  const { t } = useTranslation('fertilizer');
  const [cropType, setCropType] = useState('');
  const [soilType, setSoilType] = useState('');
  const [nitrogen, setNitrogen] = useState(30);
  const [phosphorus, setPhosphorus] = useState(30);
  const [potassium, setPotassium] = useState(30);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiBaseUrl}/api/recommend-fertilizer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cropType, soilType, nitrogen, phosphorus, potassium }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      console.log("Recommendation response:", data);
      setRecommendation(data.fertilizer);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setRecommendation({ error: "Error: Unable to fetch recommendation." });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{t('fertilizerRecommender')}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select value={cropType} onChange={(e) => setCropType(e.target.value)} required className="input-field w-full border p-2 rounded">
          <option value="">{t('selectCrop')}</option>
          {['Wheat', 'Rice', 'Corn', 'Soybean', 'Sugarcane', 'Cotton', 'Groundnut', 'Mustard', 'Tomato', 'Onion'].map(crop => (
            <option key={crop} value={crop}>{crop}</option>
          ))}
        </select>

        <select value={soilType} onChange={(e) => setSoilType(e.target.value)} required className="input-field w-full border p-2 rounded">
          <option value="">{t('selectSoil')}</option>
          {['Loamy', 'Clay', 'Sandy Loam', 'Silty', 'Sandy'].map(soil => (
            <option key={soil} value={soil}>{soil}</option>
          ))}
        </select>
        <label className="min-w-[100px] font-medium">Nitrogen:</label>
        <input
          type="number"
          value={nitrogen}
          onChange={e => setNitrogen(Number(e.target.value))}
          placeholder={t('nitrogenPlaceholder')}
          className="input-field w-full border p-2 rounded"
        />
        <label className="min-w-[100px] font-medium">Phosphorous:</label>
        <input
          type="number"
          value={phosphorus}
          onChange={e => setPhosphorus(Number(e.target.value))}
          placeholder={t('phosphorusPlaceholder')}
          className="input-field w-full border p-2 rounded"
        />
        <label className="min-w-[100px] font-medium">Potassium:</label>
        <input
          type="number"
          value={potassium}
          onChange={e => setPotassium(Number(e.target.value))}
          placeholder={t('potassiumPlaceholder')}
          className="input-field w-full border p-2 rounded"
        />

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">{t('getRecommendation')}</button>
      </form>

      {recommendation && recommendation.name ? (
        <div className="mt-4 p-4 border rounded bg-green-50 text-green-800">
          <p className="font-bold">{t('recommendation')}:</p>
          <p><strong>{t('fertilizerName')}:</strong> {recommendation.name}</p>
          <p><strong>{t('quantity')}:</strong> {recommendation.quantity} kg/acre</p>
          <p><strong>{t('applicationMethod')}:</strong> {recommendation.method}</p>
          <p><strong>{t('precautions')}:</strong> {recommendation.precautions}</p>
        </div>
      ) : recommendation?.error && (
        <p className="mt-4 text-red-600">{recommendation.error}</p>
      )}
    </div>
  );
};

export default FertilizerRecommender;