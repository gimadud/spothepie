import React from 'react';
import '../css/EmotionModal.css';

interface EmotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness' ) => void;
  mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness' | null;
}

const emotionDescriptions = {
  joy: '기쁨FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
  sadness: '슬픔FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
  angry: '화남FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
  relaxed: '평온FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
  happiness: '행복FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
  anxiety: '불안FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
  depression: '우울FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
  tiredness: '피곤FM에 도달했어요.\n오늘의 감정에 어울리는 곡을\n재생할까요?',
};

const emotionColors = {
  joy: '#F6E381',
  sadness: '#87B1DC',
  angry: '#F2798F',
  relaxed: '#A6D1B5',
  happiness: '#F9C1C0',
  anxiety: '#F2AD85',
  depression: '#BFBFBF',
  tiredness: '#BAA8D2',
};

const EmotionModal: React.FC<EmotionModalProps> = ({ isOpen, onClose, onConfirm, mood }) => {
  if (!isOpen || !mood) return null;

  const modalContentStyle = {
    boxShadow: `0 10px 100px 50px ${emotionColors[mood]}`
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
