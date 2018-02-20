export interface IMeaning {
  keyid: string;
  value: IMeaningValue;
}

export interface IMeaningValue {
  word_keyid: string;   // max 16 chars, reference to Word (keyid)
  word_class: string;
  mean: string;
  tags: string;
}
