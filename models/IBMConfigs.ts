import {IBMBase} from './IBMBase';

export interface IBMConfigs extends IBMBase {

  value: {
    name: string,       // 15 chars
    config_value: any,      // 1255 chars
    description: string, // 255 chars
  };

}
