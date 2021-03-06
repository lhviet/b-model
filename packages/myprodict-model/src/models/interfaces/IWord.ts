import {MPTypes} from '../../MPTypes';
import Status = MPTypes.Status;

export interface IWord {
  keyid: string;
  value: IWordValue;
}

export interface IWordValue {
  word: string;   // max 128 chars
  custom_url: string;   // max 140 chars
  status: Status;
  created_at: number;   // 11 digits
  updated_at: number;   // 11 digits
}
