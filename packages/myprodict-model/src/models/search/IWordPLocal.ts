import {IPronunciationClass} from "./IPronunciationClass";
import {MPTypes} from '../../MPTypes';
import Local = MPTypes.Local;

export interface IWordPLocal {
  local: Local;
  pArr: IPronunciationClass[];
}
