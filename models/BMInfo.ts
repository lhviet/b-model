import {IBMInfo} from './IBMInfo';

export class BMInfo implements IBMInfo{

  keyid = '';
  value: any = {
    contributor_keyid: '', // 36 varchars
    custom_url: '',       // 125 varchars
    language: 'en',       // 2 chars
    title: '',            // 125 varchars
    description: '',      // 512 varchars
    content: '',          // TEXT
    updated_at: 0,        // 10 digits
    created_at: 0,        // 10 digits
  };

  constructor() {
  }
}
