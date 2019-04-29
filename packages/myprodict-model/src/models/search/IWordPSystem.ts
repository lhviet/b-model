import {IWordPLocal} from "./IWordPLocal";
import {MPTypes} from '../../MPTypes';
import PronunciationSystem = MPTypes.PronunciationSystem;


export interface IWordPSystem {
  system: PronunciationSystem;
  locals: IWordPLocal[];
}
