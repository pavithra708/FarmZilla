import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface VoiceChatProps {
  language: string;
}

const VoiceChat: React.FC<VoiceChatProps> = ({ language }) => {
  const { t } = useTranslation();
  const [transcribedText, setTranscribedText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const handleSpeechInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Browser does not support Speech Recognition');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === 'hi' ? 'hi-IN' : language === 'ta' ? 'ta-IN' : language === 'kn' ? 'kn-IN' : 'en-IN';
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setTranscribedText(text);
      setIsListening(false);
      processInputText(text);
    };

    recognition.onerror = () => setIsListening(false);
  };

  const processInputText = async (text: string) => {
  try {
    const languagePrompts: Record<string, string> = {
      en: '',
      hi: 'Please reply in Hindi: ',
      ta: 'Please reply in Tamil: ',
      kn: 'Please reply in Kannada: ',
    };

    const promptPrefix = languagePrompts[language] || '';
    const fullPrompt = `${promptPrefix}${text}`;

    const response = await fetch('http://localhost:5000/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: fullPrompt })
    });

    const data = await response.json();
    const reply = data.reply || 'Sorry, no response.';

    setResponseText(reply);
    setMessages((prev) => [...prev, `🧑‍🌾 You: ${text}`, `🤖 Assistant: ${reply}`]);
    speakResponse(reply);
  } catch (error) {
    console.error("❌ Error getting AI response:", error);
    const fallback = 'Sorry, I could not understand.';
    setMessages((prev) => [...prev, `🧑‍🌾 You: ${text}`, `🤖 Assistant: ${fallback}`]);
    speakResponse(fallback);
  }
};


const speakResponse = (response: string) => {
  const utterance = new SpeechSynthesisUtterance(response);
  utterance.lang =
    language === 'hi' ? 'hi-IN' :
    language === 'ta' ? 'ta-IN' :
    language === 'kn' ? 'kn-IN' :
    'en-IN';
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
};

  return (
    <div>
      <div style={{ backgroundColor: '#f0fff0', borderRadius: '8px', padding: '1rem', minHeight: '200px', marginBottom: '1rem', overflowY: 'auto', maxHeight: '250px' }}>
        {messages.map((msg, idx) => (
          <p key={idx} style={{ margin: '0.5rem 0' }}>{msg}</p>
        ))}
      </div>

      <button
        onClick={handleSpeechInput}
        disabled={isListening}
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'block',
          margin: '0 auto'
        }}
      >
        🎤 {isListening ? t('listening_button') : t('speak_button') || 'Speak to Ask'}
      </button>
    </div>
  );
};

export default VoiceChat;
