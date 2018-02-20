import BWordClass from '../core/BWordClass';

export interface IMeaning {
  keyid: string;
  value: IMeaningValue;
}

export interface IMeaningValue {
  word_keyid: string;   // max 16 chars, reference to Word (keyid)
  word_class: BWordClass.EnumWordClass;
  mean: string;
  tags: string;
}
