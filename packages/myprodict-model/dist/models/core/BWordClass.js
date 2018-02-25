"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isAll(statusType) {
    return statusType === 1 /* all */;
}
exports.isAll = isAll;
function isNoun(statusType) {
    return statusType === 2 /* noun */;
}
exports.isNoun = isNoun;
function isVerb(statusType) {
    return statusType === 3 /* verb */;
}
exports.isVerb = isVerb;
function isAdj(statusType) {
    return statusType === 4 /* adjective */;
}
exports.isAdj = isAdj;
function getEWordClassString(e) {
    var wordClass;
    switch (e) {
        case 1 /* all */:
            wordClass = 'all';
            break;
        case 2 /* noun */:
            wordClass = 'noun';
            break;
        case 3 /* verb */:
            wordClass = 'verb';
            break;
        case 4 /* adjective */:
            wordClass = 'adjective';
            break;
        case 5 /* adverb */:
            wordClass = 'adverb';
            break;
        case 6 /* pronoun */:
            wordClass = 'pronoun';
            break;
        case 7 /* abbreviation */:
            wordClass = 'abbreviation';
            break;
        case 8 /* interjection */:
            wordClass = 'interjection';
            break;
        case 9 /* conjunction */:
            wordClass = 'conjunction';
            break;
        case 10 /* prefix */:
            wordClass = 'prefix';
            break;
        case 11 /* preposition */:
            wordClass = 'preposition';
            break;
        case 12 /* article */:
            wordClass = 'article';
            break;
        case 13 /* unclassified */:
            wordClass = 'unclassified';
            break;
        default:
            return '';
    }
    return wordClass.substr(0, 4);
}
exports.getEWordClassString = getEWordClassString;
//# sourceMappingURL=BWordClass.js.map