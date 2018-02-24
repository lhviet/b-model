module BWordClass {
  export const enum EnumWordClass {
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

  export const getEString = (e: EnumWordClass): string => {
    let wordClass: string;
    switch (e) {
      case EnumWordClass.all:
        wordClass = 'all';
        break;
      case EnumWordClass.noun:
        wordClass = 'noun';
        break;
      case EnumWordClass.verb:
        wordClass = 'verb';
        break;
      case EnumWordClass.adjective:
        wordClass = 'adjective';
        break;
      case EnumWordClass.adverb:
        wordClass = 'adverb';
        break;
      case EnumWordClass.pronoun:
        wordClass = 'pronoun';
        break;
      case EnumWordClass.abbreviation:
        wordClass = 'abbreviation';
        break;
      case EnumWordClass.interjection:
        wordClass = 'interjection';
        break;
      case EnumWordClass.conjunction:
        wordClass = 'conjunction';
        break;
      case EnumWordClass.prefix:
        wordClass = 'prefix';
        break;
      case EnumWordClass.preposition:
        wordClass = 'preposition';
        break;
      case EnumWordClass.article:
        wordClass = 'article';
        break;
      case EnumWordClass.unclassified:
        wordClass = 'unclassified';
        break;
      default:
        return null;
    }
    return wordClass.substr(0, 4);
  };
}

export default BWordClass;
