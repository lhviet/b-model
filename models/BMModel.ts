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

export class BMModel {

  static initUser(): IBMUserValue {
    const NOW = moment().format('X');
    return <IBMUserValue>{
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
    const NOW = moment().format('X');
    return <IBMUserBasicInfoValue>{
      update_from_provider: '',
      displayname: '',
      firstname: '',
      lastname: '',
      middlename: '',
      avatar_url: '',
      cover_url: '',
      home_url: '',
      gender: '',
      birthday: '',
      language: '',
      country: '',
      timezone: '',
      quote: '',
      updated_at: NOW,
    }
  }

  static initPerson(): IBMPersonValue {
    const NOW = moment().format('X');
    return <IBMPersonValue>{
      contributor_keyid: '',
      custom_url: '',
      native_name: '',
      english_name: '',
      alternative_names: {en: []},
      language: 'en',
      country: 'U_N',
      gender: 'noanswer',
      year_of_birth: 0,
      year_of_death: 0,
      description: '',
      tags: '',
      links: [''],
      images: ['/images/default-person.png'],
      status: '',
      updated_at: NOW,
      created_at: NOW,
    }
  }

  static initBook(): IBMBookValue {
    const NOW = moment().format('X');
    return <IBMBookValue>{
      contributor_keyid: '',
      custom_url: '',
      native_name: '',
      english_name: 'en',
      alternative_names: {en: []},
      language: '',
      countries: '',
      type: 'text',
      year_of_start: 0,
      year_of_end: 0,
      author_info: '',
      links: [''],
      images: ['/images/default-book.png'],
      description: '',
      tags: '',
      status: '',
      updated_at: NOW,
      created_at: NOW
    }
  }

  static initBookText(): IBMBookTextValue {
    const NOW = moment().format('X');
    return <IBMBookTextValue>{
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
      status: 1,
      links: [''],
      images: ['/images/default-book.png'],
      files: [''],
      isbn: '',
      tags: '',
      updated_at: NOW,
      created_at: NOW,
    };
  }

  static initBookTextChapter(): IBMBookTextChapterValue {
    const NOW = moment().format('X');
    return <IBMBookTextChapterValue>{
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
    const NOW = moment().format('X');
    return <IBMQuoteValue>{
      person_keyid: '',   // 36 chars
      book_keyid: '',     // 36 chars
      person_info: '',    // 125 chars
      book_info: '',      // 125 chars
      language: 'en', // 2 chars
      content: '',        // 1,255 varchars
      cover_url: '/images/default-cover.png', // 1,255 chars
      tags: '', // 250 chars
      created_at: NOW,   // 10 digits
    }
  }

  static initSlider(): IBMSliderValue {
    const NOW = moment().format('X');
    return <IBMSliderValue>{
      language: 'en', // 2 chars
      content: '',    // 512 varchars
      cover_url: '/images/default-cover.png', // 1,255 chars
      link: '',       // 1,255 chars
      tags: '',       // 250 chars
      created_at: NOW,  // 10 digits
    };
  }

  static initInfo(): IBMInfoValue {
    const NOW = moment().format('X');
    return <IBMInfoValue>{
      contributor_keyid: '', // 36 varchars
      custom_url: '',       // 125 varchars
      language: 'en',       // 2 chars
      title: '',            // 125 varchars
      description: '',      // 512 varchars
      content: '',          // TEXT
      updated_at: NOW,        // 10 digits
      created_at: NOW,        // 10 digits
    }
  }

  static initUserFriendship(): IBMUserFriendshipValue {
    const NOW = moment().format('X');
    return <IBMUserFriendshipValue>{
      user_keyid_1: '',
      user_keyid_2: '',
      status: -1,
      created_at: NOW,
    };
  }

  static initConfig(): IBMConfigsValue {
    return {
      name: '',
      config_value: '',
      description: '',
    };
  }

  constructor() {
  }

}
