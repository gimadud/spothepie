import React from 'react';
import '../css/EmotionModal.css';

interface EmotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness' ) => void;
  mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness' | null;
}

const emotionDescriptions = {
  joy: '기쁨FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
  sadness: '슬픔FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
  angry: '화남FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
  relaxed: '평온FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
  happiness: '행복FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
  anxiety: '불안FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
  depression: '우울FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
  tiredness: '피곤FM에 도달했어요. 오늘의 감정에 어울리는 곡을 재생할까요?',
};

const EmotionModal: React.FC<EmotionModalProps> = ({ isOpen, onClose, onConfirm, mood }) => {
  if (!isOpen || !mood) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p className="emotion-description">{emotionDescriptions[mood]}</p>
        <div className="button-group">
          <button onClick={() => onConfirm(mood)} className="confirm-button">재생하기</button>
          <button onClick={onClose} className="close-button">닫기</button>
        </div>
      </div>
    </div>
  );
};

export default EmotionModal;
