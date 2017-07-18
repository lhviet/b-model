import {Helper} from "./functions/helper";

export class BookTextChapter {

  keyid = '';
  value = {
    booktext_keyid: '', // 36 varchars
    custom_url: '',     // 125 varchars
    chapter_order: 1,           // 4 digits
    part_name: '',      // 125 varchars
    chapter_name: '',   // 255 varchars
    description:'',     // 1024 varchars
    content:'',         // TEXT varchars
    links: [''],          // varchar , links in format ['url-1','url-2',...]
    image_location: '', // folder of images of this chapter
    updated_at: 0,
    created_at: 0,
  };

  addition = {
    linkArr: [],
    imageArr: [],
    updated_at: '',
    created_at: '',
  };

  constructor() {}

  /**
   * Setup model based on the model returned from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition() {
    // setup links
    this.addition.linkArr = [];
    for (let link of this.value.links) {
      this.addition.linkArr.push({url: link});
    }

    this.addition.updated_at = Helper.getDatetime(this.value.updated_at);
    this.addition.created_at = Helper.getDatetime(this.value.created_at);

  }
}