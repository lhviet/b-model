import {EWClass} from "../enums";

export interface IPronunciationClass {
  k: string;  // keyid the pronunciation
  c: EWClass; // word_class of the pronunciation
  p: string;  // pronunciation
  d: string;  // description
}
