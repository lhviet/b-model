// Bibooki Base Model

class BMBase {

  value: any = {};
  addition: any = {};

  constructor() {}

  /**
   * Setup the addition.imageArr to use the input CDN host
   * condition: only URLs start with /uploads/ or /images/
   * @param {string} cdnHost
   * @returns {any}
   */
  setupImageCDN(cdnHost = ''): any {
    // setup images
    this.addition.imageArr = [];
    for (const link of this.value.images) {
      const isValid = link.indexOf('/uploads/') === 0
        || link.indexOf('uploads/') === 0
        || link.indexOf('/images/') === 0
        || link.indexOf('images/') === 0;
      const url = isValid && cdnHost ? (cdnHost + link) : ('' + link);
      this.addition.imageArr.push({url});
    }
    return this;
  }

  convertAdditionImg2Value(cdnHost = ''): any {
    // setup images
    this.value.images = [];
    for (const urlObj of this.addition.imageArr) {
      const index = cdnHost && cdnHost.length > 0 ? urlObj.url.indexOf(cdnHost) : -1;
      const url = index > -1 ? (urlObj.url.substring(index + cdnHost.length)) : urlObj.url;
      this.value.images.push({url});
    }
    return this;
  }
}

export default BMBase;
