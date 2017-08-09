import {IBMUserBasicInfo} from './IBMUserBasicInfo';

export class BMUserBasicInfo implements IBMUserBasicInfo {

  keyid = '';
  value = {
    update_from_provider: '',
    displayname: '',
    firstname: '',
    lastname: '',
    middlename: '',
    avatar_url: '',
    cover_url: '',
    home_url: '',
    gender: '',
    birthday: '',
    language: '',
    country: '',
    timezone: '',
    quote: '',
    updated_at: 0,
  };

  constructor() {
  }

}
