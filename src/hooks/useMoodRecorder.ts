import { useKSTDate } from './useKSTDate';
import type { MoodStorage } from '../types/Mood';
import type { Song } from '../types/Song';
import { songDatabase } from '../data/songData';

export const useMoodRecorder = () => {
  const today = useKSTDate();

  const recordMood = (emotion: keyof typeof songDatabase, song: Song) => {
    const savedMoods = localStorage.getItem('moods');
    const moods: MoodStorage = savedMoods ? JSON.parse(savedMoods) : {};

    moods[today] = { mood: emotion, song: song };
    localStorage.setItem('moods', JSON.stringify(moods));
  };

  return { recordMood };
};
