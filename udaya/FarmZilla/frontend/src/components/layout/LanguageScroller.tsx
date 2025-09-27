// src/components/LanguageScroller.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageScroller.css'; // Make sure CSS is imported

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' }, // Malayalam
  { code: 'ta', label: 'தமிழ்' },  // Tamil
];

export default function LanguageScroller() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Persist language across reloads
  };

  return (
    <div className="language-scroller">
      <div className="language-scroller-wrapper">
        {/* Render language buttons here (without duplicating) */}
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
