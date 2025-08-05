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

  const getMostFeltMoodThisMonth = () => {
    const savedMoods = localStorage.getItem('moods');
    const moods: MoodStorage = savedMoods ? JSON.parse(savedMoods) : {};

    const currentMonth = today.substring(0, 7); // YYYY-MM
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

//달력용