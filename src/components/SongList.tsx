import React from 'react';
import '../css/SongList.css';
import type { Song } from '../types/Song';

interface SongListProps {
  songs: Song[];
  loading: boolean;
}

const SongList: React.FC<SongListProps> = ({ songs, loading }) => {
  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (songs.length === 0) {
    return <div>노래를 선택해주세요.</div>;
  }

  return (
    <div className="song-list">
      {songs.map((song) => (
        <div key={song.trackId} className="song-item">
          <img src={song.artworkUrl100} alt={song.trackName} />
          <div className="song-details">
            <div>{song.trackName}</div>
            <div>{song.artistName}</div>
          </div>
          <audio controls src={song.previewUrl}></audio>
        </div>
      ))}
    </div>
  );
};

export default SongList;
