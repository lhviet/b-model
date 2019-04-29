import {MPTypes} from '../MPTypes';
import WordClass = MPTypes.WordClass;

export const isAll = (wordClass: WordClass): boolean => wordClass === WordClass.all;
export const isNoun = (wordClass: WordClass): boolean => wordClass === WordClass.noun;
export const isVerb = (wordClass: WordClass): boolean => wordClass === WordClass.verb;
export const isAdj = (wordClass: WordClass): boolean => wordClass === WordClass.adjective;

// enum WordClass helper
export function getEWordClassString(e: WordClass): string {
  let wordClass: string;
  switch (e) {
    case WordClass.all:
      wordClass = 'all';
      break;
    case WordClass.noun:
      wordClass = 'noun';
      break;
    case WordClass.verb:
      wordClass = 'verb';
      break;
    case WordClass.adjective:
      wordClass = 'adjective';
      break;
    case WordClass.adverb:
      wordClass = 'adverb';
      break;
    case WordClass.pronoun:
      wordClass = 'pronoun';
      break;
    case WordClass.abbreviation:
      wordClass = 'abbreviation';
      break;
    case WordClass.interjection:
      wordClass = 'interjection';
      break;
    case WordClass.conjunction:
      wordClass = 'conjunction';
      break;
    case WordClass.prefix:
      wordClass = 'prefix';
      break;
    case WordClass.preposition:
      wordClass = 'preposition';
      break;
    case WordClass.article:
      wordClass = 'article';
      break;
    case WordClass.unclassified:
      wordClass = 'unclassified';
      break;
    default:
      return '';
  }
  return wordClass.substr(0, 4);
}

export const getWordClassArr = (): WordClass[] => [
  WordClass.all,
  WordClass.noun,
  WordClass.verb,
  WordClass.adjective,
  WordClass.adverb,
  WordClass.pronoun,
  WordClass.abbreviation,
  WordClass.interjection,
  WordClass.conjunction,
  WordClass.prefix,
  WordClass.preposition,
  WordClass.article,
  WordClass.unclassified,
];
