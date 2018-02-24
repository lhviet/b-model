module BPronunciationSystem {
  export enum EnumSystem {
    IPA = 1,
  }

  export const isIPA = (statusType: EnumSystem): boolean => statusType === EnumSystem.IPA;

  export const getEString = (eSystem: EnumSystem): string => EnumSystem[eSystem];

}

export default BPronunciationSystem;
