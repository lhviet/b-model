import {IBMBookTextChapter} from './IBMBookTextChapter';

export class BMBookTextChapter implements IBMBookTextChapter {

  keyid = '';
  value = {
    booktext_keyid: '', // 36 varchars
    custom_url: '',     // 125 varchars
    chapter_order: 1,           // 4 digits
    part_name: '',      // 125 varchars
    chapter_name: '',   // 255 varchars
    description: '',     // 1024 varchars
    content: '',         // TEXT varchars
    links: [],          // varchar , links in format ['url-1','url-2',...]
    image_location: '', // folder of images of this chapter
    updated_at: 0,
    created_at: 0,
  };

  constructor() {
    this.value.links.push('');
  }
}
