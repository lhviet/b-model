export interface IMeaningUsage {
  keyid: string;
  value: IMeaningUsageValue;
}

export interface IMeaningUsageValue {
  word_keyid: string;       // max 16 chars, reference to Word (keyid)
  meaning_keyid: string;    // max 16 chars, reference to Meaning (keyid)
  usage: string;
  explanation: string;
}
