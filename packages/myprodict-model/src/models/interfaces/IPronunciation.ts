import {MPTypes} from '../../MPTypes';
import WordClass = MPTypes.WordClass;
import Local = MPTypes.Local;
import PronunciationSystem = MPTypes.PronunciationSystem;

export interface IPronunciation {
  keyid: string;
  value: IPronunciationValue;
}

export interface IPronunciationValue {
  word_keyid: string;   // max 16 chars, reference to Word (keyid)
  word_class: WordClass; // class of word, i.e. noun, verb, adjective
  system: PronunciationSystem;     // pronunciation transcript system, i.e. IPA
  local: Local;      // i.e., US, GB, AU
  transcript: string;
  description: string;
  sound_url: string;
  created_at: number;   // 11 digits
  updated_at: number;   // 11 digits
}
