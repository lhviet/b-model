import {IBMEventModel} from './IBMEventModel';

export class BMEventModel implements IBMEventModel {

  keyid: string;
  value: any;
  /*value: {
    actor: {
      keyid: string,
      username: string,
      displayname: string
      avatar_url: string,
    },
    obj: {
      keyid: string,
      custom_url: string,
      cover_url: string,
      title: string,
      description: string
    },
    type: string,
    obj_url: string,
    description: string,
    created_at: number
  };*/

  constructor() {
  }

}