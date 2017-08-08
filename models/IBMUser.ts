import {IBMBase} from './IBMBase';

export interface IBMUser extends IBMBase {

  value: {
    username: string,
    email: string,
    status: string,
    role: string,
    created_at: number,
  };

}
