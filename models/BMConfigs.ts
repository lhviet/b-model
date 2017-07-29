class BMConfigs {

  static CONFIG_NAMES = {
    sliders_in_homepage: 'slider_home_', // name to be store in BMConfigs Table slider_home_en, slider_home_vn, ...
    quote_in_homepage: 'quote_home_', // name to be store in BMConfigs Table quote_home_en, quote_home_vn, ...
  };

  keyid = '';
  value: {
    name: string,       // 15 chars
    config_value: any,      // 1255 chars
    description: string, // 255 chars
  } = {
    name: '',
    config_value: '',
    description: '',
  };

  addition = {};

  constructor(name?: string) {
    if (name) {
      this.value.name = name;
    }
  }

  /**
   * Setup model based on BMBook model return from server (sModel = server-Model)
   * @param sModel
   */
  setupModel(sModel: any) {
    this.keyid = sModel.keyid;
    this.value = sModel.value;
    this.setupAddition();
    return this;
  }

  setupAddition() {
  }
}

export default BMConfigs;
