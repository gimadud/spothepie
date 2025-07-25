import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Song } from '../types/Song';
import '../css/RecommendationPage.css';

const RecommendationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { song, mood } = location.state as { song: Song; mood: 'joy' | 'sadness' };

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
    const savedSongs = localStorage.getItem('savedSongs');
    const songs = savedSongs ? JSON.parse(savedSongs) : {};
    if (!songs[mood]) {
      songs[mood] = [];
    }
    songs[mood].push(song);
    localStorage.setItem('savedSongs', JSON.stringify(songs));
    alert('노래가 저장되었습니다.');
  };

  return (
    <div className="recommendation-container">
      <h2>{mood === 'joy' ? '기분 좋은 날엔, 기분 좋은 멜로디! ' : '위로가 필요할 땐 '}</h2>
      <div className="song-details">
        <img src={song.artworkUrl100.replace('100x100bb', '300x300bb')} alt={song.trackName} />
        <h3>{song.trackName}</h3>
        <p>{song.artistName}</p>
        {song.previewUrl && <audio controls src={song.previewUrl}></audio>}
      </div>
      <button onClick={handleSave}>카세트 테이프에 저장하기</button>
      <button>닫기</button>
    </div>
  );
};

export default RecommendationPage;
