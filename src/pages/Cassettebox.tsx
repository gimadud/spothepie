import { useState, useEffect } from 'react';
import type { Song } from '../types/Song';
import '../css/Cassettebox.css';
import SavedSongsModal from '../components/SavedSongsModal';
import MoodCassetteButton from '../components/MoodCassetteButton';
import CassetteBoxHeader from '../components/CassetteBoxHeader';
import CassetteBoxFooter from '../components/CassetteBoxFooter';
import AnimatedPage from '../components/AnimatedPage';



const Cassettebox = () => {
  const [savedSongs, setSavedSongs] = useState<Record<string, Song[]>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState<'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness' | null>(null);

  useEffect(() => {
    const songs = localStorage.getItem('savedSongs');
    if (songs) {
      setSavedSongs(JSON.parse(songs));
    }
  }, []);

  const openModal = (mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness') => {
    setSelectedMood(mood);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMood(null);
  };

  const handleDelete = (trackId: number) => {
    if (selectedMood) {
      const updatedSongs = { ...savedSongs };
      updatedSongs[selectedMood] = updatedSongs[selectedMood].filter(song => song.trackId !== trackId);
      setSavedSongs(updatedSongs);
      localStorage.setItem('savedSongs', JSON.stringify(updatedSongs));
    }
  };

  const moods: ('joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness')[] = ['joy', 'sadness', 'angry', 'relaxed', 'happiness', 'anxiety', 'depression', 'tiredness'];

  return (
    <>
    <CassetteBoxHeader />
    <AnimatedPage>
    <div className="cassettebox-container">
      <h1>그 날의 감정이 담긴 노래, <br></br>다시 꺼내 볼까요?</h1>
      <div className="cassette-grid">
        {moods.map(mood => (
          <MoodCassetteButton key={mood} mood={mood} onClick={openModal} />
        ))}
      </div>
      {isModalOpen && selectedMood && (
        <SavedSongsModal
          songs={savedSongs[selectedMood] || []}
          mood={selectedMood}
          onClose={closeModal}
          onDelete={handleDelete}
        />
      )}
    </div>
    </AnimatedPage>
    <CassetteBoxFooter />
    </>
  );
};

export default Cassettebox;