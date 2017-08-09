import {IBMConfigs} from './IBMConfigs';

export class BMConfigs implements IBMConfigs {

  static CONFIG_NAMES = {
    sliders_in_homepage: 'slider_home_', // name to be store in BMConfigs Table slider_home_en, slider_home_vn, ...
    quote_in_homepage: 'quote_home_', // name to be store in BMConfigs Table quote_home_en, quote_home_vn, ...
  };

  keyid = '';
  value = {
    name: '',
    config_value: '',
    description: '',
  };

  constructor() {
  }
}