import type { Song } from './Song';

export interface MoodRecord {
  mood: 'joy' | 'sadness'| 'angry' |'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness';
  song: Song;
}

export interface MoodStorage {
  [date: string]: MoodRecord;
}
