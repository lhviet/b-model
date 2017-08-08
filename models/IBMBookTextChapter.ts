import {IBMBase} from './IBMBase';

export interface IBMBookTextChapter extends IBMBase {

  value: {
    booktext_keyid: string, // 36 varchars
    custom_url: string,     // 125 varchars
    chapter_order: number,           // 4 digits
    part_name: string,      // 125 varchars
    chapter_name: string,   // 255 varchars
    description: string,     // 1024 varchars
    content: string,         // TEXT varchars
    links: string[],          // varchar , links in format ['url-1','url-2',...]
    image_location: string, // folder of images of this chapter
    updated_at: number,
    created_at: number,
  };
}
