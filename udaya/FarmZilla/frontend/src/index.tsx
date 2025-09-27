import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatInterface from './components/chatbot/ChatInterface';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChatInterface />
  </React.StrictMode>
);
