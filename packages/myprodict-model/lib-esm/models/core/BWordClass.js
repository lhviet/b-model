export function isAll(statusType) {
    return statusType === 1 /* all */;
}
export function isNoun(statusType) {
    return statusType === 2 /* noun */;
}
export function isVerb(statusType) {
    return statusType === 3 /* verb */;
}
export function isAdj(statusType) {
    return statusType === 4 /* adjective */;
}
// enum EWClass helper
export function getEWordClassString(e) {
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
export var getEWClassMap = function () { return [
    1 /* all */,
    2 /* noun */,
    3 /* verb */,
    4 /* adjective */,
    5 /* adverb */,
    6 /* pronoun */,
    7 /* abbreviation */,
    8 /* interjection */,
    9 /* conjunction */,
    10 /* prefix */,
    11 /* preposition */,
    12 /* article */,
    13 /* unclassified */,
]; };
//# sourceMappingURL=BWordClass.js.map