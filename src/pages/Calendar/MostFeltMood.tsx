import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import type { MoodStorage } from '../../types/Mood';
import { moodToKorean } from '../../data/moodTranslations';
import './MostFeltMood.css';

interface MostFeltMoodProps {
  mood: "joy" | "sadness" | "angry" | "relaxed" | "happiness" | "anxiety" | "depression" | "tiredness";
}


const MostFeltMood: React.FC<MostFeltMoodProps> = () => {
  const [moodRank, setMoodRank] = useState<[string, number][]>([]);

  useEffect(() => {
    const savedMoods = localStorage.getItem('moods');
    if (savedMoods) {
      const moods: MoodStorage = JSON.parse(savedMoods);
      const currentMonth = format(new Date(), 'yyyy-MM');
      const moodCounts: { [key: string]: number } = {};

      Object.keys(moods).forEach(date => {
        if (date.startsWith(currentMonth)) {
          const mood = moods[date].mood;
          moodCounts[mood] = (moodCounts[mood] || 0) + 1;
        }
      });

      if (Object.keys(moodCounts).length > 0) {
        const sortedMoods = Object.entries(moodCounts).sort(([, a], [, b]) => b - a);
        setMoodRank(sortedMoods.slice(0, 3));
      }
    }
  }, []);

  return (
    <div className="most-felt-mood-container">
      <h2>이 달의 감정</h2>
      <div className="mood-rank-list">
        {moodRank.length > 0 ? (
          <ol>
            {moodRank.map(([mood, count], index) => (
              <li key={mood}>
                <span>{index + 1}등:</span> {moodToKorean[mood]} ({count}번)
              </li>
            ))}
          </ol>
        ) : (
          <p>이번 달 감정 기록이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MostFeltMood;
