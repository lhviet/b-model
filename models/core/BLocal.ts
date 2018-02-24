module BLocal {
  export const enum EnumLocal {
    US = 1,
    GB,
    AU,
  }

  export function isUS(statusType: EnumLocal): boolean {
    return statusType === EnumLocal.US;
  }
  export function isGB(statusType: EnumLocal): boolean {
    return statusType === EnumLocal.GB;
  }
  export function isAU(statusType: EnumLocal): boolean {
    return statusType === EnumLocal.AU;
  }

  export function getEString(e: EnumLocal): string {
    switch (e) {
      case EnumLocal.US:
        return 'US';
      case EnumLocal.GB:
        return 'GB';
      case EnumLocal.AU:
        return 'AU';
      default:
        return '';
    }
  };

}


export default BLocal;
