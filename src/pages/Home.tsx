import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import EmotionSelector from '../components/EmotionSelector';
import EmotionModal from '../components/EmotionModal';
import { songDatabase } from '../data/songData';
import type { Song } from '../types/Song';
import type { MoodStorage } from '../types/Mood';
import { useKSTDate } from '../hooks/useKSTDate'; 


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isEmotionModalOpen, setIsEmotionModalOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<'joy' | 'sadness' | null>(null);
  const navigate = useNavigate();

  const handleEmotionSelect = (emotion: 'joy' | 'sadness') => {
    setSelectedEmotion(emotion);
    setIsEmotionModalOpen(true);
  };

  const closeEmotionModal = () => {
    setIsEmotionModalOpen(false);
    setSelectedEmotion(null);
  };

  const fetchSongsAndRecordMood = async (emotion: 'joy' | 'sadness') => {
    closeEmotionModal();
    setLoading(true);

   const today = useKSTDate(); 

    const savedMoods = localStorage.getItem('moods');
    const moods: MoodStorage = savedMoods ? JSON.parse(savedMoods) : {};

    const trackIds = songDatabase[emotion];
    const randomTrackId = trackIds[Math.floor(Math.random() * trackIds.length)];
    const url = `https://itunes.apple.com/lookup?id=${randomTrackId}&entity=song&country=KR`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const fetchedSong: Song = data.results[0];

      if (fetchedSong) {
        moods[today] = { mood: emotion, song: fetchedSong };
        localStorage.setItem('moods', JSON.stringify(moods));
        navigate('/recommendation', { state: { song: fetchedSong, mood: emotion } });
      }
    } catch (error) {
      console.error('Error fetching from iTunes API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>오늘 당신의 기분은 어떤가요?</h1>
      <EmotionSelector onSelectEmotion={handleEmotionSelect} />
      {loading && <p>노래를 추천 중입니다...</p>}
      <EmotionModal
        isOpen={isEmotionModalOpen}
        onClose={closeEmotionModal}
        onConfirm={fetchSongsAndRecordMood}
        mood={selectedEmotion}
      />
    </>
  );
};

export default Home;
