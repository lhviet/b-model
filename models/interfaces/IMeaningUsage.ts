export interface IMeaningUsage {
  keyid: string;
  value: IMeaningUsageValue;
}

export interface IMeaningUsageValue {
  meaning_keyid: string;   // max 16 chars, reference to Meaning (keyid)
  usage: string;
  explanation: string;
}
