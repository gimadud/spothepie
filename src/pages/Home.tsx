import { useState } from 'react';
import EmotionSelector from '../components/EmotionSelector';
import { useMoodRecorder } from '../hooks/useMoodRecorder';
import '../css/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { fetchSongsAndRecordMood } = useMoodRecorder();

  const handleEmotionSelect = (emotion: 'joy' | 'sadness') => {
    fetchSongsAndRecordMood(emotion, setLoading);
  };

  return (
    <>
      <h1>오늘 당신의 기분은 어떤가요?</h1>
      <EmotionSelector onSelectEmotion={handleEmotionSelect} />
      {loading && <p>노래를 추천 중입니다...</p>}
    </>
  );
};

export default Home;
