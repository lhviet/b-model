import {EPLocal, EPSystem, EWClass} from '../enums';

export interface IPronunciation {
  keyid: string;
  value: IPronunciationValue;
}

export interface IPronunciationValue {
  word_keyid: string;   // max 16 chars, reference to Word (keyid)
  word_class: EWClass; // class of word, i.e. noun, verb, adjective
  system: EPSystem;     // pronunciation transcript system, i.e. IPA
  local: EPLocal;      // i.e., US, GB, AU
  transcript: string;
  description: string;
  soundUrl: string;
  created_at: number;   // 11 digits
  updated_at: number;   // 11 digits
}
