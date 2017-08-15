import {IBMUser} from './interfaces/IBMUser';
import {IBMPerson} from './interfaces/IBMPerson';
import {IBMUserBasicInfo} from './interfaces/IBMUserBasicInfo';
import {IBMBook} from './interfaces/IBMBook';
import {IBMBookText} from './interfaces/IBMBookText';
import {IBMBookTextChapter} from './interfaces/IBMBookTextChapter';
import {IBMQuote} from './interfaces/IBMQuote';
import {IBMSlider} from './interfaces/IBMSlider';
import {IBMInfo} from './interfaces/IBMInfo';
import {IBMUserFriendship} from './interfaces/IBMUserFriendship';
import {IBMConfigs} from './interfaces/IBMConfigs';
import {IBMDbLimitation} from './interfaces/IBMDbLimitation';
import * as moment from 'moment';
import {BMStatus} from './BMStatus';
import {BMRole} from './BMRole';

export class BMModel {

  static initUser(): IBMUser.value {
    const NOW = moment().format('X');
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

  static initUserBasic(): IBMUserBasicInfo.value {
    const NOW = moment().format('X');
    return {
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

  static initPerson(): IBMPerson.value {
    const NOW = moment().format('X');
    return {
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

  static initBook(): IBMBook.value {
    const NOW = moment().format('X');
    return {
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

  static initBookText(): IBMBookText.value {
    const NOW = moment().format('X');
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

  static initBookTextChapter(): IBMBookTextChapter.value {
    const NOW = moment().format('X');
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

  static initQuote(): IBMQuote.value {
    const NOW = moment().format('X');
    return {
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

  static initSlider(): IBMSlider.value {
    const NOW = moment().format('X');
    return {
      language: 'en', // 2 chars
      content: '',    // 512 varchars
      cover_url: '/images/default-cover.png', // 1,255 chars
      link: '',       // 1,255 chars
      tags: '',       // 250 chars
      created_at: NOW,  // 10 digits
    };
  }

  static initInfo(): IBMInfo.value {
    const NOW = moment().format('X');
    return {
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

  static initUserFriendship(): IBMUserFriendship.value {
    const NOW = moment().format('X');
    return {
      user_keyid_1: '',
      user_keyid_2: '',
      status: -1,
      created_at: NOW,
    };
  }

  static initConfig(): IBMConfigs.value {
    return {
      name: '',
      config_value: '',
      description: '',
    };
  }

  constructor() {
  }

}
