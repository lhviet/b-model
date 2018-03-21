export function isIPA(statusType) {
    return statusType === 1 /* IPA */;
}
// enum EPSystem helper
export function getEPSystemString(e) {
    switch (e) {
        case 1 /* IPA */:
            return 'IPA';
        default:
            return '';
    }
}
export var getEPSystemMap = function () { return [1 /* IPA */]; };
//# sourceMappingURL=BPronunciationSystem.js.map