import { EPSystem } from '../enums';
export function isIPA(statusType) {
    return statusType === EPSystem.IPA;
}
// enum EPSystem helper
export function getEPSystemString(e) {
    switch (e) {
        case EPSystem.IPA:
            return 'IPA';
        default:
            return '';
    }
}
export var getEPSystemMap = function () { return [EPSystem.IPA]; };
//# sourceMappingURL=BPronunciationSystem.js.map