import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Radio.css';
import EmotionSelector from '../components/EmotionSelector';
import EmotionModal from '../components/EmotionModal';
import { useSongRecommender } from '../hooks/useSongRecommender';
import RadioHeader from '../components/RadioHeader';
import RadioFooter from '../components/RadioFooter';
import type { MoodRecord } from '../types/Mood';

const Radio = () => {
  const [loading, setLoading] = useState(false);
  const [isEmotionModalOpen, setIsEmotionModalOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<MoodRecord['mood'] | null>(null);
  const navigate = useNavigate();
  const { recommendSong } = useSongRecommender();

  const handleEmotionSelect = (emotion: MoodRecord['mood']) => {
    setSelectedEmotion(emotion);
    setIsEmotionModalOpen(true);
  };

  const closeEmotionModal = () => {
    setIsEmotionModalOpen(false);
    setSelectedEmotion(null);
  };

  const handleRecommendation = async (emotion: MoodRecord['mood']) => {
    closeEmotionModal();
    setLoading(true);

    const song = await recommendSong(emotion);

    setLoading(false);

    if (song) {
      navigate('/recommendation', { state: { song, mood: emotion } });
    }
  };

  return (
    <>
      <RadioHeader />
      <div className='radio-container'>
        <h1>오늘 당신의 감정 주파수는 <br></br>몇MHz인가요?</h1>
        <EmotionSelector onSelectEmotion={handleEmotionSelect} />
        {loading && <p>노래를 추천 중입니다...</p>}
        <EmotionModal
          isOpen={isEmotionModalOpen}
          onClose={closeEmotionModal}
          onConfirm={handleRecommendation}
          mood={selectedEmotion}
        />
      </div>
      <RadioFooter />
    </>
  );
};

export default Radio;
