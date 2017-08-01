// Bibooki Base Model

class BMBase {

  value: any = {};
  addition: any = {};

  constructor() {}

  /**
   * Setup the addition.imageArr to use the input CDN host
   * @param {string} cdnHost
   * @returns {any}
   */
  setupImageCDN(cdnHost = ''): any {
    // setup images
    this.addition.imageArr = [];
    for (const link of this.value.images) {
      const isValid = link.indexOf('/uploads/') === 0 || link.indexOf('/images/') === 0;
      const url = isValid && cdnHost ? (cdnHost + link) : ('' + link);
      this.addition.imageArr.push({url});
    }
    return this;
  }
}

export default BMBase;
