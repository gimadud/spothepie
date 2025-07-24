import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmotionSelector from '../components/EmotionSelector';
import type { Song } from '../types/Song';
import { songDatabase } from '../data/songData';
import '../css/Home.css';

const Home = () => {
  const [recommendedSong, setRecommendedSong] = useState<Song | null>(null);
  const [selectedEmotion, setSelectedEmotion] = useState<keyof typeof songDatabase | null>(null);

  const handleSongRecommended = (song: Song, emotion: keyof typeof songDatabase) => {
    setRecommendedSong(song);
    setSelectedEmotion(emotion);
  };

  return (
    <>
      <h1>오늘 당신의 기분은 어떤가요?</h1>
      <EmotionSelector onSongRecommended={handleSongRecommended} />
      {recommendedSong && selectedEmotion && (
        <div>
          <h2>추천된 노래:</h2>
          <p>{recommendedSong.trackName} - {recommendedSong.artistName}</p>
          <Link to="/recommendation" state={{ song: recommendedSong, mood: selectedEmotion }}>
            자세히 보기
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
