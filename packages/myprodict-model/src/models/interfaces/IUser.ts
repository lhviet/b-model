import {EStatus, EUserRole} from "../enums";

export interface IUser {
  keyid: string;
  value: IUserValue;
}
export interface IUserValue {
  username: string;
  email: string;
  role: EUserRole;
  status: EStatus;
  updated_at: number;
  created_at: number;
  password?: string;
}
