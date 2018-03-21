import * as moment from 'moment';
import {
  IMeaningValue,
  IMeaningExampleValue,
  IMeaningUsageValue,
  IPronunciationValue,
  IWordValue,
  IUserValue,
  IUserBasicInfoValue
} from './interfaces';
import {EGender, EPLocal, EPSystem, EStatus, EUserProvider, EUserRole, EWClass} from './enums';

const DEFAULT_IMG = {
  COVER: '/images/default-cover.png',
  PERSON: '/images/default-person.png',
};

const now = () => parseInt(moment().format('X'), 10);

export class BModel {

  static DEFAULT_IMG = {
    COVER: '/images/default-cover.png',
    PERSON: '/images/default-person.png',
  };

  // using for email-helper
  static SUPPORT_ACTION = {
    remindUsername: 'remind_username',
    emailActivation: 'email_activation',
    resetPassword: 'reset_password'
  };

  static initWord(): IWordValue {
    return {
      word: '',
      custom_url: '',
      status: EStatus.Pending,
      created_at: now(),
      updated_at: now(),
    };
  }

  static initPronunciation(): IPronunciationValue {
    return {
      word_keyid: '',
      word_class: EWClass.all,  // i.e., 1 = all, 2 = noun, 3 = verb, 4 = adjective, 5 = ...
      system: EPSystem.IPA,     // i.e., 1 = IPA
      local: EPLocal.US,      // i.e., 1 = US
      transcript: '',
      description: '',
      soundUrl: '',
      created_at: now(),
      updated_at: now(),
    };
  }

  static initMeaning(): IMeaningValue {
    return {
      word_keyid: '',
      word_class: EWClass.all,
      mean: '',
      tags: '',
    };
  }

  static initMeaningUsage(): IMeaningUsageValue {
    return {
      meaning_keyid: '',
      usage: '',
      explanation: '',
    };
  }

  static initMeaningExample(): IMeaningExampleValue {
    return {
      meaning_usage_keyid: '',
      sentence: '',
    };
  }

  // Authentication
  static initUser(): IUserValue {
    return {
      username: '',
      email: '',
      password: '',
      updated_at: now(),
      created_at: now(),
      status: EStatus.Pending, // 15 chars,
      role: EUserRole.User,   // 15 chars
    };
  }

  static initUserBasic(): IUserBasicInfoValue {
    return {
      displayname: '',
      firstname: '',
      lastname: '',
      middlename: '',
      avatar_url: DEFAULT_IMG.PERSON,
      cover_url: DEFAULT_IMG.COVER,
      home_url: '',
      birthday: '',
      language: 'en',
      country: '',
      timezone: '',
      quote: '',

      updated_at: now(),

      gender: EGender.NA,
      update_from_provider: EUserProvider.Local,
    };
  }
}
