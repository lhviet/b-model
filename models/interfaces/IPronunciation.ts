export interface IPronunciation {
  keyid: string;
  value: IPronunciationValue;
}

export interface IPronunciationValue {
  word_keyid: string;   // max 16 chars, reference to Word (keyid)
  word_class: number; // class of word, i.e. noun, verb, adjective
  system: number;     // pronunciation transcript system, i.e. IPA
  local: number;      // i.e., US, GB, AU
  transcript: string;
}