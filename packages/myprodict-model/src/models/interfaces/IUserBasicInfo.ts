import {MPTypes} from '../../MPTypes';
import Gender = MPTypes.Gender;
import UserProvider = MPTypes.UserProvider;

export interface IUserBasicInfo {
  keyid: string;
  value: IUserBasicInfoValue;
}

export interface IUserBasicInfoValue {
  displayname: string;
  firstname: string;
  lastname: string;
  middlename: string;
  avatar_url: string;
  cover_url: string;
  home_url: string;
  birthday: string;
  language: string;
  country: string;
  timezone: string;
  quote: string;

  gender: Gender;
  update_from_provider: UserProvider;

  updated_at: number;
}
