module BLocal {
  export const enum EnumLocal {
    US = 1,
    GB,
    AU,
  }

  export const isUS = (statusType: EnumLocal): boolean => statusType === EnumLocal.US;
  export const isGB = (statusType: EnumLocal): boolean => statusType === EnumLocal.GB;
  export const isAU = (statusType: EnumLocal): boolean => statusType === EnumLocal.AU;

  export const getEString = (e: EnumLocal): string => {
    switch (e) {
      case EnumLocal.US:
        return 'US';
      case EnumLocal.GB:
        return 'GB';
      case EnumLocal.AU:
        return 'AU';
      default:
        return null;
    }
  };

}


export default BLocal;
