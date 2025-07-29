import React from 'react';
import '../css/EmotionSelector.css';

interface EmotionSelectorProps {
  onSelectEmotion: (emotion: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness' ) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ onSelectEmotion }) => {
  return (
    <div>
      <button onClick={() => onSelectEmotion('joy')}>기쁨</button>
      <button onClick={() => onSelectEmotion('sadness')}>슬픔</button>
      <button onClick={() => onSelectEmotion('angry')}>화남</button>
      <button onClick={() => onSelectEmotion('relaxed')}>평온</button>
      <button onClick={() => onSelectEmotion('happiness')}>행복</button>
      <button onClick={() => onSelectEmotion('anxiety')}>불안</button>
      <button onClick={() => onSelectEmotion('depression')}>우울</button>
      <button onClick={() => onSelectEmotion('tiredness')}>피곤</button>
    </div>
  );
};

export default EmotionSelector;
