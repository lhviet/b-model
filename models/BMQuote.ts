import {IBMQuote} from './IBMQuote';

export class BMQuote implements IBMQuote{

  keyid = '';
  value = {
    person_keyid: '',   // 36 chars
    book_keyid: '',     // 36 chars
    person_info: '',    // 125 chars
    book_info: '',      // 125 chars
    language: 'en', // 2 chars
    content: '',        // 1,255 varchars
    cover_url: '/images/default-cover.png', // 1,255 chars
    tags: '', // 250 chars
    created_at: 0,   // 10 digits
  };

  constructor() {
  }
}
