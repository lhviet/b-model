import {EWClass} from '../enums';

export function isAll(statusType: EWClass): boolean {
  return statusType === EWClass.all;
}
export function isNoun(statusType: EWClass): boolean {
  return statusType === EWClass.noun;
}
export function isVerb(statusType: EWClass): boolean {
  return statusType === EWClass.verb;
}
export function isAdj(statusType: EWClass): boolean {
  return statusType === EWClass.adjective;
}

export function getEWordClassString(e: EWClass): string {
  let wordClass: string;
  switch (e) {
    case EWClass.all:
      wordClass = 'all';
      break;
    case EWClass.noun:
      wordClass = 'noun';
      break;
    case EWClass.verb:
      wordClass = 'verb';
      break;
    case EWClass.adjective:
      wordClass = 'adjective';
      break;
    case EWClass.adverb:
      wordClass = 'adverb';
      break;
    case EWClass.pronoun:
      wordClass = 'pronoun';
      break;
    case EWClass.abbreviation:
      wordClass = 'abbreviation';
      break;
    case EWClass.interjection:
      wordClass = 'interjection';
      break;
    case EWClass.conjunction:
      wordClass = 'conjunction';
      break;
    case EWClass.prefix:
      wordClass = 'prefix';
      break;
    case EWClass.preposition:
      wordClass = 'preposition';
      break;
    case EWClass.article:
      wordClass = 'article';
      break;
    case EWClass.unclassified:
      wordClass = 'unclassified';
      break;
    default:
      return '';
  }
  return wordClass.substr(0, 4);
}
