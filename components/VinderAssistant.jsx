import React, { useEffect } from 'react';

const VinderAssistant = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://chat.openai.com/chat.js';
    script.async = true;
    script.dataset.chatbot = 'vinder';
    script.dataset.theme = 'dark';
    script.dataset.welcome = 'Hi! Ready to find your match?';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center mt-10">
      <div id="vinder-chatbot" className="w-[360px] h-[500px] shadow-lg rounded-xl" />
    </div>
  );
};

export default VinderAssistant;
