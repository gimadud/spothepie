import React from 'react';
import '../css/EmotionSelector.css';

interface EmotionSelectorProps {
  onSelectEmotion: (emotion: 'joy' | 'sadness') => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ onSelectEmotion }) => {
  return (
    <div>
      <button onClick={() => onSelectEmotion('joy')}>기쁨</button>
      <button onClick={() => onSelectEmotion('sadness')}>슬픔</button>
    </div>
  );
};

export default EmotionSelector;
