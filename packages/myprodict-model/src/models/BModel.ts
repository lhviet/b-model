import * as moment from 'moment';
import {
  IMeaningValue,
  IMeaningExampleValue,
  IMeaningUsageValue,
  IPronunciationValue,
  IWordValue,
  IUserValue,
  IUserBasicInfoValue,
  IReadAloudValue,
} from './interfaces';
import {MPTypes} from '../MPTypes';
import Status = MPTypes.Status;
import PronunciationSystem = MPTypes.PronunciationSystem;
import WordClass = MPTypes.WordClass;
import Local = MPTypes.Local;
import Gender = MPTypes.Gender;
import UserProvider = MPTypes.UserProvider;
import UserRole = MPTypes.UserRole;

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
      status: Status.Pending,
      created_at: now(),
      updated_at: now(),
    };
  }

  static initPronunciation(): IPronunciationValue {
    return {
      word_keyid: '',
      word_class: WordClass.all,  // i.e., 1 = all, 2 = noun, 3 = verb, 4 = adjective, 5 = ...
      system: PronunciationSystem.IPA,     // i.e., 1 = IPA
      local: Local.US,      // i.e., 1 = US
      transcript: '',
      description: '',
      sound_url: '',
      updated_at: now(),
      created_at: now(),
    };
  }

  static initMeaning(): IMeaningValue {
    return {
      word_keyid: '',
      word_class: WordClass.all,
      mean: '',
      tags: '',
    };
  }

  static initMeaningUsage(): IMeaningUsageValue {
    return {
      word_keyid: '',
      word_class: WordClass.all,
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
      status: Status.Pending, // 15 chars,
      role: UserRole.User,   // 15 chars
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

      gender: Gender.NA,
      update_from_provider: UserProvider.Local,
    };
  }

  static initReadAloud(): IReadAloudValue {
    return {
      ra_content: '',
      status: Status.Active,
      created_at: now(),
      updated_at: now(),
      ra_order: 0,
      tags: '',
      audio_url: '',
    };
  }
}
