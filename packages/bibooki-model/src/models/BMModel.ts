import {IBMUserValue} from './interfaces/IBMUser';
import {IBMPersonValue} from './interfaces/IBMPerson';
import {IBMUserBasicInfoValue} from './interfaces/IBMUserBasicInfo';
import {IBMBookValue} from './interfaces/IBMBook';
import {IBMBookTextValue} from './interfaces/IBMBookText';
import {IBMBookTextChapterValue} from './interfaces/IBMBookTextChapter';
import {IBMQuoteValue} from './interfaces/IBMQuote';
import {IBMSliderValue} from './interfaces/IBMSlider';
import {IBMInfoValue} from './interfaces/IBMInfo';
import {IBMUserFriendshipValue} from './interfaces/IBMUserFriendship';
import {IBMConfigsValue} from './interfaces/IBMConfigs';
import * as moment from 'moment';
import {BMStatus} from './BMStatus';
import {BMRole} from './BMRole';
import {BMGender} from './BMGender';
import {BMBookType} from './BMBookType';
import {IBMUserActivityValue} from '../index';
import {IBMUserActivityExtractedValue} from './interfaces/IBMUserActivity';

export class BMModel {

  static DEFAULT_IMG = {
    COVER: '/images/default-cover.png',
    PERSON: '/images/default-person.png',
    BOOK: '/images/default-book.png',
  };
  static AUTH_PROVIDER = {
    LOCAL: 'local',
    FACEBOOK: 'facebook',
    GOOGLE: 'google'
  };

  static SUPPORT_ACTION = {
    remindUsername: 'remind_username',
    emailActivation: 'email_activation',
    resetPassword: 'reset_password'
  };

  static initUser(): IBMUserValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      username: '',
      email: '',
      password: '',
      status: BMStatus.list.general.verifying.code, // 15 chars,
      role: BMRole.user_role.user.code,   // 15 chars
      updated_at: NOW,
      created_at: NOW,
    };
  }

  static initUserBasic(): IBMUserBasicInfoValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      update_from_provider: BMModel.AUTH_PROVIDER.LOCAL,
      displayname: '',
      firstname: '',
      lastname: '',
      middlename: '',
      avatar_url: BMModel.DEFAULT_IMG.PERSON,
      cover_url: BMModel.DEFAULT_IMG.COVER,
      home_url: '',
      gender: BMGender.list.noanswer.code,
      birthday: '',
      language: 'en',
      country: '',
      timezone: '',
      quote: '',
      updated_at: NOW,
    };
  }

  static initPerson(): IBMPersonValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      contributor_keyid: '',
      custom_url: '',
      native_name: '',
      english_name: '',
      alternative_names: {en: []},
      language: 'en',
      country: 'U_N',
      gender: BMGender.list.noanswer.code,
      year_of_birth: 0,
      year_of_death: 0,
      description: '',
      tags: '',
      links: [''],
      images: [BMModel.DEFAULT_IMG.PERSON],
      status: BMStatus.list.general.pending.code,
      updated_at: NOW,
      created_at: NOW,
    };
  }

  static initBook(): IBMBookValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      contributor_keyid: '',
      custom_url: '',
      native_name: '',
      english_name: '',
      alternative_names: {en: []},
      language: 'en',
      countries: '',
      type: BMBookType.list.text.code,
      year_of_start: 0,
      year_of_end: 0,
      author_info: '',
      links: [''],
      images: [BMModel.DEFAULT_IMG.BOOK],
      description: '',
      tags: '',
      status: BMStatus.list.general.pending.code,
      updated_at: NOW,
      created_at: NOW
    };
  }

  static initBookText(): IBMBookTextValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      contributor_keyid: '',
      book_keyid: '',
      custom_url: '',
      language: 'en',
      native_name: '',
      alternative_names: {en: []},
      author_info: '',
      book_info: '',
      description: '',
      year: null,
      status: BMStatus.list.sharing_status.public_share.code,
      links: [''],
      images: [BMModel.DEFAULT_IMG.BOOK],
      files: [''],
      isbn: '',
      tags: '',
      updated_at: NOW,
      created_at: NOW,
    };
  }

  static initBookTextChapter(): IBMBookTextChapterValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      booktext_keyid: '', // 36 varchars
      custom_url: '',     // 125 varchars
      chapter_order: 1,           // 4 digits
      part_name: '',      // 125 varchars
      chapter_name: '',   // 255 varchars
      description: '',     // 1024 varchars
      content: '',         // TEXT varchars
      links: [''],          // varchar , links in format ['url-1','url-2',...]
      image_location: '', // folder of images of this chapter
      updated_at: NOW,
      created_at: NOW,
    };
  }

  static initQuote(): IBMQuoteValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      person_keyid: '',   // 36 chars
      book_keyid: '',     // 36 chars
      person_info: '',    // 125 chars
      book_info: '',      // 125 chars
      language: 'en', // 2 chars
      content: '',        // 1,255 varchars
      cover_url: BMModel.DEFAULT_IMG.COVER, // 1,255 chars
      tags: '', // 250 chars
      updated_at: NOW,
      created_at: NOW,   // 10 digits
    };
  }

  static initSlider(): IBMSliderValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      language: 'en', // 2 chars
      content: '',    // 512 varchars
      cover_url: BMModel.DEFAULT_IMG.COVER, // 1,255 chars
      link: '',       // 1,255 chars
      tags: '',       // 250 chars
      updated_at: NOW,
      created_at: NOW,  // 10 digits
    };
  }

  static initInfo(): IBMInfoValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      contributor_keyid: '',  // 36 varchars
      custom_url: '',         // 125 varchars
      language: 'en',         // 2 chars
      title: '',              // 125 varchars
      description: '',        // 512 varchars
      content: '',            // TEXT
      cover_url: '',          // 1024 varchars
      updated_at: NOW,        // 10 digits
      created_at: NOW,        // 10 digits
    };
  }

  static initUserFriendship(): IBMUserFriendshipValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      user_keyid_1: '',
      user_keyid_2: '',
      status: BMStatus.list.friendship_status.pending.code,
      created_at: NOW,
    };
  }

  static initUserActivity(): IBMUserActivityValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      sbj: '',
      verb: '',
      obj: '',
      tags: '',
      created_at: NOW,
    };
  }

  static initUserActivityExtracted(): IBMUserActivityExtractedValue {
    const NOW = parseInt(moment().format('X'), 10);
    return {
      sbj: {keyid: '', username: '', displayname: '', avatar_url: ''},
      obj: {keyid: '', custom_url: '', cover_url: '', title: '', description: ''},
      type: '',
      obj_url: '',
      description: '',
      created_at: NOW
    };
  }

  static initConfig(): IBMConfigsValue {
    return {
      name: '',
      config_value: '',
      description: '',
    };
  }

}
