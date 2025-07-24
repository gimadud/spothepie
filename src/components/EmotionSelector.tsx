import React from 'react';
import { useSongRecommender } from '../hooks/useSongRecommender';
import { useMoodRecorder } from '../hooks/useMoodRecorder';
import { songDatabase } from '../data/songData';
import type { Song } from '../types/Song';
import '../css/EmotionSelector.css';

interface EmotionSelectorProps {
  onSongRecommended: (song: Song, emotion: keyof typeof songDatabase) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ onSongRecommended }) => {
  const { recommendSong } = useSongRecommender();
  const { recordMood } = useMoodRecorder();

  const handleSelectEmotion = async (emotion: keyof typeof songDatabase) => {
    const song = await recommendSong(emotion);
    if (song) {
      recordMood(emotion, song);
      onSongRecommended(song, emotion);
    }
  };

  return (
    <div>
      <button onClick={() => handleSelectEmotion('joy')}>기쁨</button>
      <button onClick={() => handleSelectEmotion('sadness')}>슬픔</button>
    </div>
  );
};

export default EmotionSelector;
