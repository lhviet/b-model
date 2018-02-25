export interface IBMConfigs {
  keyid: string;
  value: IBMConfigsValue;
}

export interface IBMConfigsValue {
  name: string;       // 15 chars
  config_value: any;      // 1255 chars
  description: string; // 255 chars
}
