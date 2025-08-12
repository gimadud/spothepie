import { useKSTDate } from './useKSTDate';
import type { MoodStorage } from '../types/Mood';
import type { Song } from '../types/Song';
import { songDatabase } from '../data/songData';

export const useMoodRecorder = () => {
  const today = useKSTDate();

  const recordMood = (emotion: keyof typeof songDatabase, song: Song): boolean => {
    const savedMoods = localStorage.getItem('moods');
    const moods: MoodStorage = savedMoods ? JSON.parse(savedMoods) : {};

    moods[today] = { mood: emotion, song: song };
    localStorage.setItem('moods', JSON.stringify(moods));

    const savedSongs = localStorage.getItem('savedSongs');
    const songs: Record<string, Song[]> = savedSongs
      ? JSON.parse(savedSongs)
      : {};

    if (!songs[emotion]) {
      songs[emotion] = [];
    }

    if (songs[emotion].some((s) => s.trackId === song.trackId)) {
      return false; 
    }

    songs[emotion].push(song);
    localStorage.setItem('savedSongs', JSON.stringify(songs));
    return true; 
  };

  const getMostFeltMoodThisMonth = () => {
    const savedMoods = localStorage.getItem('moods');
    const moods: MoodStorage = savedMoods ? JSON.parse(savedMoods) : {};

    const currentMonth = today.substring(0, 7); 
    const monthlyMoods: (keyof typeof songDatabase)[] = [];

    for (const date in moods) {
      if (date.startsWith(currentMonth)) {
        monthlyMoods.push(moods[date].mood);
      }
    }

    if (monthlyMoods.length === 0) {
      return null;
    }

    const moodCounts: { [key: string]: number } = {};
    monthlyMoods.forEach((mood) => {
      moodCounts[mood] = (moodCounts[mood] || 0) + 1;
    });

    let mostFeltMood: keyof typeof songDatabase | null = null;
    let maxCount = 0;

    for (const mood in moodCounts) {
      if (moodCounts[mood] > maxCount) {
        maxCount = moodCounts[mood];
        mostFeltMood = mood as keyof typeof songDatabase;
      }
    }

    return mostFeltMood;
  };

  return { recordMood, getMostFeltMoodThisMonth };
};

