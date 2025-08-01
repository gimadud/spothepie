import React from 'react';
import type { Song } from '../types/Song';
import '../css/SongModal.css';

interface SongModalProps {
  song: Song;
  onClose: () => void;
}

const SongModal: React.FC<SongModalProps> = ({ song, onClose }) => {
  return (
    <div className="song-modal-overlay">
      <div className="song-modal-content">
        <button className="close-button" onClick={onClose}>닫기</button>
        <h2>{song.trackName}</h2>
        <h3>{song.artistName}</h3>
        <img src={song.artworkUrl100.replace('100x100bb', '1000x1000bb')} alt={song.trackName} />
        {song.previewUrl && <audio controls src={song.previewUrl} />}        
      </div>
    </div>
  );
};

export default SongModal;
