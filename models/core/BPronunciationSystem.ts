module BPronunciationSystem {

  export const enum EnumSystem {
    IPA = 1,
  }

  export function isIPA(statusType: EnumSystem): boolean {
    return statusType === EnumSystem.IPA;
  }

  export function getEString(e: EnumSystem): string {
    switch (e) {
      case EnumSystem.IPA:
        return 'IPA';
      default:
        return '';
    }
  };

}

export default BPronunciationSystem;
