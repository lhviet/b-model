import {IBMBase} from './IBMBase';

export interface IBMQuote extends IBMBase {

  value: {
    person_keyid: string,   // 36 chars
    book_keyid: string,     // 36 chars
    person_info: string,    // 125 chars
    book_info: string,      // 125 chars
    language: string, // 2 chars
    content: string,        // 1,255 varchars
    cover_url: string, // 1,255 chars
    tags: string, // 250 chars
    created_at: number,   // 10 digits
  };

}
