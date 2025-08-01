import React from 'react';
import type { Song } from '../types/Song';
import '../css/SongModal.css';

interface SongModalProps {
  song: Song;
  onClose: () => void;
}

const SongModal: React.FC<SongModalProps> = ({ song, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{song.trackName}</h2>
        <h3>{song.artistName}</h3>
        <img src={song.artworkUrl100.replace('100x100bb', '600x600bb')} alt={song.trackName} />
        {song.previewUrl && <audio controls src={song.previewUrl} />}        
      </div>
    </div>
  );
};

export default SongModal;
