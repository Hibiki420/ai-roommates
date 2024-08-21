import React, { useState } from 'react';
import { GrammarCorrection } from '../types';

const GrammarChecker = () => {
  const [text, setText] = useState('');
  const [corrections, setCorrections] = useState<GrammarCorrection[]>([]);

  const checkGrammar = async () => {
    const response = await fetch('/api/grammar-check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    setCorrections(data.corrections);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={checkGrammar}>Check Grammar</button>
      <ul>
        {corrections.map((correction, index) => (
          <li key={index}>
            {correction.original} → {correction.corrected}: {correction.explanation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrammarChecker;