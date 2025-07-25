import React from 'react';
import type { Song } from '../types/Song';
import '../css/SavedSongsModal.css';

interface SavedSongsModalProps {
  songs: Song[];
  mood: 'joy' | 'sadness';
  onClose: () => void;
  onDelete: (trackId: number) => void;
}

const SavedSongsModal: React.FC<SavedSongsModalProps> = ({ songs, mood, onClose, onDelete }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{mood === 'joy' ? '기쁨' : '슬픔'} 카세트</h2>
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
