export interface IMeaningExample {
  keyid: string;
  value: IMeaningExampleValue;
}

export interface IMeaningExampleValue {
  meaning_usage_keyid: string;   // max 16 chars, reference to MeaningUsage (keyid)
  sentence: string;
}
