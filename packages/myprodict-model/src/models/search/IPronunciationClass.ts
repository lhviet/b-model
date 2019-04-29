import {MPTypes} from '../../MPTypes';
import WordClass = MPTypes.WordClass;

export interface IPronunciationClass {
  k: string;  // keyid the pronunciation
  c: WordClass; // word_class of the pronunciation
  p: string;  // pronunciation
  d: string;  // description
}
