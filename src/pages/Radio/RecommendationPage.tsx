import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Song } from '../../types/Song';
import './RecommendationPage.css';
import RadioHeader from '../Radio/RadioHeader';
import RadioFooter from '../Radio/RadioFooter';
import { useMoodRecorder } from '../../hooks/useMoodRecorder';
import AnimatedPage from '../../components/AnimatedPage.tsx';

const RecommendationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { song, mood } = location.state as { song: Song; mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness' };
  const { recordMood } = useMoodRecorder();

  const moodMessages: { [key in typeof mood]: string } = {
    joy: '기분 좋은 날엔, 기분 좋은 멜로디!',
    sadness: '위로가 필요할 땐',
    angry: '화가 날 땐, 음악으로 풀어보세요!',
    relaxed: '평온한 날,  음악과 함께',
    happiness: '행복한 순간을 더 행복하게!',
    anxiety: '불안한 마음을 달래주는 멜로디',
    depression: '우울할 땐, 음악의 위로를',
    tiredness: '지친 하루의 끝, 음악으로 힐링',
  };

  if (!song) {
    return (
      <div className="recommendation-container">
        <h2>오류</h2>
        <p>노래 정보를 불러오지 못했습니다.</p>
        <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
      </div>
    );
  }

  const handleSave = () => {
    const success = recordMood(mood, song);
    if (success) {
      alert('노래가 저장되었습니다.');
    } else {
      alert('이미 저장된 노래입니다.');
    }
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

  const recommendationInfoStyle = {
    boxShadow: `0 10px 100px 50px ${emotionColors[mood]}`
  };

  return (
    <>
    <AnimatedPage>
    <RadioHeader />
    <div className="recommendation-container">
      <div className="recommendation-info" style={recommendationInfoStyle}>
        <h2>{moodMessages[mood]}</h2>
        <div className="song-details">
          <img src={song.artworkUrl100.replace('100x100bb', '600x600bb')} alt={song.trackName} />
          <h3>{song.trackName}</h3>
          <p>{song.artistName}</p>
          {song.previewUrl && <audio controls src={song.previewUrl}></audio>}
        </div>
        <button className="save-button" onClick={handleSave}>카세트 테이프에 저장하기</button>
        <button className="close2-button" onClick={() => navigate(-1)}>닫기</button>
      </div>
    </div>
    </AnimatedPage>
    <RadioFooter />
    </>
  );
};

export default RecommendationPage;
