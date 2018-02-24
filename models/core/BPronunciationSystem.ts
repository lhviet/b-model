module BPronunciationSystem {

  export const enum EnumSystem {
    IPA = 1,
  }

  export const isIPA = (statusType: EnumSystem): boolean => statusType === EnumSystem.IPA;

  export const getEString = (e: EnumSystem): string => {
    switch (e) {
      case EnumSystem.IPA:
        return 'IPA';
      default:
        return '';
    }
  };

}

export default BPronunciationSystem;
