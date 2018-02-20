module BWordClass {
  export enum EnumWordClass {
    all = 1,
    noun,
    verb,
    adjective,
  }

  export const isAll = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.all;
  export const isNoun = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.noun;
  export const isVerb = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.verb;
  export const isAdj = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.adjective;
}

export default BWordClass;
