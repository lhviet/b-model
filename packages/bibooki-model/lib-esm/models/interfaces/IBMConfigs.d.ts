export interface IBMConfigs {
    keyid: string;
    value: IBMConfigsValue;
}
export interface IBMConfigsValue {
    name: string;
    config_value: any;
    description: string;
}
