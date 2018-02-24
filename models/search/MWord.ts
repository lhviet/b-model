import * as BPronunciationSystem from '../core/BPronunciationSystem';
import * as BLocal from '../core/BLocal';
import * as BWordClass from '../core/BWordClass';

interface IPronunciationClass {
  c: BWordClass.EnumWordClass;  // word_class of the pronunciation
  p: string;  // pronunciation
  d: string;  // description
}

export class MWord {

  keyid: string;
  word: string;
  custom_url: string;
  created_at: number;
  updated_at: number;
  system: {
    [system: string]: { // system is string from BPronunciation.getEString(EnumSystem)
      [local: string]: IPronunciationClass[] // local is string from Blocal.getEString(EnumLocal)
    }
  };

  constructor(keyid: string, word: string, custom_url: string, created_at: number, updated_at: number) {
    this.keyid = keyid;
    this.word = word;
    this.custom_url = custom_url;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.system = {};
  }

  addPronunciation(system: BPronunciationSystem.EnumSystem,
                   local: BLocal.EnumLocal,
                   wordClass: BWordClass.EnumWordClass,
                   pronunciation: string,
                   description: string) {
    const systemString = BPronunciationSystem.getEString(system);
    const localString = BLocal.getEString(local);
    const pClass: IPronunciationClass = {
      c: wordClass,
      p: pronunciation,
      d: description
    };
    if (!this.system[systemString]) {
      this.system[systemString] = {
        [localString]: [pClass]
      };
    }
    else {
      const pArr = this.system[systemString][localString];
      if (!pArr) {
        this.system[systemString][localString] = [pClass]
      }
      else {
        const foundSamePronunciation = pArr.find(pItem => (pItem.p === pronunciation && pItem.c === wordClass));
        if (!foundSamePronunciation) {
          pArr.push(pClass);
        }
      }
    }
  }
}
