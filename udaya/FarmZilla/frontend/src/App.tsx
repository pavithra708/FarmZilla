// src/App.tsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ChatbotPage from './pages/ChatbotPage';
import DiseasePage from './pages/DiseasePage';
import FertilizerPage from './pages/FertilizerPage';
import LoansPage from './pages/LoansPage';
import MarketPricesPage from './pages/MarketPricesPage';
import NotFoundPage from './pages/NotFoundPage';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="chatbot" element={<ChatbotPage />} />
        <Route path="disease" element={<DiseasePage />} />
        <Route path="fertilizer" element={<FertilizerPage />} />
        <Route path="loans" element={<LoansPage />} />
        <Route path="market-prices" element={<MarketPricesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
