enum EnumWordClass {
  all = 1,
  noun,
  verb,
  adjective,
}

const isAll = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.all;
const isNoun = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.noun;
const isVerb = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.verb;
const isAdj = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.adjective;

export default {
  EnumWordClass,
  isAll,
  isNoun,
  isVerb,
  isAdj,
}
