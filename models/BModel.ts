import { IMeaningValue } from './interfaces/IMeaning';
import { IMeaningExampleValue } from './interfaces/IMeaningExample';
import { IMeaningUsageValue } from './interfaces/IMeaningUsage';
import { IPronunciationValue } from './interfaces/IPronunciation';
import { IWordValue } from './interfaces/IWord';
import MPDStatus from 'core/BStatus';
import * as moment from 'moment';

export class BModel {

  static initWord(): IWordValue {
    const NOW = parseInt(moment().format('X'), 10);
    const value: IWordValue = {
      word: '',
      custom_url: '',
      status: MPDStatus.EnumStatus.Pending,
      created_at: NOW,
      updated_at: NOW,
    };
    return value;
  }

  static initPronunciation(): IPronunciationValue {
    const value: IPronunciationValue = {
      word_keyid: '',
      word_class: 1,  // i.e., 1 = all, 2 = noun, 3 = verb, 4 = adjective, 5 = ...
      system: 1,     // i.e., 1 = IPA
      local: 1,      // i.e., 1 = US
      transcript: '',
    };
    return value;
  }

  static initMeaning(): IMeaningValue {
    const value: IMeaningValue = {
      word_keyid: '',
      word_class: '',
      mean: '',
      tags: '',
    };
    return value;
  }

  static initMeaningUsage(): IMeaningUsageValue {
    const value: IMeaningUsageValue = {
      meaning_keyid: '',
      usage: '',
      explanation: '',
    };
    return value;
  }

  static initMeaningExample(): IMeaningExampleValue {
    const value: IMeaningExampleValue = {
      meaning_usage_keyid: '',
      sentence: '',
    };
    return value;
  }

}
