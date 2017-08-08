import {IBMBase} from './IBMBase';

export interface IBMInfo extends IBMBase {

  value: {
    contributor_keyid: string, // 36 varchars
    custom_url: string,       // 125 varchars
    language: string,       // 2 chars
    title: string,            // 125 varchars
    description: string,      // 512 varchars
    content: string,          // TEXT
    updated_at: number,        // 10 digits
    created_at: number,        // 10 digits
  };

}
