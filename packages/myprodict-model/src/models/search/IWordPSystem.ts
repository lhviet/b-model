import {EPSystem} from "../enums";
import {IWordPLocal} from "./IWordPLocal";


export interface IWordPSystem {
  system: EPSystem;
  locals: IWordPLocal[];
}
