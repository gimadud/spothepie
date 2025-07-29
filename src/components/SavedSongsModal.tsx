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

const SavedSongsModal: React.FC<SavedSongsModalProps> = ({ songs, mood, onClose, onDelete }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{moodKorean[mood]} 카세트</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
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
