
export enum EnumLocal {
  US = 1,
  GB,
  AU,
}

export const isUS = (statusType: EnumLocal): boolean => statusType === EnumLocal.US;
export const isGB = (statusType: EnumLocal): boolean => statusType === EnumLocal.GB;
export const isAU = (statusType: EnumLocal): boolean => statusType === EnumLocal.AU;

export const getEString = (eLocal: EnumLocal): string => EnumLocal[eLocal];
