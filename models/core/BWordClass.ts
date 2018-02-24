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

  export function isAll(statusType: EnumWordClass): boolean {
    return statusType === EnumWordClass.all;
  }
  export function isNoun(statusType: EnumWordClass): boolean {
    return statusType === EnumWordClass.noun;
  }
  export function isVerb(statusType: EnumWordClass): boolean {
    return statusType === EnumWordClass.verb;
  }
  export function isAdj(statusType: EnumWordClass): boolean {
    return statusType === EnumWordClass.adjective;
  }

  export function getEString(e: EnumWordClass): string {
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
        return '';
    }
    return wordClass.substr(0, 4);
  }
}

export default BWordClass;
