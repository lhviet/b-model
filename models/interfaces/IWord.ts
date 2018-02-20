import {TYPE_STATUS} from '../types/TStatus';

export interface IWord {
  keyid: string;
  value: IWordValue;
}

export interface IWordValue {
  word: string;   // max 128 chars
  custom_url: string;   // max 140 chars
  status: TYPE_STATUS;       // max 140 chars
  created_at: number;   // 11 digits
  updated_at: number;   // 11 digits
}