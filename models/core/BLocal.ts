enum EnumLocal {
  US = 1,
  GB,
  AU,
}

const isUS = (statusType: EnumLocal): boolean => statusType === EnumLocal.US;
const isGB = (statusType: EnumLocal): boolean => statusType === EnumLocal.GB;
const isAU = (statusType: EnumLocal): boolean => statusType === EnumLocal.AU;

export default {
  EnumLocal,
  isUS,
  isGB,
  isAU,
}
