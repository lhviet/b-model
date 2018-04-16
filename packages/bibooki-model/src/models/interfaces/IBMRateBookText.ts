export interface IBMRateBooktext {
  keyid: string;
  value: IBMRateBooktextValue;
}

export interface IBMRateBooktextValue {
  booktext_keyid: string;
  user_keyid: string;
  rate: number;
  updated_at: number,
  created_at: number,
}
