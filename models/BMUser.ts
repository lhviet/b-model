
import {IBMUser} from './IBMUser';

export class BMUser implements IBMUser {

  keyid = '';
  value = {
    username: '',
    email: '',
    status: '',
    role: '',
    created_at: 0,
  };

  constructor() {
  }

}
