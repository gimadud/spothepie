import React from 'react';
import type { Song } from '../types/Song';
import '../css/SavedSongsModal.css';

interface SavedSongsModalProps {
  songs: Song[];
  mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness';
  onClose: () => void;
  onDelete: (trackId: number) => void;
}

const moodKorean: { [key in SavedSongsModalProps['mood']]: string } = {
  joy: '기쁨',
  sadness: '슬픔',
  angry: '화남',
  relaxed: '평온',
  happiness: '행복',
  anxiety: '불안',
  depression: '우울',
  tiredness: '피곤',
};

const moodColors: { [key in SavedSongsModalProps['mood']]: string } = {
  joy: '#F6E381', 
  sadness: '#87B1DC', 
  angry: '#F2798F', 
  relaxed: '#A6D1B5', 
  happiness: '#F9C1C0', 
  anxiety: '#F2AD85', 
  depression: '#BFBFBF', 
  tiredness: '#BAA8D2',
};

const moodLightColors: { [key in SavedSongsModalProps['mood']]: string } = {
  joy: '#FFF5BE', 
  sadness: '#BCDAF9', 
  angry: '#F29F9F', 
  relaxed: '#C5E4CF', 
  happiness: '#FFDFDF', 
  anxiety: '#FFCAAC', 
  depression: '#E9E9E9', 
  tiredness: '#E7D7FC', 
};

const SavedSongsModal: React.FC<SavedSongsModalProps> = ({ songs, mood, onClose, onDelete }) => {
  const backgroundColor = moodColors[mood];
  const listItemBackgroundColor = moodLightColors[mood];

  return (
    <div className="song-modal-overlay">
      <div className="song-modal-content" style={{ backgroundColor }}>
        <div className='song-modal-top'>
          <h2>{moodKorean[mood]} 카세트</h2>
          <button className="song-close-button" onClick={onClose}>닫기</button>
        </div>
        <ul>
          {songs.map((song, index) => (
            <li key={index} style={{ backgroundColor: listItemBackgroundColor }}>
              <img src={song.artworkUrl100} alt={song.trackName} />
              <div>
                <h3>{song.trackName}</h3>
                <p>{song.artistName}</p>
              </div>
              <button onClick={() => onDelete(song.trackId)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SavedSongsModal;
