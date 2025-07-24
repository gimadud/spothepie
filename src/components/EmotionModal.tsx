import React from 'react';
import '../css/EmotionModal.css';

interface EmotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (mood: 'joy' | 'sadness') => void;
  mood: 'joy' | 'sadness' | null;
}

const emotionDescriptions = {
  joy: '기쁨의 감정을 선택하시겠습니까?',
  sadness: '슬픔의 감정을 선택하시겠습니까?',
};

const EmotionModal: React.FC<EmotionModalProps> = ({ isOpen, onClose, onConfirm, mood }) => {
  if (!isOpen || !mood) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{mood === 'joy' ? '기쁨 ' : '슬픔 '}</h2>
        <p className="emotion-description">{emotionDescriptions[mood]}</p>
        <div className="button-group">
          <button onClick={() => onConfirm(mood)} className="confirm-button">선택</button>
          <button onClick={onClose} className="close-button">닫기</button>
        </div>
      </div>
    </div>
  );
};

export default EmotionModal;
