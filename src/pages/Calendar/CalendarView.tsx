import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';
import type { MoodStorage } from '../../types/Mood';
import SongModal from './SongModal';
import type { Song } from '../../types/Song';

import joyIcon from '../../images/JoyIcon.png';
import sadnessIcon from '../../images/SadnessIcon.png';
import angryIcon from '../../images/AngryIcon.png';
import relaxedIcon from '../../images/RelaxedIcon.png';
import happinessIcon from '../../images/HappinessIcon.png';
import anxietyIcon from '../../images/AnxietyIcon.png';
import depressionIcon from '../../images/DepressionIcon.png';
import tirednessIcon from '../../images/TirednessIcon.png';

const moodIcons: { [key: string]: string } = {
  joy: joyIcon,
  sadness: sadnessIcon,
  angry: angryIcon,
  relaxed: relaxedIcon,
  happiness: happinessIcon,
  anxiety: anxietyIcon,
  depression: depressionIcon,
  tiredness: tirednessIcon,
};

const CalendarView: React.FC = () => {
  const [moods, setMoods] = useState<MoodStorage>({});
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  useEffect(() => {
    const savedMoods = localStorage.getItem('moods');
    if (savedMoods) {
      setMoods(JSON.parse(savedMoods));
    }
  }, []);

  const handleDayClick = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    if (moods[dateString]) {
      setSelectedSong(moods[dateString].song);
    }
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const dateString = format(date, 'yyyy-MM-dd');
      const moodData = moods[dateString];
      if (moodData && moodIcons[moodData.mood]) {
        return <img src={moodIcons[moodData.mood]} alt={moodData.mood} className="mood-icon" />;
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar
        onClickDay={handleDayClick}
        tileContent={tileContent}
        formatDay={(_, date) => format(date, 'd')}
      />
      {selectedSong && <SongModal song={selectedSong} mood={moods[Object.keys(moods).find(date => moods[date].song.trackId === selectedSong.trackId)!]?.mood} onClose={() => setSelectedSong(null)} />}
    </div>
  );
};

export default CalendarView;