import React from 'react';
import '../css/EmotionSelector.css';
import type { MoodRecord } from '../types/Mood';

interface EmotionSelectorProps {
  onSelectEmotion: (emotion: MoodRecord['mood']) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ onSelectEmotion }) => {
  return (
    <div className='radio-section'>
        <div className='radio-top'>
          <div className="antenna"></div>
          <div className="dial"></div>
          <div className='radio-buttons'>
            <button className='blank'></button>
            <button onClick={() => onSelectEmotion('joy')}>기쁨</button>
            <button onClick={() => onSelectEmotion('sadness')}>슬픔</button>
            <button onClick={() => onSelectEmotion('angry')}>화남</button>
            <button onClick={() => onSelectEmotion('relaxed')}>평온</button>
            <button onClick={() => onSelectEmotion('happiness')}>행복</button>
            <button onClick={() => onSelectEmotion('anxiety')}>불안</button>
            <button onClick={() => onSelectEmotion('depression')}>우울</button>
            <button onClick={() => onSelectEmotion('tiredness')}>피곤</button>
          </div>
        </div>
        <div className='radio-bottom'>
          <div className="speaker">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
    </div>
  );
};

export default EmotionSelector;
