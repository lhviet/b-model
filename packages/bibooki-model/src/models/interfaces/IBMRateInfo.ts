export interface IBMRateInfo {
  keyid: string;
  value: IBMRateInfoValue;
}

export interface IBMRateInfoValue {
  info_keyid: string;
  user_keyid: string;
  rate: number;
  updated_at: number,
  created_at: number,
}
