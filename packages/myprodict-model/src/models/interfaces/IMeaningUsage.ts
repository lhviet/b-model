import {MPTypes} from '../../MPTypes';
import WordClass = MPTypes.WordClass;

export interface IMeaningUsage {
  keyid: string;
  value: IMeaningUsageValue;
}

export interface IMeaningUsageValue {
  word_keyid: string;       // max 16 chars, reference to Word (keyid)
  word_class: WordClass;
  meaning_keyid: string;    // max 16 chars, reference to Meaning (keyid)
  usage: string;
  explanation: string;
}
