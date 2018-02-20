enum EnumSystem {
  IPA = 1,
}

const isIPA = (statusType: EnumSystem): boolean => statusType === EnumSystem.IPA;

export default {
  EnumSystem,
  isIPA,
}
