export interface IBMRatePerson {
  keyid: string;
  value: IBMRatePersonValue;
}

export interface IBMRatePersonValue {
  person_keyid: string;
  user_keyid: string;
  rate: number;
  updated_at: number,
  created_at: number,
}
