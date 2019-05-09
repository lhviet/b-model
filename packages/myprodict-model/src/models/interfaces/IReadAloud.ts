import {MPTypes} from '../../MPTypes';
import Status = MPTypes.Status;

export interface IReadAloud {
  keyid: string;
  value: IReadAloudValue;
}

export interface IReadAloudValue {
  ra_content: string;      // max 1024 chars
  status: Status;
  created_at: number;   // 11 digits
  updated_at: number;   // 11 digits
  ra_order?: number;
  tags?: string;        // max 200 chars
  audio_url?: string;   // max 1024 chars
}
