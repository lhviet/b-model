import {MPTypes} from '../../MPTypes';
import UserRole = MPTypes.UserRole;
import Status = MPTypes.Status;

export interface IUser {
  keyid: string;
  value: IUserValue;
}
export interface IUserValue {
  username: string;
  email: string;
  role: UserRole;
  status: Status;
  updated_at: number;
  created_at: number;
  password?: string;
}
