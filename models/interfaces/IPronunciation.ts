import * as BWordClass from '../core/BWordClass';
import * as BPronunciationSystem from '../core/BPronunciationSystem';
import * as BLocal from '../core/BLocal';

export interface IPronunciation {
  keyid: string;
  value: IPronunciationValue;
}

export interface IPronunciationValue {
  word_keyid: string;   // max 16 chars, reference to Word (keyid)
  word_class: BWordClass.EnumWordClass; // class of word, i.e. noun, verb, adjective
  system: BPronunciationSystem.EnumSystem;     // pronunciation transcript system, i.e. IPA
  local: BLocal.EnumLocal;      // i.e., US, GB, AU
  transcript: string;
  description?: string;
}
