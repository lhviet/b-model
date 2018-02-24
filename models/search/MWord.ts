import BPronunciationSystem from '../core/BPronunciationSystem';
import BLocal from '../core/BLocal';
import BWordClass from '../core/BWordClass';

interface IPronunciationClass {
  c: BWordClass.EnumWordClass;  // word_class of the pronunciation
  p: string;  // pronunciation
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
                   pronunciation: string) {
    const systemString = BPronunciationSystem.getEString(system);
    const localString = BLocal.getEString(local);
    if (!this.system[systemString]) {
      this.system[systemString] = {
        [localString]: [{
          c: wordClass,
          p: pronunciation
        }]
      };
    }
    else {
      const pArr = this.system[systemString][localString];
      const foundSamePronunciation = pArr.find(pItem => pItem.p === pronunciation);
      if (!foundSamePronunciation) {
        pArr.push({
          c: wordClass,
          p: pronunciation
        });
      }
    }
  }

}