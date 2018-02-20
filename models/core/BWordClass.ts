module BWordClass {
  export enum EnumWordClass {
    all = 1,
    noun,
    verb,
    adjective,
    adverb,
    pronoun,
    abbreviation,
    interjection,
    conjunction,
    prefix,
    preposition,
    article,  // DEFINITE AND INDEFINITE ARTICLES: a, an, the
    unclassified,
  }

  export const isAll = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.all;
  export const isNoun = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.noun;
  export const isVerb = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.verb;
  export const isAdj = (statusType: EnumWordClass): boolean => statusType === EnumWordClass.adjective;
}

export default BWordClass;
