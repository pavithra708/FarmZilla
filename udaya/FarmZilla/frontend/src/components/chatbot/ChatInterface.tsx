import React, { useState } from 'react';
import VoiceChat from './VoiceChat';
import { useTranslation } from 'react-i18next';

const ChatInterface = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div style={{ backgroundColor: '#e8f5e9', padding: '2rem', height: '100vh', fontFamily: 'Arial' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{
  textAlign: 'center',
  color: 'green',
  fontSize: '2.5rem',
  fontFamily: 'cursive'
}}>
  🌿 Smart Agri Assistant
</h2>

       <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
    
  </label>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
    <button
      onClick={() => handleLanguageChange({ target: { value: 'en' } } as any)}
      style={{
        backgroundColor: language === 'en' ? '#4caf50' : '#c8e6c9',
        color: '#000',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '0.3s'
      }}
    >
      English
    </button>

    <button
      onClick={() => handleLanguageChange({ target: { value: 'hi' } } as any)}
      style={{
        backgroundColor: language === 'hi' ? '#4caf50' : '#c8e6c9',
        color: '#000',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '0.3s'
      }}
    >
      हिंदी
    </button>

    <button
      onClick={() => handleLanguageChange({ target: { value: 'ta' } } as any)}
      style={{
        backgroundColor: language === 'ta' ? '#4caf50' : '#c8e6c9',
        color: '#000',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '0.3s'
      }}
    >
      தமிழ்
    </button>

    <button
      onClick={() => handleLanguageChange({ target: { value: 'kn' } } as any)}
      style={{
        backgroundColor: language === 'kn' ? '#4caf50' : '#c8e6c9',
        color: '#000',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '0.3s'
      }}
    >
      ಕನ್ನಡ
    </button>
  </div>
</div>


        <VoiceChat language={language} />
      </div>
    </div>
  );
};

export default ChatInterface;
