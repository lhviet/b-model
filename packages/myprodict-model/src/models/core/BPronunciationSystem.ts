import {EPSystem} from '../enums';

export function isIPA(statusType: EPSystem): boolean {
  return statusType === EPSystem.IPA;
}

// enum EPSystem helper
export function getEPSystemString(e: EPSystem): string {
  switch (e) {
    case EPSystem.IPA:
      return 'IPA';
    default:
      return '';
  }
}
export const getEPSystemMap = (): EPSystem[] => [EPSystem.IPA];
