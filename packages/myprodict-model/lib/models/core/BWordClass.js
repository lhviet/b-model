"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
function isAll(statusType) {
    return statusType === enums_1.EWClass.all;
}
exports.isAll = isAll;
function isNoun(statusType) {
    return statusType === enums_1.EWClass.noun;
}
exports.isNoun = isNoun;
function isVerb(statusType) {
    return statusType === enums_1.EWClass.verb;
}
exports.isVerb = isVerb;
function isAdj(statusType) {
    return statusType === enums_1.EWClass.adjective;
}
exports.isAdj = isAdj;
// enum EWClass helper
function getEWordClassString(e) {
    var wordClass;
    switch (e) {
        case enums_1.EWClass.all:
            wordClass = 'all';
            break;
        case enums_1.EWClass.noun:
            wordClass = 'noun';
            break;
        case enums_1.EWClass.verb:
            wordClass = 'verb';
            break;
        case enums_1.EWClass.adjective:
            wordClass = 'adjective';
            break;
        case enums_1.EWClass.adverb:
            wordClass = 'adverb';
            break;
        case enums_1.EWClass.pronoun:
            wordClass = 'pronoun';
            break;
        case enums_1.EWClass.abbreviation:
            wordClass = 'abbreviation';
            break;
        case enums_1.EWClass.interjection:
            wordClass = 'interjection';
            break;
        case enums_1.EWClass.conjunction:
            wordClass = 'conjunction';
            break;
        case enums_1.EWClass.prefix:
            wordClass = 'prefix';
            break;
        case enums_1.EWClass.preposition:
            wordClass = 'preposition';
            break;
        case enums_1.EWClass.article:
            wordClass = 'article';
            break;
        case enums_1.EWClass.unclassified:
            wordClass = 'unclassified';
            break;
        default:
            return '';
    }
    return wordClass.substr(0, 4);
}
exports.getEWordClassString = getEWordClassString;
exports.getEWClassMap = function () { return [
    enums_1.EWClass.all,
    enums_1.EWClass.noun,
    enums_1.EWClass.verb,
    enums_1.EWClass.adjective,
    enums_1.EWClass.adverb,
    enums_1.EWClass.pronoun,
    enums_1.EWClass.abbreviation,
    enums_1.EWClass.interjection,
    enums_1.EWClass.conjunction,
    enums_1.EWClass.prefix,
    enums_1.EWClass.preposition,
    enums_1.EWClass.article,
    enums_1.EWClass.unclassified,
]; };
//# sourceMappingURL=BWordClass.js.map