import {IBMSlider} from './IBMSlider';

export class BMSlider implements IBMSlider {

  keyid = '';
  value = {
    language: 'en', // 2 chars
    content: '',    // 512 varchars
    cover_url: '/images/default-cover.png', // 1,255 chars
    link: '',       // 1,255 chars
    tags: '',       // 250 chars
    created_at: 0,  // 10 digits
  };

  constructor() {
  }

}
