import {MPTypes} from '../../MPTypes';
import WordClass = MPTypes.WordClass;

export interface IMeaning {
  keyid: string;
  value: IMeaningValue;
}

export interface IMeaningValue {
  word_keyid: string;   // max 16 chars, reference to Word (keyid)
  word_class: WordClass;
  mean: string;
  tags: string;
}
