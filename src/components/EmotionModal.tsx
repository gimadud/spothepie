import React from 'react';
import '../css/EmotionModal.css';
import { moodColors } from '../data/moodColors';
import { emotionDescriptions } from '../data/emotionDescriptions';
import type { MoodRecord } from '../types/Mood';

interface EmotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (mood: MoodRecord['mood']) => void;
  mood: MoodRecord['mood'] | null;
}

const EmotionModal: React.FC<EmotionModalProps> = ({ isOpen, onClose, onConfirm, mood }) => {
  if (!isOpen || !mood) return null;

  const modalContentStyle = {
    boxShadow: `0 10px 100px 50px ${moodColors[mood]}`
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={modalContentStyle}
      >
        <p className="emotion-description">
          {emotionDescriptions[mood].split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="button-group">
          <button onClick={() => onConfirm(mood)} className="confirm-button">
            재생하기
          </button>
          <button onClick={onClose} className="close-button">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
export default EmotionModal;

