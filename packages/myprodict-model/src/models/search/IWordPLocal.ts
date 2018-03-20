import {EPLocal} from "../enums";
import {IPronunciationClass} from "./IPronunciationClass";

export interface IWordPLocal {
  local: EPLocal;
  pArr: IPronunciationClass[];
}
