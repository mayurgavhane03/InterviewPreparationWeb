// src/QuestionDisplay.js

import React from 'react';

const QuestionDisplay = ({ question }) => {
  return (
    <div className="flex items-center justify-center h-auto w-[1250px]    bg-black">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w text-center">
        <h1 className="text-2xl font-bold mb-4">Question</h1>
        <p className="text-lg">{question}</p>
      </div>
    </div>
  );
};

export default QuestionDisplay;
