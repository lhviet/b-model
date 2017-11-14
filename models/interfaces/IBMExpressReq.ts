import {Request} from 'express';

export interface IBMJWTData {
  user_keyid: string;
  username: string;
  email: string;
  role: string;
  iat: string;
}

export interface IBMExpressReq extends Request {
  jwtData: IBMJWTData;
}
