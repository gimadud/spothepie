import type { Song } from './Song';

export interface MoodRecord {
  mood: 'joy' | 'sadness'; //감정 두개만 구현해보고 추후에 추가
  song: Song;
}

export interface MoodStorage {
  [date: string]: MoodRecord;
}
