import {EPLocal, EPSystem, EWClass} from '../enums';
import {IWordPSystem} from "./IWordPSystem";
import {IPronunciationClass} from "./IPronunciationClass";


export class MWord {

  keyid: string;
  word: string;
  custom_url: string;
  created_at: number;
  updated_at: number;
  systems: IWordPSystem[];

  constructor(keyid: string, word: string, custom_url: string, created_at: number, updated_at: number) {
    this.keyid = keyid;
    this.word = word;
    this.custom_url = custom_url;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.systems = [];
  }

  addPronunciation(keyid: string,
                   system: EPSystem,
                   local: EPLocal,
                   wordClass: EWClass,
                   pronunciation: string,
                   description: string) {
    const pClass: IPronunciationClass = {
      k: keyid,
      c: wordClass,
      p: pronunciation,
      d: description
    };
    const foundSystem = this.systems.find(s => s.system === system);
    if (!foundSystem) {
      this.systems.push({
        system,
        locals: [{
          local,
          pArr: [pClass],
        }],
      });
    }
    else {
      const foundLocal = foundSystem.locals.find(l => l.local === local);
      if (!foundLocal) {
        foundSystem.locals.push({
          local,
          pArr: [pClass],
        });
      }
      else {
        const foundPro = foundLocal.pArr.find(p => p.c === pClass.c && p.p === pClass.p);
        if (!foundPro) {
          foundLocal.pArr.push(pClass);
        }
      }
    }
  }
}
